
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Plane, Hotel, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type BookingType = 'flights' | 'hotels';

const BookingSection = () => {
  const [activeTab, setActiveTab] = useState<BookingType>('flights');
  
  return (
    <section id="booking" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-travelink-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-travelink-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-travelink-600 uppercase tracking-wider">Online Booking</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Book Your Travel With Ease</h2>
          <p className="text-gray-600">
            Search for the best flights and hotels at competitive prices. Quick, easy, and secure bookings at your fingertips.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b">
              <button
                className={cn(
                  "flex-1 py-4 px-6 text-center font-medium transition-colors relative",
                  activeTab === 'flights' 
                    ? "text-travelink-700" 
                    : "text-gray-500 hover:text-travelink-600"
                )}
                onClick={() => setActiveTab('flights')}
              >
                <div className="flex items-center justify-center gap-2">
                  <Plane size={18} />
                  <span>Flights</span>
                </div>
                {activeTab === 'flights' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-travelink-500"></div>
                )}
              </button>
              <button
                className={cn(
                  "flex-1 py-4 px-6 text-center font-medium transition-colors relative",
                  activeTab === 'hotels' 
                    ? "text-travelink-700" 
                    : "text-gray-500 hover:text-travelink-600"
                )}
                onClick={() => setActiveTab('hotels')}
              >
                <div className="flex items-center justify-center gap-2">
                  <Hotel size={18} />
                  <span>Hotels</span>
                </div>
                {activeTab === 'hotels' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-travelink-500"></div>
                )}
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {activeTab === 'flights' ? (
                <FlightBookingForm />
              ) : (
                <HotelBookingForm />
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>All bookings are subject to availability. Members receive priority booking and special discounts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FlightBookingForm = () => {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');
  
  return (
    <div>
      <div className="flex mb-6 gap-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="roundtrip"
            name="tripType"
            checked={tripType === 'roundtrip'}
            onChange={() => setTripType('roundtrip')}
            className="w-4 h-4 text-travelink-600 border-gray-300 focus:ring-travelink-500"
          />
          <label htmlFor="roundtrip" className="ml-2 text-sm font-medium text-gray-700">Round Trip</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="oneway"
            name="tripType"
            checked={tripType === 'oneway'}
            onChange={() => setTripType('oneway')}
            className="w-4 h-4 text-travelink-600 border-gray-300 focus:ring-travelink-500"
          />
          <label htmlFor="oneway" className="ml-2 text-sm font-medium text-gray-700">One Way</label>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="City or Airport"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="City or Airport"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500"
            />
          </div>
        </div>
        
        <div className={cn(tripType === 'oneway' ? 'opacity-50 pointer-events-none' : '')}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              disabled={tripType === 'oneway'}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users size={16} className="text-gray-400" />
            </div>
            <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 appearance-none bg-white">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>Custom</option>
            </select>
          </div>
        </div>
      </div>
      
      <button className="w-full py-3 bg-travelink-600 text-white rounded-md font-medium hover:bg-travelink-700 transition-colors flex items-center justify-center gap-2">
        <Search size={16} />
        Search Flights
      </button>
    </div>
  );
};

const HotelBookingForm = () => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="City, area, or property"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={16} className="text-gray-400" />
            </div>
            <input
              type="date"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users size={16} className="text-gray-400" />
            </div>
            <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 appearance-none bg-white">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>Custom</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rooms</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Hotel size={16} className="text-gray-400" />
            </div>
            <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 appearance-none bg-white">
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
              <option>4+ Rooms</option>
            </select>
          </div>
        </div>
      </div>
      
      <button className="w-full py-3 bg-travelink-600 text-white rounded-md font-medium hover:bg-travelink-700 transition-colors flex items-center justify-center gap-2">
        <Search size={16} />
        Search Hotels
      </button>
    </div>
  );
};

export default BookingSection;
