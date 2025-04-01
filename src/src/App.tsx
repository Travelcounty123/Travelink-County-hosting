
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Testimonials from "./pages/Testimonials";
import Packages from "./pages/Packages";
import Memberships from "./pages/Memberships";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import AdminInstructions from "./pages/AdminInstructions";

// Admin pages
import AdminDashboard from "./pages/admin/Index";
import AdminTestimonials from "./pages/admin/Testimonials";
import AdminPackages from "./pages/admin/Packages";
import AdminVideos from "./pages/admin/Videos";
import AdminContacts from "./pages/admin/Contacts";
import SetupAdmin from "./pages/admin/SetupAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main website routes */}
            <Route path="/" element={<Index />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin-instructions" element={<AdminInstructions />} />
            
            {/* Admin setup and routes */}
            <Route path="/admin/setup" element={<SetupAdmin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/testimonials" element={<AdminTestimonials />} />
            <Route path="/admin/packages" element={<AdminPackages />} />
            <Route path="/admin/videos" element={<AdminVideos />} />
            <Route path="/admin/contacts" element={<AdminContacts />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
