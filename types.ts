
export interface RegistrationData {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  place: string;
  collegeSchool?: string;
  course?: string;
  motivation?: string;
  createdAt?: string;
}

export interface RecommendationResponse {
  path: string;
  reason: string;
}
