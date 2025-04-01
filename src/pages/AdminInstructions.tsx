
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreateAdminAccount from '@/components/CreateAdminAccount';
import { useAuth } from '@/context/AuthContext';

const AdminInstructions = () => {
  const { user, isAdmin } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">Admin Setup Instructions</h1>
            <p className="text-center text-gray-600 mb-8">Follow these steps to set up your admin account</p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">1. Register an Account</h2>
                {!user ? (
                  <>
                    <p className="text-gray-600 mb-4">
                      First, you need to register an account or login with your existing account.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/auth">Go to Registration <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </>
                ) : (
                  <p className="text-green-600">
                    ✓ You are already logged in as {user.email}
                  </p>
                )}
              </div>
              
              {user && (
                <CreateAdminAccount />
              )}
              
              {isAdmin && (
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-green-700 mb-4">✓ Admin Setup Complete</h2>
                  <p className="text-green-700 mb-4">
                    You have successfully set up your admin account and can now access the admin area.
                  </p>
                  <Button asChild variant="outline" className="w-full border-green-500 text-green-700 hover:bg-green-50 hover:text-green-800">
                    <Link to="/admin">Go to Admin Dashboard <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              )}
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Access Admin Features</h2>
                <p className="text-gray-600 mb-4">
                  Once you have created your admin account and logged back in, you can access:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-600">
                  <li>Admin Dashboard at <code>/admin</code></li>
                  <li>Manage testimonials at <code>/admin/testimonials</code></li>
                  <li>Manage packages at <code>/admin/packages</code></li>
                  <li>View contact form submissions at <code>/admin/contacts</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminInstructions;
