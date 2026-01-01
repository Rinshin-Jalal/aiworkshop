
import { RegistrationData } from '../types';

/**
 * Note: In a real production environment, you would use @supabase/supabase-js
 * For this demo, we simulate the database storage.
 */

const STORAGE_KEY = 'ai_workshop_registrations';

export const saveRegistration = async (data: RegistrationData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Check if Supabase env vars exist (conceptually)
    // If not, we use localStorage to demonstrate "saving"
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const newEntry = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    
    existing.push(newEntry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return { success: true };
  } catch (err) {
    console.error('Supabase Mock Error:', err);
    return { success: false, error: 'Failed to save registration' };
  }
};

export const getRegistrations = (): RegistrationData[] => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
};
