
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
import { Plus, Edit, Trash2, Package } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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

// Sample packages data - in a real app, this would come from an API
const initialPackages = [
  {
    id: 1,
    title: "Kerala Backwaters",
    description: "Explore the serene backwaters of Kerala on a traditional houseboat.",
    price: "₹25,000 / person",
    image: "https://placehold.co/600x400/travelink/white?text=Kerala",
    type: "domestic",
    features: [
      "5 nights accommodation",
      "Daily breakfast and dinner",
      "Houseboat stay",
      "Airport transfers",
      "Guided tours"
    ]
  },
  {
    id: 2,
    title: "Rajasthan Heritage",
    description: "Discover the royal heritage of Rajasthan across its historic cities.",
    price: "₹35,000 / person",
    image: "https://placehold.co/600x400/travelink/white?text=Rajasthan",
    type: "domestic",
    features: [
      "7 nights accommodation",
      "All meals included",
      "Private chauffeur",
      "Palace stay experience",
      "Desert safari"
    ]
  },
  {
    id: 3,
    title: "Bali Paradise",
    description: "Experience the tropical beauty and cultural richness of Bali.",
    price: "₹65,000 / person",
    image: "https://placehold.co/600x400/travelink/white?text=Bali",
    type: "international",
    features: [
      "7 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "2 complimentary spa sessions",
      "Beach dinner experience"
    ]
  }
];

const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  price: z.string().min(1, { message: "Price is required." }),
  image: z.string().min(1, { message: "Image URL is required." }),
  type: z.enum(["domestic", "international"], { 
    required_error: "Package type is required."
  }),
  features: z.string().min(5, { message: "Features are required (comma separated list)." })
});

const PackagesAdmin = () => {
  const [packages, setPackages] = useState(initialPackages);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      image: "",
      type: "domestic",
      features: ""
    },
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      setPackages(packages.filter(pkg => pkg.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    const pkg = packages.find(p => p.id === id);
    if (pkg) {
      form.reset({
        title: pkg.title,
        description: pkg.description,
        price: pkg.price,
        image: pkg.image,
        type: pkg.type as "domestic" | "international",
        features: pkg.features.join(", ")
      });
      setEditingId(id);
      setIsAddDialogOpen(true);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const featuresArray = values.features
      .split(",")
      .map(feature => feature.trim())
      .filter(feature => feature.length > 0);
    
    if (editingId) {
      // Update existing package
      setPackages(
        packages.map(pkg => 
          pkg.id === editingId 
            ? { 
                ...pkg, 
                title: values.title,
                description: values.description,
                price: values.price,
                image: values.image,
                type: values.type,
                features: featuresArray
              } 
            : pkg
        )
      );
    } else {
      // Add new package
      const newPackage = {
        id: Math.max(0, ...packages.map(p => p.id)) + 1,
        title: values.title,
        description: values.description,
        price: values.price,
        image: values.image,
        type: values.type,
        features: featuresArray
      };
      setPackages([...packages, newPackage]);
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
            <h1 className="text-2xl font-bold text-gray-900">Manage Packages</h1>
            <p className="text-gray-500">Add, edit or remove travel packages</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-travelink-600 hover:bg-travelink-700">
                <Plus className="mr-2 h-4 w-4" /> Add Package
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Package" : "Add New Package"}</DialogTitle>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Package Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Kerala Backwaters" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Brief package description" 
                            className="min-h-[80px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <Input placeholder="₹25,000 / person" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Package Type</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="domestic">Domestic</option>
                              <option value="international">International</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com/image.jpg" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="features"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Features</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="5 nights accommodation, Daily breakfast and dinner, Guided tours" 
                            className="min-h-[80px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Enter features as a comma-separated list
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
                      {editingId ? "Update" : "Add"} Package
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
                <TableHead>Package</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Features</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages.map((pkg) => (
                <TableRow key={pkg.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded overflow-hidden bg-gray-200">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/travelink/white?text=T';
                          }}
                        />
                      </div>
                      <div>
                        <div className="font-medium">{pkg.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-[200px]">{pkg.description}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={pkg.type === "domestic" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                      {pkg.type === "domestic" ? "Domestic" : "International"}
                    </Badge>
                  </TableCell>
                  <TableCell>{pkg.price}</TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-600 max-w-xs">
                      {pkg.features.slice(0, 2).join(", ")}
                      {pkg.features.length > 2 && "..."}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleEdit(pkg.id)}
                      >
                        <Edit size={16} className="text-gray-600" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleDelete(pkg.id)}
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

export default PackagesAdmin;
