import React, { useState } from 'react';
import { Smile, Heart, Shield, Zap, Baby, Users, Star, ArrowRight } from 'lucide-react';

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

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      name: 'General Checkups',
      description: 'Comprehensive dental examination and cleaning to maintain optimal oral health',
      price: '₹1,500',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Shield className="h-8 w-8" />,
      features: ['Complete oral examination', 'Professional cleaning', 'X-rays if needed', 'Oral health consultation'],
      isPopular: true
    },
    {
      id: 2,
      name: 'Teeth Whitening',
      description: 'Professional whitening treatment to brighten your smile in just one session',
      price: '₹8,000',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Smile className="h-8 w-8" />,
      features: ['Professional grade whitening', 'Immediate results', 'Safe and effective', 'Long-lasting brightness']
    },
    {
      id: 3,
      name: 'Braces & Aligners',
      description: 'Traditional braces and modern invisible aligners for perfect teeth alignment',
      price: '₹45,000',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Zap className="h-8 w-8" />,
      features: ['Traditional metal braces', 'Clear aligners available', 'Regular monitoring', 'Payment plans available']
    },
    {
      id: 4,
      name: 'Root Canal Treatment',
      description: 'Painless endodontic treatment to save your natural teeth',
      price: '₹12,000',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Heart className="h-8 w-8" />,
      features: ['Pain-free procedure', 'Advanced techniques', 'Save natural teeth', 'Quick recovery']
    },
    {
      id: 5,
      name: 'Dental Implants',
      description: 'Permanent tooth replacement solution that looks and feels natural',
      price: '₹35,000',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Star className="h-8 w-8" />,
      features: ['Permanent solution', 'Natural appearance', 'Titanium implants', 'Lifetime warranty']
    },
    {
      id: 6,
      name: 'Kids Dentistry',
      description: 'Gentle and fun dental care specially designed for children',
      price: '₹1,200',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Baby className="h-8 w-8" />,
      features: ['Child-friendly environment', 'Gentle techniques', 'Preventive care', 'Fun experience']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Our Dental Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive dental care with modern technology and gentle techniques for all your oral health needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {service.isPopular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedService(null)} />
            <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
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
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Starting from:</span>
                    <span className="text-3xl font-bold text-blue-600">{selectedService.price}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
