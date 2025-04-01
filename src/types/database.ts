
// Custom types for database entities
export type ConsultationRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_plan: string;
  message: string | null;
  created_at: string;
}
