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
      id: "revelation",
      period: "1976-1995",
      title: "Révélation et Mission Transcendante",
      shortTitle: "Les origines mystiques",
      description: "ADIGBE Togbédji, originaire du petit village de Mondotokpa à Dangbo, reçoit une mission transcendante pour créer le script d'incarnation des langues africaines. En 1976, il adresse un message prophétique aux gouvernants sur la sécheresse financière qui guetterait le pays. Cette prophétie lui vaut une incarcération de 7 années sans procès ni jugement. Paradoxalement, la crise annoncée frappe effectivement le Bénin en 1983.",
      detailedStory: "Au cours de sa 7ème année d'emprisonnement, il réitère le même message aux mêmes gouvernants qui, cette fois, décident de l'amnistier et de le libérer. Après sa libération en 1983, ADIGBE Togbédji entreprend une quête spirituelle et scientifique extraordinaire. Pour découvrir la 'maquette de développement' qu'est le script d'incarnation, l'homme s'impose des conditions de vie extrêmes : il reste sans manger ni boire pendant plusieurs semaines. Quand il s'alimente, c'est comme les hommes de l'époque primitive : une boule d'akassa accompagnée d'huile rouge sans sel ni piment. Il parcourt toutes ses distances à pied, quelles qu'elles soient.",
      context: "Cette période s'inscrit dans la théorie développée selon laquelle l'Afrique a perdu sa souveraineté en adoptant des langues étrangères. Le 'couple originel ancestral' (Terre + Langues maternelles) s'est refermé comme une tortue face au danger, bloquant l'accès aux ressources. ADIGBE Togbédji est choisi par le 'consortium des langues en voie de disparition' pour briser cette malédiction.",
      keyPoint: "19 années de recherche dans des conditions mystiques",
      quote: "Mes frères, notre époque est historique à nulle autre pareille... Quand la nature parlera à partir de ce petit pays le monde entier entendra.",
      author: "ADIGBE Togbédji (1989)",
      keyEvents: [
        "1976 : Prophétie sur la crise financière - Incarcération de 7 ans sans procès",
        "1983 : Confirmation de la prophétie - Libération",
        "1983-1995 : 12 années de recherche ascétique et mystique",
        "Conditions de vie primitives volontaires (jeûnes prolongés, alimentation primitive)",
        "Quête du 'Script pour l'autonomie des nations'"
      ],
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
      
  id: "revelation",
  period: "1976–1995",
  title: "Revelation and Transcendent Mission",
  shortTitle: "Mystical Origins",
  description: "ADIGBE Togbédji, a native of the small village of Mondotokpa in Dangbo, receives a transcendent mission to create the incarnation script for African languages. In 1976, he delivers a prophetic message to the nation's leaders about an impending financial drought. This prophecy leads to his imprisonment for 7 years without trial or judgment. Paradoxically, the predicted crisis strikes Benin in 1983.",
  detailedStory: "During his seventh year of imprisonment, he repeats the same message to the same leaders, who this time decide to grant him amnesty and release him. After his liberation in 1983, ADIGBE Togbédji embarks on an extraordinary spiritual and scientific quest. To uncover the 'development blueprint' that is the incarnation script, he imposes extreme living conditions on himself: going without food or water for several weeks. When he does eat, it is like the men of the primitive era — a ball of akassa with red oil, without salt or pepper. He travels all distances on foot, regardless of length.",
  context: "This period aligns with the theory that Africa lost its sovereignty by adopting foreign languages. The 'ancestral original couple' (Earth + Mother Tongues) closed itself off like a turtle facing danger, blocking access to resources. ADIGBE Togbédji is chosen by the 'consortium of endangered languages' to break this curse.",
  keyPoint: "19 years of research under mystical conditions",
  quote: "My brothers, our era is historically unparalleled... When nature speaks from this small country, the whole world will hear.",
  author: "ADIGBE Togbédji (1989)",
  keyEvents: [
    "1976: Prophecy of financial crisis – 7-year imprisonment without trial",
    "1983: Prophecy confirmed – Release",
    "1983–1995: 12 years of ascetic and mystical research",
    "Voluntary primitive living conditions (prolonged fasting, primitive diet)",
    "Quest for the 'Script for the autonomy of nations'"
  ],


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