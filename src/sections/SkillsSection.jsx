import React, { useState, useEffect, useRef } from 'react';
import SkillsCursorField from '../components/SkillsCursorField';
import SilverPerimeter from '../components/SilverPerimeter';

const SKILL_CATEGORIES = [
  {
    number: '01',
    title: 'PROGRAMMING',
    skills: [
      { name: 'Java', level: '90%' },
      { name: 'Python', level: '85%' },
      { name: 'SQL', level: '80%' },
    ],
  },
  {
    number: '02',
    title: 'BACKEND',
    skills: [
      { name: 'Spring Boot', level: '85%' },
      { name: 'Spring Security', level: '80%' },
      { name: 'REST APIs', level: '85%' },
      { name: 'JWT Authentication', level: '80%' },
      { name: 'BCrypt', level: '75%' },
      { name: 'MVC', level: '75%' },
    ],
  },
  {
    number: '03',
    title: 'FRONTEND',
    skills: [
      { name: 'React.js', level: '85%' },
      { name: 'HTML5', level: '90%' },
      { name: 'CSS3', level: '85%' },
      { name: 'Bootstrap', level: '80%' },
    ],
  },
  {
    number: '04',
    title: 'AI / MACHINE LEARNING',
    skills: [
      { name: 'Machine Learning', level: '80%' },
      { name: 'Scikit-learn', level: '75%' },
      { name: 'Data Analytics', level: '75%' },
    ],
  },
  {
    number: '05',
    title: 'DATABASE',
    skills: [
      { name: 'MySQL', level: '85%' },
      { name: 'DBMS', level: '80%' },
    ],
  },
  {
    number: '06',
    title: 'TOOLS & TECHNOLOGIES',
    skills: [
      { name: 'Git', level: '85%' },
      { name: 'GitHub', level: '85%' },
      { name: 'Maven', level: '75%' },
      { name: 'Postman', level: '80%' },
    ],
  },
];

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setBarsAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-[#0D0D0D] text-[#E6E6E6] py-28 md:py-36 lg:py-40 px-6 md:px-12 lg:px-20 xl:px-24 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Interactive Cursor Ring Field */}
      <SkillsCursorField />

      <div className="max-w-[1560px] mx-auto relative z-10">
        {/* Section Top Header Marker Grid */}
        <div className="flex items-center justify-between pb-8 mb-16 md:mb-20 border-b border-[#2B2B2B]/40">
          <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] font-mono uppercase text-[#E6E6E6] font-medium">
            <span>03 / TECHNICAL SKILLS</span>
            <div className="hidden sm:block w-16 md:w-32 h-[1px] bg-[#2B2B2B]" />
          </div>
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] font-mono uppercase text-[#8E8E8E]">
            CAPABILITIES × FRAMEWORKS × PROFICIENCIES
          </div>
        </div>

        {/* Section Masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#E6E6E6] leading-none select-none mb-4">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <h3 className="font-sans text-xs md:text-sm tracking-[0.2em] font-semibold text-[#8E8E8E] uppercase mb-2">
              TOOLS FOR IDEAS. BUILT FOR IMPACT.
            </h3>
            <p className="font-sans text-sm text-[#8E8E8E] leading-relaxed font-light">
              A curated index of programming languages, architectures, frameworks, and tools applied
              across production-ready applications, intelligent models, and robust full-stack platforms.
            </p>
          </div>
        </div>

        {/* 2 × 3 Card Grid */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={cat.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="skill-card relative p-8 md:p-10 bg-[#0D0D0D] border border-[#2B2B2B]/40 rounded-sm flex flex-col justify-between transition-all duration-300 min-h-[380px]"
              >
                {/* Silver Animated Perimeter on Hover */}
                {isHovered && <SilverPerimeter />}

                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#2B2B2B]/40">
                    <span className="font-mono text-xs tracking-[0.25em] text-[#8E8E8E]">
                      {cat.number} /
                    </span>
                    <h4 className="font-sans text-sm tracking-[0.25em] font-semibold uppercase text-[#E6E6E6]">
                      {cat.title}
                    </h4>
                  </div>

                  {/* Familiarity Rows */}
                  <div className="space-y-6">
                    {cat.skills.map((s) => (
                      <div key={s.name} className="space-y-2">
                        <div className="flex items-center justify-between text-xs tracking-wider font-mono">
                          <span className="text-[#E6E6E6] font-medium">{s.name}</span>
                          <span className="text-[#8E8E8E]">{s.level}</span>
                        </div>
                        {/* Familiarity Bar */}
                        <div className="w-full h-[2px] bg-[#2B2B2B] rounded-full overflow-hidden">
                          <div
                            className="skill-bar-fill h-full bg-gradient-to-r from-[#8E8E8E] to-[#E6E6E6]"
                            style={{
                              width: barsAnimated ? s.level : '0%',
                              transition: 'width 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Marker */}
                <div className="pt-8 mt-8 border-t border-[#2B2B2B]/20 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] uppercase text-[#8E8E8E]/60">
                  <span>SYS_ID: {cat.number}</span>
                  <span>PROFICIENCY INDEX</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spread Bottom Footer Marker */}
        <div className="mt-20 md:mt-28 pt-8 border-t border-[#2B2B2B]/40 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-[#8E8E8E]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#E6E6E6] rounded-full" />
            <span>03 — TECHNICAL MASTERY</span>
          </div>
          <div className="hidden sm:block text-right">
            CONTINUOUS EVOLUTION × SYSTEM ARCHITECTURE
          </div>
        </div>
      </div>
    </section>
  );
}
