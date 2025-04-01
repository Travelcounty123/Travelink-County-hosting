
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Delhi, India',
    rating: 5,
    text: "The 5-year membership with Travelink County has been the best investment for my family. We've visited 8 international destinations so far with significant savings. Their customer service is unparalleled!",
    image: '/testimonial-1.jpg',
    membership: '5-Year Membership'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Mumbai, India',
    rating: 5,
    text: "I was skeptical about the 10-year plan, but it has paid for itself multiple times over. The exclusive deals and priority booking for popular destinations have made our vacations stress-free.",
    image: '/testimonial-2.jpg',
    membership: '10-Year Membership'
  },
  {
    id: 3,
    name: 'Arjun & Meera Kapoor',
    location: 'Bangalore, India',
    rating: 4,
    text: "We've been traveling with Travelink for 3 years now. Their Bali package was perfectly curated with the right balance of adventure and relaxation. Looking forward to many more trips!",
    image: '/testimonial-3.jpg',
    membership: 'Premium Package Client'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Hyderabad, India',
    rating: 5,
    text: "The flight and hotel bookings through Travelink have always been seamless. Their team goes above and beyond to find the best deals, even during peak season.",
    image: '/testimonial-4.jpg',
    membership: 'Regular Client'
  },
  {
    id: 5,
    name: 'Vikram & Saanvi Malhotra',
    location: 'Jaipur, India',
    rating: 5,
    text: "Our 10-year membership has transformed how we travel. The personalized itineraries for each trip make us feel like VIPs. Highly recommend for families who love to travel!",
    image: '/testimonial-5.jpg',
    membership: '10-Year Membership'
  },
  {
    id: 6,
    name: 'Karthik Subramanian',
    location: 'Chennai, India',
    rating: 4,
    text: "The domestic packages by Travelink are exceptionally well-planned. Our Kerala trip was hassle-free and included experiences we wouldn't have discovered on our own.",
    image: '/testimonial-6.jpg',
    membership: 'Domestic Package Client'
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <Card className="h-full hover-scale transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4 shadow-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/travelink/white?text=T';
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold text-travelink-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>
        <div className="mb-3">
          <RatingStars rating={testimonial.rating} />
        </div>
        <p className="text-gray-700 mb-4 flex-grow italic">{testimonial.text}</p>
        <div className="mt-auto">
          <span className="inline-block px-3 py-1 text-xs bg-travelink-100 text-travelink-800 rounded-full">
            {testimonial.membership}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

type TestimonialsSectionProps = {
  limit?: number;
  showViewAllButton?: boolean;
  className?: string;
}

const TestimonialsSection = ({ limit, showViewAllButton = false, className = "" }: TestimonialsSectionProps) => {
  // If limit is provided, only show that many testimonials
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className={`py-16 bg-gradient-to-b from-white to-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-3 text-travelink-900">Client Testimonials</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Hear what our clients have to say about their experiences with Travelink County.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {showViewAllButton && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-travelink-600 text-travelink-700 hover:bg-travelink-50">
              <Link to="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
