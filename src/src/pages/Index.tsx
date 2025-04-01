
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MembershipPlans from '../components/MembershipPlans';
import TravelPackages from '../components/TravelPackages';
import BookingSection from '../components/BookingSection';
import AboutSection from '../components/AboutSection';
import HomeTestimonialsSection from '../components/HomeTestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MembershipPlans />
      <TravelPackages />
      <HomeTestimonialsSection />
      <BookingSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
