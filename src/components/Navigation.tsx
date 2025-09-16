import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import logoImage from '../assets/img/logo-case-gbekoun.png';

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Déterminer si on est en mode Togbé
  const isTogbeLanguage = i18n.language === 'tog' || i18n.language === 'togbe';
  
  // Pour Togbé, toujours afficher le menu hamburger (même sur desktop)
  // Pour les autres langues, hamburger seulement sur mobile
  const shouldShowHamburger = isTogbeLanguage ? true : window.innerWidth < 768;

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'history', path: '/history' },
    { key: 'alphabet', path: '/alphabet' },
    { key: 'keyboard', path: '/keyboard' },
    { key: 'blog', path: '/blog' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Fermer le menu lors du changement de langue
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [i18n.language]);

  // Gérer le redimensionnement de fenêtre pour les langues non-Togbé
  React.useEffect(() => {
    const handleResize = () => {
      if (!isTogbeLanguage && window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isTogbeLanguage]);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
      data-lang={i18n.language}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logoImage}
              alt="Logo CASE-Gbekoun"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-gray-800"> {t('nom')}</span>
          </Link>

          {/* Navigation Desktop - Cachée si Togbé */}
          {!isTogbeLanguage && (
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <LanguageSelector />
            </div>
          )}

          {/* Bouton Hamburger */}
          <div className={`flex items-center space-x-2 ${
            isTogbeLanguage ? '' : 'md:hidden'
          }`}>
            {/* Sélecteur de langue - toujours visible */}
            {isTogbeLanguage && <LanguageSelector />}
            {!isTogbeLanguage && <div className="md:hidden"><LanguageSelector /></div>}
            
            {/* Bouton Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isTogbeLanguage 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' // Style spécial pour Togbé
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label={isMenuOpen ? t('closeMenu', 'Fermer le menu') : t('openMenu', 'Ouvrir le menu')}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              {/* Texte "Menu" pour Togbé */}
              {isTogbeLanguage && (
                <span className="ml-2 text-sm font-medium">
                  {t('menu', '')}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile/Togbé */}
        {isMenuOpen && (
          <div className={isTogbeLanguage ? '' : 'md:hidden'}>
            <div className={`px-2 pt-2 pb-3 space-y-1 bg-white border-t transition-all duration-300 ${
              isTogbeLanguage 
                ? 'shadow-lg border border-gray-200 rounded-b-lg mt-2' // Style amélioré pour Togbé
                : ''
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  } ${
                    isTogbeLanguage ? 'text-sm' : 'text-base' // Police plus petite pour Togbé
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              {/* Sélecteur de langue dans le menu pour les langues non-Togbé */}
              {!isTogbeLanguage && (
                <div className="px-4 py-3 border-t border-gray-200">
                  <LanguageSelector />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Styles CSS intégrés pour la police Togbé */}
      <style jsx>{`
        [data-lang="tog"] .navigation,
        [data-lang="togbe"] .navigation {
          font-family: 'Gbekoun', 'Noto Sans', 'Arial Unicode MS', sans-serif;
        }
        
        [data-lang="tog"] .text-sm,
        [data-lang="togbe"] .text-sm {
          font-size: 0.8rem;
        }
        
        [data-lang="tog"] button,
        [data-lang="togbe"] button {
          font-size: 0.85rem;
        }

        /* Animation pour l'ouverture du menu */
        .menu-enter {
          opacity: 0;
          transform: translateY(-10px);
        }
        
        .menu-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 300ms, transform 300ms;
        }
        
        .menu-exit {
          opacity: 1;
        }
        
        .menu-exit-active {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;