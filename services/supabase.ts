
import { createClient } from '@supabase/supabase-js';
import { RegistrationData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const saveRegistration = async (data: RegistrationData): Promise<{ success: boolean; error?: string }> => {
  console.log('=== SAVE REGISTRATION DEBUG ===');
  console.log('Supabase URL:', supabaseUrl ? 'SET' : 'NOT SET');
  console.log('Supabase Key:', supabaseAnonKey ? 'SET' : 'NOT SET');
  console.log('Data to save:', data);

  try {
    const { data: insertData, error } = await supabase
      .from('registrations')
      .insert([{
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        age: data.age,
        gender: data.gender,
        place: data.place,
        college_school: data.collegeSchool || null,
        course: data.course || null,
        motivation: data.motivation || null
      }])
      .select();

    console.log('Insert result:', { insertData, error });

    if (error) {
      console.error('Supabase Error:', error);
      return { success: false, error: error.message };
    }

    console.log('✓ Registration saved successfully:', insertData);
    return { success: true };
  } catch (err) {
    console.error('Supabase Error:', err);
    return { success: false, error: 'Failed to save registration' };
  }
};

export const getRegistrations = async (): Promise<RegistrationData[]> => {
  try {
    const { data, error } = await supabase
      .from('registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase Error:', error);
      return [];
    }

    return data?.map((row: any) => ({
      id: row.id,
      fullName: row.full_name,
      email: row.email,
      phone: row.phone,
      age: row.age,
      gender: row.gender,
      place: row.place,
      collegeSchool: row.college_school,
      course: row.course,
      motivation: row.motivation,
      createdAt: row.created_at
    })) || [];
  } catch (err) {
    console.error('Supabase Error:', err);
    return [];
  }
};
