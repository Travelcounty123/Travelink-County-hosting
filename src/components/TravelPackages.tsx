
import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PackageType {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
  type: 'domestic' | 'international';
  featured?: boolean;
}

const packages: PackageType[] = [
  {
    id: "kashmir",
    title: "Kashmir Paradise",
    location: "Srinagar, Kashmir",
    duration: "5 days, 4 nights",
    price: 24999,
    image: "https://images.unsplash.com/photo-1566837497312-7be4f51ebbe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    type: "domestic",
    featured: true
  },
  {
    id: "goa",
    title: "Goa Beach Retreat",
    location: "North Goa",
    duration: "4 days, 3 nights",
    price: 18999,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    type: "domestic"
  },
  {
    id: "rajasthan",
    title: "Royal Rajasthan",
    location: "Jaipur, Udaipur",
    duration: "6 days, 5 nights",
    price: 27999,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    type: "domestic"
  },
  {
    id: "kerala",
    title: "Kerala Backwaters",
    location: "Alleppey, Munnar",
    duration: "5 days, 4 nights",
    price: 22999,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    type: "domestic"
  },
  {
    id: "maldives",
    title: "Maldives Luxury Escape",
    location: "Malé, Maldives",
    duration: "6 days, 5 nights",
    price: 89999,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    type: "international",
    featured: true
  },
  {
    id: "switzerland",
    title: "Swiss Alps Adventure",
    location: "Zurich, Interlaken",
    duration: "7 days, 6 nights",
    price: 124999,
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    type: "international"
  },
  {
    id: "bali",
    title: "Bali Paradise",
    location: "Ubud, Kuta",
    duration: "6 days, 5 nights",
    price: 65999,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    type: "international"
  },
  {
    id: "dubai",
    title: "Dubai Extravaganza",
    location: "Dubai, UAE",
    duration: "5 days, 4 nights",
    price: 79999,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    type: "international"
  }
];

const TravelPackages = () => {
  const [activeTab, setActiveTab] = useState<'domestic' | 'international'>('domestic');
  
  const filteredPackages = packages.filter(pkg => pkg.type === activeTab);
  
  return (
    <section className="section-padding">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm font-medium text-travelink-600 uppercase tracking-wider">Curated Experiences</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-2">Explore Our Travel Packages</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our handpicked destinations for your next adventure, from serene domestic getaways to exotic international journeys.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  activeTab === 'domestic'
                    ? "bg-white shadow text-travelink-700"
                    : "text-gray-600 hover:text-travelink-600"
                )}
                onClick={() => setActiveTab('domestic')}
              >
                Domestic
              </button>
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  activeTab === 'international'
                    ? "bg-white shadow text-travelink-700"
                    : "text-gray-600 hover:text-travelink-600"
                )}
                onClick={() => setActiveTab('international')}
              >
                International
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-1 px-6 py-3 bg-travelink-50 text-travelink-700 rounded-lg font-medium hover:bg-travelink-100 transition-all group">
            View All Packages
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

const PackageCard = ({ package: pkg }: { package: PackageType }) => {
  return (
    <div 
      id={pkg.id}
      className="bg-white rounded-xl overflow-hidden shadow-md hover-scale group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {pkg.featured && (
          <div className="absolute top-3 left-3 bg-travelink-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            Featured
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-travelink-700 text-xs font-bold px-2 py-1 rounded-md">
          ₹{pkg.price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-sm text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.floor(pkg.rating) ? "text-yellow-500" : "text-gray-300"}>★</span>
          ))}
          <span className="text-gray-600 ml-1">{pkg.rating.toFixed(1)}</span>
        </div>
        
        <h3 className="font-bold text-gray-900 mb-1">{pkg.title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin size={14} className="mr-1 text-travelink-500" />
          {pkg.location}
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 mt-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {pkg.duration}
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            2-6 people
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
