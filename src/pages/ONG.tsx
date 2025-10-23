import React, { useState } from 'react';
import { ExternalLink, Globe, Users, Heart, ArrowLeft, Target, Award, Calendar, MapPin, Mail, Phone, BookOpen } from 'lucide-react';
import logoAIG from '../assets/img/logoAIG.jpg';

const ONGPartners = () => {
  const [selectedONG, setSelectedONG] = useState(null);

  const ongPartners = [
    {
      id: 1,
      name: "Association Internationale Gbeku",
      acronym: "A.I.G.",
      logo: "https://i.imgur.com/QhgEwBC.jpeg",
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
        profession: "Formateur des formateurs",
        age: 47
      },
      color: "blue"
    }
    // D'autres ONG pourront être ajoutées ici au fur et à mesure des adhésions
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', accent: 'bg-blue-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', accent: 'bg-green-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', accent: 'bg-purple-600' },
      yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-600', accent: 'bg-yellow-600' },
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', accent: 'bg-red-600' },
      indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', accent: 'bg-indigo-600' }
    };
    return colors[color] || colors.blue;
  };

  if (selectedONG !== null) {
    const ong = ongPartners.find(o => o.id === selectedONG);
    if (!ong) return null;
    
    const colorClasses = getColorClasses(ong.color);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className={`${colorClasses.accent} text-white py-20`}>
          <div className="max-w-5xl mx-auto px-6">
            <button
              onClick={() => setSelectedONG(null)}
              className="flex items-center gap-2 mb-8 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Retour aux partenaires</span>
            </button>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img src={ong.logo} alt={ong.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1">
                <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {ong.acronym}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{ong.name}</h1>
                <p className="text-lg text-white/90 mb-6">{ong.shortDescription}</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg">
                    <MapPin size={16} />
                    <span>{ong.country}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg">
                    <Calendar size={16} />
                    <span>Fondée en {ong.founded}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className={`${colorClasses.bg} border ${colorClasses.border} rounded-2xl p-8 mb-12`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href={`mailto:${ong.email}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <Mail size={24} className={colorClasses.text} />
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-semibold text-gray-900 text-sm">{ong.email}</div>
                </div>
              </a>
              
              <a 
                href={`tel:${ong.phone}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <Phone size={24} className={colorClasses.text} />
                <div>
                  <div className="text-xs text-gray-500">Téléphone</div>
                  <div className="font-semibold text-gray-900 text-sm">{ong.phone}</div>
                </div>
              </a>

              <div className="md:col-span-2 flex items-center gap-3 p-4 bg-white rounded-xl">
                <MapPin size={24} className={colorClasses.text} />
                <div>
                  <div className="text-xs text-gray-500">Adresse</div>
                  <div className="font-semibold text-gray-900 text-sm">{ong.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Target size={28} className={colorClasses.text} />
              <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{ong.mission}</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Objectifs Stratégiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ong.objectives.map((obj, index) => (
                <div key={index} className={`${colorClasses.bg} border ${colorClasses.border} rounded-xl p-4`}>
                  <div className="flex items-start gap-3">
                    <div className={`${colorClasses.accent} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{obj}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {ong.domains && (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Domaines d'Intervention</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ong.domains.map((domain, index) => (
                  <div key={index} className={`${colorClasses.bg} border ${colorClasses.border} rounded-xl p-4`}>
                    <div className="flex items-center gap-3">
                      <div className={`${colorClasses.accent} text-white w-3 h-3 rounded-full flex-shrink-0`}></div>
                      <p className="text-gray-700 font-semibold">{domain}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Activités Principales</h2>
            <div className="space-y-3">
              {ong.activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${colorClasses.bg} border ${colorClasses.border} rounded-2xl p-8 mb-8`}>
            <div className="flex items-center gap-3 mb-6">
              <Award size={28} className={colorClasses.text} />
              <h2 className="text-2xl font-bold text-gray-900">Réalisations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ong.achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className={`${colorClasses.accent} text-white px-2 py-1 rounded text-xs font-bold`}>
                      ✓
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {ong.president && (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Direction</h2>
              <div className={`${colorClasses.bg} border ${colorClasses.border} rounded-xl p-6`}>
                <div className="flex items-center gap-4">
                  <div className={`${colorClasses.accent} text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl`}>
                    {ong.president.name.split(' ')[0][0]}{ong.president.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{ong.president.name}</div>
                    <div className="text-sm text-gray-600">{ong.president.role}</div>
                    <div className="text-sm text-gray-500">{ong.president.profession}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart size={28} />
              <h2 className="text-2xl font-bold">Partenariat avec le Projet Gbekoun</h2>
            </div>
            <p className="text-lg leading-relaxed mb-6">{ong.partnership}</p>
            <div className="bg-white/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users size={20} />
                <span className="font-bold">Impact du partenariat</span>
              </div>
              <p className="text-white/90">{ong.impact}</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={`mailto:${ong.email}`}
              className={`inline-flex items-center gap-2 ${colorClasses.accent} text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity`}
            >
              <span>Contacter {ong.acronym}</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Partenaires <span className="text-yellow-400">ONG</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez les organisations qui collaborent avec nous pour promouvoir 
            l'autonomie éducative et linguistique de l'Afrique
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <div className="text-3xl font-bold">{ongPartners.length}</div>
              <div className="text-sm text-blue-100">Partenaire{ongPartners.length > 1 ? 's' : ''}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <div className="text-3xl font-bold">{new Set(ongPartners.map(p => p.country)).size}</div>
              <div className="text-sm text-blue-100">Pays</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <div className="text-3xl font-bold">2023</div>
              <div className="text-sm text-blue-100">Année de création</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Un Réseau de Partenaires Engagés
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le projet Gbekoun s'appuie sur un réseau croissant d'organisations partenaires 
            partageant la même vision d'une Afrique éducativement autonome et fière de 
            ses langues maternelles.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ces partenariats stratégiques permettent de multiplier notre impact sur le terrain, 
            de mutualiser nos ressources et d'atteindre plus efficacement nos objectifs communs 
            pour la promotion des langues et cultures africaines.
          </p>
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
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {ong.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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
                    onClick={() => setSelectedONG(ong.id)}
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

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Domaines de Collaboration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Formation et Éducation</h3>
              <p className="text-sm text-gray-600">
                Développement de programmes de formation et création 
                de matériel pédagogique en langues africaines.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Promotion Culturelle</h3>
              <p className="text-sm text-gray-600">
                Valorisation des cultures locales, organisation d'événements 
                et préservation du patrimoine culturel africain.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sensibilisation</h3>
              <p className="text-sm text-gray-600">
                Campagnes de sensibilisation auprès des communautés 
                et promotion du civisme et de la cohésion sociale.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Lutte contre l'Analphabétisme</h3>
              <p className="text-sm text-gray-600">
                Création de centres d'alphabétisation et soutien 
                aux personnes démunies et déscolarisées.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Innovation et Recherche</h3>
              <p className="text-sm text-gray-600">
                Promotion des sciences et savoirs locaux, organisation 
                de salons d'exposition sur les innovations locales.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Médias et Communication</h3>
              <p className="text-sm text-gray-600">
                Animation d'émissions radiophoniques et télévisées 
                pour promouvoir les langues et cultures africaines.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Devenez Partenaire du Projet Gbekoun
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Votre organisation partage notre vision d'une Afrique éducativement autonome ? 
              Rejoignez notre réseau de partenaires engagés et participez à cette révolution 
              linguistique et éducative.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">🤝</div>
                <div className="font-bold mb-2">Collaboration</div>
                <p className="text-sm text-blue-100">
                  Travaillez avec nous sur des projets concrets
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-bold mb-2">Ressources</div>
                <p className="text-sm text-blue-100">
                  Accédez à nos outils et formations
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-bold mb-2">Réseau</div>
                <p className="text-sm text-blue-100">
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
    </div>
  );
}
export default ONGPartners;