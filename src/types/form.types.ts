export interface InquiryFormData {
  fullName: string;
  businessEmail: string;
  phone?: string;
  serviceInterest: string;
  projectScope: string;
  securityCode?: string;
  budgetRange?: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  strength?: 'weak' | 'medium' | 'strong';
}

export type FormErrors = Partial<Record<keyof InquiryFormData, string>>;

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  duration?: number;
}

