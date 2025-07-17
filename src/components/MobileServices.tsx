import React, { useState } from 'react';
import { Smile, Heart, Shield, Zap, Baby, Users, Star, ArrowRight, Phone, Calendar } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  isPopular?: boolean;
}

const MobileServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      name: 'General Checkups',
      description: 'Complete dental examination and professional cleaning',
      price: '₹1,500',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Shield className="h-6 w-6" />,
      features: ['Complete examination', 'Professional cleaning', 'X-rays included', 'Health consultation'],
      isPopular: true
    },
    {
      id: 2,
      name: 'Teeth Whitening',
      description: 'Professional whitening for a brighter smile',
      price: '₹8,000',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Smile className="h-6 w-6" />,
      features: ['Professional grade', 'Immediate results', 'Safe procedure', 'Long-lasting']
    },
    {
      id: 3,
      name: 'Braces & Aligners',
      description: 'Perfect teeth alignment solutions',
      price: '₹45,000',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Zap className="h-6 w-6" />,
      features: ['Metal & clear options', 'Regular monitoring', 'Payment plans', 'Expert care']
    },
    {
      id: 4,
      name: 'Root Canal',
      description: 'Painless treatment to save your teeth',
      price: '₹12,000',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Heart className="h-6 w-6" />,
      features: ['Pain-free procedure', 'Advanced techniques', 'Save natural teeth', 'Quick recovery']
    },
    {
      id: 5,
      name: 'Dental Implants',
      description: 'Permanent tooth replacement solution',
      price: '₹35,000',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Star className="h-6 w-6" />,
      features: ['Permanent solution', 'Natural look', 'Titanium implants', 'Lifetime warranty']
    },
    {
      id: 6,
      name: 'Kids Dentistry',
      description: 'Gentle care specially for children',
      price: '₹1,200',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Baby className="h-6 w-6" />,
      features: ['Child-friendly', 'Gentle techniques', 'Preventive care', 'Fun experience']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Our Dental Services
          </h2>
          <p className="text-gray-600 text-base max-w-md mx-auto">
            Complete dental care with modern technology and gentle techniques
          </p>
        </div>

        {/* Services Grid - Single column on mobile */}
        <div className="space-y-6">
          {services.map(service => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                {service.isPopular && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <span className="text-xl font-bold text-blue-600">{service.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                {/* Features - Show first 2 on mobile */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-1 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-sm"
                  >
                    Learn More
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="bg-gray-100 text-gray-700 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedService(null)} />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                {/* Handle */}
                <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.name}</h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Starting from:</span>
                    <span className="text-3xl font-bold text-blue-600">{selectedService.price}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>Book Now</span>
                    </button>
                    <a
                      href="tel:+919876543210"
                      className="bg-gray-100 text-gray-700 px-6 py-4 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileServices;
