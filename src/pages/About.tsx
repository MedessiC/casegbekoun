import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Target, Heart, Award, Globe, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: 'Dr. Amèvi Koffi',
      role: 'Directeur du projet',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'Linguiste spécialisé dans les langues africaines'
    },
    {
      name: 'Prof. Kossivi Adanu',
      role: 'Chercheur principal',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      description: 'Expert en systèmes d\'écriture traditionnels'
    },
    {
      name: 'Mme Akosua Mensah',
      role: 'Coordinatrice pédagogique',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      description: 'Spécialiste en méthodes d\'enseignement'
    },
    {
      name: 'Kofi Asante',
      role: 'Développeur technologique',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
      description: 'Ingénieur en technologies linguistiques'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Préservation culturelle',
      description: 'Nous nous engageons à préserver et valoriser les langues africaines',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Accessibilité universelle',
      description: 'Le Gbekoun doit être accessible à tous, partout dans le monde',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Innovation pédagogique',
      description: 'Développer des méthodes d\'apprentissage modernes et efficaces',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Excellence académique',
      description: 'Maintenir les plus hauts standards de recherche et développement',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const achievements = [
    {
      number: '50+',
      label: 'Langues supportées'
    },
    {
      number: '1M+',
      label: 'Personnes formées'
    },
    {
      number: '15',
      label: 'Pays partenaires'
    },
    {
      number: '25+',
      label: 'Années de recherche'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Préserver, promouvoir et moderniser les langues africaines en développant des outils 
              d'écriture innovants et accessibles. Le Gbekoun représente notre engagement envers la 
              diversité linguistique et culturelle de l'Afrique.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
              <Globe size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Un monde où chaque langue africaine dispose des outils nécessaires pour s'épanouir 
              dans l'ère numérique, permettant aux communautés de transmettre leur patrimoine 
              culturel aux générations futures.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Nos Réalisations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/90 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Rejoignez-nous dans cette mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ensemble, nous pouvons faire du Gbekoun un pont entre les traditions ancestrales 
            et l'avenir numérique de l'Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Devenir partenaire
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Faire un don
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;