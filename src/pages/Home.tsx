import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, Keyboard, History, ArrowRight, Globe, Users, Award, Sparkles, School, FileText, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: BookOpen,
      title: t('alphabet'),
      description: 'Découvrez chaque lettre avec des exemples pratiques et des exercices interactifs',
      link: '/alphabet',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Keyboard,
      title: t('keyboard'),
      description: 'Tapez directement en Gbekoun avec notre clavier virtuel intuitif',
      link: '/keyboard',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      icon: History,
      title: t('history'),
      description: 'L\'histoire fascinante et l\'évolution du système d\'écriture Gbekoun',
      link: '/history',
      color: 'from-green-500 to-green-600'
    }
  ];

  

  return (

    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto text-center text-white py-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Sparkles size={18} />
            Système d'écriture endogène d'origine Béninoise
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            <span>Bienvenue dans l'univers</span>
            <br />
            <span className="text-yellow-400">Gbekoun</span>
          </h1>

          <p className="text-2xl sm:text-3xl mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            Pour l'Autonomie de toute Nation des Continents
            <br />
            <span className="text-yellow-300">sans le moindre Appui</span>
          </p>

          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Système unique d'écriture pour toute langue - Apprenez à lire et écrire dans n'importe quelle langue sans forcément la parler
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#alphabet"
              className="inline-flex items-center px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Explorer l'écriture
              <ArrowRight size={24} className="ml-3" />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-xl"
            >
              Notre mission
            </a>
          </div>
        </div>
      </section>

      {/* ONG CASE-GBEKOUN Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Organisation Non Gouvernementale
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Centre Académique des Savoirs Endogènes
            </h2>
            <h3 className="text-3xl font-bold text-blue-600 mb-6">ONG CASE-GBEKOUN</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Constituée le 17 août 2024 - Organisation à caractère social, areligieuse, apolitique et à but non lucratif
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-center">Nos Objectifs Statutaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <BookOpen size={28} className="text-gray-900" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-center">Développement Linguistique</h4>
                <p className="text-center leading-relaxed opacity-90">
                  Œuvrer au développement de nos langues maternelles avec le système endogène d'écriture Gbekoun
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <School size={28} className="text-gray-900" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-center">Protection Culturelle</h4>
                <p className="text-center leading-relaxed opacity-90">
                  Contribuer à la protection de nos milieux contre leurs invasions par des cultures étrangères
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <FileText size={28} className="text-gray-900" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-center">Langues de Travail</h4>
                <p className="text-center leading-relaxed opacity-90">
                  Identifier nos langues comme langues de travail et leurs admissions dans nos ordres d'enseignement
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Notre Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Nous apprenons aux publics à lire et écrire avec l'écriture d'origine Béninoise (généralement appelée Gbekoun) afin de pouvoir étudier avec ce <strong>Système authentique d'écriture</strong> dénommé en forme longue par son auteur : <strong className="text-blue-600">"Gbekoun pour l'Autonomie de toute Nation des Continents sans le moindre Appui"</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le Gbekoun */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Qu'est-ce que le Gbekoun ?
        </h2>
        <img
          src="/gbk.jpg"
          alt="Illustration du Gbekoun"
          className="mx-auto w-full max-w-md h-auto rounded-2xl shadow-lg object-cover"
        />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Définition</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Gbekoun</strong> en langues <em>Goun</em>, <em>Fon</em>, <em>Ayïzo</em> est le jumelage de deux mots, à savoir <strong>"graphique de langage ou son"</strong> et veut dire signe ou symbole de son de toute nature, de voix, de langue.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En général c'est une lettre ou un ensemble de lettres, des signes et symboles scientifiques divers composant un ensemble des consonnes, des voyelles et des signes de commodités qui sert à écrire.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-lg text-gray-900">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={32} />
                  <h3 className="text-2xl font-bold">Point Important</h3>
                </div>
                <p className="text-lg font-semibold leading-relaxed">
                  Gbekoun n'est donc pas une langue. Mais la dénomination d'une écriture qui permet d'écrire en toute langue.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Essence Fédératrice</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  D'essence fédératrice de langues, il sert à <strong>transcrire exactement tout phonème de toute nature et de toute langue</strong> et se lit textuellement dans les expressions écrites dans ces langues mêmes par celles et ceux qui ne parlent pas les langues en question mais qui savent écrire et lire avec le système d'écriture Gbekoun.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6">Caractéristiques Techniques</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-lg">Composé de <strong>33 lettres</strong> : 24 consonnes et 9 voyelles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-lg">Système <strong>unicaméral</strong>, monocaméral ou à case unique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-lg">Une seule graphie pour chacun de ses caractères</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-lg">Ni lettre minuscule ni lettre majuscule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-lg">Inclut numération et signes de commodités</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Comparaison</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Systèmes unicaméraux</strong> (comme Gbekoun) : persan, kannara, tamoul, arabe, hébreu, géorgien et coréen
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Systèmes bicaméraux</strong> (deux casses par lettre) : latin, grec, cyrillique et arménien
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={32} className="text-green-600" />
                  <h3 className="text-2xl font-bold text-green-700">Particularité Unique</h3>
                </div>
                <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                  Toute personne l'ayant appris peut s'en servir pour lire et/ou écrire aisément dans n'importe quelle langue sans forcément la parler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'importance de Gbekoun */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              L'importance de Gbekoun pour le Bénin, l'Afrique et le Monde
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">L'écriture : Fondement des Civilisations</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  L'une des plus grandes inventions de l'humanité, <strong>l'écriture</strong>, quoiqu'en soit sa nature, sa forme et le type, permet de :
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Conserver la mémoire (des savoirs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Transmettre des mémoires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Structurer les civilisations</span>
                  </li>
                </ul>
                <p className="text-lg font-semibold text-blue-700 mt-6">
                  L'écriture est bien plus qu'un simple outil ; elle est le socle sur lequel repose la mémoire de l'humanité.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">Un Pouvoir Transcendant</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Chaque écriture répond à un besoin spécifique et est façonnée par la culture et l'environnement de ceux qui l'ont inventée.
              </p>
              <div className="bg-white rounded-xl p-6 mb-4">
                <p className="text-lg text-gray-800 leading-relaxed italic">
                  "L'écriture n'est pas une invention technique comme une autre. Par elle les hommes détiennent un pouvoir nouveau, celui de <strong className="text-indigo-600">transcender l'espace et le temps</strong>, celui de voir la parole."
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ils peuvent désormais <strong>écrire leur propre histoire</strong>. C'est pourquoi elle apparaît souvent de manière métaphysique et racontée au travers des récits mythiques comme chargée d'une énergie spirituelle.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-10 shadow-2xl text-gray-900">
            <h3 className="text-3xl font-bold mb-6 text-center">Contexte Historique</h3>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              L'histoire rapporte que le début de l'écriture est lié à la naissance d'un pouvoir fort et centralisé : développement des échanges liés à la naissance des villes et de l'État en Mésopotamie, formation d'une nation autour d'un souverain en Égypte, contexte religieux en Chine, besoin d'un calendrier d'État en Mésoamérique.
            </p>
          </div>
        </div>
      </section>

      {/* Origine et Héritage */}
      <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Origine et Héritage</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              L'histoire du système d'écriture endogène Gbekoun
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Le Créateur</h3>
              <p className="text-lg leading-relaxed opacity-90 mb-4">
                Système endogène d'écriture, le Gbekoun est conçu par notre compatriote <strong className="text-white">Feu ADIGBÈ Togbédji</strong>, originaire de la commune de Dangbo plus précisément du village de <strong>Mondotokpa</strong> dans le Département de l'Ouémé.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Composé de consonnes et de voyelles, sa numération et ses signes de commodités, Gbekoun sert à écrire et lire en toute langue.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Le Successeur</h3>
              <p className="text-lg leading-relaxed opacity-90">
                <strong className="text-white">HOUESSÈ AYÏGBÈDEKIN Vidéhouénou</strong>, successeur de ADIGBÈ Togbédji et premier inventeur avéré de théories scientifiques en langue nationale au Bénin à usage académique. Ce dernier a conçu des matériels académiques didactiques issus de nos réalités, débarrassés de toute allégeance à l'existant étranger.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-10 shadow-2xl mb-10">
            <div className="flex items-center gap-4 mb-6 justify-center">
              <Calendar size={40} className="text-yellow-400" />
              <h3 className="text-3xl font-bold">Le Calendrier Lunisolaire de l'Ère Gbekoun</h3>
            </div>
            <div className="space-y-4 text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Le calendrier lunisolaire de l'Ère Gbekoun est fondé à la fois sur le <strong>cycle quotidien du soleil</strong> et celui <strong>mensuel de la lune</strong>, aux rythmes de 24 mouvements par jour pour le soleil et 24 mouvements le mois pour la lune.
              </p>
              <p>
                Basé sur la règle décimale des chiffres : 1, 2, 3, 4, 5, 6, 7, 8, 9 et 0, il compte <strong className="text-yellow-300">dix mois de vingt-quatre jours chacun</strong>, soit 240 jours l'an.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mt-6">
                <p className="text-xl font-bold text-yellow-300 mb-3">Début de l'Histoire Africaine</p>
                <p className="mb-2">
                  Nous permettant désormais d'écrire notre propre histoire, ce calendrier endogène marqua la fin de notre période préhistorique le <strong>Dimanche 25 Août 1996</strong>, et notre histoire commença le jour suivant.
                </p>
                <p className="text-yellow-200 font-semibold text-xl mt-4">
                  <strong>Lundi 26 Août 1996</strong>, soit « <em>Toöpligbë 1er, Djïkoun, Kando 1er, Houë 1er</em> » (premier jour de l'an un de l'Ère) marqua le début de l'histoire pour la communauté Africaine.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
            <div className="flex items-center gap-4 mb-6 justify-center">
              <School size={40} className="text-yellow-400" />
              <h3 className="text-3xl font-bold">Le Premier Centre d'Eveil du Continent Noir</h3>
            </div>
            <p className="text-lg leading-relaxed opacity-90 text-center max-w-4xl mx-auto">
              Lieu de formations dans le <strong className="text-white">Système académique Gbekoun</strong> pour une éducation pluridisciplinaire authentique et endogène mise en place par <strong className="text-yellow-300">HOUESSÈ AYÏGBÈDEKIN Vidéhouénou</strong>, successeur de ADIGBÈ Togbédji et premier inventeur avéré de théories scientifiques en langue nationale au Bénin à usage académique.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="alphabet" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Commencez votre apprentissage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des outils pour maîtriser l'écriture endogène du Bénin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-200"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                  <feature.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-colors duration-200 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg text-center">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center text-blue-600 font-bold text-lg group-hover:translate-x-3 transition-transform duration-200">
                  Découvrir
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Rejoignez le mouvement Gbekoun
          </h2>
          <p className="text-2xl sm:text-3xl mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            Pour l'Autonomie de toute Nation des Continents
            <br />
            <span className="text-yellow-300">sans le moindre Appui</span>
          </p>

          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Système unique d'écriture pour toute langue - Apprenez à lire et écrire dans n'importe quelle langue sans forcément la parler
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#alphabet"
              className="inline-flex items-center px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Explorer le Script
              <ArrowRight size={24} className="ml-3" />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-xl"
            >
              Notre mission
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;