
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const backgroundImages = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1502136969935-8d8c1d731738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    // Preload images and track loading status
    const imagePromises = backgroundImages.map((src) => {
      return new Promise<number>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          resolve(backgroundImages.indexOf(src));
        };
      });
    });

    Promise.all(imagePromises).then((loadedIndexes) => {
      const loadStatus = backgroundImages.map((_, index) => 
        loadedIndexes.includes(index)
      );
      setImagesLoaded(loadStatus);
    });

    // Rotate background images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 bg-cover bg-center animate-image-zoom",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-white">
        <div className="max-w-5xl text-center">
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              Discover Extraordinary Journeys
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg opacity-0 animate-fade-in animate-delay-200">
            Explore The World With <span className="text-travelink-300">Travelink</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-300">
            Experience premium travel with our exclusive membership plans and curated packages for both domestic and international destinations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-400">
            <a 
              href="#membership" 
              className="px-6 py-3 bg-travelink-500 hover:bg-travelink-600 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg w-full sm:w-auto"
            >
              View Memberships
            </a>
            <a 
              href="#booking" 
              className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group flex items-center justify-center gap-1 w-full sm:w-auto"
            >
              Book Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500">
          <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
