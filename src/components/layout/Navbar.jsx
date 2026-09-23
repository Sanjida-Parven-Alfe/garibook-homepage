import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/*Logo*/}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2.5 group">
              <img 
                src={logo} 
                alt="Garibook Logo" 
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-900 bg-clip-text text-transparent transition-all duration-300">
                {t.brand}
              </span>
            </a>
          </div>

          {/* Desktop Right Side Group */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            
            {/* Desktop Navigation Links */}
            <nav className="flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-gray-800">
              {t.nav && t.nav.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-3.5 py-2 rounded-full text-gray-800 font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="group flex items-center space-x-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/80 rounded-xl text-xs font-bold transition-all duration-300 hover:shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Globe className="w-4 h-4 text-blue-600 transition-transform duration-500 group-hover:rotate-180" />
              <span className="tracking-wider uppercase">
                {lang === 'en' ? 'EN' : 'BN'}
              </span>
            </button>

            {/* Login Button */}
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 capitalize cursor-pointer whitespace-nowrap">
              {t.login}
            </button>

          </div>

          {/* Mobile Right Side Group */}
          <div className="lg:hidden flex items-center space-x-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="group flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/80 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 transition-transform duration-500 group-hover:rotate-180" />
              <span className="tracking-wider uppercase">
                {lang === 'en' ? 'EN' : 'BN'}
              </span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-2xl px-6 py-5 space-y-4 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          
          <nav className="flex flex-col space-y-3">
            {t.nav && t.nav.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-blue-600 py-1.5 transition-colors border-b border-gray-50 last:border-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-gray-100">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-left py-2 text-base font-extrabold text-blue-600 hover:text-blue-700 transition-colors capitalize cursor-pointer"
            >
              {t.login} →
            </button>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;