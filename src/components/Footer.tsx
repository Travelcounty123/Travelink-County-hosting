
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="font-bold text-2xl font-['Playfair_Display']">Travelink</span>
              <span className="text-xs uppercase tracking-wider font-light text-gray-400">County Pvt. Ltd.</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Your premier travel partner offering exclusive memberships, curated packages, and seamless booking services for unforgettable journeys.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="https://www.facebook.com/profile.php?id=61568608033164" />
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Instagram} href="https://www.instagram.com/travelinkcounty/" />
              <SocialLink icon={Youtube} href="#" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/#membership">Membership Plans</FooterLink>
              <FooterLink href="/#domestic">Domestic Packages</FooterLink>
              <FooterLink href="/#international">International Packages</FooterLink>
              <FooterLink href="/#booking">Book Flights & Hotels</FooterLink>
              <FooterLink href="/#about">About Us</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-travelink-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">811 8th Floor, Meghdoot Building, Nehru Place, New Delhi, Delhi 110019</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-travelink-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 9220413324</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-travelink-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@travelinkcounty.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter and get exclusive deals you won't find anywhere else.
            </p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-travelink-400 text-white"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-travelink-600 text-white rounded-r-md hover:bg-travelink-700 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </form>
            <p className="text-gray-500 text-xs">
              By subscribing, you agree to our privacy policy and consent to receive updates.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Travelink County Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: React.ElementType; href: string }) => (
  <a 
    href={href} 
    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travelink-600 transition-colors"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Icon size={16} />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors flex items-center"
    >
      <ChevronRight size={14} className="mr-2 text-travelink-400" />
      {children}
    </a>
  </li>
);

export default Footer;
