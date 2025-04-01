
import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Package, BookOpen, MessageSquare, Video, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// This would be replaced with real authentication in a production app
const isAuthenticated = true;

const AdminDashboard = () => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const adminCards = [
    {
      title: "Packages",
      description: "Manage travel packages",
      icon: Package,
      link: "/admin/packages",
      count: 12
    },
    {
      title: "Memberships",
      description: "Manage membership plans",
      icon: Users,
      link: "/admin/memberships",
      count: 3
    },
    {
      title: "Testimonials",
      description: "Manage client testimonials",
      icon: MessageSquare,
      link: "/admin/testimonials",
      count: 8
    },
    {
      title: "Blog Posts",
      description: "Manage travel blog content",
      icon: BookOpen,
      link: "/admin/blogs",
      count: 24
    },
    {
      title: "Videos",
      description: "Manage video testimonials",
      icon: Video,
      link: "/admin/videos",
      count: 6
    },
    {
      title: "Analytics",
      description: "View website performance",
      icon: BarChart,
      link: "/admin/analytics",
      count: null
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Admin Dashboard</h1>
          <p className="text-gray-500">Welcome to the Travelink County admin panel. Manage your website content here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminCards.map((card, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-medium">{card.title}</CardTitle>
                <card.icon className="h-5 w-5 text-travelink-600" />
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">{card.description}</CardDescription>
                <div className="flex items-center justify-between">
                  {card.count !== null && (
                    <div className="text-2xl font-bold text-travelink-900">{card.count}</div>
                  )}
                  <Link to={card.link}>
                    <Button variant="outline" className="text-travelink-600 border-travelink-600 hover:bg-travelink-50">
                      Manage
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
