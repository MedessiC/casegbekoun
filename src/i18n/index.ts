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
      alphabet: 'Script',
      keyboard: 'Clavier',
      blog: 'Blog',
      about: 'À propos',
      contact: 'Contact',
      pays: 'Français',
      
      // Home page
      welcome: 'Bienvenue dans l\'univers du',
      gbekoun: 'Centre Académique des Savoirs Endogène-Gbekoun',
      subtitle: 'Découvrez l\'écriture authentique qui transforme l\'écriture des langues africaines',
      explore: 'Explorer l\'écriture',
      learnMore: 'En savoir plus',
      
      // History page
      historyTitle: 'Histoire du Gbekoun',
      origin: 'Origines',
      originText: 'Le Gbekoun est né de la nécessité de créer un système d\'écriture adapté aux langues africaines.',
      evolution: 'Évolution',
      evolutionText: 'Développé progressivement, l`\'écriture s\'est enrichi pour répondre aux besoins linguistiques.',
      impact: 'Impact culturel',
      impactText: 'Le Gbekoun a révolutionné l\'écriture et la préservation des langues africaines.',
      
      // Histoire complète - Nouvelles clés
      authenticHistoryTitle: 'Histoire Authentique du Gbekoun',
      epicSubtitle: 'L\'épopée mystique du script authentique pour l\'autonomie éducative de l\'Afrique',
      years: 'années',
      present: 'Présent',
      generations: 'générations',
      letters: 'lettres',
      officialDefinition: 'Définition officielle du Gbekoun',
      scriptDefinition: 'Le Script des peuples pour l\'autonomie de chaque nation du monde sans le moindre appui',
      discoverEpic: 'Découvrir l\'épopée complète',
      
      // Contexte
      contextTitle: 'Contexte : La Théorie du "Couple Originel"',
      contextSubtitle: 'Pour comprendre la mission du Gbekoun, il faut saisir la théorie originelle qui sous-tend cette épopée : l\'alliance sacrée entre la Terre et ses Langues maternelles.',
      africaDiagnosis: 'Le Diagnostic : L\'Afrique "Complètement Nue"',
      seeCompleteDiagnosis: 'Voir le diagnostic complet : L\'Afrique \'Complètement Nue\'',
      originalCoupleTheory: 'La Théorie du "Couple Originel Ancestral"',
      seeCompleteTheory: 'Voir l\'explication complète de la théorie',
      sacredAlliance: 'Alliance Sacrée',
      regressionFactors: 'Les 6 Facteurs de Régression Africaine',
      seeDetailedFactors: 'Voir les 6 facteurs détaillés',
      
      // Chronologie
      chronologyTitle: 'Chronologie Complète de l\'Épopée',
      chronologySubtitle: '49 années d\'histoire extraordinaire, de la révélation mystique de 1976 à la mission contemporaine des témoins gardiens.',
      epicSynthesis: 'Synthèse de l\'Épopée Gbekoun',
      yearsOfEpic: 'Années d\'épopée',
      successiveGuardians: 'Gardiens successifs',
      completeSystem: 'Système complet',
      africanAutonomy: 'Autonomie africaine',
      seeCompleteDetails: 'Voir les détails complets de cette période',
      
      // Figures
      figuresTitle: 'Les Figures Emblématiques : Trois Générations',
      figuresSubtitle: 'Découvrez en détail les parcours extraordinaires des gardiens successifs du Script Gbekoun, de la révélation mystique à la préservation contemporaine.',
      threeGenerations: 'Trois Générations, Une Mission Continue',
      revelation: 'Révélation',
      development: 'Développement',
      preservation: 'Préservation',
      seeCompleteJourney: 'Voir le parcours complet de cette figure',
      
      // Technique
      technicalTitle: 'Le Système Gbekoun : Spécifications Complètes',
      technicalSubtitle: 'Plus qu\'une simple écriture, le Gbekoun est un système authentique conçu pour l\'autonomie éducative et civilisationnelle de l\'Afrique.',
      technicalStructure: 'Structure Technique',
      consonants: 'Consonnes',
      vowels: 'Voyelles',
      totalLetters: 'Lettres au total',
      systemType: 'Système à la fois syllabique et phonétique',
      seeAdvancedFeatures: 'Voir toutes les caractéristiques avancées',
      fundamentalTruth: 'Vérité Fondamentale sur les Langues',
      
      // Mission
      missionTitle: 'Mission et Révolution Éducative',
      missionSubtitle: 'La vision complète du mouvement Gbekoun pour transformer l\'éducation africaine et reconquérir l\'autonomie civilisationnelle du continent.',
      independenceFailure: 'L\'Échec des Indépendances : Analyse Historique',
      seeCompleteAnalysis: 'Voir l\'analyse complète : L\'Échec des Indépendances',
      propheticVision: 'Vision Prophétique : Préparer l\'Avenir',
      revolutionaryInstructions: 'Conseils aux Dirigeants Africains',
      seeCompleteInstructions: 'Voir les instructions authentiques complètes aux dirigeants africains',
      finalTestimony: 'Témoignage Final : "Nous Devons en Être Fiers"',
      urgencyToAct: 'L\'Urgence d\'Agir',
      supportMission: 'Soutenir la Mission Gbekoun',
      completeDocumentation: 'Documentation Complète',
      
      // Buttons et actions
      seeMore: 'Voir plus',
      seeLess: 'Voir moins',
      backToTop: 'Retour en haut',
      
      // Footer
      authenticEpic: 'L\'Épopée Gbekoun',
      epicDescription: '49 années d\'histoire authentique pour l\'autonomie éducative de l\'Afrique',
      keyPeriods: 'Périodes Clés',
      mysticRevelation: 'Révélation mystique',
      scriptCompletion: 'Achèvement du script',
      academicDevelopment: 'Développement académique',
      heritageAndMission: 'Héritage et mission',
      mission: 'Mission',
      footerDescription: 'Histoire authentique du Script Gbekoun basée sur les témoignages originaux des gardiens successifs',
      
      // Alphabet page
      alphabetTitle: 'L\'Ecriture Gbekoun',
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
      nom: 'CASE-Gbekoun',
      home: 'Home',
      history: 'History',
      alphabet: 'Alphabet',
      Ong: 'ONG',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      pays: 'English',
      
      // Home page
      welcome: 'Welcome to the world of',
      gbekoun: 'Academic Center for Endogenous Knowledge Gbekoun',
      subtitle: 'Discover the revolutionary alphabet transforming African language writing',
      explore: 'Explore the alphabet',
      learnMore: 'Learn more',
      
      // History page - Basic
      historyTitle: 'History of Gbekoun',
      origin: 'Origins',
      originText: 'Gbekoun was born from the need to create a writing system adapted to African languages.',
      evolution: 'Evolution',
      evolutionText: 'Developed progressively, the alphabet was enriched to meet linguistic needs.',
      impact: 'Cultural impact',
      impactText: 'Gbekoun revolutionized the writing and preservation of African languages.',
      
      // Histoire complète - English translations
      authenticHistoryTitle: 'Authentic History of Gbekoun',
      epicSubtitle: 'The mystical epic of the revolutionary script for African educational autonomy',
      years: 'years',
      present: 'Present',
      generations: 'generations',
      letters: 'letters',
      officialDefinition: 'Official definition of Gbekoun',
      scriptDefinition: 'The Script of peoples for the autonomy of each nation in the world without the slightest support',
      discoverEpic: 'Discover the complete epic',
      
      // Context
      contextTitle: 'Context: The "Original Couple" Theory',
      contextSubtitle: 'To understand the Gbekoun mission, one must grasp the revolutionary theory underlying this epic: the sacred alliance between the Earth and its Mother Tongues.',
      africaDiagnosis: 'The Diagnosis: Africa "Completely Naked"',
      seeCompleteDiagnosis: 'See the complete diagnosis: Africa \'Completely Naked\'',
      originalCoupleTheory: 'The "Ancestral Original Couple" Theory',
      seeCompleteTheory: 'See the complete explanation of the theory',
      sacredAlliance: 'Sacred Alliance',
      regressionFactors: 'The 6 African Regression Factors',
      seeDetailedFactors: 'See the 6 detailed factors',
      
      // Chronology
      chronologyTitle: 'Complete Chronology of the Epic',
      chronologySubtitle: '49 years of extraordinary history, from the 1976 mystical revelation to the contemporary mission of witness guardians.',
      epicSynthesis: 'Synthesis of the Gbekoun Epic',
      yearsOfEpic: 'Years of epic',
      successiveGuardians: 'Successive guardians',
      completeSystem: 'Complete system',
      africanAutonomy: 'African autonomy',
      seeCompleteDetails: 'See the complete details of this period',
      
      // Figures
      figuresTitle: 'The Emblematic Figures: Three Generations',
      figuresSubtitle: 'Discover in detail the extraordinary journeys of the successive guardians of the Gbekoun Script, from mystical revelation to contemporary preservation.',
      threeGenerations: 'Three Generations, One Continuing Mission',
      revelation: 'Revelation',
      development: 'Development',
      preservation: 'Preservation',
      seeCompleteJourney: 'See the complete journey of this figure',
      
      // Technical
      technicalTitle: 'The Gbekoun System: Complete Specifications',
      technicalSubtitle: 'More than a simple alphabet, Gbekoun is a revolutionary system designed for African educational and civilizational autonomy.',
      technicalStructure: 'Technical Structure',
      consonants: 'Consonants',
      vowels: 'Vowels',
      totalLetters: 'Letters in total',
      systemType: 'Both syllabic and phonetic system',
      seeAdvancedFeatures: 'See all advanced features',
      fundamentalTruth: 'Fundamental Truth about Languages',
      
      // Mission
      missionTitle: 'Mission and Educational Revolution',
      missionSubtitle: 'The complete vision of the Gbekoun movement to transform African education and reconquer the continent\'s civilizational autonomy.',
      independenceFailure: 'The Failure of Independence: Historical Analysis',
      seeCompleteAnalysis: 'See the complete analysis: The Failure of Independence',
      propheticVision: 'Prophetic Vision: Preparing the Future',
      revolutionaryInstructions: 'Revolutionary Instructions to African Leaders',
      seeCompleteInstructions: 'See the complete revolutionary instructions to African leaders',
      finalTestimony: 'Final Testimony: "We Must Be Proud of It"',
      urgencyToAct: 'The Urgency to Act',
      supportMission: 'Support the Gbekoun Mission',
      completeDocumentation: 'Complete Documentation',
      
      // Buttons and actions
      seeMore: 'See more',
      seeLess: 'See less',
      backToTop: 'Back to top',
      
      // Footer
      authenticEpic: 'The Gbekoun Epic',
      epicDescription: '49 years of authentic history for African educational autonomy',
      keyPeriods: 'Key Periods',
      mysticRevelation: 'Mystical revelation',
      scriptCompletion: 'Script completion',
      academicDevelopment: 'Academic development',
      heritageAndMission: 'Heritage and mission',
      mission: 'Mission',
      footerDescription: 'Authentic history of the Gbekoun Script based on original testimonies of successive guardians',

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