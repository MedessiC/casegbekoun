import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

// Import des images de drapeaux
import flagFR from '../assets/img/flags/fr.png';
import flagEN from '../assets/img/flags/us.png';
import flagTOG from '../assets/img/flags/gtm.png';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Configuration des langues avec traductions
  const languages = [
    { 
      code: 'en', 
      nameKey: 'languages.english',
      countryKey: 'countries.usa',
      flag: flagEN,
      fallbackName: 'English',
      fallbackCountry: 'United States'
    },
    { 
      code: 'fr', 
      nameKey: 'languages.french',
      countryKey: 'countries.france',
      flag: flagFR,
      fallbackName: 'Français',
      fallbackCountry: 'France'
    },
    
    { 
      code: 'tog', 
      nameKey: 'languages.togbe',
      countryKey: 'countries.guatemala',
      flag: flagTOG,
      fallbackName: 'sÉlú',
      fallbackCountry: 'wefsÉhOif'
    },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Chargement dynamique de la police Gbekoun
  useEffect(() => {
    if (currentLanguage.code === 'tog') {
      const fontStyle = document.getElementById('gbekoun-font-style');
      if (!fontStyle) {
        const style = document.createElement('style');
        style.id = 'gbekoun-font-style';
        style.textContent = `
          @font-face {
            font-family: 'Gbekoun';
            src: url('./src/assets/fonts/gbekoun.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          .gbekoun-font {
            font-family: 'Gbekoun', sans-serif;
            font-size: 0.9em;
            line-height: 1.4;
          }
          .gbekoun-font-small {
            font-family: 'Gbekoun', sans-serif;
            font-size: 0.85em;
            line-height: 1.3;
          }
        `;
        document.head.appendChild(style);
      }
    }
  }, [currentLanguage.code]);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Fonction pour obtenir le nom traduit avec fallback
  const getTranslatedName = (language: typeof languages[0], isSmall: boolean = false) => {
    const languageName = t(language.nameKey, { defaultValue: language.fallbackName });
    const countryName = t(language.countryKey, { defaultValue: language.fallbackCountry });
    
    // Classe CSS selon la langue et la taille
    const cssClass = language.code === 'tog' 
      ? (isSmall ? 'gbekoun-font-small' : 'gbekoun-font')
      : '';

    return {
      languageName,
      countryName,
      cssClass,
      fullName: `${languageName}` // Vous pouvez changer en `${languageName} (${countryName})` si vous voulez afficher le pays
    };
  };

  // Fermer le menu en cliquant ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  const currentLangDisplay = getTranslatedName(currentLanguage, true);

  return (
    <div className="relative language-selector">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
        aria-label={t('selectLanguage', 'Sélectionner une langue')}
        data-lang={i18n.language}
      >
        <Globe size={16} />
        <img 
          src={currentLanguage.flag} 
          alt={`${currentLangDisplay.countryName} flag`}
          className="w-5 h-4 object-cover rounded-sm hidden sm:block"
        />
        {/* Affichage compact pour le bouton */}
        <span className={`hidden md:inline text-sm ${currentLangDisplay.cssClass}`}>
          {currentLangDisplay.languageName}
        </span>
        <ChevronDown 
          size={14} 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 py-2 w-56 bg-white rounded-md shadow-lg border z-50"
          role="menu"
          aria-orientation="vertical"
        >
          {languages.map((language) => {
            const langDisplay = getTranslatedName(language);
            const isSelected = currentLanguage.code === language.code;
            
            return (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 ${
                  isSelected ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                role="menuitem"
                data-lang={language.code}
              >
                <img 
                  src={language.flag} 
                  alt={`${langDisplay.countryName} flag`}
                  className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  {/* Nom de la langue */}
                  <div className={`font-medium ${langDisplay.cssClass}`}>
                    {langDisplay.languageName}
                  </div>
                  {/* Nom du pays en petite taille */}
                  <div className={`text-xs text-gray-500 mt-0.5 ${
                    language.code === 'tog' ? 'gbekoun-font-small' : ''
                  }`}>
                    {langDisplay.countryName}
                  </div>
                </div>
                {/* Indicateur de sélection */}
                {isSelected && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                )}
              </button>
            );
          })}
          
          {/* Séparateur et option pour ajouter d'autres langues */}
          <div className="border-t border-gray-200 mt-2 pt-2">
            <div className="px-4 py-2 text-xs text-gray-400">
              {t('moreLanguagesComingSoon', 'Plus de langues bientôt disponibles')}
            </div>
          </div>
        </div>
      )}

      {/* Styles CSS pour les adaptations selon la langue courante */}
      <style jsx>{`
        .language-selector[data-lang="tog"] button,
        .language-selector[data-lang="togbe"] button {
          font-size: 0.85rem;
        }
        
        .language-selector[data-lang="tog"] .text-sm,
        .language-selector[data-lang="togbe"] .text-sm {
          font-size: 0.8rem;
        }

        /* Animation pour l'ouverture du menu */
        .language-selector > div:last-child {
          animation: slideDown 0.2s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;