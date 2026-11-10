import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, MessageSquare, ShieldCheck, Sparkles, Copy, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../../data/profileData';
import { servicesData } from '../../data/servicesData';
import { useFormValidation } from '../../hooks/useFormValidation';
import { SectionWrapper } from '../common/SectionWrapper';
import { Input, PasswordInput, TextArea, Select, Button, Card, Badge, Heading, Text } from '../ui';
import type { ToastMessage, InquiryFormData } from '../../types/form.types';

export interface InquirySectionProps {
  selectedServicePreset?: string;
}

const WHATSAPP_NUMBER = '916200043032';
const DISPLAY_PHONE = '+91 6200043032';

export const InquirySection: React.FC<InquirySectionProps> = ({ selectedServicePreset }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>('');

  const buildWhatsAppUrl = (data: InquiryFormData): string => {
    const textLines = [
      `*🚀 New Executive Project Inquiry - Tech Bihar Innovations*`,
      ``,
      `*👤 Client Name:* ${data.fullName}`,
      `*📧 Corporate Email:* ${data.businessEmail}`,
      `*📱 Mobile Number:* ${data.phone}`,
      `*🎯 Selected Service:* ${data.serviceInterest}`,
      `*💰 Budget / Scope Range:* ${data.budgetRange || 'Not specified'}`,
      ``,
      `*📝 Project Scope & Architecture Requirements:*`,
      `${data.projectScope}`,
      ...(data.securityCode ? [``, `*🔐 Security Code:* ${data.securityCode}`] : []),
      ``,
      `— Dispatched from Saurabh Kumar's Executive Portfolio`
    ];

    const encodedMessage = encodeURIComponent(textLines.join('\n'));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  const {
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
  } = useFormValidation((submittedData) => {
    // 1. Generate formatted WhatsApp message URL for 6200043032
    const waUrl = buildWhatsAppUrl(submittedData);
    setGeneratedWhatsAppUrl(waUrl);

    // 2. Fire celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#10b981', '#3b82f6', '#f59e0b'],
      });
    } catch {
      // safe fallback
    }

    // 3. Automatically open WhatsApp conversation in new tab
    window.open(waUrl, '_blank');

    // 4. Show success toast notification
    setToast({
      id: Date.now().toString(),
      type: 'success',
      title: 'WhatsApp Message Ready!',
      message: `Inquiry details prepared for Saurabh Kumar (+91 6200043032). WhatsApp window opening now.`,
      duration: 6000,
    });
  });

  // Update serviceInterest if preset changed from service cards
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFieldValue('serviceInterest', selectedServicePreset);
    }
  }, [selectedServicePreset, setFieldValue]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('6200043032');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const serviceOptions = servicesData.map((s) => ({
    value: s.title,
    label: s.title,
  }));

  const budgetOptions = [
    { value: '< $5,000', label: 'Consultation & Architecture Audit (< $5,000)' },
    { value: '$5,000 - $15,000', label: 'Mid-Scale Implementation ($5,000 - $15,000)' },
    { value: '$15,000 - $50,000', label: 'Enterprise Platform Architecture ($15,000 - $50,000)' },
    { value: '$50,000+', label: 'Long-term Enterprise Partnership ($50,000+)' },
  ];

  return (
    <SectionWrapper
      id="inquiry"
      badge="Direct Executive Channel"
      badgeVariant="cyan"
      title="Initiate Strategic"
      accentTitle="Partnership & RFP."
      subtitle="Have an ambitious enterprise roadmap, need to decouple a mission-critical monolith, or seeking fractional CTO advisory? Connect directly with Saurabh Kumar."
      hasGlow
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Credentials & Fallback info */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="glass" glowEffect="cyan" className="p-8 border-slate-800/80 bg-slate-900/50 space-y-6">
            <div className="space-y-2">
              <Badge variant="cyan" size="sm" dot>
                Direct Access
              </Badge>
              <Heading level="h3" className="text-xl sm:text-2xl text-slate-100 font-bold">
                Direct Communication Coordinates
              </Heading>
              <Text variant="body" className="text-sm text-slate-300 leading-relaxed">
                Submit the technical brief below to dispatch your project specifications directly to Saurabh&apos;s verified WhatsApp channel, or connect immediately through executive coordinates.
              </Text>
            </div>

            {/* WhatsApp Box with Direct Number 6200043032 */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-700/40 space-y-2 shadow-glow-emerald/10">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Official WhatsApp &amp; Call:
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy Number'}</span>
                </button>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-base sm:text-lg font-mono font-bold text-slate-100">
                  {DISPLAY_PHONE}
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Direct Line
                </span>
              </div>

              <p className="text-xs text-slate-300">
                Forms submitted on this page are instantly delivered to Saurabh on WhatsApp at this number.
              </p>

              <div className="pt-1">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Saurabh%2C%20reaching%20out%20via%20your%20Executive%20Portfolio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10"
                    rightIcon={<Send className="w-3 h-3" />}
                  >
                    Open WhatsApp Chat Directly
                  </Button>
                </a>
              </div>
            </div>

            {/* Email Box with One-Click Copy */}
            <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  Official Executive Inbox:
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${profileData.email}`}
                className="block text-sm sm:text-base font-mono font-medium text-slate-100 hover:text-cyan-300 transition-colors break-all"
              >
                {profileData.email}
              </a>
            </div>

            {/* SLA Commitment */}
            <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Executive SLA &amp; Confidentiality Guarantee</span>
              </div>
              <p className="leading-relaxed">
                Guaranteed response within 2 hours for enterprise inquiries. Strict non-disclosure (NDA) and intellectual property confidentiality observed for all technical briefs.
              </p>
            </div>
          </Card>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <Card variant="glass" glowEffect="cyan" className="p-8 sm:p-10 border-slate-800 bg-slate-900/40">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-glow-emerald">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <Heading level="h3" className="text-2xl text-slate-100">
                    Transmission Dispatched to WhatsApp!
                  </Heading>
                  <Text variant="lead" className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
                    Your brief has been formatted and directed to Saurabh Kumar at <span className="text-emerald-400 font-mono font-bold">{DISPLAY_PHONE}</span>.
                  </Text>
                </div>

                {/* WhatsApp Action Highlight Banner */}
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 max-w-md mx-auto text-left space-y-3">
                  <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-bold">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Message Summary</span>
                  </div>
                  <div className="text-xs font-mono text-slate-300 space-y-1">
                    <div><strong>Recipient:</strong> Saurabh Kumar ({DISPLAY_PHONE})</div>
                    <div><strong>Client:</strong> {formData.fullName}</div>
                    <div><strong>Email:</strong> {formData.businessEmail}</div>
                    <div><strong>Mobile:</strong> {formData.phone}</div>
                    <div><strong>Target:</strong> {formData.serviceInterest}</div>
                  </div>
                  <div className="pt-1">
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block"
                    >
                      <Button
                        variant="glow"
                        size="md"
                        fullWidth
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Click to Open WhatsApp Chat
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <Button variant="secondary" size="md" onClick={resetForm}>
                    Send Another Transmission
                  </Button>
                  <a href={`mailto:${profileData.email}`}>
                    <Button variant="outline" size="md" rightIcon={<Mail className="w-4 h-4" />}>
                      Send Copy to Email
                    </Button>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-slate-800 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    Enterprise Project Brief &amp; Architectural Scoping
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct line to Founder &amp; CEO, Tech Bihar Innovations. Submitting this brief formats your specifications for immediate review and WhatsApp dispatch.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Form Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Full Name / Executive Contact"
                    name="fullName"
                    placeholder="e.g. Rahul Sharma"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.fullName ? errors.fullName : undefined}
                  />

                  <Input
                    label="Corporate / Work Email"
                    name="businessEmail"
                    type="email"
                    placeholder="name@company.com"
                    required
                    leftIcon={<Mail className="w-4 h-4" />}
                    value={formData.businessEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.businessEmail ? errors.businessEmail : undefined}
                  />
                </div>

                {/* Form Row 2: Phone & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Mobile Number (10 Digits)"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="e.g. 9876543210"
                    required
                    leftIcon={<Phone className="w-4 h-4" />}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone ? errors.phone : undefined}
                    helperText="Strictly 10 digits required"
                  />

                  <Select
                    label="Estimated Engagement Scope / Budget"
                    name="budgetRange"
                    options={budgetOptions}
                    value={formData.budgetRange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                {/* Form Row 3: Service Selection */}
                <Select
                  label="Target Architecture / Service Focus"
                  name="serviceInterest"
                  required
                  options={serviceOptions}
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.serviceInterest ? errors.serviceInterest : undefined}
                />

                {/* Form Row 4: Project Scope */}
                <TextArea
                  label="Project Scope & Architecture Requirements"
                  name="projectScope"
                  placeholder="Detail your requirements (e.g., migrating monolith to Java Spring Boot microservices, building Angular 17 corporate console, throughput targets, timeline expectations)..."
                  required
                  maxCharacters={1200}
                  value={formData.projectScope}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.projectScope ? errors.projectScope : undefined}
                  helperText="Minimum 20 characters required to provide adequate context for review."
                />

                {/* Form Row 5: Security Verification */}
                <PasswordInput
                  label="Security Verification Key (Optional client token)"
                  name="securityCode"
                  placeholder="Enter custom passcode or leave blank"
                  value={formData.securityCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  strength={securityStrength}
                  showStrengthIndicator={Boolean(formData.securityCode)}
                  error={touched.securityCode ? errors.securityCode : undefined}
                  helperText="Optional client-side security key for encrypted transmission logs."
                />

                {/* Submit Action */}
                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto min-w-[220px]"
                  >
                    Submit Technical Brief
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Toast Notification display */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl bg-obsidian-950 border border-emerald-500/40 shadow-2xl flex items-start gap-3 backdrop-blur-xl"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-100 font-mono">{toast.title}</h4>
              <p className="text-xs text-slate-300 leading-normal">{toast.message}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-slate-500 hover:text-slate-300 text-xs ml-auto p-1 cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};
