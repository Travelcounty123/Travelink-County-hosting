
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const BookingForm = ({ type }: { type: 'flight' | 'hotel' | 'package' }) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setSubmitted(true);
    toast({
      title: "Booking Request Submitted",
      description: `Your ${type} booking request has been received. We'll contact you shortly!`,
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === 'flight' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
              placeholder="City or Airport"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
              placeholder="City or Airport"
              required
            />
          </div>
        </div>
      )}
      
      {type === 'hotel' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
            placeholder="City or Area"
            required
          />
        </div>
      )}
      
      {type === 'package' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent"
            required
          >
            <option value="">Select Package Type</option>
            <option value="domestic">Domestic Package</option>
            <option value="international">International Package</option>
            <option value="custom">Custom Package</option>
          </select>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in / Departure Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={18} className="text-gray-400" />
            </div>
            <input 
              type="date" 
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out / Return Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={18} className="text-gray-400" />
            </div>
            <input 
              type="date" 
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
              required
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent"
            required
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent"
          >
            {[...Array(11)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
        <textarea 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
          rows={4}
          placeholder="Any special requirements or preferences..."
        ></textarea>
      </div>
      
      <div className="pt-4">
        <Button type="submit" className="w-full bg-travelink-600 hover:bg-travelink-700">
          Submit Booking Request
        </Button>
      </div>
    </form>
  );
};

const Booking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      
      <div id="booking" className="pt-24 bg-gradient-to-b from-travelink-900 to-travelink-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Book Your Travel</h1>
          <p className="text-center text-travelink-100 max-w-3xl mx-auto mb-8">
            Quick and easy booking for flights, hotels, and complete travel packages.
          </p>
          <div className="w-24 h-1 bg-travelink-400 mx-auto rounded-full mb-8"></div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <Tabs defaultValue="flight" className="w-full">
              <div className="bg-gray-50 p-4 border-b">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="flight">Flights</TabsTrigger>
                  <TabsTrigger value="hotel">Hotels</TabsTrigger>
                  <TabsTrigger value="package">Packages</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="flight">
                  <h2 className="text-2xl font-bold mb-6 text-travelink-900">Book Your Flight</h2>
                  <BookingForm type="flight" />
                </TabsContent>
                
                <TabsContent value="hotel">
                  <h2 className="text-2xl font-bold mb-6 text-travelink-900">Book Your Hotel</h2>
                  <BookingForm type="hotel" />
                </TabsContent>
                
                <TabsContent value="package">
                  <h2 className="text-2xl font-bold mb-6 text-travelink-900">Book a Travel Package</h2>
                  <BookingForm type="package" />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-travelink-900">Why Book With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-travelink-800">Best Price Guarantee</h3>
                <p className="text-gray-600">We promise the best rates for your travel needs.</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-travelink-800">Secure Booking</h3>
                <p className="text-gray-600">Your data is protected with industry-standard encryption.</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-travelink-100 text-travelink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-travelink-800">24/7 Support</h3>
                <p className="text-gray-600">Our travel experts are always available to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Booking;
