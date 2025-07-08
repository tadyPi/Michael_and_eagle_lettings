import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Award, TrendingUp, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-red-900 to-blue-900 text-white" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                <span className="text-red-400">Michael & </span>
                <span className="text-yellow-400 italic animate-bounce">Eagle</span>
                <div className="text-lg text-green-300 font-medium underline">LETTINGS™</div>
                <div className="text-xs text-pink-300">⭐ BEST IN LONDON!!! ⭐</div>
              </div>
              <p className="text-yellow-300 mt-4 leading-relaxed font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Michael & Eagle Lettings - your trusted North London property speshalists what you need! Family-run busines providing personel servise and local expertees and that.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-blue-600 hover:to-red-600 p-3 rounded-full transition-all duration-300 animate-bounce border-2 border-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-yellow-600 hover:to-green-600 p-3 rounded-full transition-all duration-300 animate-bounce border-2 border-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 animate-bounce border-2 border-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-red-600 hover:to-orange-600 p-3 rounded-full transition-all duration-300 animate-bounce border-2 border-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-300 animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>🔗 Quick Links!!!</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-pink-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>🏠 Home</a></li>
              <li><a href="#properties" className="text-pink-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>🏘️ Propertys</a></li>
              <li><a href="#services" className="text-pink-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>⚡ Servises</a></li>
              <li><a href="#about" className="text-pink-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>👥 About Us</a></li>
              <li><a href="#contact" className="text-pink-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>📞 Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-300 animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>⚡ Servises!!!</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-green-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>Property Lettings</a></li>
              <li><a href="#" className="text-green-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>Property Managment</a></li>
              <li><a href="#" className="text-green-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>Tenent Servises</a></li>
              <li><a href="#" className="text-green-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>Landlord Servises</a></li>
              <li><a href="#" className="text-green-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>Property Valuashuns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-300 animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>📞 Contact Info!!!</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 animate-bounce" />
                <span className="text-yellow-300 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>020 7946 0951</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 animate-bounce" />
                <span className="text-yellow-300 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>info@michaelandeaglelettings.biz</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 animate-bounce" />
                <span className="text-yellow-300 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>North London<br />& Surounding Aeras</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-pink-300 text-sm font-bold animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              © 2024 Michael & Eagle Lettings™. All rights reserved and that. Family busines serveing North London since 1999 or somthing.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-green-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>Privacy Policy</a>
              <a href="#" className="text-green-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>Terms & Condishuns</a>
              <a href="#" className="text-green-300 hover:text-yellow-300 transition-colors duration-300 font-bold underline" style={{fontFamily: 'Comic Sans MS, cursive'}}>Complaints</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;