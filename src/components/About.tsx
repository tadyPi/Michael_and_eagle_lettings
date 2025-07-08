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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Michael & Eagle Lettings
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Michael & Eagle Lettings is a family-run property lettings agency serving North London 
                and surrounding areas. Founded by Vasos Charalambous, we pride ourselves on our personal 
                approach to property lettings and our deep knowledge of the local area.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team, led by Stath Charalambous, brings enthusiasm and creativity to every property 
                viewing. We believe in finding perfect match between tenant and property, highlighting 
                the unique character and potential of every home what we represent.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
                View Our Properties
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;