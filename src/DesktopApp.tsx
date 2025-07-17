import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

function DesktopApp() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleAppointmentClick = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAppointmentClick={handleAppointmentClick} />
      
      <main className="pt-20">
        <Hero onAppointmentClick={handleAppointmentClick} />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
      />
    </div>
  );
}

export default DesktopApp;
