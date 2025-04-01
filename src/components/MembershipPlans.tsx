
import React, { useState } from 'react';
import { Check, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanFeature {
  title: string;
  included: boolean;
  highlight?: boolean;
}

interface PlanType {
  id: string;
  title: string;
  duration: string;
  regularPrice: number;
  salePrice: number;
  perks: PlanFeature[];
  popular?: boolean;
}

const plans: PlanType[] = [
  {
    id: "5-year",
    title: "Premium 5-Year",
    duration: "5 Years",
    regularPrice: 99999,
    salePrice: 84999,
    perks: [
      { title: "5 Years of Unlimited Domestic Travel*", included: true, highlight: true },
      { title: "25% Discount on International Packages", included: true },
      { title: "10% Discount on Flight Bookings", included: true },
      { title: "15% Discount on Hotel Bookings", included: true },
      { title: "2 Complimentary Airport Lounge Access/Year", included: true },
      { title: "Priority Customer Support", included: true },
      { title: "Exclusive Events & Offers", included: true },
      { title: "Luxury Accommodation Upgrades", included: false },
      { title: "Dedicated Travel Consultant", included: false }
    ]
  },
  {
    id: "10-year",
    title: "Elite 10-Year",
    duration: "10 Years",
    regularPrice: 179999,
    salePrice: 149999,
    popular: true,
    perks: [
      { title: "10 Years of Unlimited Domestic Travel*", included: true, highlight: true },
      { title: "40% Discount on International Packages", included: true },
      { title: "20% Discount on Flight Bookings", included: true },
      { title: "25% Discount on Hotel Bookings", included: true },
      { title: "4 Complimentary Airport Lounge Access/Year", included: true },
      { title: "Priority Customer Support", included: true },
      { title: "Exclusive Events & Offers", included: true },
      { title: "Luxury Accommodation Upgrades", included: true },
      { title: "Dedicated Travel Consultant", included: true }
    ]
  }
];

const MembershipPlans = () => {
  return (
    <section id="membership" className="section-padding bg-gray-50">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-travelink-600 uppercase tracking-wider">Exclusive Memberships</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Elevate Your Travel Experience</h2>
          <p className="text-gray-600">
            Join our exclusive membership program and enjoy premium travel benefits, significant discounts, and unforgettable experiences for years to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-500 text-center max-w-3xl mx-auto">
          <p>* Unlimited Domestic Travel is subject to availability and fair usage policy. Terms and conditions apply. Contact our customer service for detailed information.</p>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ plan }: { plan: PlanType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      id={plan.id}
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 relative",
        plan.popular && "ring-2 ring-travelink-500 transform md:scale-105"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-travelink-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
        <div className="text-sm text-gray-500 mb-4">Membership for {plan.duration}</div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-gray-400 line-through mr-2">₹{plan.regularPrice.toLocaleString()}</span>
            <span className="text-travelink-600 text-sm font-medium">Save ₹{(plan.regularPrice - plan.salePrice).toLocaleString()}</span>
          </div>
          <div className="flex items-end mt-1">
            <span className="text-3xl font-bold text-gray-900">₹{plan.salePrice.toLocaleString()}</span>
            <span className="text-gray-600 ml-1 mb-1">/membership</span>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          {plan.perks.map((perk, index) => (
            <div key={index} className="flex items-start">
              {perk.included ? (
                <Check className="text-travelink-500 mt-1 h-4 w-4 shrink-0" />
              ) : (
                <X className="text-gray-300 mt-1 h-4 w-4 shrink-0" />
              )}
              <span className={cn(
                "ml-3 text-sm",
                perk.included ? "text-gray-700" : "text-gray-400",
                perk.highlight && "font-medium"
              )}>
                {perk.title}
              </span>
            </div>
          ))}
        </div>
        
        <button 
          className={cn(
            "w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-1 group",
            plan.popular 
              ? "bg-travelink-500 text-white hover:bg-travelink-600" 
              : "bg-travelink-50 text-travelink-700 hover:bg-travelink-100"
          )}
        >
          Get Started
          <ChevronRight 
            size={16} 
            className={cn(
              "transition-transform group-hover:translate-x-1",
              isHovered && "translate-x-1"
            )} 
          />
        </button>
      </div>
    </div>
  );
};

export default MembershipPlans;
