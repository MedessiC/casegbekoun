import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, BookOpen, Globe, Award, ChevronDown, ChevronUp, Clock, MapPin, Quote, User, Scroll, ArrowUp, Menu, X } from 'lucide-react';

const History: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [activeTab, setActiveTab] = useState('introduction');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  // Fonction pour gérer l'expansion des sections
  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // Composant pour les sections pliables
  const CollapsibleSection = ({ 
    sectionKey, 
    title, 
    children, 
    defaultExpanded = false,
    briefContent = null 
  }: {
    sectionKey: string;
    title: string;
    children: React.ReactNode;
    defaultExpanded?: boolean;
    briefContent?: React.ReactNode;
  }) => {
    const isExpanded = expandedSections[sectionKey] ?? defaultExpanded;
    
    return (
      <div className="space-y-4">
        {briefContent && (
          <div>{briefContent}</div>
        )}
        
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200"
        >
          <span className="font-semibold text-gray-900">{title}</span>
          {isExpanded ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
        </button>
        
        {isExpanded && (
          <div className="space-y-6 pl-4 border-l-2 border-gray-200">
            {children}
          </div>
        )}
      </div>
    );
  };

  // Gestion du scroll pour le bouton "retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'introduction', label: 'Introduction', icon: BookOpen },
    { id: 'context', label: 'Contexte', icon: Globe },
    { id: 'chronology', label: 'Chronologie', icon: Clock },
    { id: 'figures', label: 'Figures clés', icon: User },
    { id: 'technical', label: 'Le système', icon: Scroll },
    { id: 'mission', label: 'Mission', icon: Award }
  ];

  const historicalPeriods = [
    {
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
      ]
    },
    {
      id: 'conception',
      period: '1995-2007',
      title: 'Achèvement et Transmission du Gbekoun',
      shortTitle: 'La révélation finale',
      description: 'En 1995, après 19 années de recherche, ADIGBE Togbédji fait une annonce historique : "ça y est, ce que tout le monde attend de mes œuvres est là : le Script des peuples pour l\'autonomie de chaque nation est conçu. Il a 33 lettres dont 24 consonnes et 9 voyelles." Le système Gbekoun est né, conçu comme un script à la fois syllabique et phonétique, doté de chiffres décimaux, de ponctuation et de diacritiques.',
      detailedStory: 'Pendant 13 années consécutives, ADIGBE Togbédji enseigne le script Gbekoun et utilise ce système pour écrire de nombreux livres aux titres variés. Il établit deux groupes d\'instruction : l\'un à Dangbo dans son village natal de Mondoto, l\'autre à Cotonou. Le système est présenté comme capable de transcrire fidèlement toutes les langues nationales du Bénin et, par extension, toutes les langues maternelles africaines. L\'objectif déclaré est de permettre l\'éducation en langues maternelles pour reconquérir la souveraineté des nations africaines.',
      context: 'Cette période marque la matérialisation concrète de la vision. Le Gbekoun est présenté non pas comme un simple écriture , mais comme un "Script pour l\'autonomie de chaque nation du monde sans le moindre appui". Il s\'inscrit dans une philosophie authentique qui inverse la hiérarchie linguistique : les langues maternelles deviennent les "propriétaires" et les langues européennes les simples "locataires".',
      keyPoint: '13 années d\'enseignement et formation de disciples',
      quote: 'ça y est, ce que tout le monde attend de mes œuvres est là : le Script des peuples pour l\'autonomie de chaque nation est conçu. Il a 33 lettres dont 24 consonnes et 9 voyelles.',
      author: 'ADIGBE Togbédji (1995)',
      keyEvents: [
        "1995 : Annonce officielle de l'achèvement du Script Gbekoun",
        "Création de 33 lettres (24 consonnes, 9 voyelles) syllabiques et phonétiques",
        "Établissement de deux centres d'enseignement (Dangbo/Mondoto et Cotonou)",
        "Rédaction de nombreux ouvrages en script Gbekoun",
        "Formation de la première génération de disciples",
        "25 janvier 2007 : Décès d'ADIGBE Togbédji (Noudhetongbë 13e Nouyon-eîn, 1er siècle, 16e année de l'ère Gbekoun)"
      ]
    },
    {
      id: 'succession',
      period: '2007-2019',
      title: 'Renaissance Mystique et Expansion Académique',
      shortTitle: 'Le successeur providentiel',
      description: 'Après le décès d\'ADIGBE Togbédji le 25 janvier 2007, les disciples maintiennent les deux groupes d\'instruction. En 2013, un événement extraordinaire se produit : un "apprenant peu ordinaire" apparaît. Cet homme s\'approche, enlève sa chemise et demande si les gens de Gbekoun peuvent guérir les multiples lésions de son corps. Rapidement, il développe des capacités étonnantes et parvient à décoder des messages codés du concepteur sans l\'avoir jamais côtoyé.',
      detailedStory: 'Cet homme mystérieux adopte le style vestimentaire de Togbédji et un régime alimentaire particulier. Les témoins déclarent : "Nul doute ; de façon spectaculaire, le successeur de Togbédji venait de naître." Il se fait appeler HOUESSE AYIGBEDEKIN Vidéhouénou et développe un système éducatif pluridisciplinaire en un temps record, fondé sur l\'usage du script Gbekoun. Il baptise son système académique "Premier Centre d\'Éveil du Continent Noir". De 2013 à 2016, il établit une école de formation des formateurs, puis en 2016, lance le centre de formation académique qu\'il dirige magistralement pendant 3 ans.',
      context: 'Cette période représente l\'institutionnalisation du Gbekoun. Le script n\'est plus seulement un système d\'écriture, mais devient la base d\'un cursus éducatif complet visant à "corriger les théories occidentales" dans l\'enseignement et à les adapter aux réalités africaines. Le "Premier Centre d\'Éveil du Continent Noir" incarne la vision d\'une éducation décolonisée.',
      keyPoint: 'Transformation en système éducatif pluridisciplinaire complet',
      quote: 'De façon spectaculaire, le successeur de Togbédji venait de naître.',
      author: 'Témoins oculaires du mouvement Gbekoun',
      keyEvents: [
        "2007 : Maintien des enseignements par les disciples orphelins",
        "2013 : Apparition mystérieuse de HOUESSE AYIGBEDEKIN Vidéhouénou",
        "2013-2016 : École de formation des formateurs",
        "2016 : Lancement du Premier Centre d'Éveil du Continent Noir",
        "2016-2019 : Direction du système éducatif pluridisciplinaire",
        "9 mars 2019 : Décès de HOUESSE AYIGBEDEKIN Vidéhouénou (Mydéësyï 19e Gbetchëzon, 1er siècle, 35e année de l'ère Gbekoun)"
      ]
    },
    {
      id: 'legacy',
      period: '2019-Présent',
      title: 'Héritage et Mission Contemporaine',
      shortTitle: 'Les témoins gardiens',
      description: 'Le 9 mars 2019, HOUESSE AYIGBEDEKIN Vidéhouénou s\'en va à son tour, laissant une fois de plus les disciples "orphelins de maître". Cependant, le groupe de "témoins oculaires" des événements liés au script continue la mission avec une conviction inébranlable. Ils déclarent : "Le monde a changé d\'ombre ; et le monde nouveau en cours, celui de développement et de l\'éveil du Continent Noir a établi son soleil levant au Bénin pour s\'étendre sur le reste du continent et sur le monde entier."',
      detailedStory: 'Dirigé par COOVI Azotêgnon, Premier Président du Conseil Académique et Pédagogique du système éducatif en langue nationale, le groupe maintient fermement la mission malgré "la tergiversation des gouvernants qui s\'abstiennent d\'accompagner l\'œuvre avec une volonté politique". Ils sont convaincus qu\'aussi longtemps qu\'un peuple n\'aura pas découvert le script d\'incarnation de ses langues identitaires, un développement civilisationnel rationnel, tangible et évolutif lui sera difficile. Leur message aux dirigeants africains est clair : cesser de faire des langues nationales de simples matières d\'alphabétisation et créer de véritables écoles d\'enseignement en langues maternelles.',
      context: 'Cette période s\'inscrit dans l\'urgence d\'une reconnaissance officielle. Les gardiens contemporains estiment que l\'Afrique doit se préparer car "l\'Occident finira par se départir un jour de l\'Afrique". Ils prônent une inversion complète du système éducatif : les langues maternelles comme langues d\'enseignement principales, les langues européennes reléguées au rang de simples matières optionnelles.',
      keyPoint: 'Préservation de l\'héritage et quête de reconnaissance officielle',
      quote: 'Le monde a changé d\'ombre ; et le monde nouveau en cours, celui de développement et de l\'éveil du Continent Noir a établi son soleil levant au Bénin pour s\'étendre sur le reste du continent et sur le monde entier.',
      author: 'Groupe des témoins oculaires (post-2019)',
      keyEvents: [
        "2019 : Prise de relais par les témoins oculaires dirigés par COOVI Azotêgnon",
        "Formation du Conseil Académique et Pédagogique",
        "Continuation de la sensibilisation malgré le manque de soutien officiel",
        "Documentation de l'héritage historique",
        "Plaidoyer pour l'adoption officielle du système",
        "Mission d'éveil continental depuis le Bénin"
      ]
    }
  ];

  const keyFigures = [
    {
      name: 'ADIGBE Togbédji',
      role: 'Concepteur et Fondateur Mystique',
      period: '1976-2007',
      birthPlace: 'Village de Mondotokpa, Dangbo',
      summary: 'Visionnaire choisi par le "consortium des langues africaines" pour créer le script d\'incarnation des langues maternelles.',
      detailedBio: 'Originaire du petit village de Mondotokpa à Dangbo, ADIGBE Togbédji devient une figure prophétique de l\'histoire du Bénin. En 1976, il adresse un message d\'avertissement aux gouvernants sur une crise financière imminente, prophétie qui lui vaut 7 années d\'incarcération sans procès. La crise annoncée frappe effectivement le pays en 1983. Libéré la même année, il consacre 12 années à une quête spirituelle et scientifique exceptionnelle.',
      researchMethod: 'Pour découvrir le script d\'incarnation, il s\'impose des conditions de vie extrêmes : jeûnes prolongés de plusieurs semaines, alimentation primitive (boule d\'akassa et huile rouge sans assaisonnement), déplacements exclusivement à pied. Ces pratiques ascétiques visent à atteindre un état de conscience transcendante nécessaire à sa mission.',
      philosophy: 'Sa vision authentique repose sur la théorie du "couple originel ancestral" : Terre + Langues maternelles. Selon lui, l\'adoption de langues étrangères a rompu cette alliance sacrée, privant l\'Afrique de l\'accès à ses ressources. Le Gbekoun doit restaurer cette connexion mystique.',
      achievement: 'Système de 33 lettres (24 consonnes, 9 voyelles) syllabique et phonétique',
      legacy: 'Fondation théorique et mystique de l\'autonomie linguistique africaine',
      famousQuote: '"Mes frères, notre époque est historique à nulle autre pareille... Quand la nature parlera à partir de ce petit pays le monde entier entendra." (1989)',
      image: ''
    },
    {
      name: 'HOUESSE AYIGBEDEKIN Vidéhouénou',
      role: 'Successeur Mystique et Développeur Académique',
      period: '2013-2019',
      birthPlace: 'République du Bénin',
      summary: 'Figure mystérieuse apparue en 2013, transformateur du Gbekoun en système éducatif complet.',
      detailedBio: 'Son apparition en 2013 est décrite comme mystérieuse. Lors de sa première rencontre avec le groupe Gbekoun, cet homme enlève sa chemise pour montrer les multiples lésions de son corps, demandant s\'il peut être guéri. Rapidement, il développe des capacités extraordinaires, décodant des messages codés d\'ADIGBE Togbédji sans l\'avoir jamais rencontré.',
      researchMethod: 'Il adopte intégralement le style de vie de Togbédji : même style vestimentaire, régime alimentaire particulier, et approche ascétique. Cette mimesis parfaite convainc les témoins qu\'il est le successeur désigné par des forces transcendantes.',
      philosophy: 'Il développe la dimension pédagogique du Gbekoun, créant un "système éducatif pluridisciplinaire" visant à "corriger les théories occidentales" inadaptées aux réalités africaines. Son approche vise une décolonisation complète de l\'éducation.',
      achievement: 'Fondation du "Premier Centre d\'Éveil du Continent Noir" et formation de formateurs',
      legacy: 'Infrastructure académique et institutionnalisation de l\'enseignement en Gbekoun',
      famousQuote: 'Les témoins déclarent : "De façon spectaculaire, le successeur de Togbédji venait de naître."',
      image: ''
    },
    {
      name: 'COOVI Azotêgnon',
      role: 'Gardien Contemporain et Président du Conseil Académique',
      period: '2019-Présent',
      birthPlace: 'République du Bénin',
      summary: 'Premier Président du Conseil Académique et Pédagogique, gardien de l\'héritage et militant pour la reconnaissance officielle.',
      detailedBio: 'Témoin oculaire des événements liés au script Gbekoun, COOVI Azotêgnon prend la direction du mouvement après la disparition de HOUESSE AYIGBEDEKIN en 2019. Il incarne la continuité institutionnelle et la préservation de l\'héritage dans un contexte difficile.',
      researchMethod: 'Son approche est documentaire et militante. Il compile les témoignages, organise les enseignements et structure la promotion du système malgré "l\'absence de volonté politique" des gouvernants béninois.',
      philosophy: 'Il prône une révolution éducative complète : "Il ne s\'agit pas de faire de vos langues une matière [...] mais de créer une école propre à votre langue maternelle officielle." Les langues européennes doivent devenir de simples matières optionnelles.',
      achievement: 'Organisation du Conseil Académique et documentation de l\'histoire complète',
      legacy: 'Préservation documentaire et continuité de la mission d\'éveil continental',
      famousQuote: '"Le monde a changé d\'ombre ; et le monde nouveau en cours, celui de développement et de l\'éveil du Continent Noir a établi son soleil levant au Bénin pour s\'étendre sur le reste du continent et sur le monde entier."',
      image: ''
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      
        
  

      {/* Bouton retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Hero Section */}
<section
  id="introduction"
  className="relative bg-gradient-to-br from-sky-300 via-blue-500 to-sky-200 text-white min-h-screen flex items-center"
>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('authenticHistoryTitle')} <span className="text-yellow-400"></span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {t('epicSubtitle')}
            </p>
            
            {/* Infos rapides */}
            <div className="inline-flex flex-wrap gap-6 bg-black/20 backdrop-blur-sm rounded-2xl px-8 py-4 mb-12">
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={18} className="text-yellow-400" />
                <span>1976 - {t('present')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={18} className="text-yellow-400" />
                <span>Dangbo, Bénin</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Scroll size={18} className="text-yellow-400" />
                <span>33 {t('letters')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users size={18} className="text-yellow-400" />
                <span>3 {t('generations')}</span>
              </div>
            </div>

            {/* Citation d'introduction */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <Quote size={32} className="text-yellow-400 mx-auto mb-4" />
              <blockquote className="text-lg italic mb-3">
                "{t('scriptDefinition')}"
              </blockquote>
              <cite className="text-sm text-blue-200">— {t('officialDefinition')}</cite>
            </div>

            {/* Bouton d'action */}
            <button
              onClick={() => scrollToSection('context')}
              className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
            >
              {t('discoverEpic')}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">

        {/* Section Contexte */}
        <section id="context" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contextTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contextSubtitle')}
            </p>
          </div>

          {/* Diagnostic de l'Afrique - Version pliable */}
        
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8">
                <Quote size={32} className="text-red-600 mb-4" />
                <blockquote className="text-lg text-gray-800 mb-4 leading-relaxed">
                  "Dépourvue de toutes capacités inventives et productrices, l'Afrique aujourd'hui ne peut même pas authentiquement vêtir son peuple ; et ce peuple est complètement nu..."
                </blockquote>
                
              </div>
            
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Perte des Découvertes Ancestrales</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Où est passé le "feu" découvert par nos ancêtres ?</li>
                    <li>• Où est passé le "fer" découvert par nos ancêtres ?</li>
                    <li>• Où sont les "machines artisanales ancestrales" ?</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Rupture du Lien Sacré</h4>
                  <p className="text-sm text-gray-600">L'adoption des langues étrangères a brisé l'alliance entre la Terre et ses langues maternelles, provoquant la fermeture de l'accès aux ressources.</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Conséquence Actuelle</h4>
                  <p className="text-sm text-gray-600">"L'Afrique, sous le joug des langues étrangères, a eu son destin primitif à capacité inventive rayé et devra tout reprendre à zéro."</p>
                </div>
              </div>
            </div>
  

          {/* Théorie du couple originel */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 p-8 mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">La Théorie du "Couple Originel Ancestral"</h3>
            
            
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-4 bg-white rounded-xl p-4">
                    <span className="text-2xl">🌍</span>
                    <span className="text-xl font-bold">+</span>
                    <span className="text-2xl">🗣️</span>
                    <span className="text-xl font-bold">=</span>
                    <span className="text-sm font-semibold text-gray-700">Alliance Sacrée</span>
                  </div>
                </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">🌍 Terre + 🗣️ Langues Maternelles</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Le couple originel ancestral (Terre, Langues maternelles) ; un noyau dur et seul géniteur de la capacité inventive de son peuple et donc alors constructeur de son développement, est un noyau sacré."
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Mécanisme de Fonctionnement</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Pour bénéficier des ressources de sa terre identitaire : partant de l'extraction à la transformation et à la mise en usage, il faut lui faire entendre le langage de son premier et vrai partenaire authentique."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Mécanisme de "Profanation"</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "En cas d'adoption d'une langue étrangère par le peuple, le couple originel se sent profané et tout comme le comportement de la tortue face au danger ; se referme dans sa carapace et bloque toutes les voies d'accès à ses ressources."
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">La Solution Gbekoun</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Les langues maternelles parlées au sein d'un peuple sont les seuls porte-paroles de ce peuple auprès de sa terre identitaire."
                    </p>
                  </div>
                </div>
              </div>
        
          </div>

          {/* Les 6 facteurs de régression */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Les  Facteurs historiques qui ont conduit à la perte de l'autonomie africaine.
            </h3>
            
            
         
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Divinisation du naturel",
                    description: "Facteur d'ombrage et d'obstruction à la conscience d'éveil de l'homme et à son génie de recherches approfondies et d'invention",
                    icon: "1"
                  },
                  {
                    title: "Régimes de royauté",
                    description: "Système totalitaire sanglant qui aura coûté la vie à des génies africains, capables de théories éducationnelles",
                    icon: "2"
                  },
                  {
                    title: "Esclavage et traite négrière",
                    description: "Facteur qui a décimé de grandes valeurs africaines et formé le commerce triangulaire",
                    icon: "3"
                  },
                  {
                    title: "Impérialisme et colonisation",
                    description: "Outil qui a permis au colonisateur de se sentir seul Maître de la terre et de parler au nom des pays les moins avancés",
                    icon: "4"
                  },
                  {
                    title: "Adoption de langues étrangères",
                    description: "Facteur principal : langues européennes imposées comme seules langues officielles de travail",
                    icon: "5"
                  },
                  {
                    title: "Trahison des dirigeants",
                    description: "Sacrifice de la souveraineté et des intérêts nationaux au profit de l'occident.",
                    icon: "6"
                  }
                ].map((factor, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {factor.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{factor.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{factor.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           
          </div>
        </section>

        {/* Section Chronologie Complète */}
        <section id="chronology" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chronologie Complète de l'Épopée
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              49 années d'histoire extraordinaire, de la révélation mystique de 1976 
              à la mission contemporaine des témoins gardiens.
            </p>
          </div>

          {/* Timeline détaillée */}
          <div className="relative">
            {/* Ligne de temps verticale */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-16">
              {historicalPeriods.map((period, index) => (
                <div key={period.id} className="relative">
                  
                  {/* Point sur la timeline */}
                  <div className="absolute left-0 flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Contenu principal */}
                  <div className="ml-24 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                    
                    {/* Header de la période */}
                    <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 border-b border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {period.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Clock size={16} />
                              {period.period}
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                              {period.keyPoint}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenu de base toujours visible */}
                    <div className="p-6 space-y-6">
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          {period.description}
                        </p>
                      </div>

                      {/* Citation historique */}
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <Quote size={24} className="text-blue-600 mb-3" />
                        <blockquote className="text-lg italic text-gray-800 mb-4 leading-relaxed">
                          "{period.quote}"
                        </blockquote>
                        <cite className="text-sm font-semibold text-blue-600">
                          — {period.author}
                        </cite>
                      </div>

                      {/* Section pliable pour les détails */}
                      <CollapsibleSection
                        sectionKey={`period-${period.id}`}
                        title="Voir les détails complets de cette période"
                      >
                        {/* Histoire détaillée */}
                        {period.detailedStory && (
                          <div className="bg-gray-50 rounded-xl p-6 mb-6">
                            <h4 className="font-bold text-gray-900 mb-3">Récit détaillé</h4>
                            <p className="text-gray-700 leading-relaxed">
                              {period.detailedStory}
                            </p>
                          </div>
                        )}

                        {/* Contexte historique */}
                        {period.context && (
                          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400 mb-6">
                            <h4 className="font-bold text-gray-900 mb-3">Contexte et signification</h4>
                            <p className="text-gray-700 leading-relaxed">
                              {period.context}
                            </p>
                          </div>
                        )}

                        {/* Événements clés */}
                        {period.keyEvents && (
                          <div className="space-y-3">
                            <h4 className="font-bold text-gray-900">Événements marquants de cette période</h4>
                            <div className="grid grid-cols-1 gap-3">
                              {period.keyEvents.map((event, eventIndex) => (
                                <div key={eventIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm">{event}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CollapsibleSection>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Synthèse chronologique */}
          <div className="mt-16 bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Synthèse de l'Épopée Gbekoun
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">49</div>
                <div className="font-semibold text-gray-800">Années d'épopée</div>
                <div className="text-sm text-gray-600">1976 - 2025</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">3</div>
                <div className="font-semibold text-gray-800">Générations</div>
                <div className="text-sm text-gray-600">Gardiens successifs</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-yellow-600">33</div>
                <div className="font-semibold text-gray-800">Lettres</div>
                <div className="text-sm text-gray-600">Système complet</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">1</div>
                <div className="font-semibold text-gray-800">Mission</div>
                <div className="text-sm text-gray-600">Autonomie africaine</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Figures Complètes */}
        <section id="figures" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les Figures Emblématiques : Trois Générations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez en détail les parcours extraordinaires des gardiens successifs 
              du Script Gbekoun, de la révélation mystique à la préservation contemporaine.
            </p>
          </div>

          <div className="space-y-16">
            {keyFigures.map((figure, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                
                {/* Header avec photo et infos de base */}
                <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    
                    {/* Photo de profil */}
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img 
                        src={figure.image} 
             
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Informations de base */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {figure.name}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-3">
                        {figure.role}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {figure.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {figure.birthPlace}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {figure.summary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Citation célèbre toujours visible */}
                <div className="p-6">
                  <div className="bg-white border border-blue-200 rounded-xl p-6 mb-6">
                    <Quote size={24} className="text-blue-600 mb-3" />
                    <blockquote className="text-base italic text-gray-800 mb-3 leading-relaxed">
                      {figure.famousQuote}
                    </blockquote>
                  </div>

                  {/* Détails pliables */}
                 
                    <div className="space-y-6">
                      {/* Biographie détaillée */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Parcours biographique</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {figure.detailedBio}
                        </p>
                      </div>

                      {/* Méthode de recherche */}
                      <div className="bg-yellow-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Méthode et approche</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {figure.researchMethod}
                        </p>
                      </div>

                      {/* Philosophie */}
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Vision philosophique</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {figure.philosophy}
                        </p>
                      </div>

                      {/* Réalisations et héritage */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-lg p-4">
                          <h5 className="font-bold text-gray-900 mb-2">Réalisation majeure</h5>
                          <p className="text-sm text-gray-700">{figure.achievement}</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h5 className="font-bold text-gray-900 mb-2">Héritage</h5>
                          <p className="text-sm text-gray-700">{figure.legacy}</p>
                        </div>
                      </div>
                    </div>
              
                </div>
              </div>
            ))}
          </div>

          {/* Synthèse des générations */}
          <div className="mt-16 bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Trois Générations, Une Mission Continue
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">1</div>
                <h4 className="font-bold text-gray-800">Révélation (1976-2007)</h4>
                <p className="text-sm text-gray-600">Conception mystique du script par ADIGBE Togbédji après 19 années de quête spirituelle</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">2</div>
                <h4 className="font-bold text-gray-800">Développement (2013-2019)</h4>
                <p className="text-sm text-gray-600">Institutionnalisation académique par HOUESSE AYIGBEDEKIN Vidéhouénou</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">3</div>
                <h4 className="font-bold text-gray-800">Préservation (2019-Présent)</h4>
                <p className="text-sm text-gray-600">Documentation et promotion par COOVI Azotêgnon et les témoins</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Technique Complète */}
    <section id="technical" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Le Système Gbekoun : Spécifications Complètes
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Plus qu'un simple script , le Gbekoun est un système authentique 
          conçu pour l'autonomie éducative et civilisationnelle de l'Afrique.
        </p>
      </div>

      {/* Spécifications techniques de base */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* Structure du système */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Structure Technique</h3>
          
          {/* Composition de base toujours visible */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-sm font-semibold text-gray-700">Consonnes</div>
              <div className="text-xs text-gray-500 mt-1">Adaptées aux phonèmes africains</div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">9</div>
              <div className="text-sm font-semibold text-gray-700">Voyelles</div>
              <div className="text-xs text-gray-500 mt-1">Couvrant les tons africains</div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 text-center mb-6">
            <div className="text-4xl font-bold text-green-600 mb-2">33</div>
            <div className="text-lg font-semibold text-gray-700">Lettres au total</div>
            <div className="text-sm text-gray-600 mt-2">Système à la fois syllabique et phonétique</div>
          </div>

          {/* Caractéristiques détaillées pliables */}
  

            <div className="space-y-3">
              <h4 className="font-bold text-gray-900">Caractéristiques avancées</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-gray-800">Chiffres décimaux intégrés</span>
                    <div className="text-xs text-gray-600">Système numérique complet</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-gray-800">Ponctuation complète</span>
                    <div className="text-xs text-gray-600">Signes de ponctuation adaptés</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-gray-800">Diacritiques tonales</span>
                    <div className="text-xs text-gray-600">Précision phonétique maximale</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-gray-800">Universalité africaine</span>
                    <div className="text-xs text-gray-600">Adaptable à toutes les langues du continent</div>
                  </div>
                </div>
              </div>
            </div>
         
        </div>

        {/* Capacités et applications */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Capacités et Applications</h3>
          
          {/* Mission fondamentale toujours visible */}
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600 mb-6">
            <h4 className="font-bold text-gray-900 mb-2">Mission fondamentale</h4>
            <blockquote className="text-sm text-gray-700 italic">
              "Script pour l'autonomie de chaque nation du monde sans le moindre appui"
            </blockquote>
          </div>

          {/* Applications détaillées pliables */}
         
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Applications linguistiques</h4>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3">
                  <span className="font-semibold text-gray-800 text-sm">Transcription phonétique fidèle</span>
                  <p className="text-xs text-gray-600 mt-1">Respect de la richesse sonore des langues africaines</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-semibold text-gray-800 text-sm">Enseignement pluridisciplinaire</span>
                  <p className="text-xs text-gray-600 mt-1">Support pour tous les domaines académiques</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-semibold text-gray-800 text-sm">Recherches approfondies</span>
                  <p className="text-xs text-gray-600 mt-1">Outil pour l'innovation et la découverte</p>
                </div>
              </div>
            </div>
 
        </div>
      </div>

      {/* Diagnostic comparatif */}
     
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Questions fondamentales sur l'état actuel des nations africaines face à leur autonomie linguistique
            </p>
            <div className="inline-flex items-center gap-4 bg-red-50 rounded-xl p-4 border border-red-200">
              <span className="text-red-600 font-semibold">Analyse critique :</span>
              <span className="text-gray-700">Constitution, langue officielle, hymne national...</span>
            </div>
          </div>
     
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Diagnostic : Questions Cruciales pour les Nations Africaines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Questions pour le Bénin */}
            <div className="bg-red-50 rounded-2xl border border-red-200 p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Questions pour le Bénin</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium mb-2">Constitution et langue officielle</p>
                  <p className="text-xs text-gray-600">"Sommes-nous certains d'être un jour en voie de développement, lorsqu'on constitutionnalise une langue étrangère comme langue officielle de travail ?"</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium mb-2">Nom de la nation</p>
                  <p className="text-xs text-gray-600">"Sommes-nous certains d'être un jour en voie de développement, lorsque le nom de la nation est sous le joug d'une langue qui n'est issue d'aucune de nos langues maternelles ?"</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium mb-2">Hymne national</p>
                  <p className="text-xs text-gray-600">"Comment pourrions-nous nous vanter d'une voie de développement lorsque l'hymne national est chanté dans une langue étrangère ?"</p>
                </div>
              </div>
            </div>

            {/* Questions continentales */}
            <div className="bg-orange-50 rounded-2xl border border-orange-200 p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Questions Continentales</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium mb-2">Dénominations continentales</p>
                  <p className="text-xs text-gray-600">"Comment comprendre que tout un continent accepte de porter le nom d'une seule nation : 'Afrique francophone' ou 'Afrique anglophone' ?"</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium mb-2">Dépendance linguistique</p>
                  <p className="text-xs text-gray-600">"Un continent incapable de se faire entendre à travers ses propres langues et qui pour pouvoir se faire connaître, a dû emprunter des langues étrangères."</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium mb-2">Impact psychologique</p>
                  <p className="text-xs text-gray-600">"Nous ne pouvons pas savoir combien ces surnoms obscurcissent l'évolution de la conscience et la réduisent à la servitude !"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      {/* Vérité fondamentale */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Vérité Fondamentale sur les Langues
        </h3>
        <div className="text-center space-y-4">
          <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto">
            <Quote size={32} className="text-green-600 mb-4" />
            <blockquote className="text-lg font-semibold text-gray-800 mb-4">
              "Retenons, qu'il n'y a, et qu'il n'y aura jamais de langues prédominantes. 
              Toutes les langues maternelles africaines, sont capables de véhiculer le savoir, 
              même celles des communautés africaines les plus ignorées au même titre que celles des pays dits développés."
            </blockquote>
            <cite className="text-green-600 font-semibold">
              — Principe fondamental du mouvement Gbekoun
            </cite>
          </div>
        </div>
      </div>
    </section>

    {/* Section Mission Complète */}
    <section id="mission" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mission et Révolution Éducative
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          La vision complète du mouvement Gbekoun pour transformer l'éducation africaine 
          et reconquérir l'autonomie civilisationnelle du continent.
        </p>
      </div>

      {/* Échec des indépendances - version pliable */}
     
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Le Piège du Vide Linguistique</h4>
            <p className="text-gray-700 leading-relaxed">
              "Au lendemain des indépendances, les peuples indépendants, tels des esclaves affranchis, 
              se sont rendu compte qu'ils n'avaient ni un système d'éducation propre, 
              ni une langue de travail peaufinée pour éduquer..."
            </p>
          </div>
       
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">L'Échec des Indépendances : Analyse Historique</h3>
          
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Le Piège du Vide Linguistique</h4>
            <blockquote className="text-gray-700 leading-relaxed mb-4">
              "Au lendemain des indépendances, les peuples indépendants, tels des esclaves affranchis, se sont rendu compte, 
              qu'ils n'avaient ni, un système d'éducation propre, ni une langue de travail peaufinée pour éduquer. 
              Face au constat de ce vide linguistique, ils n'avaient d'autres choix que de confier encore 
              l'éducation de leurs enfants au Maître affranchisseur."
            </blockquote>
            <p className="text-sm text-gray-600 italic">
              Conséquence : "Le Maître change de stratégie et devient alors à tous les niveaux le représentant permanent 
              des esclaves affranchis qui n'ont pas pu s'assumer."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h5 className="font-bold text-gray-900 mb-3">Années 1960</h5>
              <p className="text-sm text-gray-600">Indépendances politiques sans indépendance éducative</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h5 className="font-bold text-gray-900 mb-3">Constat</h5>
              <p className="text-sm text-gray-600">Absence de systèmes éducatifs nationaux authentiques</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h5 className="font-bold text-gray-900 mb-3">Résultat</h5>
              <p className="text-sm text-gray-600">Reconduction forcée de la dépendance éducative</p>
            </div>
          </div>
        </div>
     

      {/* Vision prophétique */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Vision Prophétique : Préparer l'Avenir</h3>
        <div className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl p-8 md:p-12 text-white">
          <Quote size={48} className="mx-auto mb-6 opacity-80" />
          <blockquote className="text-xl font-bold mb-6 leading-relaxed text-center">
            "Qu'on le veuille ou non, l'Occident finira par se départir un jour de l'Afrique et la laisser à son sort. 
            Alors pour ne plus tomber dans un vide linguistique comme le cas, au lendemain des indépendances où s'étant retrouvés sans langue de travail, 
            les esclaves affranchis que sont les Etats africains nouvellement indépendants, n'avaient autre choix que celui de s'accrocher encore à la langue de leur maître, 
            qui était pourtant décrié par le passé."
          </blockquote>
          <cite className="text-lg opacity-90 block text-center">
            — Avertissement prophétique du mouvement Gbekoun
          </cite>
        </div>
      </div>

      {/* Instructions aux dirigeants - version pliable */}
     
          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Questions Directes aux Autorités</h4>
            <p className="text-gray-700 mb-4">
              Questions cruciales posées aux dirigeants africains sur leurs choix linguistiques et éducatifs
            </p>
            <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2">
              <span className="text-yellow-600 font-semibold">Solution :</span>
              <span className="text-gray-700">Inversion du système éducatif</span>
            </div>
          </div>
    
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Conseils aux Dirigeants Africains</h3>
          
          <div className="space-y-8">
            
            {/* Questions directes */}
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Questions Directes aux Autorités</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Feindre de travailler ?</p>
                    <p className="text-sm text-gray-600">"Devons-nous toujours continuer de feindre de travailler quand on sait désormais comment ce travail doit se faire ?"</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Simulacre et hypocrisie ?</p>
                    <p className="text-sm text-gray-600">"Devons-nous toujours continuer de jouer au simulacre et à l'hypocrisie avec nos langues nationales en les utilisant comme des langues d'alphabétisation ?"</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Importer des systèmes ?</p>
                    <p className="text-sm text-gray-600">"Devons-nous toujours, chercher à importer des systèmes d'éducation ?"</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Culture étrangère ?</p>
                    <p className="text-sm text-gray-600">"Devons-nous toujours, cantonner l'éducation de nos nations à une culture étrangère ?"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution authentique */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">La Solution authentique</h4>
              <div className="bg-white rounded-xl p-6 mb-6">
                <Quote size={24} className="text-green-600 mb-3" />
                <blockquote className="text-lg text-gray-800 leading-relaxed mb-4">
                  "Il ne s'agira de faire de vos langues une matière aux côtés des disciplines étrangères, 
                  il s'agit plutôt, de créer une école d'enseignement propre à votre langue maternelle officielle, 
                  et faire de la langue étrangère une matière aux côtés de vos disciplines académiques en cas de besoin, 
                  car, les propriétaires que sont nos langues maternelles, ne doivent, pas demander asile 
                  à leurs locataires que sont les langues importées."
                </blockquote>
                <cite className="text-green-600 font-semibold">
                  — Instruction fondamentale du mouvement Gbekoun
                </cite>
              </div>

              {/* Schéma de l'inversion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Système actuel (à rejeter) */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h5 className="font-bold text-red-800 mb-4 text-center">❌ SYSTÈME ACTUEL (À REVOIR)</h5>
                  <div className="space-y-3">
                    <div className="bg-red-600 text-white p-3 rounded text-center font-semibold">
                      LANGUES EUROPÉENNES
                    </div>
                    <div className="text-center text-sm text-red-700">↑ Dominantes</div>
                    <div className="border-t-2 border-red-300 my-2"></div>
                    <div className="text-center text-sm text-red-700">↓ Subalternes</div>
                    <div className="bg-red-200 text-red-800 p-3 rounded text-center">
                      Langues maternelles
                    </div>
                  </div>
                  <p className="text-xs text-red-600 text-center mt-3 italic">
                    "Les propriétaires demandent asile aux locataires"
                  </p>
                </div>

                {/* Système authentique (à adopter) */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h5 className="font-bold text-green-800 mb-4 text-center">✅ SYSTÈME AUTHENTIQUE</h5>
                  <div className="space-y-3">
                    <div className="bg-green-600 text-white p-3 rounded text-center font-semibold">
                      LANGUES MATERNELLES
                    </div>
                    <div className="text-center text-sm text-green-700">↑ Propriétaires</div>
                    <div className="border-t-2 border-green-300 my-2"></div>
                    <div className="text-center text-sm text-green-700">↓ Locataires</div>
                    <div className="bg-green-200 text-green-800 p-3 rounded text-center">
                      Langues européennes
                    </div>
                  </div>
                  <p className="text-xs text-green-600 text-center mt-3 italic">
                    "Chaque chose à sa juste place"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      {/* Témoignage final */}
      <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Témoignage Final : "Nous Devons en Être Fiers"
        </h3>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <blockquote className="text-lg text-gray-700 leading-relaxed italic">
            "Ce qu'il nous faut retenir, est que, le monde a changé d'ombre ; et le monde nouveau en cours, 
            celui de développement et de l'éveil du Continent Noir a établi son soleil levant au Bénin pour s'étendre 
            sur le reste du continent et sur le monde entier. Nous devons en être fiers."
          </blockquote>
          
         
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "C'est pour avoir compris le sens d'une telle fierté que le groupe de promotion du Script Gbekoun 
                composé de témoins oculaires des événements liés audit Script, s'y accroche malgré la tergiversation 
                de nos gouvernants qui s'abstiennent toujours d'accompagner l'œuvre avec une volonté politique."
              </p>
              <cite className="text-blue-600 font-semibold">
                — COOVI Azotêgnon, Premier Président du Conseil Académique et Pédagogique
              </cite>
            </div>
       
        </div>
      </div>

      {/* Appel final */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          L'Urgence d'Agir
        </h3>
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 mb-8">
          <Quote size={32} className="text-orange-600 mb-4" />
          <blockquote className="text-lg font-medium text-gray-800 mb-4">
            "Ne nous y trompons pas ; aussi longtemps qu'un peuple n'aura pas découvert le Script d'incarnation de ses langues identitaires, 
            un développement civilisationnel rationnel, tangible et évolutif lui sera difficile."
          </blockquote>
          <cite className="text-orange-600 font-semibold">
            — Avertissement du mouvement Gbekoun
          </cite>
        </div>
        
        <div className="space-y-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors mx-2">
            Soutenir la Mission Gbekoun
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors mx-2">
            Documentation Complète
          </button>
        </div>
      </div>
    </section>

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
export default History;