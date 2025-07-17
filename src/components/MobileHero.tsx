import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Clock, Award, Users, Star, Phone } from 'lucide-react';

interface MobileHeroProps {
  onAppointmentClick: () => void;
}

const MobileHero: React.FC<MobileHeroProps> = ({ onAppointmentClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Expert Dental Care',
      subtitle: 'Gentle & Affordable for All Ages'
    },
    {
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Modern Technology',
      subtitle: 'Advanced Equipment for Comfort'
    },
    {
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'Family Dentistry',
      subtitle: 'Complete Care for Everyone'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/70 to-cyan-900/80" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on very small screens */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10 backdrop-blur-sm hidden sm:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10 backdrop-blur-sm hidden sm:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-sm mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg sm:text-xl mb-6 opacity-90">
          {slides[currentSlide].subtitle}
        </p>
        
        {/* Feature badges - Stacked on mobile */}
        <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
          <div className="flex items-center justify-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
            <Shield className="h-4 w-4" />
            <span>10+ Years</span>
          </div>
          <div className="flex items-center justify-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
            <Clock className="h-4 w-4" />
            <span>Emergency</span>
          </div>
          <div className="flex items-center justify-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
            <Award className="h-4 w-4" />
            <span>Certified</span>
          </div>
          <div className="flex items-center justify-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
            <Users className="h-4 w-4" />
            <span>Family Care</span>
          </div>
        </div>

        {/* Action Buttons - Stacked on mobile */}
        <div className="space-y-3">
          <button 
            onClick={onAppointmentClick}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Book Appointment
          </button>
          <a 
            href="tel:+919876543210"
            className="w-full border-2 border-white text-white px-6 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Rating Display */}
        <div className="mt-6 flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium">4.9/5 (500+ Reviews)</span>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Floating Emergency Button */}
      <div className="absolute bottom-20 right-4 z-20">
        <a
          href="tel:+919876543210"
          className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors animate-pulse"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default MobileHero;
