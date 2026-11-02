import type { ValidationResult } from '../types/form.types';

/**
 * Validates corporate / business email address
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Business email address is required.' };
  }

  const trimmed = email.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid work or corporate email address.' };
  }

  return { isValid: true };
};

/**
 * Validates required field with custom field name
 */
export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value || value.trim().length === 0) {
    return { isValid: false, error: `${fieldName} is required.` };
  }
  return { isValid: true };
};

/**
 * Validates mobile number: strictly 10 digits
 */
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || phone.trim() === '') {
    return { isValid: false, error: 'Mobile number is required (10 digits).' };
  }

  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length !== 10) {
    return {
      isValid: false,
      error: `Mobile number must be exactly 10 digits (currently ${cleanPhone.length}).`,
    };
  }

  if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
    return {
      isValid: false,
      error: 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.',
    };
  }

  return { isValid: true };
};

/**
 * Validates password or security verification key and calculates strength
 */
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: true }; // Security code is optional
  }

  if (password.length < 6) {
    return {
      isValid: false,
      error: 'Security token must be at least 6 characters long.',
      strength: 'weak',
    };
  }

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  let strength: 'weak' | 'medium' | 'strong' = 'weak';
  if (score >= 3) {
    strength = 'strong';
  } else if (score >= 2) {
    strength = 'medium';
  }

  return {
    isValid: true,
    strength,
  };
};

/**
 * Validates minimum character length
 */
export const validateMinLength = (value: string, min: number, fieldName = 'Field'): ValidationResult => {
  if (!value || value.trim().length < min) {
    return {
      isValid: false,
      error: `${fieldName} must be at least ${min} characters long (currently ${value ? value.trim().length : 0}).`,
    };
  }
  return { isValid: true };
};
