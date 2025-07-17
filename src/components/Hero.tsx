import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Clock, Award, Users } from 'lucide-react';

interface HeroProps {
  onAppointmentClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAppointmentClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Smile Brighter With Expert Dental Care',
      subtitle: 'Trusted, Gentle, and Affordable Dentistry for All Ages'
    },
    {
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Advanced Dental Technology',
      subtitle: 'State-of-the-art equipment for precise and comfortable treatments'
    },
    {
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Family Dental Care',
      subtitle: 'Comprehensive dental services for patients of all ages'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/50" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          {slides[currentSlide].subtitle}
        </p>
        
        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Shield className="h-5 w-5" />
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Clock className="h-5 w-5" />
            <span>Emergency Care</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Award className="h-5 w-5" />
            <span>Certified Dentists</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Users className="h-5 w-5" />
            <span>Family Friendly</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onAppointmentClick}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
            View Services
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
