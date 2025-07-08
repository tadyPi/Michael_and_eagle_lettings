import React from 'react';
import { Search, Home, Key, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-600 via-yellow-500 to-green-600 text-white" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive', textShadow: '3px 3px 0px #000'}}>
                ⭐ North London's ⭐
                <span className="block text-yellow-300 animate-bounce">PREMIER LETTINGS!!!</span>
                <span className="block text-sm text-red-300">🔥 BEST DEALS IN TOWN 🔥</span>
              </h1>
              <p className="text-xl md:text-2xl text-yellow-100 leading-relaxed" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Family-run lettings agencey serveing North London with dedicashun, expertees, and that personel touch what you need!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse border-4 border-white" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                🏠 VIEW PROPERTYS NOW! 🏠
              </button>
              <button className="border-4 border-yellow-300 bg-green-500 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 animate-bounce" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                📞 CONTACT US TODAY!!!
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>500+</div>
                <div className="text-yellow-100" style={{fontFamily: 'Comic Sans MS, cursive'}}>Happy Tenents (Nearly)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>25+</div>
                <div className="text-yellow-100" style={{fontFamily: 'Comic Sans MS, cursive'}}>Years Experiance Togeather</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>100%</div>
                <div className="text-yellow-100" style={{fontFamily: 'Comic Sans MS, cursive'}}>Commitent Allways</div>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="bg-gradient-to-br from-yellow-200 to-pink-200 rounded-3xl shadow-2xl p-8 max-w-md border-8 border-red-500" style={{transform: 'rotate(-2deg)'}}>
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center animate-bounce" style={{fontFamily: 'Comic Sans MS, cursive'}}>🔍 FIND YOUR PERFECT PROPERTY!!! 🔍</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>Property Type:</label>
                  <select className="w-full px-4 py-3 border-4 border-blue-500 rounded-full focus:ring-4 focus:ring-yellow-500 focus:border-red-500 bg-gradient-to-r from-blue-100 to-green-100">
                    <option>Whatever's Available</option>
                    <option>Converted Cupboard</option>
                    <option>Damp House</option>
                    <option>Open-Plan Everything</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>Locashun:</label>
                  <input 
                    type="text" 
                    placeholder="North London area (or nearbye)"
                    className="w-full px-4 py-3 border-4 border-green-500 rounded-full focus:ring-4 focus:ring-yellow-500 focus:border-red-500 bg-gradient-to-r from-pink-100 to-yellow-100"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-purple-700 mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>Min Price:</label>
                    <select className="w-full px-4 py-3 border-4 border-purple-500 rounded-full focus:ring-4 focus:ring-yellow-500 focus:border-red-500 bg-gradient-to-r from-green-100 to-blue-100">
                      <option>Whatever you got</option>
                      <option>£800 (Bargain!)</option>
                      <option>£1200 (Reasonable)</option>
                      <option>£1600 (Premium)</option>
                      <option>£2000+ (Luxury)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-purple-700 mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>Max Price:</label>
                    <select className="w-full px-4 py-3 border-4 border-orange-500 rounded-full focus:ring-4 focus:ring-yellow-500 focus:border-red-500 bg-gradient-to-r from-yellow-100 to-pink-100">
                      <option>Sky is the limit</option>
                      <option>£1500 (Sensible)</option>
                      <option>£2500 (Ambitious)</option>
                      <option>£3500 (Optimistic)</option>
                      <option>£5000+ (Delusional)</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500 text-white font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse border-4 border-yellow-400" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  <Search className="w-5 h-5" />
                  <span>🔍 FIND SOMTHING GOOD!!! 🔍</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;