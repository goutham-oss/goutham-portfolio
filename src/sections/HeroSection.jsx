import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  const liquidPillRef = useRef(null);
  const liquidBlobRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!liquidPillRef.current || !liquidBlobRef.current) return;
    const rect = liquidPillRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    liquidBlobRef.current.style.left = `${x}px`;
    liquidBlobRef.current.style.top = `${y}px`;
  };

  return (
    <main
      id="hero"
      className="relative w-full h-screen min-h-[720px] max-h-screen overflow-hidden bg-[#0D0D0D] select-none"
    >
      {/* Centered Hero Image Container */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-none">
        <img
          alt="Goutham Raj seated in front of monumental typography Portfolio"
          className="w-full h-full object-contain object-center contrast-[1.03] brightness-[0.98] select-none pointer-events-none"
          src="/assets/image1.png"
        />
        {/* Gradient vignettes for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/95 via-[#0D0D0D]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/85 via-[#0D0D0D]/40 to-transparent pointer-events-none" />
      </div>

      {/* Content Layering */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none pt-16">
        <div className="h-6" />

        {/* Side Coordinates Badge (Desktop) */}
        <div className="hidden xl:block absolute right-12 lg:right-20 top-1/2 -translate-y-1/2 z-20 pointer-events-none reveal-delay-3 text-right">
          <div className="text-[10px] tracking-[0.35em] text-[#8E8E8E]/60 uppercase font-mono space-y-2">
            <p>17.3850° N, 78.4867° E</p>
            <p className="text-[#8E8E8E]/40">SYSTEM STATUS: OPTIMAL</p>
            <div className="w-12 h-[1px] bg-[#2B2B2B] ml-auto mt-3" />
          </div>
        </div>

        {/* Hero Main Content Block */}
        <div className="my-auto px-6 md:px-12 lg:px-20 xl:px-24 pt-4 pb-8 max-w-xl flex flex-col justify-center pointer-events-auto">
          <div className="reveal-delay-1 flex items-center gap-3 mb-3">
            <div className="w-5 h-[1px] bg-[#8E8E8E]/60" />
            <p className="font-sans uppercase text-xs tracking-[0.25em] text-[#8E8E8E] font-semibold">
              GOUTHAM RAJ
            </p>
          </div>

          <h1 className="reveal-delay-2 font-serif font-light text-[#E6E6E6] leading-[0.94] text-5xl md:text-6xl tracking-tight mb-2 drop-shadow-sm">
            AI/ML × FULL-STACK
            <br />
            <span className="italic font-normal">DEVELOPER</span>
          </h1>

          <p className="reveal-delay-3 font-sans font-light text-[#8E8E8E] text-sm md:text-base leading-relaxed max-w-md mt-3 mb-7 drop-shadow">
            Building intelligent products, full-stack applications, and thoughtful digital experiences.
          </p>

          <div className="reveal-delay-4 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-7">
            <button
              ref={liquidPillRef}
              onMouseMove={handleMouseMove}
              onClick={() => navigate('/projects')}
              className="liquid-pill group rounded-full px-8 py-4 border bg-[#0D0D0D]/80 backdrop-blur-md text-[#E6E6E6] text-xs uppercase tracking-spaced_cta cursor-pointer inline-flex items-center gap-3 overflow-hidden shadow-2xl focus:outline-none"
              aria-label="View My Work"
            >
              <span ref={liquidBlobRef} className="liquid-blob" />
              <span className="liquid-text font-medium text-[#E6E6E6]">VIEW MY WORK</span>
              <svg
                aria-hidden="true"
                className="liquid-icon relative z-10 w-3.5 h-3.5 stroke-[#E6E6E6] transition-all duration-300 transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="h-12 pointer-events-none" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 lg:right-20 z-20 flex flex-col items-center gap-3 reveal-delay-5 pointer-events-none">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#8E8E8E]/70 [writing-mode:vertical-rl] rotate-180 font-mono">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-12 bg-[#2B2B2B]/80 relative overflow-hidden">
            <div className="scroll-indicator-line w-full h-full bg-[#E6E6E6]" />
          </div>
        </div>
      </div>
    </main>
  );
}
