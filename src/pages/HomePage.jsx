import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full bg-[#0D0D0D]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
