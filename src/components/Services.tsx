import React from 'react';
import { Home, Key, Users, Shield, Calculator, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Marketing",
      description: "Our creative approach to property descriptions highlights unique features and potential, turning every property challenge into an opportunity."
    },
    {
      icon: Key,
      title: "Property Viewings",
      description: "We provide comprehensive property viewings that give you the full picture of each property's character and potential."
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "As a family business, we provide personal attention and care that larger agencies simply cannot match."
    },
    {
      icon: Shield,
      title: "Tenant Support",
      description: "We provide ongoing support throughout your tenancy, ensuring a smooth and positive rental experience."
    },
    {
      icon: Calculator,
      title: "Transparent Pricing",
      description: "Clear, straightforward pricing for all our services with no hidden fees or surprise charges."
    },
    {
      icon: Wrench,
      title: "Property Management",
      description: "Comprehensive property management services to keep your rental running smoothly from start to finish."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive lettings services that make Michael & Eagle 
            your trusted partner in North London property rentals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;