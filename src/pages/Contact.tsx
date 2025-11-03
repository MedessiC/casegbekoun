import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'case.gbekoun@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+229 01 55 40 45 45\n+229 01 90 44 44 17',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Immeuble VLAVO\nVillage Tandahota\nArrondissement Azohouè-Aliho\nCommune Tori-Bossito\nAtlantique, Bénin',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-12 shadow-xl text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé!</h2>
          <p className="text-gray-600">
            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centre Académique des Savoirs Endogènes - Gbekoun
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Organization Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">À propos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                L'ONG CASE-GBEKOUN (Centre Académique des Savoirs Endogènes - Gbekoun) est une organisation 
                dédiée à la préservation et à la promotion des savoirs endogènes et des langues maternelles 
                en Afrique, particulièrement au Bénin.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Statut : Organisation Non Gouvernementale<br/>
                  Fondée : 30 Juin 2025
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>8h00 - 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>9h00 - 13h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="general">Question générale</option>
                  <option value="collaboration">Proposition de collaboration</option>
                  <option value="education">Formation et éducation</option>
                  <option value="savoirs">Savoirs endogènes</option>
                  <option value="research">Recherche académique</option>
                  <option value="media">Demande média</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Send size={20} className="mr-2" />
                Envoyer
              </button>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-blue-100 to-yellow-100 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-semibold">Tori-Bossito, Atlantique</p>
              <p className="text-sm">Bénin, Afrique de l'Ouest</p>
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

export default ContactPage;