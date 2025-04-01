
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
import { Plus, Edit, Trash2, Video, Play, Image as ImageIcon } from 'lucide-react';
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
import { useToast } from '@/components/ui/use-toast';

// Define a video type for better type safety
interface VideoContent {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
  featured: boolean;
}

// Sample video data
const initialVideos: VideoContent[] = [
  {
    id: 1,
    title: 'Bali Adventure',
    description: 'Experience the beauty of Bali beaches and temples',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg',
    category: 'Travel Destination',
    featured: true
  },
  {
    id: 2,
    title: 'Travelink Membership Explained',
    description: 'Learn about the benefits of our membership program',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg',
    category: 'Membership',
    featured: false
  },
  {
    id: 3,
    title: 'Client Testimonial - The Sharma Family',
    description: 'Hear from our long-term members about their experience',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg',
    category: 'Testimonial',
    featured: true
  }
];

// Sample image data for the image gallery
const sampleImages = [
  '/placeholder.svg',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
  'https://images.unsplash.com/photo-1502136969935-8d8c1d731738',
  'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed',
  'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
  'https://images.unsplash.com/photo-1466442929976-97f336a657be'
];

const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  videoUrl: z.string().url({ message: "Please enter a valid video URL." }),
  thumbnailUrl: z.string().optional(),
  category: z.string().min(2, { message: "Category is required." }),
  featured: z.boolean().default(false)
});

type FormValues = z.infer<typeof formSchema>;

const VideosAdmin = () => {
  const [videos, setVideos] = useState<VideoContent[]>(initialVideos);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [images, setImages] = useState<string[]>(sampleImages);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      videoUrl: "",
      thumbnailUrl: "",
      category: "",
      featured: false
    },
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      setVideos(videos.filter(video => video.id !== id));
      toast({
        title: "Video deleted",
        description: "The video has been removed successfully.",
      });
    }
  };

  const handleEdit = (id: number) => {
    const video = videos.find(v => v.id === id);
    if (video) {
      form.reset({
        title: video.title,
        description: video.description,
        videoUrl: video.videoUrl,
        thumbnailUrl: video.thumbnailUrl,
        category: video.category,
        featured: video.featured
      });
      setEditingId(id);
      setIsAddDialogOpen(true);
    }
  };

  const onSubmit = (values: FormValues) => {
    if (editingId) {
      // Update existing video
      setVideos(
        videos.map(video => 
          video.id === editingId 
            ? { ...video, ...values } 
            : video
        )
      );
      toast({
        title: "Video updated",
        description: "The video has been updated successfully.",
      });
    } else {
      // Add new video
      const newVideo: VideoContent = {
        id: Math.max(0, ...videos.map(v => v.id)) + 1,
        title: values.title,
        description: values.description,
        videoUrl: values.videoUrl,
        thumbnailUrl: values.thumbnailUrl || '/placeholder.svg',
        category: values.category,
        featured: values.featured
      };
      setVideos([...videos, newVideo]);
      toast({
        title: "Video added",
        description: "The new video has been added successfully.",
      });
    }
    
    form.reset();
    setEditingId(null);
    setIsAddDialogOpen(false);
  };

  const handleDialogClose = () => {
    form.reset();
    setEditingId(null);
    setIsAddDialogOpen(false);
    setShowImageGallery(false);
  };

  const selectImage = (imageUrl: string) => {
    form.setValue('thumbnailUrl', imageUrl);
    setShowImageGallery(false);
    toast({
      title: "Image selected",
      description: "The thumbnail image has been selected.",
    });
  };

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a server
      // For demo purposes, we'll just create a blob URL
      const imageUrl = URL.createObjectURL(file);
      setImages([imageUrl, ...images]);
      form.setValue('thumbnailUrl', imageUrl);
      toast({
        title: "Image uploaded",
        description: "Your image has been uploaded successfully.",
      });
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Videos</h1>
            <p className="text-gray-500">Add, edit or remove video content</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-travelink-600 hover:bg-travelink-700">
                <Plus className="mr-2 h-4 w-4" /> Add Video
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Video" : "Add New Video"}</DialogTitle>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Video title" {...field} />
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
                            placeholder="Video description" 
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
                    name="videoUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Video URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://www.youtube.com/embed/videoId" {...field} />
                        </FormControl>
                        <FormDescription>
                          YouTube embed URL (e.g., https://www.youtube.com/embed/videoId)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="thumbnailUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Thumbnail Image</FormLabel>
                        <div className="flex flex-col gap-2">
                          <FormControl>
                            <Input placeholder="/thumbnail.jpg" {...field} />
                          </FormControl>
                          
                          <div className="flex gap-2">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setShowImageGallery(!showImageGallery)}
                              className="flex-1"
                            >
                              <ImageIcon className="mr-2 h-4 w-4" /> Select from Gallery
                            </Button>
                            
                            <div className="relative">
                              <Button type="button" variant="outline" className="flex-1 relative">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={uploadImage}
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <Plus className="mr-2 h-4 w-4" /> Upload New
                              </Button>
                            </div>
                          </div>
                          
                          {showImageGallery && (
                            <div className="grid grid-cols-3 gap-2 mt-2 p-2 border rounded-md bg-gray-50 max-h-[300px] overflow-y-auto">
                              {images.map((img, i) => (
                                <div 
                                  key={i} 
                                  className="relative aspect-video rounded-md overflow-hidden border cursor-pointer hover:opacity-90 transition-opacity"
                                  onClick={() => selectImage(img)}
                                >
                                  <img src={img} alt={`Gallery image ${i}`} className="w-full h-full object-cover" />
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {field.value && (
                            <div className="mt-2 relative aspect-video w-full max-w-[300px] rounded-md overflow-hidden border">
                              <img src={field.value} alt="Selected thumbnail" className="w-full h-full object-cover" />
                            </div>
                          )}
                        </div>
                        <FormDescription>
                          Select or upload a thumbnail image for your video
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Testimonial, Destination" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="featured"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 rounded border-gray-300 text-travelink-600 focus:ring-travelink-500"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Featured</FormLabel>
                          <FormDescription>
                            Featured videos appear prominently on the website
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={handleDialogClose}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-travelink-600 hover:bg-travelink-700">
                      {editingId ? "Update" : "Add"} Video
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
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Thumbnail</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videos.map((video) => (
                <TableRow key={video.id}>
                  <TableCell className="font-medium">{video.title}</TableCell>
                  <TableCell>{video.category}</TableCell>
                  <TableCell className="max-w-xs truncate">{video.description}</TableCell>
                  <TableCell>
                    <div className="w-16 h-9 rounded overflow-hidden">
                      <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" />
                    </div>
                  </TableCell>
                  <TableCell>{video.featured ? "Yes" : "No"}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => window.open(video.videoUrl, '_blank')}
                        title="Preview video"
                      >
                        <Play size={16} className="text-travelink-600" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleEdit(video.id)}
                      >
                        <Edit size={16} className="text-gray-600" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleDelete(video.id)}
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

export default VideosAdmin;
