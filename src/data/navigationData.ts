import type { NavItem } from '../types/portfolio.types';

export const navigationLinks: NavItem[] = [
  { label: 'Executive Overview', href: '#hero' },
  { label: 'Leadership & Vision', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack', badge: 'Java & Angular' },
  { label: 'Services', href: '#services' },
  { label: 'Enterprise Projects', href: '#projects' },
  { label: 'Connect / Inquiry', href: '#inquiry', isAction: true },
];

export const quickContactInfo = {
  email: 'saurabh.techbiharinnovations@gmail.com',
  company: 'Tech Bihar Innovations',
  location: 'Patna, Bihar & Remote Worldwide',
  availability: 'Available for Executive Consulting & High-Impact Engineering Roles',
  whatsappDirect: 'https://wa.me/916200043032?text=Hello%20Saurabh%2C%20reaching%20out%20via%20your%20Executive%20Portfolio.'
};
