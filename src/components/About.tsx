import React from 'react';
import { Award, Clock, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Years of Experience",
      description: "Our team has been serving the North London lettings market for years, developing expertise in matching tenants with their ideal properties."
    },
    {
      icon: Heart,
      title: "Family Business Values",
      description: "As a family-run business with Vasos, Stath, and Sophie, we bring personal care and attention to every client interaction."
    },
    {
      icon: Award,
      title: "Local Area Expertise",
      description: "We know every street, every property, and every unique feature that makes North London properties special."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our enthusiasm and creative approach to property lettings consistently delivers results for both landlords and tenants."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpolygon points="10,1 4,7 1,7 1,13 4,13 10,19 16,13 19,13 19,7 16,7"/%3E%3C/g%3E%3C/svg%3E")'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6 animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive', textShadow: '3px 3px 0px #ffff00'}}>
                👥 About Michael & Eagle Lettings!!! 👥
              </h2>
              <p className="text-xl text-purple-600 leading-relaxed mb-6 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Michael & Eagle Lettings is a family-run property lettings agencey serveing North London 
                and surounding aeras what we know very good. Founded by Vasos Charalambous, we pride ourselfs on our personel 
                aproach to property lettings and our deep knowlege of the local area and stuff.
              </p>
              <p className="text-lg text-blue-600 leading-relaxed font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Our team, led by Stath Charalambous, brings enthusiasim and creativety to every property 
                viewing what we do. We belive in finding perfect match between tenent and property, highliting 
                the uneek character and potenshul of every home what we represent and that.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 animate-pulse border-4 border-yellow-400" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                🏠 VIEW OUR PROPERTYS!!! 🏠
              </button>
              <button className="border-4 border-green-600 bg-yellow-400 text-green-600 hover:bg-green-600 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 animate-bounce" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                📞 CONTACT OUR TEAM NOW!!!
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-pink-200 to-yellow-200 rounded-3xl p-6 hover:from-yellow-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105 border-4 border-purple-500 shadow-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-400 to-blue-400 rounded-full mb-4 animate-spin border-4 border-white">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-red-800 mb-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>{feature.title}</h3>
                <p className="text-purple-600 text-sm leading-relaxed font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;