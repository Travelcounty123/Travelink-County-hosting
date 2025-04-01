
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';
import VideoTestimonials from '../components/VideoTestimonials';
import BlogSection from '../components/BlogSection';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      <div className="pt-24 bg-gradient-to-b from-travelink-900 to-travelink-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Our Client Experiences</h1>
          <p className="text-center text-travelink-100 max-w-3xl mx-auto mb-8">
            Discover why our clients love traveling with Travelink County. Read their stories and watch their experiences.
          </p>
          <div className="w-24 h-1 bg-travelink-400 mx-auto rounded-full mb-8"></div>
        </div>
      </div>
      <TestimonialsSection />
      <VideoTestimonials />
      <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
