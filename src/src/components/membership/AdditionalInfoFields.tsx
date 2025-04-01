
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormValues } from "@/hooks/useConsultationForm";

interface AdditionalInfoFieldsProps {
  form: UseFormReturn<ConsultationFormValues>;
}

export function AdditionalInfoFields({ form }: AdditionalInfoFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Information (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Please share any specific questions or requirements"
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
        name="agreeToTerms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I agree to the terms and privacy policy
              </FormLabel>
              <FormDescription>
                By submitting this form, you agree to be contacted by our membership consultants.
              </FormDescription>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
