import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, Keyboard, History, ArrowRight, Globe, Users, Award } from 'lucide-react';

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

  const stats = [
    {
      icon: Globe,
      number: '5+',
      label: 'Langues supportées',
      description: 'Fon, Yoruba, Gun, et plus'
    },
    {
      icon: Users,
      number: '10K+',
      label: 'Utilisateurs actifs',
      description: 'Une communauté grandissante'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Open Source',
      description: 'Libre et accessible à tous'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              ✨ Système d'écriture innovant pour l'Afrique
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">{t('welcome')}</span>
            <br />
            <span className="text-blue-600">
              {t('gbekoun')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/alphabet"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t('explore')}
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/history"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              {t('learnMore')}
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                  <stat.icon size={24} className="text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Découvrez nos fonctionnalités
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des outils puissants pour apprendre et maîtriser le système d'écriture Gbekoun
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-200">
                  Explorer
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi le Gbekoun ?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Le Gbekoun représente une innovation majeure dans la préservation et la modernisation des langues africaines. Conçu spécifiquement pour les langues tonales du Bénin et de la région, ce système d'écriture révolutionnaire facilite l'expression écrite de nos riches traditions orales.
                </p>
                <p>
                  Grâce à sa structure logique et ses symboles intuitifs, le Gbekoun permet une transcription précise des nuances tonales et phonétiques qui caractérisent nos langues ancestrales.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  En savoir plus sur notre mission
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Commencez votre apprentissage
                </h3>
                <p className="text-gray-600 mb-6">
                  Rejoignez des milliers d'apprenants qui découvrent la beauté du Gbekoun
                </p>
                <Link
                  to="/alphabet"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Commencer maintenant
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Rejoignez la révolution de l'écriture africaine
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez comment le Gbekoun transforme la manière d'écrire et de préserver nos langues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Lire nos articles
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Rejoindre la communauté
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;