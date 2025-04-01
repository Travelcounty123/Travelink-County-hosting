import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define a testimonial type for better type safety
interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  membership: string;
}

// Sample testimonial data - in a real app, this would come from an API
const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Delhi, India',
    rating: 5,
    text: "The 5-year membership with Travelink County has been the best investment for my family. We've visited 8 international destinations so far with significant savings.",
    image: '/testimonial-1.jpg',
    membership: '5-Year Membership'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Mumbai, India',
    rating: 5,
    text: "I was skeptical about the 10-year plan, but it has paid for itself multiple times over.",
    image: '/testimonial-2.jpg',
    membership: '10-Year Membership'
  },
  {
    id: 3,
    name: 'Arjun Kapoor',
    location: 'Bangalore, India',
    rating: 4,
    text: "We've been traveling with Travelink for 3 years now. Their Bali package was perfectly curated.",
    image: '/testimonial-3.jpg',
    membership: 'Premium Package Client'
  }
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  location: z.string().min(2, { message: "Location is required." }),
  rating: z.number().min(1).max(5),
  text: z.string().min(10, { message: "Testimonial text must be at least 10 characters." }),
  membership: z.string().min(2, { message: "Membership type is required." }),
  image: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

const TestimonialsAdmin = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      rating: 5,
      text: "",
      membership: "",
      image: ""
    },
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
      form.reset({
        name: testimonial.name,
        location: testimonial.location,
        rating: testimonial.rating,
        text: testimonial.text,
        membership: testimonial.membership,
        image: testimonial.image
      });
      setEditingId(id);
      setIsAddDialogOpen(true);
    }
  };

  const onSubmit = (values: FormValues) => {
    if (editingId) {
      // Update existing testimonial
      setTestimonials(
        testimonials.map(testimonial => 
          testimonial.id === editingId 
            ? { ...testimonial, ...values } 
            : testimonial
        )
      );
    } else {
      // Add new testimonial with all required fields
      const newTestimonial: Testimonial = {
        id: Math.max(0, ...testimonials.map(t => t.id)) + 1,
        name: values.name,
        location: values.location,
        rating: values.rating,
        text: values.text,
        membership: values.membership,
        image: values.image || '/placeholder.svg'
      };
      setTestimonials([...testimonials, newTestimonial]);
    }
    
    form.reset();
    setEditingId(null);
    setIsAddDialogOpen(false);
  };

  const handleDialogClose = () => {
    form.reset();
    setEditingId(null);
    setIsAddDialogOpen(false);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Testimonials</h1>
            <p className="text-gray-500">Add, edit or remove client testimonials</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-travelink-600 hover:bg-travelink-700">
                <Plus className="mr-2 h-4 w-4" /> Add Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Testimonial" : "Add New Testimonial"}</DialogTitle>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Client name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="City, Country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rating (1-5)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={1} 
                            max={5} 
                            {...field}
                            onChange={e => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Testimonial Text</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Client's feedback" 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="membership"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Membership Type</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 5-Year Membership" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="/testimonial-1.jpg" {...field} />
                        </FormControl>
                        <FormDescription>
                          Leave blank to use a placeholder image
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={handleDialogClose}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-travelink-600 hover:bg-travelink-700">
                      {editingId ? "Update" : "Add"} Testimonial
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="w-1/3">Testimonial</TableHead>
                <TableHead>Membership</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell className="font-medium">{testimonial.name}</TableCell>
                  <TableCell>{testimonial.location}</TableCell>
                  <TableCell>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className={`${
                            index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{testimonial.text}</TableCell>
                  <TableCell>{testimonial.membership}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleEdit(testimonial.id)}
                      >
                        <Edit size={16} className="text-gray-600" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleDelete(testimonial.id)}
                        className="hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TestimonialsAdmin;
