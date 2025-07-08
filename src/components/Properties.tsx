import React from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "The 'Cozy' Garden Flat",
      location: "Highbury & Islington Borders",
      price: "£1,850",
      period: "per month",
      bedrooms: 1,
      bathrooms: 1,
      area: "Very compact",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      description: "Exciting opportunity to reside in a truly unique living space! This creatively re-imagined former storage cupboard offers unparalleled privacy. Features a bespoke integrated bed platform and fully functional 'wet room' - ingeniously combined shower, toilet, and sink for maximum efficiency!",
      stathQuote: "Is small, yeah, but is very efficient. Think of the money you save on heating! Very popular with, like, artists who need clear head for the creativity."
    },
    {
      id: 2,
      title: "Grand Victorian Residence",
      location: "Upper Holloway (Potential)",
      price: "£3,500",
      period: "per month",
      bedrooms: 3,
      bathrooms: 2,
      area: "Spacious (ish)",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      description: "A rare chance to acquire a period property with immense potential! Boasts original features including peeling wallpaper, charming damp patches, and a delightful scent of 'history.' The garden is mature and overgrown, offering a truly wild escape from city life.",
      stathQuote: "Yeah, is bit 'lived in', but that's character, innit? You could paint over the damp, no problem. That garden? Is like jungle. Great for hide and seek with the children!"
    },
    {
      id: 3,
      title: "Chic Urban Pad",
      location: "Archway Adjacent (Very Close)",
      price: "£1,600",
      period: "per month",
      bedrooms: 0,
      bathrooms: 1,
      area: "Open-plan",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      description: "Experience contemporary urban living! Innovative open-plan layout where living, sleeping, and kitchen areas seamlessly blend. The 'bedroom' area is cleverly delineated by a slightly different shade of off-white paint. Stunning views of the neighbours' brick wall!",
      stathQuote: "See, is 'open-plan' – very modern style. No walls to get in way of your vibe. You be surprised how much you don't need separate bedroom, trust me."
    },
    {
      id: 4,
      title: "Characterful Basement Flat",
      location: "Tottenham (Up and Coming)",
      price: "£1,400",
      period: "per month",
      bedrooms: 2,
      bathrooms: 1,
      area: "Underground living",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      description: "Unique subterranean living experience! This characterful basement flat offers a cool, cave-like atmosphere year-round. Features include low ceilings for that cozy feel, minimal natural light for better sleep, and the soothing sounds of footsteps above. Perfect for vampires or night shift workers!",
      stathQuote: "Is like living in bunker, but in good way! Very secure, nobody can get you. And you never be woken up by birds or anything annoying like this."
    },
    {
      id: 5,
      title: "Converted Loft Space",
      location: "Wood Green (Trendy Area)",
      price: "£1,950",
      period: "per month",
      bedrooms: 1,
      bathrooms: 1,
      area: "Sloped ceilings",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      description: "Spectacular converted loft with unique architectural features! The sloped ceilings create an intimate, womb-like environment. Standing room available in approximately 40% of the space. Skylight provides dramatic lighting effects and occasional weather participation. Ladder access adds adventure to daily life!",
      stathQuote: "Is like living in tree house, but more sophisticated, yeah? The sloped ceiling is actually quite relaxing - you cannot stand up everywhere, so you forced to chill out, very zen."
    },
    {
      id: 6,
      title: "Shared House Opportunity",
      location: "Finsbury Park (Vibrant)",
      price: "£950",
      period: "per month",
      bedrooms: 1,
      bathrooms: 0.5,
      area: "Your own room",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      description: "Join a dynamic household of creative professionals! Your private bedroom comes with a lock (key extra). Shared facilities include kitchen (rota system), bathroom (booking required), and living room (first come, first served). Meet new friends daily! Perfect for social butterflies who don't mind queuing for the loo.",
      stathQuote: "Is like Big Brother, but you pay rent! Great for networking with peoples. You never be lonely. Always someone around, whether you want them or not, very social."
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Current Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our unique selection of rental properties across North London. 
            Each property has been personally viewed by our team and comes with expert insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-300">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {property.price} <span className="text-sm font-normal text-gray-600">{property.period}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-gray-600 text-sm mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} bed`}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms} bath{property.bathrooms === 0.5 ? ' (shared)' : ''}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{property.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm italic">
                      <strong>Agent notes:</strong> "{property.stathQuote}"
                    </p>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                  Arrange Viewing
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;