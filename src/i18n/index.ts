import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      // Navigation
      nom: 'CASE-Gbekoun',
      home: 'Accueil',
      history: 'Histoire',
      alphabet: 'Alphabet',
      keyboard: 'Clavier',
      blog: 'Blog',
      about: 'À propos',
      contact: 'Contact',
      pays: 'Français',
      
      // Home page
      welcome: 'Bienvenue dans l\'univers du',
      gbekoun: 'Centre Académique des Savoirs Endogène-Gbekoun',
      subtitle: 'Découvrez l\'alphabet révolutionnaire qui transforme l\'écriture des langues africaines',
      explore: 'Explorer l\'alphabet',
      learnMore: 'En savoir plus',
      
      // History page
      historyTitle: 'Histoire du Gbekoun',
      origin: 'Origines',
      originText: 'Le Gbekoun est né de la nécessité de créer un système d\'écriture adapté aux langues africaines.',
      evolution: 'Évolution',
      evolutionText: 'Développé progressivement, l\'alphabet s\'est enrichi pour répondre aux besoins linguistiques.',
      impact: 'Impact culturel',
      impactText: 'Le Gbekoun a révolutionné l\'écriture et la préservation des langues africaines.',
      
      // Alphabet page
      alphabetTitle: 'L\'Alphabet Gbekoun',
      alphabetDescription: 'Découvrez chaque lettre avec sa prononciation et des exemples d\'usage',
      pronunciation: 'Prononciation',
      examples: 'Exemples',
      downloadFont: 'Télécharger la police',
      
      // Keyboard page
      keyboardTitle: 'Clavier Virtuel Gbekoun',
      keyboardDescription: 'Tapez directement en Gbekoun avec notre clavier virtuel',
      textArea: 'Tapez votre texte ici...',
      copyText: 'Copier le texte',
      clearText: 'Effacer',
      
      // Blog page
      resourceCentertitle: 'Blog & Actualités',
      categories: 'Catégories',
      readMore: 'Lire la suite',
      comments: 'commentaires',
      
      
      // About page
      aboutTitle: 'À propos du projet',
      aboutDescription: 'Le projet Gbekoun vise à préserver et promouvoir les langues africaines à travers un système d\'écriture moderne.',
      
      // Contact page
      contactTitle: 'Contactez-nous',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer'
    }
  },
  en: {
    translation: {
      // Navigation
      nom: 'ACEK-Gbekoun',
      home: 'Home',
      history: 'History',
      alphabet: 'Alphabet',
      keyboard: 'Keyboard',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      pays:'English',
      // Home page
      welcome: 'Welcome to the world of',
      gbekoun: 'Academic Center for Endogenous Knowledge Gbekoun',
      subtitle: 'Discover the revolutionary alphabet transforming African language writing',
      explore: 'Explore the alphabet',
      learnMore: 'Learn more',
      
      // History page
      historyTitle: 'History of Gbekoun',
      origin: 'Origins',
      originText: 'Gbekoun was born from the necessity to create a writing system adapted to African languages.',
      evolution: 'Evolution',
      evolutionText: 'Developed progressively, the alphabet was enriched to meet linguistic needs.',
      impact: 'Cultural impact',
      impactText: 'Gbekoun revolutionized writing and preservation of African languages.',
      
      // Alphabet page
      alphabetTitle: 'The Gbekoun Alphabet',
      alphabetDescription: 'Discover each letter with its pronunciation and usage examples',
      pronunciation: 'Pronunciation',
      examples: 'Examples',
      downloadFont: 'Download font',
      
      // Keyboard page
      keyboardTitle: 'Gbekoun Virtual Keyboard',
      keyboardDescription: 'Type directly in Gbekoun with our virtual keyboard',
      textArea: 'Type your text here...',
      copyText: 'Copy text',
      clearText: 'Clear',
      
      // Blog page
      resourceCentertitle: 'Blog & News',
      categories: 'Categories',
      readMore: 'Read more',
      comments: 'comments',
      
      // About page
      aboutTitle: 'About the project',
      aboutDescription: 'The Gbekoun project aims to preserve and promote African languages through a modern writing system.',
      
      // Contact page
      contactTitle: 'Contact us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send'
    }
  },
  tog: {
    translation: {
      // Navigation (Togbé/Fon)
      nom: 'fsfs;lütÂf',
      home: 'jËrOsOif ',
      history: 'sÂfhÉf',
      alphabet: 'tÂfkÔÖ',
      keyboard: 'sisÉhOif',
      blog: 'xEdIósE',
      about: 'hOìfhif;Ïf',
      contact: 'hÖwkomÄfsÁf',
      
      // Home page
      welcome: 'hOvIocóf (E',
      gbekoun: 'fÁfpkEf sif fÁfwAOIf sËsÊf lütÂf rI',
      subtitle: 'tÂf sÉ )ÉpE )ÉpE mÕtÔkÔÕ sôf rO mI)udI hèf)ûrì (E fÁf)u pupu mÂ',
      explore: 'tÂfkÔÖ',
      learnMore: 'sÂfhÉf',
      
      // History page
      historyTitle: 'Gbekoun ƒe Ɖoɖowu',
      origin: 'Gɔmedzedze',
      originText: 'Gbekoun dzi tso nuŋɔŋlɔ si sɔ kple Afrikagbewo wɔwɔ hiahiã me.',
      evolution: 'Trɔtrɔ',
      evolutionText: 'Wowɔe vivivo, eye nuŋɔŋlɔ la dzi ɖe edzi be wòasɔ kple gbe ƒe hiahiãwo.',
      impact: 'Nutome ƒe kpɔkpɔ',
      impactText: 'Gbekoun trɔ Afrikagbewo ƒe nuŋɔŋlɔ kple wo dzadzraɖo.',
      
      // Alphabet page
      alphabetTitle: 'Gbekoun Nuŋɔŋlɔ',
      alphabetDescription: 'Kpɔ ŋɔŋlɔdzesi ɖesiaɖe kple eƒe gbeɖiɖi kple kpɔɖeŋu',
      pronunciation: 'Gbeɖiɖi',
      examples: 'Kpɔɖeŋuwo',
      downloadFont: 'Xɔ nuŋɔŋlɔdzesi',
      
      // Keyboard page
      keyboardTitle: 'Gbekoun Kpinplɔ Ɖigital',
      keyboardDescription: 'Ŋlɔ Gbekoun tẽe kple míaƒe kpinplɔ ɖigital',
      textArea: 'Ŋlɔ wò nuŋɔŋlɔ le afii...',
      copyText: 'Kɔpi nuŋɔŋlɔ',
      clearText: 'Tutu',
      
      // Blog page
      resourceCentertitle: 'Blog kple Nyadzɔdzɔwo',
      categories: 'Hamewo',
      readMore: 'Xlẽ wu',
      comments: 'nyaɖeɖewo',
      
      // About page
      aboutTitle: 'Ɖe dɔwɔwɔ ŋu',
      aboutDescription: 'Gbekoun dɔwɔwɔ ƒe taɖodzinue nye Afrikagbewo dzadzraɖo kple wo dodoɖa ɖe ŋgɔ to nuŋɔŋlɔ yeye me.',
      
      // Contact page
      contactTitle: 'Ka míaƒe ɖe',
      name: 'Ŋkɔ',
      email: 'Email',
      message: 'Gbeɖiɖi',
      send: 'Ɖo ɖa'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;