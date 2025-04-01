
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';

type Contact = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

const AdminContacts = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user, isAdmin, isLoading } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);

  useEffect(() => {
    // If authentication is done loading and the user is not an admin, redirect to login
    if (!isLoading && (!user || !isAdmin)) {
      toast({
        title: "Access Denied",
        description: "You must be an administrator to view this page.",
        variant: "destructive",
      });
      navigate('/auth');
    } else if (user && isAdmin) {
      fetchContacts();
    }
  }, [user, isAdmin, isLoading, navigate]);

  const fetchContacts = async () => {
    try {
      setLoadingContacts(true);
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching contacts:', error);
        toast({
          title: "Error",
          description: "Failed to load contact submissions. Please try again.",
          variant: "destructive",
        });
        return;
      }

      setContacts(data as Contact[]);
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoadingContacts(false);
    }
  };

  const viewContactDetails = (contact: Contact) => {
    setSelectedContact(contact);
    setViewDetailsOpen(true);
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-travelink-600"></div>
        </div>
      </AdminLayout>
    );
  }

  if (!user || !isAdmin) {
    return null; // Will redirect via useEffect
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Contact Form Submissions</h1>

        {loadingContacts ? (
          <div className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-travelink-600"></div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-gray-500">No contact form submissions yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableCaption>A list of all contact form submissions.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>{format(new Date(contact.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.subject}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => viewContactDetails(contact)}>
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <Sheet open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Contact Details</SheetTitle>
              <SheetDescription>
                Submitted on {selectedContact && format(new Date(selectedContact.created_at), 'MMMM d, yyyy h:mm a')}
              </SheetDescription>
            </SheetHeader>
            
            {selectedContact && (
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">From</h3>
                  <p className="mt-1 text-base">{selectedContact.name}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1 text-base">{selectedContact.email}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Subject</h3>
                  <p className="mt-1 text-base">{selectedContact.subject}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Message</h3>
                  <p className="mt-1 text-base whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
                
                <div className="pt-4">
                  <Button className="mr-2">Reply via Email</Button>
                  <Button variant="outline" onClick={() => setViewDetailsOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </AdminLayout>
  );
};

export default AdminContacts;
