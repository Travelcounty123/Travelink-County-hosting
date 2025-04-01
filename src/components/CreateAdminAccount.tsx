
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { createAdminUser } from '@/utils/createAdminUser';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CreateAdminAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleCreateAdmin = async () => {
    if (!user) {
      toast({
        title: "Error",
        description: "You need to be logged in to create an admin account.",
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
          description: "Admin account created successfully. You'll need to log out and log back in for changes to take effect.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to create admin account.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error creating admin account:', error);
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Admin Account</h2>
      <p className="text-gray-600 mb-4">
        Click the button below to create an admin account using your current logged-in credentials.
        You will be able to access the admin section after logging out and logging back in.
      </p>
      <Button 
        onClick={handleCreateAdmin}
        disabled={isLoading || !user}
        className="w-full"
      >
        {isLoading ? "Creating..." : "Create Admin Account"}
      </Button>
    </div>
  );
};

export default CreateAdminAccount;
