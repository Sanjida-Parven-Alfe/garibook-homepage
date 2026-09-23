import React, { createContext, useContext, useState } from 'react';
import { TRANSLATIONS } from '../utils/constants';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'bn' : 'en'));
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);