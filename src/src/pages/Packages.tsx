
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Package = ({ title, description, price, image, features }: { 
  title: string; 
  description: string; 
  price: string;
  image: string;
  features: string[];
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/travelink/white?text=Package';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-travelink-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-travelink-600 font-bold text-lg mb-4">{price}</div>
        
        <Separator className="my-4" />
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm uppercase text-gray-500">Includes:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-travelink-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button className="w-full bg-travelink-600 hover:bg-travelink-700">View Details</Button>
      </div>
    </div>
  );
};

const Packages = () => {
  const domesticPackages = [
    {
      title: "Kerala Backwaters",
      description: "Explore the serene backwaters of Kerala on a traditional houseboat.",
      price: "₹25,000 / person",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "5 nights accommodation",
        "Daily breakfast and dinner",
        "Houseboat stay",
        "Airport transfers",
        "Guided tours"
      ]
    },
    {
      title: "Rajasthan Heritage",
      description: "Discover the royal heritage of Rajasthan across its historic cities.",
      price: "₹35,000 / person",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "7 nights accommodation",
        "All meals included",
        "Private chauffeur",
        "Palace stay experience",
        "Desert safari"
      ]
    },
    {
      title: "Himalayan Retreat",
      description: "Unwind in the peaceful mountains of Himachal Pradesh.",
      price: "₹30,000 / person",
      image: "https://images.unsplash.com/photo-1626621338418-874a57df5aaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "6 nights accommodation",
        "Daily breakfast",
        "Mountain trekking",
        "River rafting session",
        "Bonfire experiences"
      ]
    }
  ];

  const internationalPackages = [
    {
      title: "Bali Paradise",
      description: "Experience the tropical beauty and cultural richness of Bali.",
      price: "₹65,000 / person",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "7 nights accommodation",
        "Daily breakfast",
        "Airport transfers",
        "2 complimentary spa sessions",
        "Beach dinner experience"
      ]
    },
    {
      title: "European Capitals",
      description: "Explore the historic capitals of Europe in one incredible journey.",
      price: "₹1,50,000 / person",
      image: "https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "10 nights accommodation",
        "Daily breakfast",
        "Inter-city transfers",
        "Skip-the-line museum passes",
        "Local guides in each city"
      ]
    },
    {
      title: "Thailand Adventure",
      description: "Dive into the vibrant cities and beautiful beaches of Thailand.",
      price: "₹55,000 / person",
      image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "6 nights accommodation",
        "Daily breakfast",
        "Island hopping tour",
        "Street food tour",
        "Traditional Thai massage"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      <div className="pt-24 bg-gradient-to-b from-travelink-900 to-travelink-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Travel Packages</h1>
          <p className="text-center text-travelink-100 max-w-3xl mx-auto mb-8">
            Explore our carefully curated selection of domestic and international travel packages designed to create unforgettable experiences.
          </p>
          <div className="w-24 h-1 bg-travelink-400 mx-auto rounded-full mb-8"></div>
        </div>
      </div>
      
      <div id="domestic" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-travelink-900">Domestic Packages</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Discover the diverse beauty and culture of India with our premium domestic packages.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticPackages.map((pkg, index) => (
              <Package key={index} {...pkg} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-travelink-600 text-travelink-700 hover:bg-travelink-50">
              View All Domestic Packages
            </Button>
          </div>
        </div>
      </div>
      
      <div className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-gradient-to-r from-travelink-900 to-travelink-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Looking for a Custom Package?</h3>
            <p className="text-travelink-100 mb-6 max-w-2xl mx-auto">
              We can create a personalized travel experience tailored to your preferences and requirements.
            </p>
            <Button className="bg-white text-travelink-800 hover:bg-travelink-100">Contact Our Travel Experts</Button>
          </div>
        </div>
      </div>
      
      <div id="international" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-travelink-900">International Packages</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Explore the world with our exclusive international travel packages.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalPackages.map((pkg, index) => (
              <Package key={index} {...pkg} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-travelink-600 text-travelink-700 hover:bg-travelink-50">
              View All International Packages
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Packages;
