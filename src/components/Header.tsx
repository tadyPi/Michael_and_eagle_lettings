import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 text-white py-2 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm font-bold">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold blink">📞 CALL NOW!!! 020 7946 0951</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>📧 info@michaelandeaglelettings.biz ✨</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>🏠 Serveing London & Surounding Aeras 🏠</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              <span className="text-red-600 drop-shadow-lg">Michael & </span>
              <span className="text-yellow-500 italic animate-bounce">Eagle</span>
              <div className="text-lg md:text-xl text-purple-700 font-medium underline">LETTINGS™</div>
              <div className="text-xs text-green-600">★★★ BEST IN LONDON ★★★</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            <a href="#home" className="text-red-700 hover:text-yellow-600 font-bold transition-colors underline">🏠 Home</a>
            <a href="#properties" className="text-blue-700 hover:text-green-600 font-bold transition-colors underline">🏘️ Propertys</a>
            <a href="#services" className="text-purple-700 hover:text-red-600 font-bold transition-colors underline">⚡ Servises</a>
            <a href="#about" className="text-green-700 hover:text-blue-600 font-bold transition-colors underline">👥 About Us</a>
            <a href="#contact" className="text-orange-700 hover:text-purple-600 font-bold transition-colors underline">📞 Contact!</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              <a href="#home" className="text-red-700 hover:text-yellow-600 font-bold py-2 transition-colors underline">🏠 Home</a>
              <a href="#properties" className="text-blue-700 hover:text-green-600 font-bold py-2 transition-colors underline">🏘️ Propertys</a>
              <a href="#services" className="text-purple-700 hover:text-red-600 font-bold py-2 transition-colors underline">⚡ Servises</a>
              <a href="#about" className="text-green-700 hover:text-blue-600 font-bold py-2 transition-colors underline">👥 About Us</a>
              <a href="#contact" className="text-orange-700 hover:text-purple-600 font-bold py-2 transition-colors underline">📞 Contact!</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;