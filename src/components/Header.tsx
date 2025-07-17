
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Stethoscope } from 'lucide-react';

interface HeaderProps {
  onAppointmentClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAppointmentClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Smile Dental Care
              </h1>
              <p className="text-xs text-gray-600">Expert Dental Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <a href="tel:+919876543210" className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            
            <button
              onClick={onAppointmentClick}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Now</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <a href="tel:+919876543210" className="flex items-center space-x-2 text-blue-600 font-medium">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
