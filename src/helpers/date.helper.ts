/**
 * Calculate dynamic years of experience from a start date
 * e.g., '2022-01-01' -> '4+' or dynamic float
 */
export const calculateExperienceYears = (startDateStr: string): { years: number; formatted: string } => {
  const start = new Date(startDateStr);
  const now = new Date();
  
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const exactYears = diffDays / 365.25;
  const floorYears = Math.floor(exactYears);

  return {
    years: exactYears,
    formatted: `${Math.max(4, floorYears)}+ Years`,
  };
};

/**
 * Format date range for projects and employment
 */
export const formatDateRange = (start: string, end?: string): string => {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const startFormatted = formatDate(start);
  const endFormatted = end ? formatDate(end) : 'Present';

  return `${startFormatted} — ${endFormatted}`;
};

