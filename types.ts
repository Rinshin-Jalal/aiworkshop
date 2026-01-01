
export interface RegistrationData {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  labOption: 'Vibe Coding' | 'Studying & Research' | 'General';
  motivation?: string;
  createdAt?: string;
}

export enum LabOption {
  VIBE_CODING = 'Vibe Coding & App Development',
  RESEARCH = 'Studying & Research with AI',
}

export interface RecommendationResponse {
  path: string;
  reason: string;
}
