import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Users, Heart, ArrowLeft, Target, Award, Calendar, MapPin, Mail, Phone, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

const ONGPartners = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedONGId, setSelectedONGId] = useState(null);

  const ongPartners = [
    {
      id: 1,
      slug: "aig-togo",
      name: "Association Internationale Gbeku",
      acronym: "A.I.G.",
      logo: "https://i.imgur.com/yo1pI0q.jpeg",
      detailLogo: "https://i.imgur.com/NWD9Gaz.jpeg",
      country: "Togo",
      founded: "2023",
      website: "#",
      email: "gbeku2023@gmail.com",
      phone: "+228 90 01 38 86",
      address: "B.P. 7237 Lomé-Togo, Baguida, Préfecture du Golfe",
      shortDescription: "Association apolitique à but non lucratif dédiée à la promotion des langues et cultures africaines.",
      mission: "Promouvoir les langues et cultures africaines en valorisant les langues maternelles, les sciences et savoirs locaux, tout en luttant contre l'analphabétisme et en favorisant le civisme et la cohésion sociale.",
      objectives: [
        "Promouvoir les langues maternelles",
        "Promouvoir les sciences et les savoirs locaux",
        "Valoriser les cultures locales",
        "Promouvoir le civisme et la cohésion sociale",
        "Lutter résolument contre l'analphabétisme",
        "Promouvoir les talents et connaissances locales",
        "Lutter contre l'émigration et la fuite des cerveaux",
        "Promouvoir l'amour de la patrie et le vivre ensemble"
      ],
      activities: [
        "Créer et animer des centres d'alphabétisation de masse",
        "Soutenir l'éducation des personnes démunies et déscolarisées",
        "Animer des séminaires sur des thématiques en lien avec les objectifs",
        "Organiser des concours d'art culinaire pour valoriser les mets locaux",
        "Animer des émissions radiophoniques et télévisées",
        "Organiser des salons d'exposition sur les découvertes et innovations locales",
        "Organiser des concours de danses traditionnelles",
        "Sensibiliser et former la population sur les valeurs civiques et citoyennes"
      ],
      domains: [
        "Art et culture",
        "Éducation, formation et insertion professionnelle",
        "Recherche et innovation",
        "Environnement"
      ],
      achievements: [
        "Création de l'association le 29 novembre 2023",
        "Mise en place d'un Bureau Exécutif dynamique",
        "Établissement de statuts et règlement intérieur",
        "Lancement du projet de promotion du script Gbekoun"
      ],
      partnership: "L'A.I.G. est l'association fondatrice du projet Gbekoun et œuvre activement pour la promotion du script comme outil d'autonomie éducative et civilisationnelle de l'Afrique.",
      impact: "Association en phase de démarrage avec une vision claire pour l'autonomie éducative africaine",
      president: {
        name: "ADJODI Edem Kwaku",
        role: "Président",
        profession: "",
        age: 49
      },
      color: "blue"
    }
  ];

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('ong-')) {
      const slug = hash.replace('ong-', '');
      const ong = ongPartners.find(o => o.slug === slug);
      if (ong) {
        setCurrentPage('detail');
        setSelectedONGId(ong.id);
      }
    } else {
      setCurrentPage('home');
      setSelectedONGId(null);
    }
  }, []);

  const navigateToONG = (ong) => {
    window.location.hash = `ong-${ong.slug}`;
    setCurrentPage('detail');
    setSelectedONGId(ong.id);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    setSelectedONGId(null);
    window.scrollTo(0, 0);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: { 
        bg: 'bg-blue-50', 
        border: 'border-blue-200', 
        text: 'text-blue-600', 
        accent: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        gradient: 'from-blue-600 to-blue-700'
      },
      green: { 
        bg: 'bg-green-50', 
        border: 'border-green-200', 
        text: 'text-green-600', 
        accent: 'bg-green-600',
        hover: 'hover:bg-green-700',
        gradient: 'from-green-600 to-green-700'
      },
      purple: { 
        bg: 'bg-purple-50', 
        border: 'border-purple-200', 
        text: 'text-purple-600', 
        accent: 'bg-purple-600',
        hover: 'hover:bg-purple-700',
        gradient: 'from-purple-600 to-purple-700'
      }
    };
    return colors[color] || colors.blue;
  };

  if (currentPage === 'detail' && selectedONGId) {
    const ong = ongPartners.find(o => o.id === selectedONGId);
    if (!ong) return null;
    
    const colorClasses = getColorClasses(ong.color);

    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 z-10" />

          <div className="relative z-20 max-w-7xl mx-auto text-white py-12">
            <button
              onClick={navigateToHome}
              className="inline-flex items-center gap-2 mb-8 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-200 border border-white/20 backdrop-blur-sm"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Retour aux partenaires</span>
            </button>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <div className="relative group flex-shrink-0">
                <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 group-hover:ring-yellow-400 transition-all duration-300">
                  <img
                    src={ong.detailLogo}
                    alt={ong.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
                  <Sparkles size={16} className="mr-2" />
                  {ong.acronym}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{ong.name}</h1>
                <p className="text-xl sm:text-2xl mb-6 leading-relaxed font-light opacity-90">{ong.shortDescription}</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                    <MapPin size={18} />
                    <span className="font-medium">{ong.country}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                    <Calendar size={18} />
                    <span className="font-medium">Fondée en {ong.founded}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href={`mailto:${ong.email}`}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className={`${colorClasses.accent} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                  <Mail size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-500 mb-1">Email</div>
                  <div className="font-bold text-gray-900 text-lg break-all">{ong.email}</div>
                </div>
              </div>
            </a>
            
            <a 
              href={`tel:${ong.phone}`}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className={`${colorClasses.accent} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                  <Phone size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-500 mb-1">Téléphone</div>
                  <div className="font-bold text-gray-900 text-lg">{ong.phone}</div>
                </div>
              </div>
            </a>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className={`${colorClasses.accent} p-3 rounded-xl`}>
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-500 mb-1">Adresse</div>
                  <div className="font-bold text-gray-900 leading-relaxed">{ong.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 sm:p-12 text-white mb-12 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center">
                <Target size={32} className="text-gray-900" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Mission</h2>
            </div>
            <p className="text-xl leading-relaxed opacity-90">{ong.mission}</p>
          </div>

          {/* Objectifs */}
          <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-xl mb-12 border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Objectifs Stratégiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ong.objectives.map((obj, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`${colorClasses.accent} text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg font-medium leading-relaxed">{obj}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Domaines */}
          {ong.domains && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 sm:p-12 mb-12 border border-blue-200">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Domaines d'Intervention</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ong.domains.map((domain, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`${colorClasses.accent} w-3 h-3 rounded-full flex-shrink-0`}></div>
                      <p className="text-gray-900 font-bold text-lg">{domain}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activités */}
          <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-xl mb-12 border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Activités Principales</h2>
            <div className="space-y-4">
              {ong.activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <ChevronRight size={24} className={`${colorClasses.text} mt-1 flex-shrink-0`} />
                  <span className="text-gray-700 text-lg leading-relaxed font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Réalisations */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-10 sm:p-12 mb-12 shadow-2xl text-gray-900">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <Award size={36} />
              <h2 className="text-3xl sm:text-4xl font-bold">Réalisations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ong.achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 text-gray-900 p-2 rounded-lg text-xl font-bold">
                      ✓
                    </div>
                    <p className="text-gray-800 font-medium text-lg leading-relaxed">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Président */}
          {ong.president && (
            <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-xl mb-12 border border-gray-200">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Direction</h2>
              <div className={`${colorClasses.bg} border-2 ${colorClasses.border} rounded-2xl p-8`}>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className={`${colorClasses.accent} text-white w-24 h-24 rounded-2xl flex items-center justify-center font-bold text-3xl shadow-lg`}>
                    {ong.president.name.split(' ')[0][0]}{ong.president.name.split(' ')[1][0]}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="font-bold text-gray-900 text-2xl mb-2">{ong.president.name}</div>
                    <div className={`${colorClasses.text} font-bold text-xl mb-1`}>{ong.president.role}</div>
                    <div className="text-gray-600 text-lg">{ong.president.profession}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Partenariat */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white rounded-3xl p-10 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
              }}></div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <Heart size={36} className="text-yellow-400" />
                <h2 className="text-3xl sm:text-4xl font-bold">Partenariat avec le Projet Gbekoun</h2>
              </div>
              <p className="text-xl leading-relaxed mb-8 text-center opacity-90">{ong.partnership}</p>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <Users size={28} className="text-yellow-400" />
                  <span className="font-bold text-2xl">Impact du partenariat</span>
                </div>
                <p className="text-lg text-center leading-relaxed opacity-90">{ong.impact}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`mailto:${ong.email}`}
                className={`inline-flex items-center justify-center gap-3 ${colorClasses.accent} ${colorClasses.hover} text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-200 shadow-2xl hover:shadow-xl transform hover:scale-105`}
              >
                <span>Contacter {ong.acronym}</span>
                <Mail size={24} />
              </a>
              <a
                href={`tel:${ong.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-200 shadow-2xl hover:shadow-xl transform hover:scale-105"
              >
                <span>Appeler</span>
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Page principale
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto text-center text-white py-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Sparkles size={18} />
            Réseau de Partenaires Engagés
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            <span>Nos Partenaires</span>
            <br />
            <span className="text-yellow-400">ONG</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light opacity-95">
            Découvrez les organisations qui collaborent avec nous pour promouvoir l'autonomie éducative et linguistique de l'Afrique
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-8 py-5 border border-white/20">
              <div className="text-4xl font-bold mb-1">{ongPartners.length}</div>
              <div className="text-sm opacity-90 font-medium">Partenaire{ongPartners.length > 1 ? 's' : ''}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-8 py-5 border border-white/20">
              <div className="text-4xl font-bold mb-1">{new Set(ongPartners.map(p => p.country)).size}</div>
              <div className="text-sm opacity-90 font-medium">Pays</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-8 py-5 border border-white/20">
              <div className="text-4xl font-bold mb-1">2023</div>
              <div className="text-sm opacity-90 font-medium">Année de création</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl p-10 sm:p-12 shadow-xl mb-16 border border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Un Réseau de Partenaires Engagés
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Le projet Gbekoun s'appuie sur un réseau croissant d'organisations partenaires 
              partageant la même vision d'une Afrique éducativement autonome et fière de 
              ses langues maternelles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ces partenariats stratégiques permettent de multiplier notre impact sur le terrain, 
              de mutualiser nos ressources et d'atteindre plus efficacement nos objectifs communs 
              pour la promotion des langues et cultures africaines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ongPartners.map((ong) => {
            const colorClasses = getColorClasses(ong.color);
            
            return (
              <div 
                key={ong.id} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={ong.logo} 
                    alt={ong.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className={`inline-block ${colorClasses.bg} ${colorClasses.text} px-3 py-1 rounded-full text-xs font-bold mb-3`}>
                    {ong.acronym}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {ong.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">
                    {ong.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 text-xs">
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                      <MapPin size={12} />
                      {ong.country}
                    </span>
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                      <Calendar size={12} />
                      {ong.founded}
                    </span>
                  </div>

                  <button
                    onClick={() => navigateToONG(ong)}
                    className={`w-full ${colorClasses.accent} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                  >
                    <span>En savoir plus</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl border border-gray-200 p-10 sm:p-12 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Domaines de Collaboration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <BookOpen size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Formation et Éducation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Développement de programmes de formation et création 
                de matériel pédagogique en langues africaines.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Globe size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Promotion Culturelle</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Valorisation des cultures locales, organisation d'événements 
                et préservation du patrimoine culturel africain.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Users size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Sensibilisation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Campagnes de sensibilisation auprès des communautés 
                et promotion du civisme et de la cohésion sociale.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Lutte contre l'Analphabétisme</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Création de centres d'alphabétisation et soutien 
                aux personnes démunies et déscolarisées.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                <Award size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Innovation et Recherche</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Promotion des sciences et savoirs locaux, organisation 
                de salons d'exposition sur les innovations locales.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Heart size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Médias et Communication</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Animation d'émissions radiophoniques et télévisées 
                pour promouvoir les langues et cultures africaines.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-10 sm:p-12 shadow-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Devenez Partenaire du Projet Gbekoun
            </h2>
            <p className="text-lg text-blue-50 mb-10 leading-relaxed">
              Votre organisation partage notre vision d'une Afrique éducativement autonome ? 
              Rejoignez notre réseau de partenaires engagés et participez à cette révolution 
              linguistique et éducative.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-3">🤝</div>
                <div className="font-bold mb-2 text-lg">Collaboration</div>
                <p className="text-sm text-blue-50 leading-relaxed">
                  Travaillez avec nous sur des projets concrets
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-3">📚</div>
                <div className="font-bold mb-2 text-lg">Ressources</div>
                <p className="text-sm text-blue-50 leading-relaxed">
                  Accédez à nos outils et formations
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-3">🌍</div>
                <div className="font-bold mb-2 text-lg">Réseau</div>
                <p className="text-sm text-blue-50 leading-relaxed">
                  Connectez-vous à notre réseau continental
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:gbeku2023@gmail.com"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Contactez-nous</span>
                <Mail size={20} />
              </a>
              <a
                href="tel:+22890013886"
                className="bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Appelez-nous</span>
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
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

export default ONGPartners;