import React, { useState, useEffect } from 'react';
import { Calendar, User, MessageCircle, ArrowRight, Tag, Download, Eye, BookOpen, Search, Plus } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image?: string;
  readTime: number;
  views: number;
  createdAt: string;
  published: boolean;
}

interface LibraryItem {
  _id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  type: 'pdf' | 'epub' | 'doc';
  size: string;
  downloadCount: number;
  publishDate: string;
  thumbnail?: string;
}

const BlogLibrary: React.FC = () => {
  // États
  const [activeTab, setActiveTab] = useState<'blog' | 'library'>('blog');
  const [selectedBlogCategory, setSelectedBlogCategory] = useState('all');
  const [selectedLibraryCategory, setSelectedLibraryCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Configuration API
  const API_BASE = 'http://localhost:5000/api';

  // Charger les données au montage
  useEffect(() => {
    if (activeTab === 'blog') {
      loadBlogPosts();
    } else {
      loadLibraryItems();
    }
  }, [activeTab, selectedBlogCategory, selectedLibraryCategory, searchTerm, currentPage]);

  // Fonctions API
  const loadBlogPosts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '12'
      });
      
      if (selectedBlogCategory !== 'all') {
        params.append('category', selectedBlogCategory);
      }
      if (searchTerm) {
        params.append('search', searchTerm);
      }

      const response = await fetch(`${API_BASE}/posts?${params}`);
      const data = await response.json();
      
      setBlogPosts(data.posts || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error('Erreur lors du chargement des posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadLibraryItems = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '12'
      });
      
      if (selectedLibraryCategory !== 'all') {
        params.append('category', selectedLibraryCategory);
      }
      if (searchTerm) {
        params.append('search', searchTerm);
      }

      const response = await fetch(`${API_BASE}/library?${params}`);
      const data = await response.json();
      
      setLibraryItems(data.items || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error('Erreur lors du chargement des documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const openPost = async (post: BlogPost) => {
    try {
      const response = await fetch(`${API_BASE}/posts/${post._id}`);
      const fullPost = await response.json();
      setSelectedPost(fullPost);
    } catch (error) {
      console.error('Erreur lors de l\'ouverture du post:', error);
    }
  };

  const downloadDocument = async (itemId: string, title: string) => {
    try {
      const response = await fetch(`${API_BASE}/library/download/${itemId}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = title;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        
        // Recharger pour mettre à jour le compteur
        loadLibraryItems();
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf': return '📄';
      case 'epub': return '📖';
      case 'doc': return '📝';
      default: return '📄';
    }
  };

  const blogCategories = ['all', 'Technologie', 'Linguistique', 'Éducation', 'Culture'];
  const libraryCategories = ['all', 'Manuel', 'Littérature', 'Référence', 'Éducation'];

  // Composant Article Détaillé
  const PostDetail = () => {
    if (!selectedPost) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Retour aux articles
          </button>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {selectedPost.image && (
              <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-yellow-400">
                <img
                  src={`http://localhost:5000${selectedPost.image}`}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-700">
                    <Tag size={14} className="mr-1" />
                    {selectedPost.category}
                  </span>
                </div>
              </div>
            )}

            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex items-center text-sm text-gray-500 mb-8 space-x-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {formatDate(selectedPost.createdAt)}
                </div>
                <div className="flex items-center">
                  <Eye size={16} className="mr-2" />
                  {selectedPost.views} vues
                </div>
                <div className="flex items-center">
                  <MessageCircle size={16} className="mr-2" />
                  {selectedPost.readTime} min de lecture
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  {selectedPost.excerpt}
                </div>
                
                <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
                  {selectedPost.content}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Publié le {formatDate(selectedPost.createdAt)}
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  };

  // Composant Pagination
  const Pagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center items-center space-x-2 mt-12">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Précédent
        </button>
        
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } shadow`}
            >
              {page}
            </button>
          );
        })}
        
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Suivant
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Centre de Ressources Gbekoun
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez notre collection d'articles, guides et ressources pour apprendre et maîtriser l'écriture Gbekoun
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => {
                setActiveTab('blog');
                setCurrentPage(1);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'blog'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <MessageCircle className="inline-block w-5 h-5 mr-2" />
              Blog
            </button>
            <button
              onClick={() => {
                setActiveTab('library');
                setCurrentPage(1);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'library'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="inline-block w-5 h-5 mr-2" />
              Bibliothèque
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={`Rechercher dans ${activeTab === 'blog' ? 'le blog' : 'la bibliothèque'}...`}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-xl transition-all duration-200"
            />
          </div>
        </div>

        {/* Blog Section */}
        {activeTab === 'blog' && (
          <>
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {blogCategories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedBlogCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedBlogCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  {category === 'all' ? 'Toutes les catégories' : category}
                </button>
              ))}
            </div>

            {/* Loading */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Chargement des articles...</p>
              </div>
            )}

            {/* Blog Posts Grid */}
            {!loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                  <article
                    key={post._id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                    onClick={() => openPost(post)}
                  >
                    <div className="relative h-48 bg-gradient-to-r from-blue-500 to-yellow-400">
                      {post.image ? (
                        <img
                          src={`http://localhost:5000${post.image}`}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-yellow-400 flex items-center justify-center">
                          <MessageCircle size={48} className="text-white/70" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-700">
                          <Tag size={14} className="mr-1" />
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                          {post.readTime} min
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(post.createdAt)}
                        </div>
                        <div className="flex items-center">
                          <Eye size={14} className="mr-1" />
                          {post.views}
                        </div>
                      </div>

                      <div className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                        Lire l'article
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Message si aucun article */}
            {!loading && blogPosts.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun article trouvé</h3>
                <p className="text-gray-500">
                  {searchTerm 
                    ? `Aucun article ne correspond à "${searchTerm}"`
                    : 'Aucun article dans cette catégorie pour le moment.'
                  }
                </p>
              </div>
            )}
          </>
        )}

        {/* Library Section */}
        {activeTab === 'library' && (
          <>
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {libraryCategories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedLibraryCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedLibraryCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  {category === 'all' ? 'Toutes les catégories' : category}
                </button>
              ))}
            </div>

            {/* Loading */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Chargement de la bibliothèque...</p>
              </div>
            )}

            {/* Library Items Grid */}
            {!loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {libraryItems.map(item => (
                  <div
                    key={item._id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-400">
                      {item.thumbnail ? (
                        <img
                          src={`http://localhost:5000${item.thumbnail}`}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center">
                          <BookOpen size={48} className="text-white/70" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-700">
                          {getFileIcon(item.type)} {item.type.toUpperCase()}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                          {item.size}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3 text-sm line-clamp-1">
                        Par {item.author}
                      </p>
                      
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <Download size={12} className="mr-1" />
                          {item.downloadCount} téléchargements
                        </div>
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1" />
                          {formatDate(item.publishDate)}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => downloadDocument(item._id, item.title)}
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          <Download size={16} className="mr-2" />
                          Télécharger
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Message si aucun document */}
            {!loading && libraryItems.length === 0 && (
              <div className="text-center py-12">
                <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun document trouvé</h3>
                <p className="text-gray-500">
                  {searchTerm 
                    ? `Aucun document ne correspond à "${searchTerm}"`
                    : 'Aucun document dans cette catégorie pour le moment.'
                  }
                </p>
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        <Pagination />

        

            
        
      </div>

     <footer className="bg-gray-900 text-gray-300 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white-400 mb-3 sm:mb-4">CASE-Gbekoun</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Organisation à caractère social, areligieuse, apolitique et à but non lucratif


              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm sm:text-base hover:text-white transition-colors">Acceuil</a></li>
                <li><a href="/history" className="text-sm sm:text-base hover:text-white transition-colors">Histoire</a></li>
                <li><a href="/Ong" className="text-sm sm:text-base hover:text-white transition-colors">Partenaires</a></li>
                <li><a href="/About" className="text-sm sm:text-base hover:text-white transition-colors">A propos</a></li>
                <li><a href ="/contact" className="text-sm sm:text-base hover:text-white transition-colors">Contact</a> </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-2">
           <li><a href="/" className="text-sm sm:text-base hover:text-white transition-colors">CASE-Gbekoun</a></li>
                <li><a href="/ong#ong-aig-togo" className="text-sm sm:text-base hover:text-white transition-colors">AIG</a></li>
                </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-500 px-2">
              © 2025 Case-Gbekoun. Tous droits réservés. | Pour l'Autonomie de toute Nation des Continents sans le moindre Appui
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLibrary;