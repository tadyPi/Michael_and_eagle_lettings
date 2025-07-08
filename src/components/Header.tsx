import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">020 7946 0951</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@michaelandeaglelettings.biz</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Serving London & Surrounding Areas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-blue-600">Michael & </span>
              <span className="text-yellow-500 italic">Eagle</span>
              <div className="text-lg md:text-xl text-gray-700 font-medium">LETTINGS</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#properties" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Properties</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
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
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">Home</a>
              <a href="#properties" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">Properties</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;