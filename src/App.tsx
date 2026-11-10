import React, { useState } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useSkeletonLoader } from './hooks/useSkeletonLoader';
import { Navbar, Footer } from './components/common';
import { servicesData } from './data/servicesData';
import {
  HeroSection,
  AboutSection,
  TechStackSection,
  ServicesSection,
  ProjectsSection,
  InquirySection,
} from './components/sections';
import {
  HeroSkeleton,
  AboutSkeleton,
  TechStackSkeleton,
  ServicesSkeleton,
  ProjectsSkeleton,
  InquirySkeleton,
} from './components/skeletons';

const sectionIds = ['hero', 'about', 'tech-stack', 'services', 'projects', 'inquiry'];

export const App: React.FC = () => {
  const activeSection = useScrollSpy(sectionIds, 150);
  const { isLoading } = useSkeletonLoader(0);
  const [selectedService, setSelectedService] = useState<string>(servicesData[0].title);

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-obsidian-900 text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {isLoading ? (
          /* High-Fidelity Skeleton Loader Initial State */
          <div className="space-y-12 pt-16">
            <HeroSkeleton />
            <AboutSkeleton />
            <TechStackSkeleton />
            <ServicesSkeleton />
            <ProjectsSkeleton />
            <InquirySkeleton />
          </div>
        ) : (
          /* Live Executive Portfolio */
          <div className="space-y-6">
            <HeroSection />
            <AboutSection />
            <TechStackSection />
            <ServicesSection onSelectService={handleServiceSelect} />
            <ProjectsSection />
            <InquirySection selectedServicePreset={selectedService} />
          </div>
        )}
      </main>

      {/* Executive Footer */}
      <Footer />
    </div>
  );
};

export default App;
