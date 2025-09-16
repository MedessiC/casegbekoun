import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, BookOpen, Globe, Award, ChevronDown, ChevronUp, Play, Quote } from 'lucide-react';

const History: React.FC = () => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const historicalPeriods = [
    {
      id: "creation",
      period: "1994-2000",
      title: "Création et fondation",
      subtitle: "Togbédji Adigbé invente Gbekoun",
      description:
        "L'écriture Gbekoun est créée en 1994 par Togbédji Adigbé de Dangbo (Bénin), locuteur du dialecte wémè du fon. Destinée à être un alphabet autochtone capable de transcrire fidèlement toutes les langues nationales du Bénin. Elle comprend 33 lettres (24 consonnes, 9 voyelles), avec chiffres décimaux, ponctuation et diacritiques.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      keyEvents: [
        "1994 : Création de l'écriture Gbekoun par Togbédji Adigbé",
        "Premiers essais de transcription en fon",
        "Développement des règles d'écriture de base",
      ],
      impact:
        "Établit les fondements d'une écriture autochtone pour les langues du Bénin.",
      testimonial: {
        text: "Mon objectif était de créer un système d'écriture qui respecte la phonétique de nos langues africaines.",
        author: "Togbédji Adigbé",
        role: "Créateur du Gbekoun",
      },
    },
    {
      id: 'development',
      period: '2000-2010',
      title: 'Développement et application',
      subtitle: 'Extension aux langues béninoises',
      description: 'Après sa création, le système Gbekoun est progressivement appliqué à différentes langues du Bénin. L\'alphabet est testé et adapté pour le fon, l\'adja, le yoruba, le dendi, le boo, le yom et l\'ayizo, démontrant sa polyvalence.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      keyEvents: [
        'Extension au fon et à l\'adja',
        'Application au yoruba béninois',
        'Tests sur le dendi et le boo',
        'Adaptation pour le yom et l\'ayizo',
        'Premières expériences d\'enseignement'
      ],
      impact: 'Démonstration de la capacité du système à transcrire plusieurs langues béninoises',
      testimonial: {
        text: "Voir notre langue écrite dans un alphabet qui respecte nos sons était révolutionnaire.",
        author: "Témoignage d'un utilisateur",
        role: "Locuteur fon"
      }
    },
    {
      id: 'education',
      period: '2010-2020',
      title: 'Introduction dans l\'éducation',
      subtitle: 'Usage dans l\'enseignement en langue maternelle',
      description: 'Le Gbekoun trouve sa place dans des écoles spécialisées pour l\'enseignement en langue maternelle. Cette période marque l\'institutionnalisation progressive du système d\'écriture dans le contexte éducatif béninois.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      keyEvents: [
        'Intégration dans des écoles spécialisées',
        'Formation d\'enseignants',
        'Création de matériel pédagogique',
        'Programmes d\'alphabétisation',
        'Documentation des méthodes d\'enseignement'
      ],
      impact: 'Établissement du Gbekoun comme outil pédagogique viable',
      testimonial: {
        text: "Les enfants apprennent plus facilement à lire dans leur langue maternelle avec cet alphabet.",
        author: "Témoignage d'enseignant",
        role: "Éducateur au Bénin"
      }
    },
    {
      id: 'recent',
      period: '2020-Aujourd\'hui',
      title: 'Reconnaissance et préservation',
      subtitle: 'Documentation et sensibilisation',
      description: 'La période récente voit une attention accrue portée au Gbekoun par les chercheurs et les défenseurs des langues africaines. Le système est documenté dans diverses sources académiques et fait l\'objet d\'efforts de préservation et de promotion.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      keyEvents: [
        'Documentation sur Wikipedia',
        'Inclusion dans l\'Atlas des alphabets menacés',
        'Recherches linguistiques',
        'Sensibilisation communautaire',
        'Efforts de numérisation'
      ],
      impact: 'Reconnaissance internationale comme système d\'écriture africain indigène',
      testimonial: {
        text: "Il est important de préserver et documenter ces innovations linguistiques africaines.",
        author: "Chercheur en linguistique",
        role: "Spécialiste des écritures africaines"
      }
    }
  ];

  const culturalImpact = [
    {
      icon: BookOpen,
      title: 'Langues supportées',
      description: 'Appliqué à 7 langues du Bénin : fon, adja, yoruba, dendi, boo, yom, ayizo',
      stats: '7 langues',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Éducation',
      description: 'Utilisé dans l\'enseignement en langue maternelle dans des écoles spécialisées',
      stats: 'Écoles spécialisées',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Portée géographique',
      description: 'Concentré principalement au Bénin, avec potentiel d\'extension régionale',
      stats: 'Bénin',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Award,
      title: 'Reconnaissance',
      description: 'Documenté comme système d\'écriture africain indigène',
      stats: 'Atlas mondial',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header avec citation inspirante */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Quote size={48} className="text-blue-600 mx-auto mb-4" />
            <blockquote className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 italic">
              "Chaque langue mérite un système d'écriture qui respecte ses sons"
            </blockquote>
            <cite className="text-lg text-gray-600">- Philosophie du Gbekoun</cite>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            L'Histoire du <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Gbekoun</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez l'histoire authentique de l'alphabet Gbekoun, créé en 1994 par Togbédji Adigbé 
            pour transcrire fidèlement les langues du Bénin dans leur richesse phonétique originale.
          </p>
        </div>

        {/* Timeline Interactive */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Chronologie Historique</h2>
          
          {/* Sélecteur de période */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {historicalPeriods.map((period, index) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPeriod === index
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
              >
                {period.period}
              </button>
            ))}
          </div>

          {/* Contenu de la période sélectionnée */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={historicalPeriods[selectedPeriod].image}
                  alt={historicalPeriods[selectedPeriod].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-yellow-500/20"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-gray-800">
                    {historicalPeriods[selectedPeriod].period}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {historicalPeriods[selectedPeriod].title}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-6">
                  {historicalPeriods[selectedPeriod].subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {historicalPeriods[selectedPeriod].description}
                </p>

                {/* Impact */}
                <div className="bg-yellow-50 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-gray-900 mb-2">Impact:</h4>
                  <p className="text-gray-700">{historicalPeriods[selectedPeriod].impact}</p>
                </div>

                {/* Témoignage */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <Quote size={24} className="text-blue-600 mb-3" />
                  <blockquote className="text-gray-700 italic mb-4">
                    "{historicalPeriods[selectedPeriod].testimonial.text}"
                  </blockquote>
                  <cite className="text-sm font-semibold text-blue-600">
                    — {historicalPeriods[selectedPeriod].testimonial.author}, {historicalPeriods[selectedPeriod].testimonial.role}
                  </cite>
                </div>
              </div>
            </div>

            {/* Événements clés (section extensible) */}
            <div className="border-t border-gray-200">
              <button
                onClick={() => toggleSection(historicalPeriods[selectedPeriod].id)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900">Événements clés de cette période</span>
                {expandedSection === historicalPeriods[selectedPeriod].id ? 
                  <ChevronUp size={24} className="text-gray-600" /> : 
                  <ChevronDown size={24} className="text-gray-600" />
                }
              </button>
              
              {expandedSection === historicalPeriods[selectedPeriod].id && (
                <div className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {historicalPeriods[selectedPeriod].keyEvents.map((event, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Impact Culturel */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Impact et Portée Actuels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalImpact.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="text-2xl font-bold text-blue-600">{item.stats}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Caractéristiques techniques */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t ? t("history.technical.title") : "Caractéristiques du Système Gbekoun"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t ? t("history.technical.structure.title") : "Structure de l'alphabet"}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-gray-700">
                    {t ? t("history.technical.structure.consonants") : "Consonnes"}
                  </span>
                  <span className="text-blue-600 font-bold">24 {t ? t("history.technical.structure.letters") : "lettres"}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="font-semibold text-gray-700">
                    {t ? t("history.technical.structure.vowels") : "Voyelles"}
                  </span>
                  <span className="text-yellow-600 font-bold">9 {t ? t("history.technical.structure.letters") : "lettres"}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold text-gray-700">
                    {t ? t("history.technical.structure.total") : "Total"}
                  </span>
                  <span className="text-green-600 font-bold">33 {t ? t("history.technical.structure.letters") : "lettres"}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t ? t("history.technical.languages.title") : "Langues d'application"}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['Fon', 'Adja', 'Yoruba', 'Dendi', 'Boo', 'Yom', 'Ayizo'].map((lang, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="font-semibold text-gray-700">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Galerie des Figures Emblématiques */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t ? t("history.figures.title") : "Figures Emblématiques"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Togbédji Adigbé',
                role: t ? t("history.figures.adigbe.role") : 'Créateur de l\'alphabet Gbekoun (1994)',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
                contribution: t ? t("history.figures.adigbe.contribution") : 'Linguiste visionnaire de Dangbo qui a créé en 1994 les 33 lettres du système Gbekoun (24 consonnes, 9 voyelles) pour transcrire fidèlement toutes les langues du Bénin.',
                quote: t ? t("history.figures.adigbe.quote") : '"Mon objectif était de développer un alphabet qui respecte la phonétique naturelle des langues béninoises."'
              },
              {
                name: 'Houesse Ayigbedekin Vidéhouénou',
                role: t ? t("history.figures.videhouenou.role") : 'Successeur et développeur (Abomey)',
                image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
                contribution: t ? t("history.figures.videhouenou.contribution") : 'Originaire d\'Abomey, il a repris l\'œuvre après le décès de Togbédji Adigbé et a utilisé le Gbekoun pour corriger les théories occidentales dans l\'enseignement, l\'adaptant mieux aux réalités africaines.',
                quote: t ? t("history.figures.videhouenou.quote") : '"Il fallait préserver cette innovation et l\'utiliser pour corriger les enseignements non adaptés à nos réalités."'
              }
            ].map((person, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-yellow-400 relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <p className="text-sm opacity-90">{person.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{person.contribution}</p>
                  <blockquote className="text-blue-600 italic font-medium">
                    {person.quote}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appel à l'action */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Préserver et Promouvoir le Gbekoun
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Le Gbekoun représente un exemple remarquable d'innovation linguistique africaine. 
            Contribuez à sa documentation, son apprentissage et sa préservation pour les générations futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              En Savoir Plus
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Soutenir la Recherche
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;