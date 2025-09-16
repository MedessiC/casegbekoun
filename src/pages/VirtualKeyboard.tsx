import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Copy, Trash2, Check } from 'lucide-react';

const VirtualKeyboard: React.FC = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // Clavier Gbekoun organisé par rangées
  const keyboardRows = [
    ['ʚ', 'ɖ', 'ɛ', 'ɔ', 'ŋ', 'ɳ', 'ʋ', 'x', 'ɲ', 'ɣ'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y', 'z', 'ɖ', 'ɛ', 'ɔ', '́'],
    ['̀', '̂', '̃', '̄', '̌', '̇', '̋', '̏', '̑', '̊']
  ];

  const specialKeys = [
    { label: 'Space', value: ' ', width: 'w-32' },
    { label: 'Enter', value: '\n', width: 'w-20' },
  ];

  const handleKeyPress = (key: string) => {
    setText(prev => prev + key);
  };

  const handleClear = () => {
    setText('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('keyboardTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('keyboardDescription')}
          </p>
        </div>

        {/* Text Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Zone de texte</h2>
            <div className="flex space-x-3">
              <button
                onClick={handleCopy}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  copied
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                {copied ? <Check size={16} className="mr-2" /> : <Copy size={16} className="mr-2" />}
                {copied ? 'Copié!' : t('copyText')}
              </button>
              <button
                onClick={handleClear}
                className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors duration-200"
              >
                <Trash2 size={16} className="mr-2" />
                {t('clearText')}
              </button>
            </div>
          </div>
          
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder={t('textArea')}
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg font-mono"
          />
          
          <div className="mt-3 text-sm text-gray-500">
            Caractères: {text.length}
          </div>
        </div>

        {/* Virtual Keyboard */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Clavier virtuel Gbekoun</h2>
          
          <div className="space-y-3">
            {keyboardRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-2">
                {row.map((key, keyIndex) => (
                  <button
                    key={keyIndex}
                    onClick={() => handleKeyPress(key)}
                    className="w-12 h-12 bg-gray-100 hover:bg-blue-100 active:bg-blue-200 rounded-lg font-mono text-lg font-semibold text-gray-700 hover:text-blue-700 transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}
            
            {/* Special Keys Row */}
            <div className="flex justify-center gap-2 mt-4">
              {specialKeys.map((key, index) => (
                <button
                  key={index}
                  onClick={() => handleKeyPress(key.value)}
                  className={`${key.width} h-12 bg-gray-200 hover:bg-blue-100 active:bg-blue-200 rounded-lg font-medium text-gray-700 hover:text-blue-700 transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md`}
                >
                  {key.label}
                </button>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">Instructions:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Cliquez sur les touches pour taper en Gbekoun</li>
              <li>• Vous pouvez aussi taper directement dans la zone de texte</li>
              <li>• Utilisez le bouton "Copier" pour copier votre texte</li>
              <li>• Les caractères avec accents et signes diacritiques sont disponibles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;