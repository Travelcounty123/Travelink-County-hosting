
import React from 'react';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useConsultationForm } from "@/hooks/useConsultationForm";
import { PersonalInfoFields } from "@/components/membership/PersonalInfoFields";
import { PreferenceFields } from "@/components/membership/PreferenceFields";
import { AdditionalInfoFields } from "@/components/membership/AdditionalInfoFields";

export function MembershipForm({ onSuccess }: { onSuccess?: () => void }) {
  const { form, isSubmitting, onSubmit } = useConsultationForm(onSuccess);

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        <PersonalInfoFields form={form} />
        <PreferenceFields form={form} />
        <AdditionalInfoFields form={form} />
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  );
}
