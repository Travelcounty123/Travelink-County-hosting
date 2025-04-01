
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to Travelink County!",
      });
    }, 1500);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: "Your account has been created. Welcome to Travelink County!",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-travelink-900 to-travelink-800 text-white text-center">
              <h1 className="text-2xl font-bold">Welcome to Travelink County</h1>
              <p className="text-travelink-100 mt-2">Sign in to access your account and manage your travel plans</p>
            </div>
            
            <Tabs defaultValue="login" className="w-full">
              <div className="px-6 pt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-travelink-600 focus:ring-travelink-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>
                      
                      <div className="text-sm">
                        <a href="#" className="text-travelink-600 hover:text-travelink-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-travelink-600 hover:bg-travelink-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign in"}
                    </Button>
                  </form>
                  
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <Button variant="outline" className="w-full">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                          <path fill="none" d="M1 1h22v22H1z" />
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travelink-500 focus:border-transparent" 
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-travelink-600 focus:ring-travelink-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-travelink-600 hover:text-travelink-500">Terms and Conditions</a>
                      </label>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-travelink-600 hover:bg-travelink-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
