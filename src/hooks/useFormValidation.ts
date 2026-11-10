import { useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import type { InquiryFormData, FormErrors } from '../types/form.types';
import { validateEmail, validateRequired, validatePhone, validateMinLength, validatePassword } from '../helpers/validation.helper';
import { sanitizeInput } from '../helpers/string.helper';

const initialFormData: InquiryFormData = {
  fullName: '',
  businessEmail: '',
  phone: '',
  serviceInterest: 'Enterprise Java 21 & Spring Boot Microservices Ecosystems',
  projectScope: '',
  securityCode: '',
  budgetRange: '$5,000 - $15,000',
};

interface UseFormValidationReturn {
  formData: InquiryFormData;
  errors: FormErrors;
  touched: Partial<Record<keyof InquiryFormData, boolean>>;
  isSubmitting: boolean;
  isSuccess: boolean;
  errorMessage: string | null;
  securityStrength: 'weak' | 'medium' | 'strong' | null;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<boolean>;
  resetForm: () => void;
  setFieldValue: (field: keyof InquiryFormData, value: string) => void;
}

export const useFormValidation = (onSuccessCallback?: (data: InquiryFormData) => void): UseFormValidationReturn => {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof InquiryFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [securityStrength, setSecurityStrength] = useState<'weak' | 'medium' | 'strong' | null>(null);

  const validateField = (name: keyof InquiryFormData, value: string): string | undefined => {
    switch (name) {
      case 'fullName': {
        const req = validateRequired(value, 'Full Name');
        if (!req.isValid) return req.error;
        const min = validateMinLength(value, 3, 'Full Name');
        return min.isValid ? undefined : min.error;
      }
      case 'businessEmail': {
        const emailVal = validateEmail(value);
        return emailVal.isValid ? undefined : emailVal.error;
      }
      case 'phone': {
        const phoneVal = validatePhone(value);
        return phoneVal.isValid ? undefined : phoneVal.error;
      }
      case 'serviceInterest': {
        const req = validateRequired(value, 'Service Interest');
        return req.isValid ? undefined : req.error;
      }
      case 'projectScope': {
        const req = validateRequired(value, 'Project Scope');
        if (!req.isValid) return req.error;
        const min = validateMinLength(value, 20, 'Project Scope description');
        return min.isValid ? undefined : min.error;
      }
      case 'securityCode': {
        if (!value) return undefined;
        const passVal = validatePassword(value);
        setSecurityStrength(passVal.strength || null);
        return passVal.isValid ? undefined : passVal.error;
      }
      default:
        return undefined;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For phone field: strictly digits only, max 10 characters
    let processedValue = value;
    if (name === 'phone') {
      processedValue = value.replace(/\D/g, '').slice(0, 10);
    } else {
      processedValue = sanitizeInput(value);
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    if (name === 'securityCode') {
      const passCheck = validatePassword(processedValue);
      setSecurityStrength(passCheck.strength || null);
    }

    // Real-time validation if field has been touched
    if (touched[name as keyof InquiryFormData]) {
      const fieldError = validateField(name as keyof InquiryFormData, processedValue);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const fieldError = validateField(name as keyof InquiryFormData, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const setFieldValue = (field: keyof InquiryFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsSuccess(false);
    setErrorMessage(null);
    setSecurityStrength(null);
  };

  const scrollToFirstError = (fieldErrors: FormErrors) => {
    const fieldsOrder: Array<keyof InquiryFormData> = [
      'fullName',
      'businessEmail',
      'phone',
      'serviceInterest',
      'projectScope',
      'securityCode'
    ];

    const firstInvalidField = fieldsOrder.find((f) => Boolean(fieldErrors[f]));
    if (firstInvalidField) {
      // Find element by name or id
      const targetElement = (
        document.querySelector(`[name="${firstInvalidField}"]`) ||
        document.getElementById(firstInvalidField)
      ) as HTMLElement | null;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          targetElement.focus();
        }, 300);
      }
    }
  };

  const handleSubmit = async (e: FormEvent): Promise<boolean> => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Validate all required fields
    const newErrors: FormErrors = {};
    let hasError = false;

    const requiredFields: Array<keyof InquiryFormData> = [
      'fullName',
      'businessEmail',
      'phone',
      'serviceInterest',
      'projectScope'
    ];

    requiredFields.forEach((field) => {
      const err = validateField(field, formData[field] || '');
      if (err) {
        newErrors[field] = err;
        hasError = true;
      }
    });

    if (formData.securityCode) {
      const secErr = validateField('securityCode', formData.securityCode);
      if (secErr) {
        newErrors.securityCode = secErr;
        hasError = true;
      }
    }

    // Mark all required fields as touched
    setTouched({
      fullName: true,
      businessEmail: true,
      phone: true,
      serviceInterest: true,
      projectScope: true,
      securityCode: Boolean(formData.securityCode),
    });

    setErrors(newErrors);

    if (hasError) {
      setIsSubmitting(false);
      setErrorMessage('Please fill in all required fields accurately.');
      // Auto-redirect / scroll and focus the first invalid field
      scrollToFirstError(newErrors);
      return false;
    }

    try {
      // Simulate brief processing
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSuccess(true);
      setIsSubmitting(false);
      if (onSuccessCallback) {
        onSuccessCallback(formData);
      }
      return true;
    } catch {
      setIsSubmitting(false);
      setErrorMessage('Failed to send transmission. You can reach Saurabh directly at 6200043032');
      return false;
    }
  };

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    errorMessage,
    securityStrength,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
  };
};
