
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const videoTestimonials = [
  {
    id: 1,
    name: 'The Verma Family',
    title: 'Our Unforgettable Trip to Switzerland',
    thumbnail: '/video-thumb-1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual videos
    description: 'The Verma family shares their experience with the 10-Year membership plan and their recent trip to Switzerland.'
  },
  {
    id: 2,
    name: 'Aisha & Rohan',
    title: 'Honeymoon in Maldives',
    thumbnail: '/video-thumb-2.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual videos
    description: 'Newly-weds Aisha and Rohan talk about their perfect honeymoon package to the Maldives.'
  },
  {
    id: 3,
    name: 'Seniors Abroad Group',
    title: 'European Adventure at 60+',
    thumbnail: '/video-thumb-3.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual videos
    description: 'A group of senior citizens share how Travelink made their European tour accessible and enjoyable.'
  }
];

const VideoCard = ({ video }: { video: typeof videoTestimonials[0] }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden hover-scale shadow-md">
      <div className="relative">
        {!isPlaying ? (
          <>
            <div 
              className="relative aspect-video bg-gray-200 overflow-hidden cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/640x360/travelink/white?text=Video+Testimonial';
                }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-travelink-600/90 flex items-center justify-center hover:bg-travelink-500 transition-colors shadow-lg">
                  <Play size={30} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`${video.videoUrl}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video"
            ></iframe>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-travelink-900 mb-1">{video.title}</h3>
        <p className="text-sm text-travelink-600 mb-3">{video.name}</p>
        <p className="text-gray-600 text-sm">{video.description}</p>
      </CardContent>
    </Card>
  );
};

const VideoTestimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-3 text-travelink-900">Video Testimonials</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
          Watch our clients share their memorable experiences with Travelink County.
        </p>
        <div className="w-24 h-1 bg-travelink-400 mx-auto rounded-full mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
