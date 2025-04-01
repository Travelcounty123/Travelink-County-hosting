
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { createAdminUser } from '@/utils/createAdminUser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SetupAdmin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAdmin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);

  useEffect(() => {
    // If already admin, no need to be on this page
    if (isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  const handleMakeAdmin = async () => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to perform this action.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await createAdminUser(user.id);
      
      if (result.success) {
        toast({
          title: "Success",
          description: "You are now an administrator. You'll need to log out and log back in for changes to take effect.",
        });
        setSetupComplete(true);
      } else {
        toast({
          title: "Error",
          description: "Failed to set up admin privileges. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error setting up admin:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Admin Setup</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              {!user ? (
                <Alert>
                  <AlertDescription>
                    You must be logged in to set up admin access. 
                    <div className="mt-4">
                      <Button onClick={() => navigate('/auth')}>
                        Go to Login Page
                      </Button>
                    </div>
                  </AlertDescription>
                </Alert>
              ) : setupComplete ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">Setup Complete!</h2>
                  <p className="text-gray-600 mb-6">
                    You have been successfully set up as an administrator. 
                    Please log out and log back in for all admin privileges to take effect.
                  </p>
                  <div className="space-x-4">
                    <Button onClick={() => navigate('/admin')}>
                      Go to Admin Dashboard
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Make Current User an Administrator</h2>
                  <p className="text-gray-600 mb-6">
                    This page allows you to set up the first administrator for the Travelink website. 
                    The current logged in user ({user.email}) will be granted administrative privileges.
                  </p>
                  <p className="text-amber-600 mb-6">
                    <strong>Important:</strong> This action should only be used during initial setup.
                    For security reasons, this page should be removed or restricted after setup is complete.
                  </p>
                  <Button 
                    onClick={handleMakeAdmin} 
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? "Setting up..." : "Make Me an Administrator"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SetupAdmin;
