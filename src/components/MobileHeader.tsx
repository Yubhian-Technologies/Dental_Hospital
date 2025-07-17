import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Stethoscope, MapPin } from 'lucide-react';

interface MobileHeaderProps {
  onAppointmentClick: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onAppointmentClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-md py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Compact for mobile */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Smile Dental
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">Expert Care</p>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2">
              <a href="tel:+919876543210" className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              
              <button
                onClick={onAppointmentClick}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center space-x-1"
              >
                <Calendar className="h-4 w-4" />
                <span>Book</span>
              </button>

              <button
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300">
            <div className="p-6 pt-20">
              <nav className="space-y-6">
                <a 
                  href="#hero" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#services" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#testimonials" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </a>
                <a 
                  href="#contact" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>

              {/* Contact Info in Menu */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>123 Main Street, Hyderabad</span>
                </div>
              </div>

              {/* Emergency Button */}
              <div className="mt-8">
                <button className="w-full bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
                  Emergency Care 24/7
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
