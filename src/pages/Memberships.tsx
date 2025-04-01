
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MembershipForm } from '@/components/MembershipForm';

const PricingCard = ({ 
  title, 
  price, 
  duration, 
  description, 
  features, 
  popular = false 
}: { 
  title: string; 
  price: string; 
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}) => {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${popular ? 'border-2 border-travelink-500 transform scale-105 md:scale-110 z-10' : 'border border-gray-200'}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-travelink-500 text-white py-1 px-4 text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-travelink-900 mb-2">{title}</h3>
        <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
        <div className="text-gray-500 mb-4">{duration}</div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-travelink-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className={`w-full ${popular ? 'bg-travelink-600 hover:bg-travelink-700' : 'bg-travelink-800 hover:bg-travelink-900'}`}>
          Choose {title}
        </Button>
      </div>
    </div>
  );
};

const Memberships = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  
  const plans = [
    {
      title: "5-Year Plan",
      price: "₹2,50,000",
      duration: "5-year membership",
      description: "Perfect for regular travelers looking for consistent value over a 5-year period.",
      features: [
        "8 domestic trips (max 2 per year)",
        "4 international trips (max 1 per year)",
        "20% discount on additional bookings",
        "Free airport transfers",
        "Priority customer service",
        "Complimentary travel insurance"
      ],
      popular: false
    },
    {
      title: "10-Year Plan",
      price: "₹4,50,000",
      duration: "10-year membership",
      description: "Our best value plan for dedicated travelers who want premium benefits for a decade.",
      features: [
        "20 domestic trips (max 2 per year)",
        "10 international trips (max 1 per year)",
        "30% discount on additional bookings",
        "Free airport transfers with luxury vehicles",
        "24/7 dedicated concierge service",
        "Comprehensive travel insurance",
        "Annual complimentary resort stay"
      ],
      popular: true
    },
    {
      title: "Family Plan",
      price: "₹3,50,000",
      duration: "5-year family membership",
      description: "Designed for families of up to 4 members to enjoy traveling together.",
      features: [
        "8 domestic trips for the whole family",
        "4 international trips for the whole family",
        "25% discount on additional bookings",
        "Free airport transfers",
        "Priority customer service",
        "Family travel insurance",
        "Kid-friendly activities included"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 bg-gradient-to-b from-travelink-900 to-travelink-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Membership Plans</h1>
          <p className="text-center text-travelink-100 max-w-3xl mx-auto mb-8">
            Join our exclusive travel membership program and enjoy premium benefits, significant savings, and unforgettable experiences.
          </p>
          <div className="w-24 h-1 bg-travelink-400 mx-auto rounded-full mb-8"></div>
        </div>
      </div>
      
      <div id="pricing" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-travelink-900">Choose Your Perfect Plan</h2>
            <p className="text-gray-600">
              Our membership plans are designed to provide exceptional value for different travel needs and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-travelink-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-travelink-800">How does the membership work?</h3>
                <p className="text-gray-600">
                  Our membership plans provide you with a certain number of trips over the membership period. You can choose from our selection of packages for each trip, with the flexibility to travel when it suits you, subject to availability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-travelink-800">Can I transfer my trips to someone else?</h3>
                <p className="text-gray-600">
                  Yes, you can transfer up to 30% of your allocated trips to immediate family members. Additional transfer options are available for premium members.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-travelink-800">What happens if I don't use all my trips?</h3>
                <p className="text-gray-600">
                  Unused trips can be carried forward within the membership period. We also offer options to convert unused trips to other travel benefits or extensions at the end of your membership.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-travelink-800">Are there any blackout dates?</h3>
                <p className="text-gray-600">
                  We have minimal blackout dates, primarily during peak holiday seasons. However, premium members enjoy fewer restrictions and priority booking even during high-demand periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-travelink-900 to-travelink-800 rounded-lg p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="text-center md:text-left md:max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Travel Journey?</h2>
                <p className="text-travelink-100 mb-8 md:mb-0">
                  Join thousands of satisfied members who have transformed their travel experiences with Travelink County memberships.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-travelink-800 hover:bg-travelink-100"
                  onClick={() => setConsultationOpen(true)}
                >
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={consultationOpen} onOpenChange={setConsultationOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Schedule a Consultation</DialogTitle>
            <DialogDescription>
              Complete the form below to schedule a personal consultation with our membership experts.
            </DialogDescription>
          </DialogHeader>
          <MembershipForm onSuccess={() => setConsultationOpen(false)} />
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Memberships;
