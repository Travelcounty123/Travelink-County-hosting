
import { supabase } from '@/integrations/supabase/client';

// This function should be called only once to create the initial admin user
// For security reasons, always delete this function call after using it
export const createAdminUser = async (userId: string) => {
  try {
    // Check if the user exists in the admin_users table
    const { data: existingAdmin, error: checkError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking admin user:', checkError);
      return { success: false, error: checkError };
    }

    // If admin already exists, update it to ensure it's set as admin
    if (existingAdmin) {
      const { error: updateError } = await supabase
        .from('admin_users')
        .update({ is_admin: true })
        .eq('id', userId);
      
      if (updateError) {
        console.error('Error updating admin user:', updateError);
        return { success: false, error: updateError };
      }
      
      return { success: true, message: 'Admin user updated successfully' };
    }
    
    // If admin doesn't exist, create it
    const { error: insertError } = await supabase
      .from('admin_users')
      .insert({
        id: userId,
        is_admin: true
      });
    
    if (insertError) {
      console.error('Error creating admin user:', insertError);
      return { success: false, error: insertError };
    }
    
    return { success: true, message: 'Admin user created successfully' };
  } catch (error) {
    console.error('Unexpected error creating admin:', error);
    return { success: false, error };
  }
};
