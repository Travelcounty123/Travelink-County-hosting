
import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Destinations for 5-Year Membership Holders',
    excerpt: 'Discover the most popular destinations among our 5-Year membership holders and why these places offer exceptional value.',
    image: '/blog-1.jpg',
    date: 'June 12, 2023',
    author: 'Ananya Desai',
    category: 'Membership Benefits'
  },
  {
    id: 2,
    title: 'How to Maximize Your 10-Year Membership Benefits',
    excerpt: 'Insider tips on getting the most out of your long-term membership with strategic planning and seasonal bookings.',
    image: '/blog-2.jpg',
    date: 'August 23, 2023',
    author: 'Rajiv Khanna',
    category: 'Travel Tips'
  },
  {
    id: 3,
    title: 'Family-Friendly Destinations in Southeast Asia',
    excerpt: 'A comprehensive guide to the best family destinations in Southeast Asia with activities for all age groups.',
    image: '/blog-3.jpg',
    date: 'October 5, 2023',
    author: 'Meera Patel',
    category: 'Destination Guide'
  },
  {
    id: 4,
    title: 'Luxury vs. Budget Travel: Finding the Right Balance',
    excerpt: 'Learn how to create the perfect travel experience by combining luxury elements with budget-friendly options.',
    image: '/blog-4.jpg',
    date: 'December 17, 2023',
    author: 'Vikram Seth',
    category: 'Travel Planning'
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <Card className="overflow-hidden h-full hover-scale">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/800x450/travelink/white?text=Blog+Post';
          }}
        />
        <div className="absolute top-4 right-4 bg-travelink-600 text-white text-xs px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {post.author}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-travelink-900 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button variant="outline" className="text-travelink-600 hover:text-travelink-800 hover:bg-travelink-50">
          Read More <ArrowRight size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-travelink-900 mb-3">Travel Stories & Tips</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our collection of travel insights, tips, and stories from around the world.
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button className="bg-travelink-600 hover:bg-travelink-700">
              View All Articles <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
