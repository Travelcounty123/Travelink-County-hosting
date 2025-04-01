
import { useState } from "react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const consultationFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  preferredDate: z.date({
    required_error: "Please select a preferred date.",
  }),
  preferredPlan: z.string({
    required_error: "Please select a plan you're interested in.",
  }),
  message: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export function useConsultationForm(onSuccess?: () => void) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agreeToTerms: false,
    },
  });

  async function onSubmit(data: ConsultationFormValues) {
    try {
      setIsSubmitting(true);
      
      // Format date to YYYY-MM-DD for database
      const formattedDate = format(data.preferredDate, 'yyyy-MM-dd');
      
      // Insert data into Supabase
      const { error } = await supabase
        .from('consultation_requests')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          preferred_date: formattedDate,
          preferred_plan: data.preferredPlan,
          message: data.message || null
        });
      
      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Consultation Request Submitted",
        description: "We'll contact you soon to confirm your appointment.",
      });
      
      if (onSuccess) {
        onSuccess();
      }
      
      form.reset();
    } catch (error) {
      console.error('Error in form submission:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
