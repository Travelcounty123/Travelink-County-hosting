
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 bg-gradient-to-b from-travelink-900 to-travelink-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">About Us</h1>
          <p className="text-center text-travelink-100 max-w-3xl mx-auto mb-8">
            Learn about our journey, mission, and the team behind Travelink County.
          </p>
          <div className="w-24 h-1 bg-travelink-400 mx-auto rounded-full mb-8"></div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-travelink-900">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, Travelink County began with a simple vision: to transform how people experience travel. What started as a small operation with just three passionate travel enthusiasts has grown into one of India's most trusted travel companies.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been guided by a commitment to excellence, authenticity, and creating unforgettable experiences for our clients. Over the years, we've expanded our services from simple travel bookings to comprehensive travel solutions including exclusive membership plans and customized packages.
              </p>
              <p className="text-gray-700">
                Today, we proudly serve thousands of travelers each year, helping them discover the beauty of India and the world beyond in comfort and style.
              </p>
            </div>
            <div className="lg:ml-auto">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://placehold.co/800x600/travelink/white?text=Our+Story" 
                  alt="Travelink County Story" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
                  <p className="text-white font-semibold">Our journey from a small startup to a leading travel company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-travelink-900">Our Mission & Values</h2>
            <p className="text-gray-600">
              At Travelink County, we're driven by our passion to create exceptional travel experiences and guided by core values that define who we are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travelink-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from the destinations we select to the experiences we create and the support we provide.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travelink-800">Customer-Centric</h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do. We listen to their needs, personalize their experiences, and go above and beyond to exceed their expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travelink-800">Authenticity</h3>
              <p className="text-gray-600">
                We believe in authentic travel experiences that connect our clients with the true essence of a destination, its culture, people, and traditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travelink-800">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with local partners, communities, and experts to create meaningful and responsible travel experiences that benefit all stakeholders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travelink-800">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate our services, embrace new technologies, and find creative solutions to enhance the travel experience for our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travelink-800">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to sustainable and responsible travel practices that minimize environmental impact and support local communities.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-travelink-900">Meet Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
                <img 
                  src="https://placehold.co/400x400/travelink/white?text=VP" 
                  alt="Vikram Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-travelink-900">Vikram Patel</h3>
              <p className="text-gray-500 mb-3">Founder & CEO</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                With over 20 years of experience in the travel industry, Vikram leads our company with vision and passion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
                <img 
                  src="https://placehold.co/400x400/travelink/white?text=AR" 
                  alt="Ananya Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-travelink-900">Ananya Reddy</h3>
              <p className="text-gray-500 mb-3">Chief Operations Officer</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Ananya ensures smooth operations and exceptional service delivery across all our travel offerings.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
                <img 
                  src="https://placehold.co/400x400/travelink/white?text=RK" 
                  alt="Rajiv Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-travelink-900">Rajiv Kumar</h3>
              <p className="text-gray-500 mb-3">Chief Experience Officer</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Rajiv leads our efforts to create unique and memorable travel experiences for all our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-travelink-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-travelink-400 mb-2">18+</div>
                <p className="text-travelink-100">Years of Experience</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-travelink-400 mb-2">50k+</div>
                <p className="text-travelink-100">Happy Travelers</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-travelink-400 mb-2">100+</div>
                <p className="text-travelink-100">Destinations</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-travelink-400 mb-2">12</div>
                <p className="text-travelink-100">Industry Awards</p>
              </div>
            </div>
            
            <Separator className="bg-travelink-800 mb-12" />
            
            <div className="space-y-6">
              <p className="text-xl">
                "Our goal is to continue innovating and expanding our services while maintaining the personalized touch that has made Travelink County a trusted name in travel."
              </p>
              <p className="text-travelink-300">— Vikram Patel, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-travelink-900">Want to Join Our Team?</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              We're always looking for passionate individuals who love travel and want to help others experience the world in unique ways.
            </p>
            <Button className="bg-travelink-600 hover:bg-travelink-700">View Open Positions</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
