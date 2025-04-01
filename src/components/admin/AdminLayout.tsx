
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Package, 
  Users, 
  MessageSquare, 
  BookOpen, 
  Video, 
  BarChart, 
  Home,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/admin" },
    { icon: Package, label: "Packages", path: "/admin/packages" },
    { icon: Users, label: "Memberships", path: "/admin/memberships" },
    { icon: MessageSquare, label: "Testimonials", path: "/admin/testimonials" },
    { icon: BookOpen, label: "Blog Posts", path: "/admin/blogs" },
    { icon: Video, label: "Videos", path: "/admin/videos" },
    { icon: BarChart, label: "Analytics", path: "/admin/analytics" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // In a real app, you would implement actual logout logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`bg-white shadow-md transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen && (
            <Link to="/" className="font-bold text-xl text-travelink-900">
              Travelink Admin
            </Link>
          )}
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-gray-500">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        <Separator />
        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center py-2 px-4 text-gray-600 hover:bg-travelink-50 hover:text-travelink-900"
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  {isSidebarOpen && <span className="ml-3">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-700"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" className="text-travelink-600 border-travelink-600 hover:bg-travelink-50">
                  View Website
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <main className="bg-gray-50 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
