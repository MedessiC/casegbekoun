import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Volume2, Download, Play, FileDown, Search, X, Info, BookOpen, Copy, Check } from 'lucide-react';
import '../styles/gbekoun-font.css';
import gbekounFontPath from '../assets/fonts/gbekoun.ttf';
import jsPDF from 'jspdf';

const Alphabet: React.FC = () => {
  const { t } = useTranslation();
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [fontLoaded, setFontLoaded] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'vowels' | 'consonants'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  // Alphabet Gbekoun complet - 33 lettres (9 voyelles + 24 consonnes)
  const gbekounAlphabet = [
    // VOYELLES (9)
    {
      letter: 'a',
      name: 'AS',
      pronunciation: '/a/',
      examples: ['àkɔ́n (chien)', 'àla (route)'],
      description: 'A à tonnation aigu',
      type: 'vowel'
    },
    {
      letter: 'e',
      name: 'AMAN',
      pronunciation: '/e/',
      examples: ['éwé (feuille)', 'kélé (voir)'],
      description: 'A à tonnation calme',
      type: 'vowel'
    },
    {
      letter: 'i',
      name: 'IVI',
      pronunciation: '/i/',
      examples: ['ɛ̀nɛ̀ (oui)', 'kɛ́kɛ́ (regarder)'],
      description: 'I à tonnation calme',
      type: 'vowel'
    },
    {
      letter: 'I',
      name: 'IYO',
      pronunciation: '/I/',
      examples: ['ìgbé (vie)', 'kìní (quoi)'],
      description: 'I a tonnation aigu',
      type: 'vowel'
    },
    
    
    

    // CONSONNES (24)
    {
      letter: 'b',
      name: 'AGFA',
      pronunciation: '/b/',
      examples: ['óko (mari)', 'odò (rivière)'],
      description: 'Gor',
      type: 'consonant'
    },
    {
      letter: 'c',
      name: 'ZAMAN',
      pronunciation: '/c/',
      examples: ['ɔ̀dɔ̀ (rivière)', 'hɔ̂n (ventre)'],
      description: 'Zor',
      type: 'consonant'
    },
    {
      letter: 'd',
      name: 'SIWE',
      pronunciation: '/d/',
      examples: ['ùkù (mort)', 'gbúru (profond)'],
      description: 'Sor',
      type: 'consonant'
    },
    {
      letter: 'f',
      name: 'NIWE',
      pronunciation: '/f/',
      examples: ['dɛ̃́ (cuire)', 'hɛ̃́ (respirer)'],
      description: 'Non',
      type: 'consonant'
    },
    
    {
      letter: 'h',
      name: 'MOUE',
      pronunciation: '/h/',
      examples: ['kɔ̃́ (construire)', 'sɔ̃́ (dormir)'],
      description: 'Mon',
      type: 'consonant'
    },
    {
      letter: 'j',
      name: 'OUVI',
      pronunciation: '/j/',
      examples: ['bá (venir)', 'gbó (entendre)'],
      description: 'Vor',
      type: 'consonant'
    },
    {
      letter: 'k',
      name: 'WALI',
      pronunciation: '/k/',
      examples: ['cá (dire)', 'àcí (vinaigre)'],
      description: 'Lor',
      type: 'consonant'
    },
    {
      letter: 'l',
      name: 'GBEMAN',
      pronunciation: '/l/',
      examples: ['dá (créer)', 'odò (rivière)'],
      description: 'Gbor',
      type: 'consonant'
    },
    {
      letter: 'm',
      name: 'WAMAN',
      pronunciation: '/m/',
      examples: ['ɖò (sur)', 'àɖú (poison)'],
      description: 'Wor',
      type: 'consonant'
    },
    {
      letter: 'n',
      name: 'IFI',
      pronunciation: '/n/',
      examples: ['fé (vouloir)', 'àfí (là où)'],
      description: 'For',
      type: 'consonant'
    },
    {
      letter: 'p',
      name: 'AKPOMAN',
      pronunciation: '/p/',
      examples: ['gá (comprendre)', 'àgó (camp)'],
      description: 'KPOR',
      type: 'consonant'
    },
    {
      letter: 'q',
      name: 'CHIOU',
      pronunciation: '/q/',
      examples: ['gbá (recevoir)', 'àgbà (aîné)'],
      description: 'Chor',
      type: 'consonant'
    },
    {
      letter: 'r',
      name: 'OUJI',
      pronunciation: '/r/',
      examples: ['hàn (montrer)', 'ohùn (voix)'],
      description: 'Jor',
      type: 'consonant'
    },
    {
      letter: 's',
      name: 'TIWE',
      pronunciation: '/s/',
      examples: ['já (danser)', 'àjá (chien)'],
      description: 'TOR',
      type: 'consonant'
    },
    {
      letter: 't',
      name: 'KIWE',
      pronunciation: '/t/',
      examples: ['ká (lire)', 'àkó (enseignement)'],
      description: 'Kor',
      type: 'consonant'
    },
    {
      letter: 'u',
      name: 'EYEME',
      pronunciation: '/u/',
      examples: ['kpá (tuer)', 'àkpó (crapaud)'],
      description: 'E tonnation aigue',
      type: 'vowel'
    },
    {
      letter: 'v',
      name: 'BETE',
      pronunciation: '/v/',
      examples: ['lọ (aller)', 'àlá (rêve)'],
      description: 'Bor',
      type: 'consonant'
    },
    {
      letter: 'w',
      name: 'EYOMAN',
      pronunciation: '/w/',
      examples: ['má (ne pas)', 'omi (eau)'],
      description: 'Yor',
      type: 'consonant'
    },
    {
      letter: 'x',
      name: 'HÔMAN',
      pronunciation: '/x/',
      examples: ['ná (celui)', 'inú (ventre)'],
      description: 'Hôr',
      type: 'consonant'
    },
    {
      letter: 'y',
      name: 'RALI',
      pronunciation: '/y/',
      examples: ['ɲá (pincer)', 'àɲá (belle-mère)'],
      description: 'Ror',
      type: 'consonant'
    },
    {
      letter: 'z',
      name: 'AHIWE',
      pronunciation: '/z/',
      examples: ['ŋù (boire)', 'àŋɔ̀ (corps)'],
      description: 'RHOR',
      type: 'consonant'
    },
    {
      letter: '&',
      name: 'RWALI',
      pronunciation: '/&/',
      examples: ['ɳà (donner)', 'àɳí (feu)'],
      description: 'Rouwor',
      type: 'consonant'
    },
    {
      letter: 'g',
      name: 'OROUA',
      pronunciation: '/g/',
      examples: ['pá (tuer)', 'àpá (bras)'],
      description: 'Rlor',
      type: 'consonant'
    },
    {
      letter: 'A',
      name: 'OULI',
      pronunciation: '/A/',
      examples: ['rí (voir)', 'àrá (corps)'],
      description: "'OU' rotation",
      type: 'vowel'
    },
    {
      letter: '(',
      name: 'DIOU',
      pronunciation: '/(/',
      examples: ['sá (fuir)', 'àsá (culture)'],
      description: 'D-or',
      type: 'consonant'
    },
    {
      letter: ')',
      name: 'DESSI',
      pronunciation: '/)/',
      examples: ['ʃá (faire)', 'àʃá (hache)'],
      description: "Dor'or",
      type: 'consonant'
    },
    {
      letter: 'E',
      name: 'YOWE',
      pronunciation: '/E/',
      examples: ['tá (vendre)', 'àtá (piment)'],
      description: 'O aigui',
      type: 'vowel'
    },
    {
      letter: 'o',
      name: 'YORSSI',
      pronunciation: '/o/',
      examples: ['ʋò (toi)', 'àʋɔ̀ (peau)'],
      description: 'Or aigui',
      type: 'vowel'
    },
    {
      letter: 'O',
      name: 'AIMAN',
      pronunciation: '/w/',
      examples: ['wá (venir)', 'àwá (nous)'],
      description: 'E',
      type: 'vowel'
    }
  ];

  // Chiffres Gbekoun (10 chiffres)
  const gbekounNumbers = [
    {
      number: '0',
      name: 'YAYA',
      pronunciation: '/Yàyà/',
      meaning: 'zéro',
      examples: ['gbou akwe (zéro livre)', 'gbou daho (rien du tout)'],
      description: 'Le vide, néant'
    },
    {
      number: '1',
      name: 'DE',
      pronunciation: '/Déé/',
      meaning: 'un',
      examples: ['kpon su (une personne)', 'kpon we (un jour)'],
      description: 'Unité, commencement'
    },
    {
      number: '2',
      name: 'WE',
      pronunciation: '/wéé/',
      meaning: 'deux',
      examples: ['we su (deux personnes)', 'we azɔ̃ (deux mains)'],
      description: 'Dualité, paire'
    },
    {
      number: '3',
      name: "ATON",
      pronunciation: "/atɔon'on/",
      meaning: 'trois',
      examples: ['aton kpevi (trois enfants)', 'aton akɔ́n (trois chiens)'],
      description: 'Triangle, trinité'
    },
    {
      number: '4',
      name: 'ENE',
      pronunciation: '/ènin/',
      meaning: 'quatre',
      examples: ['ene gbɛ (quatre calebasses)', 'ene afɔ (quatre pieds)'],
      description: 'Stabilité, carré'
    },
    {
      number: '5',
      name: "ATON-ON",
      pronunciation: '/aton-on/',
      meaning: 'cinq',
      examples: ['atɔn asɔ́n (cinq doigts)', 'atɔn kudo (cinq étoiles)'],
      description: 'Main complète'
    },
    {
      number: '6',
      name: 'AÏZIN',
      pronunciation: '/aïzin/',
      meaning: 'six',
      examples: ['ake asu (six mois)', 'ake kɛ́kɛ́ (six regards)'],
      description: 'Dépassement de la main'
    },
    {
      number: '7',
      name: 'TINWE',
      pronunciation: '/tinwé/',
      meaning: 'sept',
      examples: ['adre we (sept jours)', 'adre gbɛ̀ (sept fois)'],
      description: 'Perfection, cycle complet'
    },
    {
      number: '8',
      name: 'TIN-NIN',
      pronunciation: '/tin-nin/',
      meaning: 'huit',
      examples: ['awli mɛ (huit personnes)', 'awli azɔ̃ (huit bras)'],
      description: 'Deux mains complètes'
    },
    {
      number: '9',
      name: 'TAN-TON',
      pronunciation: '/tan-ton/',
      meaning: 'neuf',
      examples: ['asikpe su (neuf personnes)', 'asikpe kpó (neuf noix)'],
      description: 'Presque complet'
    }
  ];

  // Symboles Gbekoun (6 symboles)
  const gbekounSymbols = [
    {
      symbol: '+',
      name: 'DJEEDJI',
      pronunciation: '/djèédji/',
      meaning: 'addition',
      usage: 'Pour poser une question',
      examples: ['Etɛ wa? (Où vas-tu?)', 'Nugbo kpo? (Combien cela coûte?)']
    },
    {
      symbol: '-',
      name: 'DESIN-MIN',
      pronunciation: '/dééssin-min/',
      meaning: 'soustraction',
      usage: 'Marquer la surprise ou l\'émotion forte',
      examples: ['Ayɔ! (Joie!)', 'Gbɔ̃! (Attention!)']
    },
    {
      symbol: '*',
      name: 'TUTU',
      pronunciation: '/tutu/',
      meaning: 'point final',
      usage: 'Terminer une phrase',
      examples: ['É wá. (Il est venu.)', 'Nudɔ wɛ ɖokpo. (C\'est fini.)']
    },
    {
      symbol: '/',
      name: 'GBIGBI',
      pronunciation: '/gbigbi/',
      meaning: 'virgule',
      usage: 'Marquer une pause ou séparer',
      examples: ['Emi, é, kple ɛ́. (Moi, lui et elle.)', 'Nɔvi, bo wá. (Frère, viens.)']
    },
    {
      symbol: ':',
      name: 'AFƆ-EVE',
      pronunciation: '/afɔ-eve/',
      meaning: 'deux points',
      usage: 'Introduire une explication ou une liste',
      examples: ['Nudɔ sia ɖe: akpɛ, bli, kple azi. (Voici les choses: maïs, igname et huile.)', 'É gblɔ: "Mava." (Il dit: "Je viendrai.")']
    },
    {
      symbol: ';',
      name: 'GBIGBI-TUTU',
      pronunciation: '/gbigbi-tutu/',
      meaning: 'point-virgule',
      usage: 'Séparer des propositions liées',
      examples: ['Mɔ dze ɖi; gake vɔ̃ meva o. (Il pleut; mais je n\'ai pas peur.)', 'É yi axa; kple vi siwo katã. (Il va au marché; avec tous les enfants.)']
    }
  ];

  // Charger la police
  useEffect(() => {
    const checkFontLoaded = () => {
      const fontCheck = document.fonts.check('16px "Gbekoun", monospace');
      if (fontCheck) {
        setFontLoaded(true);
      } else {
        const timeoutId = setTimeout(checkFontLoaded, 200);
        return () => clearTimeout(timeoutId);
      }
    };

    document.fonts.ready.then(() => {
      setTimeout(checkFontLoaded, 100);
    });

    const fallbackTimeout = setTimeout(() => {
      setFontLoaded(true);
    }, 2000);

    return () => clearTimeout(fallbackTimeout);
  }, []);

  // Filtrage optimisé avec recherche
  const filteredAlphabet = useMemo(() => {
    let filtered = gbekounAlphabet;
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(item => 
        item.type === (activeFilter === 'vowels' ? 'vowel' : 'consonant')
      );
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.letter.toLowerCase().includes(term) ||
        item.name.toLowerCase().includes(term) ||
        item.pronunciation.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.examples.some(example => example.toLowerCase().includes(term))
      );
    }

    return filtered;
  }, [gbekounAlphabet, activeFilter, searchTerm]);

  // Handlers optimisés avec useCallback
  const handleLetterClick = useCallback((letter: string) => {
    setSelectedLetter(selectedLetter === letter ? null : letter);
    setSelectedNumber(null);
    setSelectedSymbol(null);
  }, [selectedLetter]);

  const handleNumberClick = useCallback((number: string) => {
    setSelectedNumber(selectedNumber === number ? null : number);
    setSelectedLetter(null);
    setSelectedSymbol(null);
  }, [selectedNumber]);

  const handleSymbolClick = useCallback((symbol: string) => {
    setSelectedSymbol(selectedSymbol === symbol ? null : symbol);
    setSelectedLetter(null);
    setSelectedNumber(null);
  }, [selectedSymbol]);

  const playPronunciation = useCallback((pronunciation: string) => {
    // Simulation d'audio - à remplacer par une vraie implémentation
    console.log(`Playing pronunciation: ${pronunciation}`);
    
    // Exemple d'implémentation avec Web Speech API
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(pronunciation);
      utterance.lang = 'en-US'; // Ajuster selon la langue
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  }, []);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(text);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  }, []);

  const downloadFont = useCallback(() => {
    const link = document.createElement('a');
    link.href = gbekounFontPath;
    link.download = 'gbekoun.ttf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const generatePDF = useCallback(async () => {
    setIsGeneratingPDF(true);
    
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // En-tête
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Système d\'Écriture Gbekoun', pageWidth / 2, 20, { align: 'center' });
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Alphabet, Chiffres et Symboles', pageWidth / 2, 30, { align: 'center' });
      pdf.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, pageWidth / 2, 40, { align: 'center' });
      
      pdf.setLineWidth(0.5);
      pdf.line(20, 45, pageWidth - 20, 45);
      
      let yPosition = 55;
      
      // Section Alphabet
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('📚 Alphabet Gbekoun (33 lettres)', 20, yPosition);
      yPosition += 10;
      
      // Voyelles
      pdf.setFont('helvetica', 'bold');
      pdf.text('Voyelles (9):', 20, yPosition);
      yPosition += 8;
      
      const vowels = gbekounAlphabet.filter(item => item.type === 'vowel');
      vowels.forEach((item) => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = 20;
        }
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.text(`${item.letter} - ${item.name} (${item.pronunciation})`, 25, yPosition);
        pdf.text(`${item.description}`, 25, yPosition + 4);
        pdf.text(`Exemples: ${item.examples.join(', ')}`, 25, yPosition + 8);
        yPosition += 15;
      });
      
      yPosition += 5;
      
      // Consonnes
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Consonnes (24):', 20, yPosition);
      yPosition += 8;
      
      const consonants = gbekounAlphabet.filter(item => item.type === 'consonant');
      consonants.forEach((item) => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = 20;
        }
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.text(`${item.letter} - ${item.name} (${item.pronunciation})`, 25, yPosition);
        pdf.text(`${item.description}`, 25, yPosition + 4);
        pdf.text(`Exemples: ${item.examples.join(', ')}`, 25, yPosition + 8);
        yPosition += 15;
      });
      
      // Section Chiffres
      pdf.addPage();
      yPosition = 20;
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('🔢 Chiffres Gbekoun (10 chiffres)', 20, yPosition);
      yPosition += 15;
      
      gbekounNumbers.forEach((item) => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = 20;
        }
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.text(`${item.number} - ${item.name} (${item.pronunciation})`, 25, yPosition);
        pdf.text(`Signification: ${item.meaning} - ${item.description}`, 25, yPosition + 4);
        pdf.text(`Exemples: ${item.examples.join(', ')}`, 25, yPosition + 8);
        yPosition += 15;
      });
      
      // Section Symboles
      yPosition += 10;
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('✨ Symboles Gbekoun (6 symboles)', 20, yPosition);
      yPosition += 15;
      
      gbekounSymbols.forEach((item) => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = 20;
        }
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.text(`${item.symbol} - ${item.name} (${item.pronunciation})`, 25, yPosition);
        pdf.text(`Usage: ${item.usage}`, 25, yPosition + 4);
        pdf.text(`Exemples: ${item.examples.join(', ')}`, 25, yPosition + 8);
        yPosition += 15;
      });
      
      // Pied de page
      const totalPages = pdf.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.text(`Page ${i}/${totalPages}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
        pdf.text('Système d\'Écriture Gbekoun - Guide Complet', pageWidth / 2, pageHeight - 5, { align: 'center' });
      }
      
      pdf.save('alphabet-gbekoun-complet.pdf');
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  }, [gbekounAlphabet, gbekounNumbers, gbekounSymbols]);

  // Raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'f':
            e.preventDefault();
            document.getElementById('search-input')?.focus();
            break;
          case 'p':
            e.preventDefault();
            generatePDF();
            break;
        }
      }
      
      if (e.key === 'Escape') {
        setSelectedLetter(null);
        setSelectedNumber(null);
        setSelectedSymbol(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [generatePDF]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header amélioré */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mr-4">
              Système d'Écriture Gbekoun
            </h1>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              title="Informations"
            >
              <Info size={24} />
            </button>
          </div>
          
          {showInfo && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 max-w-4xl mx-auto text-left">
              <div className="flex">
                <div className="flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Guide rapide :</strong> Cliquez sur n'importe quel élément pour voir les détails. 
                    Utilisez Ctrl/Cmd+F pour rechercher, Ctrl/Cmd+P pour générer le PDF, Échap pour fermer les détails.
                  </p>
                </div>
                <button
                  onClick={() => setShowInfo(false)}
                  className="ml-auto text-blue-400 hover:text-blue-600"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Découvrez le système d'écriture complet : 33 lettres, 10 chiffres et 6 symboles
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg text-blue-600 mb-8">
            <span className="font-semibold">📝 33 lettres</span>
            <span className="font-semibold">🔢 10 chiffres</span>
            <span className="font-semibold">✨ 6 symboles</span>
          </div>
          
          {/* Barre de recherche */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="search-input"
                type="text"
                placeholder="Rechercher une lettre, nom, prononciation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={downloadFont}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Download size={20} className="mr-2" />
              Télécharger la police
            </button>
            <button
              onClick={generatePDF}
              disabled={isGeneratingPDF}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileDown size={20} className="mr-2" />
              {isGeneratingPDF ? 'Génération...' : 'Télécharger PDF complet'}
            </button>
          </div>
        </div>

        {/* SECTION ALPHABET */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Alphabet Gbekoun</h2>
            <div className="text-lg text-blue-600 mb-6">
              <span className="font-semibold">33 lettres</span> • 
              <span className="ml-2 font-semibold">9 voyelles</span> • 
              <span className="ml-2 font-semibold">24 consonnes</span>
            </div>
          </div>

          {/* Filtres */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Toutes ({gbekounAlphabet.length})
              </button>
              <button
                onClick={() => setActiveFilter('vowels')}
                className={`ml-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === 'vowels'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Voyelles ({gbekounAlphabet.filter(item => item.type === 'vowel').length})
              </button>
              <button
                onClick={() => setActiveFilter('consonants')}
                className={`ml-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === 'consonants'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Consonnes ({gbekounAlphabet.filter(item => item.type === 'consonant').length})
              </button>
            </div>
          </div>

          {/* Résultats de recherche */}
          {searchTerm && (
            <div className="text-center mb-6">
              <p className="text-gray-600">
                {filteredAlphabet.length} résultat{filteredAlphabet.length > 1 ? 's' : ''} pour "{searchTerm}"
              </p>
            </div>
          )}

          {/* Grille de l'alphabet */}
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-3 mb-8">
            {filteredAlphabet.map((item, index) => (
              <div
                key={`${item.letter}-${index}`}
                onClick={() => handleLetterClick(item.letter)}
                className={`bg-white rounded-xl p-3 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  selectedLetter === item.letter
                    ? 'ring-4 ring-blue-500 shadow-xl scale-105'
                    : 'shadow-md hover:shadow-lg'
                } ${
                  item.type === 'vowel' 
                    ? 'border-l-4 border-green-400' 
                    : 'border-l-4 border-purple-400'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div 
                    className="text-2xl font-bold text-gray-900"
                    style={{ 
                      fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                    }}
                  >
                    {item.letter}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(item.letter);
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copier"
                  >
                    {copiedItem === item.letter ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {item.name}
                </div>
                <div className={`text-xs font-semibold mt-1 ${
                  item.type === 'vowel' ? 'text-green-600' : 'text-purple-600'
                }`}>
                  {item.type === 'vowel' ? 'V' : 'C'}
                </div>
              </div>
            ))}
          </div>

          {filteredAlphabet.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-500">Essayez d'autres termes de recherche</p>
            </div>
          )}
        </div>

        {/* SECTION CHIFFRES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔢 Chiffres Gbekoun</h2>
            <p className="text-lg text-gray-600 mb-6">Les 10 chiffres du système numérique Gbekoun</p>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-4 mb-8">
            {gbekounNumbers.map((item, index) => (
              <div
                key={`${item.number}-${index}`}
                onClick={() => handleNumberClick(item.number)}
                className={`bg-white rounded-xl p-4 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-l-4 border-orange-400 ${
                  selectedNumber === item.number
                    ? 'ring-4 ring-orange-500 shadow-xl scale-105'
                    : 'shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div 
                    className="text-3xl font-bold text-gray-900"
                    style={{ 
                      fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                    }}
                  >
                    {item.number}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(item.number);
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copier"
                  >
                    {copiedItem === item.number ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {item.name}
                </div>
                <div className="text-xs font-semibold mt-1 text-orange-600">
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION SYMBOLES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">✨ Symboles Gbekoun</h2>
            <p className="text-lg text-gray-600 mb-6">Les 6 symboles de ponctuation du système Gbekoun</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
            {gbekounSymbols.map((item, index) => (
              <div
                key={`${item.symbol}-${index}`}
                onClick={() => handleSymbolClick(item.symbol)}
                className={`bg-white rounded-xl p-4 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-l-4 border-red-400 ${
                  selectedSymbol === item.symbol
                    ? 'ring-4 ring-red-500 shadow-xl scale-105'
                    : 'shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div 
                    className="text-4xl font-bold text-gray-900"
                    style={{ 
                      fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                    }}
                  >
                    {item.symbol}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(item.symbol);
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copier"
                  >
                    {copiedItem === item.symbol ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {item.name}
                </div>
                <div className="text-xs font-semibold mt-1 text-red-600">
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Détails des lettres */}
        {selectedLetter && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-8 animate-fadeIn">
            {(() => {
              const letterData = gbekounAlphabet.find(item => item.letter === selectedLetter);
              if (!letterData) return null;

              return (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div 
                        className={`text-8xl font-bold ${
                          letterData.type === 'vowel' ? 'text-green-600' : 'text-purple-600'
                        }`}
                        style={{ 
                          fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                        }}
                      >
                        {letterData.letter}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {letterData.name}
                        </h2>
                        <p className="text-gray-600 text-lg mb-2">
                          {letterData.description}
                        </p>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                          letterData.type === 'vowel' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {letterData.type === 'vowel' ? '🔤 Voyelle' : '🔧 Consonne'}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedLetter(null)}
                      className="text-gray-400 hover:text-gray-600 p-2"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={`${
                      letterData.type === 'vowel' ? 'bg-green-50' : 'bg-purple-50'
                    } rounded-xl p-6`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Prononciation</h3>
                        <button
                          onClick={() => playPronunciation(letterData.pronunciation)}
                          className={`p-2 text-white rounded-lg transition-colors duration-200 ${
                            letterData.type === 'vowel' 
                              ? 'bg-green-600 hover:bg-green-700' 
                              : 'bg-purple-600 hover:bg-purple-700'
                          }`}
                          title="Écouter la prononciation"
                        >
                          <Volume2 size={20} />
                        </button>
                      </div>
                      <div 
                        className={`text-2xl font-bold ${
                          letterData.type === 'vowel' ? 'text-green-600' : 'text-purple-600'
                        }`}
                      >
                        {letterData.pronunciation}
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Exemples</h3>
                      <div className="space-y-3">
                        {letterData.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <button
                              onClick={() => playPronunciation(example)}
                              className="p-1 text-yellow-600 hover:text-yellow-700 transition-colors duration-200"
                              title="Écouter l'exemple"
                            >
                              <Play size={16} />
                            </button>
                            <span 
                              className="text-lg text-gray-800 flex-1"
                              style={{ 
                                fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                              }}
                            >
                              {example}
                            </span>
                            <button
                              onClick={() => copyToClipboard(example)}
                              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                              title="Copier l'exemple"
                            >
                              {copiedItem === example ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Détails des chiffres */}
        {selectedNumber && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-8 animate-fadeIn">
            {(() => {
              const numberData = gbekounNumbers.find(item => item.number === selectedNumber);
              if (!numberData) return null;

              return (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div 
                        className="text-8xl font-bold text-orange-600"
                        style={{ 
                          fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                        }}
                      >
                        {numberData.number}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {numberData.name}
                        </h2>
                        <p className="text-gray-600 text-lg mb-2">
                          {numberData.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-800">
                          🔢 Chiffre • {numberData.meaning}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedNumber(null)}
                      className="text-gray-400 hover:text-gray-600 p-2"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-orange-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Prononciation</h3>
                        <button
                          onClick={() => playPronunciation(numberData.pronunciation)}
                          className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
                          title="Écouter la prononciation"
                        >
                          <Volume2 size={20} />
                        </button>
                      </div>
                      <div className="text-2xl font-bold text-orange-600">
                        {numberData.pronunciation}
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Exemples d'usage</h3>
                      <div className="space-y-3">
                        {numberData.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <button
                              onClick={() => playPronunciation(example)}
                              className="p-1 text-yellow-600 hover:text-yellow-700 transition-colors duration-200"
                              title="Écouter l'exemple"
                            >
                              <Play size={16} />
                            </button>
                            <span 
                              className="text-lg text-gray-800 flex-1"
                              style={{ 
                                fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                              }}
                            >
                              {example}
                            </span>
                            <button
                              onClick={() => copyToClipboard(example)}
                              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                              title="Copier l'exemple"
                            >
                              {copiedItem === example ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Détails des symboles */}
        {selectedSymbol && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-8 animate-fadeIn">
            {(() => {
              const symbolData = gbekounSymbols.find(item => item.symbol === selectedSymbol);
              if (!symbolData) return null;

              return (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div 
                        className="text-8xl font-bold text-red-600"
                        style={{ 
                          fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                        }}
                      >
                        {symbolData.symbol}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {symbolData.name}
                        </h2>
                        <p className="text-gray-600 text-lg mb-2">
                          {symbolData.usage}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                          ✨ Symbole • {symbolData.meaning}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedSymbol(null)}
                      className="text-gray-400 hover:text-gray-600 p-2"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Prononciation</h3>
                        <button
                          onClick={() => playPronunciation(symbolData.pronunciation)}
                          className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                          title="Écouter la prononciation"
                        >
                          <Volume2 size={20} />
                        </button>
                      </div>
                      <div className="text-2xl font-bold text-red-600">
                        {symbolData.pronunciation}
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Exemples en contexte</h3>
                      <div className="space-y-3">
                        {symbolData.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <button
                              onClick={() => playPronunciation(example)}
                              className="p-1 text-yellow-600 hover:text-yellow-700 transition-colors duration-200"
                              title="Écouter l'exemple"
                            >
                              <Play size={16} />
                            </button>
                            <span 
                              className="text-lg text-gray-800 flex-1"
                              style={{ 
                                fontFamily: fontLoaded ? '"Gbekoun", monospace' : 'monospace'
                              }}
                            >
                              {example}
                            </span>
                            <button
                              onClick={() => copyToClipboard(example)}
                              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                              title="Copier l'exemple"
                            >
                              {copiedItem === example ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Section statistiques améliorée */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Statistiques du Système Gbekoun</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{gbekounAlphabet.length}</div>
              <div className="text-lg opacity-90">Lettres au total</div>
              <div className="text-sm opacity-75 mt-1">
                {gbekounAlphabet.filter(item => item.type === 'vowel').length} voyelles + {gbekounAlphabet.filter(item => item.type === 'consonant').length} consonnes
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{gbekounNumbers.length}</div>
              <div className="text-lg opacity-90">Chiffres uniques</div>
              <div className="text-sm opacity-75 mt-1">Système décimal complet</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{gbekounSymbols.length}</div>
              <div className="text-lg opacity-90">Symboles de ponctuation</div>
              <div className="text-sm opacity-75 mt-1">Pour structurer le texte</div>
            </div>
          </div>
        </div>

        {/* Guide d'utilisation amélioré */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Guide d'utilisation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-2xl mb-3">📚</div>
              <h4 className="font-bold text-gray-900 mb-2">Apprendre l'alphabet</h4>
              <p className="text-gray-600 text-sm">
                Cliquez sur chaque lettre pour découvrir sa prononciation et voir des exemples d'usage.
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-2xl mb-3">🔢</div>
              <h4 className="font-bold text-gray-900 mb-2">Maîtriser les chiffres</h4>
              <p className="text-gray-600 text-sm">
                Explorez le système numérique avec des exemples concrets et leur signification culturelle.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <div className="text-2xl mb-3">✨</div>
              <h4 className="font-bold text-gray-900 mb-2">Utiliser les symboles</h4>
              <p className="text-gray-600 text-sm">
                Apprenez à ponctuer vos textes avec les symboles spécifiques au système Gbekoun.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-2xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Raccourcis utiles</h4>
              <p className="text-gray-600 text-sm">
                Ctrl+F pour rechercher, Ctrl+P pour générer le PDF, cliquez sur 📋 pour copier.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Style CSS pour l'animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Alphabet;