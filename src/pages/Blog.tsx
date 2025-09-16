import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, User, MessageCircle, ArrowRight, Tag, Download, Eye, BookOpen, Search, Filter, Plus } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  comments: number;
  image: string;
  readTime: number;
}

interface LibraryItem {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  type: 'pdf' | 'epub' | 'doc';
  size: string;
  downloadCount: number;
  publishDate: string;
  thumbnail: string;
  downloadUrl: string;
}

const BlogLibrary: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'blog' | 'library'>('blog');
  const [selectedBlogCategory, setSelectedBlogCategory] = useState('all');
  const [selectedLibraryCategory, setSelectedLibraryCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "L'avenir du Gbekoun dans l'ère numérique",
      excerpt: "Comment l'alphabet Gbekoun s'adapte aux technologies modernes et aux plateformes numériques.",
      content: "Le Gbekoun continue d'évoluer avec son temps...",
      author: "Dr. Amèvi Koffi",
      date: "2024-01-15",
      category: "Technologie",
      comments: 12,
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      readTime: 5
    },
    {
      id: 2,
      title: "Les dialectes régionaux et le Gbekoun standard",
      excerpt: "Une exploration des variations régionales dans l'utilisation de l'alphabet Gbekoun.",
      content: "Les différentes régions adaptent le Gbekoun...",
      author: "Prof. Kossivi Adanu",
      date: "2024-01-12",
      category: "Linguistique",
      comments: 8,
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
      readTime: 8
    },
    {
      id: 3,
      title: "Enseigner le Gbekoun aux enfants",
      excerpt: "Méthodes pédagogiques innovantes pour l'apprentissage de l'alphabet Gbekoun.",
      content: "L'enseignement du Gbekoun nécessite des approches adaptées...",
      author: "Mme Akosua Mensah",
      date: "2024-01-10",
      category: "Éducation",
      comments: 15,
      image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg",
      readTime: 6
    },
    {
      id: 4,
      title: "La littérature en alphabet Gbekoun",
      excerpt: "Découvrez les œuvres littéraires marquantes écrites en Gbekoun.",
      content: "De nombreux auteurs utilisent maintenant le Gbekoun...",
      author: "Kofi Asante",
      date: "2024-01-08",
      category: "Culture",
      comments: 6,
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
      readTime: 4
    }
  ];

  // Library items data
  const libraryItems: LibraryItem[] = [
    {
      id: 1,
      title: "Guide complet de l'alphabet Gbekoun",
      author: "Dr. Koffi Amèvi",
      description: "Un guide exhaustif couvrant tous les aspects de l'alphabet Gbekoun, de ses origines à ses applications modernes.",
      category: "Manuel",
      type: "pdf",
      size: "2.3 MB",
      downloadCount: 1247,
      publishDate: "2023-12-01",
      thumbnail: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
      downloadUrl: "/downloads/guide-complet-gbekoun.pdf"
    },
    {
      id: 2,
      title: "Contes traditionnels en Gbekoun",
      author: "Mama Adjoa",
      description: "Recueil de contes traditionnels béninois transcrits en alphabet Gbekoun pour préserver notre patrimoine oral.",
      category: "Littérature",
      type: "epub",
      size: "1.8 MB",
      downloadCount: 892,
      publishDate: "2023-11-15",
      thumbnail: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
      downloadUrl: "/downloads/contes-traditionnels.epub"
    },
    {
      id: 3,
      title: "Dictionnaire Gbekoun-Français",
      author: "Institut des Langues du Bénin",
      description: "Dictionnaire bilingue comprenant plus de 5000 entrées pour faciliter l'apprentissage et la traduction.",
      category: "Référence",
      type: "pdf",
      size: "8.7 MB",
      downloadCount: 2156,
      publishDate: "2023-10-20",
      thumbnail: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
      downloadUrl: "/downloads/dictionnaire-gbekoun-francais.pdf"
    },
    {
      id: 4,
      title: "Méthodes d'apprentissage pour enfants",
      author: "Équipe pédagogique Gbekoun",
      description: "Cahier d'exercices et jeux éducatifs pour initier les enfants à l'alphabet Gbekoun de manière ludique.",
      category: "Éducation",
      type: "pdf",
      size: "3.2 MB",
      downloadCount: 1534,
      publishDate: "2023-09-30",
      thumbnail: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg",
      downloadUrl: "/downloads/methodes-apprentissage-enfants.pdf"
    }
  ];

  const blogCategories = ['all', 'Technologie', 'Linguistique', 'Éducation', 'Culture'];
  const libraryCategories = ['all', 'Manuel', 'Littérature', 'Référence', 'Éducation'];

  const filteredBlogPosts = selectedBlogCategory === 'all' 
    ? blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : blogPosts.filter(post => post.category === selectedBlogCategory && post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const filteredLibraryItems = selectedLibraryCategory === 'all'
    ? libraryItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : libraryItems.filter(item => item.category === selectedLibraryCategory && item.title.toLowerCase().includes(searchTerm.toLowerCase()));

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

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('resourceCentertitle')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('resourceCentersubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'blog'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <MessageCircle className="inline-block w-5 h-5 mr-2" />
              {t('tabsblog')}
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'library'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="inline-block w-5 h-5 mr-2" />
              {t('tabslibrary')}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('commonsearch', { section: activeTab === 'blog' ? t('tabsblog') : t('tabs.library') })}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
                  onClick={() => setSelectedBlogCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedBlogCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  {category === 'all' ? t('categoriesall') : category}
                </button>
              ))}
            </div>

            {/* Add Post Button (for admin) */}
            <div className="flex justify-end mb-8">
              <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200 shadow-lg">
                <Plus className="w-5 h-5 mr-2" />
                {t('blog.newArticle')}
              </button>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogPosts.map(post => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-r from-blue-500 to-yellow-400">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-700">
                        <Tag size={14} className="mr-1" />
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                        {post.readTime} {t('common.min')}
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
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle size={14} className="mr-1" />
                        {post.comments}
                      </div>
                    </div>

                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                      {t('blogreadMore')}
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
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
                  onClick={() => setSelectedLibraryCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedLibraryCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  {category === 'all' ? t('categoriesall') : category}
                </button>
              ))}
            </div>

            {/* Add Document Button (for admin) */}
            <div className="flex justify-end mb-8">
              <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200 shadow-lg">
                <Plus className="w-5 h-5 mr-2" />
                {t('library.addDocument')}
              </button>
            </div>

            {/* Library Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLibraryItems.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-400">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
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
                    
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                      {t('common.by')} {item.author}
                    </p>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Download size={12} className="mr-1" />
                        {item.downloadCount} {t('library.downloads')}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(item.publishDate)}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        <Download size={16} className="mr-2" />
                        {t('library.download')}
                      </button>
                      <button className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {t('newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="w-full px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              {t('newsletter.subscribe')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLibrary;