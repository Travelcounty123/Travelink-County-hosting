
import React from 'react';
import { Award, MapPin, Compass, Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { 
    number: "15K+", 
    label: "Happy Customers",
    icon: Users,
  },
  { 
    number: "200+", 
    label: "Destinations",
    icon: MapPin,
  },
  { 
    number: "12+", 
    label: "Years Experience",
    icon: Clock,
  },
  { 
    number: "98%", 
    label: "Satisfaction Rate",
    icon: Award, 
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-travelink-600 uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Experience Travel Excellence with Travelink County</h2>
            
            <p className="text-gray-600 mb-4">
              Travelink County Pvt. Ltd. is a premium travel company dedicated to providing exceptional travel experiences to our customers. With over a decade of expertise in the travel industry, we specialize in curated vacation packages, exclusive memberships, and seamless flight and hotel bookings.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our mission is to transform ordinary trips into extraordinary journeys. Whether you're looking for a relaxing beach vacation, an adventurous mountain expedition, or a cultural urban experience, our team of travel experts will craft the perfect itinerary tailored to your preferences.
            </p>
            
            <div className="space-y-3">
              <Feature 
                icon={Compass}
                title="Expertly Curated Packages" 
                description="Each of our travel packages is carefully designed to offer the perfect balance of exploration, relaxation, and authentic experiences."
              />
              <Feature 
                icon={Award}
                title="Premium Membership Benefits" 
                description="Our exclusive 5-year and 10-year memberships provide unmatched travel benefits and significant savings on multiple trips."
              />
              <Feature 
                icon={Users}
                title="Personalized Service" 
                description="From the moment you book until you return home, our dedicated team ensures every aspect of your journey exceeds expectations."
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80" 
                alt="Beautiful landscape view" 
                className="w-full h-full object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-white">
                      <div className="flex items-center mb-1">
                        <stat.icon size={16} className="mr-1.5 text-travelink-300" />
                        <span className="text-sm font-medium text-travelink-300">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-bold">{stat.number}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-travelink-400 rounded-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-travelink-400 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="flex gap-3">
    <div className="flex-shrink-0 w-10 h-10 bg-travelink-50 rounded-lg flex items-center justify-center text-travelink-600">
      <Icon size={20} />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default AboutSection;
