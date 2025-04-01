
import React from 'react';
import TestimonialsSection from './TestimonialsSection';

const HomeTestimonialsSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsSection 
          limit={3} 
          showViewAllButton={true}
          className="py-0 bg-transparent" 
        />
      </div>
    </div>
  );
};

export default HomeTestimonialsSection;
