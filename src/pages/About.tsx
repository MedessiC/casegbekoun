import React from 'react';
import { Target, Heart, Award, Globe, BookOpen, Users } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'VLAVO Koundo',
      role: 'Président du Bureau Exécutif',
      description: 'Leader et fondateur de l\'ONG CASE-GBEKOUN'
    },
    {
      name: 'HODONOU François Gbenoukpo',
      role: 'Recteur',
      description: 'Responsable académique et pédagogique'
    },
    {
      name: 'KETOHOU Rekedome Bonaventure Chancel',
      role: 'Secrétaire Général',
      description: 'Gestion administrative et coordination'
    },
    {
      name: 'KENOU MAHOUGBE Norbert Kokouvi',
      role: 'Trésorier Général',
      description: 'Gestion financière et ressources'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Préservation des savoirs endogènes',
      description: 'Protéger et valoriser les savoirs traditionnels africains et les langues maternelles',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Développement endogène',
      description: 'Promouvoir un développement autonome basé sur les ressources et cultures locales',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Excellence académique',
      description: 'Offrir une éducation de qualité basée sur les langues et savoirs maternels',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Innovation culturelle',
      description: 'Adapter les traditions ancestrales aux réalités contemporaines et futures',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const achievements = [
    {
      number: '2025',
      label: 'Année de fondation'
    },
    {
      number: '6',
      label: 'Membres du Bureau Exécutif'
    },
    {
      number: '2',
      label: 'Conseillers de Surveillance'
    },
    {
      number: '1',
      label: 'Centre Académique'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            À Propos de CASE-GBEKOUN
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Centre Académique des Savoirs Endogènes - Gbekoun : Une organisation dédiée à la 
            préservation et la promotion des langues maternelles et des savoirs endogènes en Afrique
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Promouvoir l'utilisation des langues maternelles comme outils d'éducation et de 
              développement endogène. Nous travaillons à restaurer la dignité des savoirs africains 
              authentiques et à créer un système d'enseignement basé sur les langues de nos ancêtres, 
              permettant à chaque communauté de se développer de manière autonome et souveraine.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
              <Globe size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Un continent africain où chaque peuple dispose de ses propres outils éducatifs et 
              linguistiques pour se découvrir, innover et se développer. Une Afrique où les 
              langues maternelles sont reconnues comme véritables facteurs de développement 
              scientifique, technologique et culturel.
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
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Notre Structure</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/90 font-medium text-sm md:text-base">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Direction et Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-yellow-500 flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3 text-sm">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Structure */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Structure Organisationnelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bureau Exécutif</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Président : VLAVO Koundo</li>
                <li>Secrétaire Général : KETOHOU Rekedome Bonaventure Chancel</li>
                <li>Recteur : HODONOU François Gbenoukpo</li>
                <li>Secrétaire Général Adjoint : VLAVO Wonde Nuvé</li>
                <li>Trésorier Général : KENOU MAHOUGBE Norbert Kokouvi</li>
                <li>Trésorier Général Adjoint : AKAKPO Ablavi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conseil de Surveillance</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>1er Conseiller : KOUKOUTO Dotun Gérard</li>
                <li>2e Conseiller : TCHIAKPE Cocou Maurice Georges</li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Créée :</strong> 30 Juin 2025<br/>
                  <strong>Localisation :</strong> Tori-Bossito, Atlantique, Bénin
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Rejoignez notre mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ensemble, nous bâtissons une Afrique où les savoirs endogènes et les langues maternelles 
            sont les véritables moteurs du développement durable et de l'innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Nous contacter
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              En savoir plus
            </button>
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

export default About;