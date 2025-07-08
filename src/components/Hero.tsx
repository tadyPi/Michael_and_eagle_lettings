import React from 'react';
import { Search, Home, Key, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                North London's
                <span className="block text-yellow-400">Premier Lettings</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Family-run lettings agency serving North London with dedication, expertise, and that personal touch
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Properties
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                Contact Us Today
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-blue-100">Happy Tenants (Nearly)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25+</div>
                <div className="text-blue-100">Years Experience Together</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-blue-100">Commitment Always</div>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Your Perfect Property</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Whatever's Available</option>
                    <option>Converted Cupboard</option>
                    <option>Damp House</option>
                    <option>Open-Plan Everything</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input 
                    type="text" 
                    placeholder="North London area (or nearby)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Whatever you got</option>
                      <option>£800 (Bargain!)</option>
                      <option>£1200 (Reasonable)</option>
                      <option>£1600 (Premium)</option>
                      <option>£2000+ (Luxury)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Sky is the limit</option>
                      <option>£1500 (Sensible)</option>
                      <option>£2500 (Ambitious)</option>
                      <option>£3500 (Optimistic)</option>
                      <option>£5000+ (Delusional)</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Find Something Good</span>
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