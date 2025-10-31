import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, Keyboard, History, ArrowRight, Globe, Users, Award, Sparkles, School, FileText, Calendar, Heart, Target, ExternalLink, Mail, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: History,
      title: t('history'),
      description: 'L\'histoire fascinante et l\'évolution du système d\'écriture Gbekoun',
      link: '/history',
      color: 'from-green-500 to-green-600'
    }
  ];

  const ongPartner = {
    id: 1,
    slug: "aig-togo",
    name: "Association Internationale Gbeku",
    acronym: "A.I.G.",
    logo: "https://i.imgur.com/yo1pI0q.jpeg",
    country: "Togo",
    founded: "2023",
    email: "gbeku2023@gmail.com",
    phone: "+228 90 01 38 86",
    shortDescription: "Association apolitique à but non lucratif dédiée à la promotion des langues et cultures africaines.",
    color: "blue"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto text-center text-white py-20">
          

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
              href="#ong-partner"
              className="inline-flex items-center px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Découvrir nos partenaires ONG
              <ArrowRight size={24} className="ml-3" />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 shadow-xl"
            >
              Notre mission
            </a>
          </div>

          {/* Stats rapides */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">33</div>
              <div className="text-sm opacity-90">Lettres uniques</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">1996</div>
              <div className="text-sm opacity-90">Année de création</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-sm opacity-90">Langues compatibles</div>
            </div>
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <BookOpen size={28} className="text-gray-900" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-center">Développement Linguistique</h4>
                <p className="text-center leading-relaxed opacity-90">
                  Œuvrer au développement de nos langues maternelles avec le système endogène d'écriture Gbekoun
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <School size={28} className="text-gray-900" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-center">Protection Culturelle</h4>
                <p className="text-center leading-relaxed opacity-90">
                  Contribuer à la protection de nos milieux contre leurs invasions par des cultures étrangères
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
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
{/* Section Partenaire ONG - Optimisée */}
<section id="ong-partner" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
  <div className="max-w-7xl mx-auto">
    {/* En-tête */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
        <Heart size={18} />
        Partenaire Officiel
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        Notre Partenaire ONG
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Ensemble pour promouvoir l'autonomie éducative et linguistique de l'Afrique
      </p>
    </div>
    </div>

    {/* Carte partenaire */}
   <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 max-w-4xl mx-auto">
  {/* Section visuelle en haut */}
  <div className="relative p-8 sm:p-12 flex flex-col items-center justify-center bg-white">
    <div className="w-full max-w-lg mx-auto space-y-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center border border-gray-100">
        <img 
          src={ongPartner.logo}
          alt={ongPartner.name}
          className="h-40 w-full object-contain"
        />
      </div>
      <div className="text-center">
        <div className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg inline-block">
          {ongPartner.acronym}
        </div>
      </div>
    </div>



      {/* Section contenu en bas */}
      <div className="p-8 sm:p-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight text-center">
          {ongPartner.name}
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
          {ongPartner.shortDescription}
        </p>

        {/* Infos clés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Globe size={20} />
              <span className="font-semibold text-sm">Pays</span>
            </div>
            <div className="text-gray-900 font-bold text-lg">{ongPartner.country}</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <Calendar size={20} />
              <span className="font-semibold text-sm">Fondée</span>
            </div>
            <div className="text-gray-900 font-bold text-lg">{ongPartner.founded}</div>
          </div>
        </div>

        {/* Contacts */}
        <div className="space-y-4 mb-8 max-w-xl mx-auto">
          <a 
            href={`mailto:${ongPartner.email}`}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <Mail size={20} className="text-blue-600 group-hover:text-white" />
            </div>
            <span className="font-medium break-all">{ongPartner.email}</span>
          </a>
          <a 
            href={`tel:${ongPartner.phone}`}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <Phone size={20} className="text-blue-600 group-hover:text-white" />
            </div>
            <span className="font-medium">{ongPartner.phone}</span>
          </a>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <a
            href="/ong"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>En savoir plus</span>
            <ExternalLink size={20} />
          </a>
          <a
            href={`mailto:${ongPartner.email}`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200"
          >
            <span>Contacter</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
 



          {/* Domaines de collaboration */}
          <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-10 sm:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-center">Domaines de Collaboration</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <BookOpen size={32} className="text-yellow-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Formation</h4>
                <p className="text-sm opacity-90">Programmes éducatifs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Globe size={32} className="text-yellow-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Culture</h4>
                <p className="text-sm opacity-90">Promotion culturelle</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Users size={32} className="text-yellow-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Communauté</h4>
                <p className="text-sm opacity-90">Sensibilisation sociale</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Target size={32} className="text-yellow-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Alphabétisation</h4>
                <p className="text-sm opacity-90">Lutte contre l'analphabétisme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le Gbekoun */}
     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec image */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Qu'est-ce que le Gbekoun ?
          </h2>
          <div className="flex justify-center">
            <img
              src="/gbk.jpg"
              alt="Illustration du Gbekoun"
              className="w-full max-w-md h-64 rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* Première rangée : Définition + Essence Fédératrice */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Définition */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Définition</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Gbekoun</strong> en langues <em>Goun</em>, <em>Fon</em>, <em>Ayïzo</em> est le jumelage de deux mots, à savoir <strong>"graphique de langage ou son"</strong> et veut dire signe ou symbole de son de toute nature, de voix, de langue.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En général c'est une lettre ou un ensemble de lettres, des signes et symboles scientifiques divers composant un ensemble des consonnes, des voyelles et des signes de commodités qui sert à écrire.
              </p>
            </div>
          </div>

          {/* Essence Fédératrice */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Essence Fédératrice</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              D'essence fédératrice de langues, il sert à <strong>transcrire exactement tout phonème de toute nature et de toute langue</strong> et se lit textuellement dans les expressions écrites dans ces langues mêmes par celles et ceux qui ne parlent pas les langues en question mais qui savent écrire et lire avec le système d'écriture Gbekoun.
            </p>
          </div>
        </div>

        {/* Deuxième rangée : Caractéristiques Techniques + Comparaison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Caractéristiques Techniques */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques Techniques</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-900 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg leading-relaxed">Composé de <strong>33 lettres</strong> : 24 consonnes et 9 voyelles</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-900 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg leading-relaxed">Système <strong>unicaméral</strong>, monocaméral ou à case unique</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-900 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg leading-relaxed">Une seule graphie pour chacun de ses caractères</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-900 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg leading-relaxed">Ni lettre minuscule ni lettre majuscule</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-900 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg leading-relaxed">Inclut numération et signes de commodités</span>
              </li>
            </ul>
          </div>

          {/* Comparaison */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-purple-600 mb-6">Comparaison</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-purple-600">Systèmes unicaméraux</strong> (comme Gbekoun) : persan, kannara, tamoul, arabe, hébreu, géorgien et coréen
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-purple-600">Systèmes bicaméraux</strong> (deux casses par lettre) : latin, grec, cyrillique et arménien
              </p>
            </div>
          </div>
        </div>

        {/* Troisième rangée : Particularité Unique + Point Important */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Particularité Unique */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border-2 border-green-300">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={32} className="text-green-600 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-green-700">Particularité Unique</h3>
            </div>
            <p className="text-lg text-gray-800 font-semibold leading-relaxed">
              Toute personne l'ayant appris peut s'en servir pour lire et/ou écrire aisément dans n'importe quelle langue sans forcément la parler.
            </p>
          </div>

          {/* Point Important */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award size={32} className="flex-shrink-0" />
              <h3 className="text-2xl font-bold text-gray-900">Point Important</h3>
            </div>
            <p className="text-lg font-semibold leading-relaxed text-gray-900">
              Gbekoun n'est donc pas une langue. Mais la dénomination d'une écriture qui permet d'écrire en toute langue.
            </p>
          </div>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Le Créateur</h3>
              <p className="text-lg leading-relaxed opacity-90 mb-4">
                Système endogène d'écriture, le Gbekoun est conçu par notre compatriote <strong className="text-white">Feu ADIGBÈ Togbédji</strong>, originaire de la commune de Dangbo plus précisément du village de <strong>Mondotokpa</strong> dans le Département de l'Ouémé.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Composé de consonnes et de voyelles, sa numération et ses signes de commodités, Gbekoun sert à écrire et lire en toute langue.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
              href="/ong"
              className="inline-flex items-center px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Découvrir nos partenaires
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