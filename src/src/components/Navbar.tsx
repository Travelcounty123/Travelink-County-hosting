
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isMembershipsOpen, setIsMembershipsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "font-bold text-2xl transition-colors duration-300 font-['Playfair_Display']",
            isScrolled ? "text-travelink-900" : "text-white"
          )}>
            Travelink
          </span>
          <span className={cn(
            "text-xs uppercase tracking-wider font-light transition-colors duration-300",
            isScrolled ? "text-travelink-600" : "text-white/90"
          )}>
            County Pvt. Ltd.
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
          
          {/* Packages Dropdown */}
          <div className="relative group">
            <button 
              className={cn(
                "flex items-center gap-1 font-medium transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-travelink-600" : "text-white/90 hover:text-white"
              )}
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
            >
              Packages <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
              <Link to="/packages#domestic" className="block px-4 py-2 text-gray-700 hover:bg-travelink-50 hover:text-travelink-600">Domestic</Link>
              <Link to="/packages#international" className="block px-4 py-2 text-gray-700 hover:bg-travelink-50 hover:text-travelink-600">International</Link>
            </div>
          </div>
          
          {/* Memberships Dropdown */}
          <div className="relative group">
            <button 
              className={cn(
                "flex items-center gap-1 font-medium transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-travelink-600" : "text-white/90 hover:text-white"
              )}
              onClick={() => setIsMembershipsOpen(!isMembershipsOpen)}
            >
              Memberships <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
              <Link to="/memberships#5-year" className="block px-4 py-2 text-gray-700 hover:bg-travelink-50 hover:text-travelink-600">5-Year Plan</Link>
              <Link to="/memberships#10-year" className="block px-4 py-2 text-gray-700 hover:bg-travelink-50 hover:text-travelink-600">10-Year Plan</Link>
            </div>
          </div>
          
          <NavLink to="/booking" isScrolled={isScrolled}>Book Now</NavLink>
          <NavLink to="/testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
          <NavLink to="/about" isScrolled={isScrolled}>About Us</NavLink>
          <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
          
          <Link 
            to="/auth" 
            className={cn(
              "px-4 py-2 rounded-md transition-all duration-300",
              isScrolled 
                ? "bg-travelink-600 text-white hover:bg-travelink-700" 
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            )}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden transition-colors duration-300",
            isScrolled ? "text-gray-700" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-4">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          
          <div>
            <button 
              className="flex items-center justify-between w-full text-gray-700 font-medium"
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
            >
              Packages <ChevronDown size={16} className={isPackagesOpen ? "transform rotate-180 transition-transform" : "transition-transform"} />
            </button>
            
            <div className={cn(
              "mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-300",
              isPackagesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            )}>
              <MobileNavLink to="/packages#domestic" onClick={() => setIsOpen(false)}>Domestic</MobileNavLink>
              <MobileNavLink to="/packages#international" onClick={() => setIsOpen(false)}>International</MobileNavLink>
            </div>
          </div>
          
          <div>
            <button 
              className="flex items-center justify-between w-full text-gray-700 font-medium"
              onClick={() => setIsMembershipsOpen(!isMembershipsOpen)}
            >
              Memberships <ChevronDown size={16} className={isMembershipsOpen ? "transform rotate-180 transition-transform" : "transition-transform"} />
            </button>
            
            <div className={cn(
              "mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-300",
              isMembershipsOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            )}>
              <MobileNavLink to="/memberships#5-year" onClick={() => setIsOpen(false)}>5-Year Plan</MobileNavLink>
              <MobileNavLink to="/memberships#10-year" onClick={() => setIsOpen(false)}>10-Year Plan</MobileNavLink>
            </div>
          </div>
          
          <MobileNavLink to="/booking" onClick={() => setIsOpen(false)}>Book Now</MobileNavLink>
          <MobileNavLink to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          
          <Link 
            to="/auth" 
            className="block w-full text-center py-2 px-4 bg-travelink-600 text-white rounded-md hover:bg-travelink-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Desktop nav link component
const NavLink = ({ 
  to, 
  children, 
  isScrolled 
}: { 
  to: string; 
  children: React.ReactNode; 
  isScrolled: boolean 
}) => (
  <Link 
    to={to} 
    className={cn(
      "font-medium transition-colors duration-300",
      isScrolled 
        ? "text-gray-700 hover:text-travelink-600" 
        : "text-white/90 hover:text-white"
    )}
  >
    {children}
  </Link>
);

// Mobile nav link component
const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void;
}) => (
  <Link 
    to={to} 
    className="block text-gray-700 hover:text-travelink-600 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
