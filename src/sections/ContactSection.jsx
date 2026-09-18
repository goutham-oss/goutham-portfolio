import React, { useRef } from 'react';
import Footer from '../components/Footer';

export default function ContactSection() {
  const geoBgRef = useRef(null);
  const portraitFrameRef = useRef(null);
  const portraitImgRef = useRef(null);

  const handleSectionMouseMove = (e) => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    if (geoBgRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      geoBgRef.current.style.transform = `translate(${x * 16}px, ${y * 16}px)`;
    }
  };

  const handleSectionMouseLeave = () => {
    if (geoBgRef.current) {
      geoBgRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  const handlePortraitMouseMove = (e) => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced || !portraitFrameRef.current || !portraitImgRef.current) return;

    const rect = portraitFrameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    portraitImgRef.current.style.transform = `scale(1.03) translate(${x * 10}px, ${y * 10}px)`;
  };

  const handlePortraitMouseLeave = () => {
    if (!portraitImgRef.current) return;
    portraitImgRef.current.style.transform = 'scale(1) translate(0px, 0px)';
  };

  return (
    <section
      id="contact"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="relative w-full bg-[#E6E6E6] text-[#0D0D0D] pt-28 md:pt-36 lg:pt-40 pb-16 px-6 md:px-12 lg:px-20 xl:px-24 transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle Geometric Background */}
      <div
        ref={geoBgRef}
        id="contact-geometric-bg"
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden transition-transform duration-700 ease-out"
      >
        <svg
          className="w-full h-full object-cover"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1600 1200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="800" cy="750" r="280" stroke="#8E8E8E" strokeOpacity="0.16" strokeWidth="1" />
          <circle cx="800" cy="750" r="440" stroke="#8E8E8E" strokeOpacity="0.14" strokeWidth="1" />
          <circle cx="800" cy="750" r="620" stroke="#8E8E8E" strokeOpacity="0.1" strokeWidth="1" />
          <circle cx="800" cy="750" r="820" stroke="#8E8E8E" strokeOpacity="0.08" strokeWidth="1" />
          <path d="M 200 400 A 700 700 0 0 1 1200 1100" stroke="#2B2B2B" strokeOpacity="0.12" strokeWidth="1" />
          <path d="M 900 100 A 900 900 0 0 1 1700 900" stroke="#8E8E8E" strokeOpacity="0.14" strokeWidth="1" />
          <circle cx="690" cy="630" fill="#0D0D0D" opacity="0.35" r="3" />
          <circle cx="1500" cy="880" fill="#0D0D0D" opacity="0.4" r="3" />
          <line stroke="#2B2B2B" strokeOpacity="0.2" strokeWidth="1" x1="785" x2="815" y1="750" y2="750" />
          <line stroke="#2B2B2B" strokeOpacity="0.2" strokeWidth="1" x1="800" x2="800" y1="735" y2="765" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1560px] mx-auto">
        {/* Contact Top Header Marker Grid */}
        <div className="flex items-center justify-between pb-8 mb-16 md:mb-24 border-b border-[#2B2B2B]/20">
          <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] font-mono uppercase text-[#0D0D0D] font-medium">
            <span>04 / CONTACT</span>
            <div className="hidden sm:block w-16 md:w-32 h-[1px] bg-[#2B2B2B]/30" />
          </div>
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] font-mono uppercase text-[#8E8E8E]">
            OPEN TO OPPORTUNITIES × COLLABORATION × BUILDING
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-20 items-start mb-24 md:mb-32">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-[#0D0D0D] leading-[0.88] select-none mb-6">
                LET'S
                <br />
                CONNECT.
              </h2>
              <div className="w-16 h-[1px] bg-[#0D0D0D] mb-8" />
              <p className="font-sans text-lg md:text-xl text-[#2B2B2B] font-light max-w-sm mb-12">
                Have an idea, an opportunity, or something worth building?
              </p>
            </div>

            {/* Portrait in Contact */}
            <div className="relative group max-w-sm mt-4">
              <div
                ref={portraitFrameRef}
                onMouseMove={handlePortraitMouseMove}
                onMouseLeave={handlePortraitMouseLeave}
                className="relative overflow-hidden bg-[#2B2B2B]/10 rounded-sm aspect-[4/5] shadow-xl"
                id="contact-portrait-frame"
              >
                <img
                  ref={portraitImgRef}
                  alt="Goutham Raj looking at camera"
                  className="w-full h-full object-cover object-top grayscale contrast-[1.08] transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03]"
                  id="contact-portrait-img"
                  src="/assets/image3.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Floating tag */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="bg-[#0D0D0D]/90 backdrop-blur-md px-3 py-1 text-[#E6E6E6] font-mono text-[9px] tracking-[0.2em] uppercase border border-[#2B2B2B]">
                    GOUTHAM RAJ / CONTACT · 04
                  </span>
                  <span className="hidden sm:inline font-mono text-[9px] text-[#0D0D0D]/70 tracking-widest uppercase bg-[#E6E6E6]/80 px-2 py-0.5">
                    ACTIVE NOW
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4 text-[10px] font-mono tracking-[0.25em] text-[#8E8E8E] uppercase">
                <span>IDEAS</span>
                <span>·</span>
                <span>CONVERSATIONS</span>
                <span>·</span>
                <span>OPPORTUNITIES</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-2 lg:pt-4">
            <div className="space-y-6 mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-baseline pb-8 border-b border-[#2B2B2B]/20">
                <h3 className="sm:col-span-5 font-sans text-xs md:text-sm tracking-[0.2em] font-semibold text-[#0D0D0D] uppercase leading-relaxed">
                  BUILDING SOLUTIONS FOR A BRIGHTER TOMORROW.
                </h3>
                <p className="sm:col-span-7 font-sans text-sm md:text-base text-[#2B2B2B] leading-relaxed font-light">
                  I'm currently open to Software Engineering opportunities, collaborations, or just a
                  good conversation about technology, products, or ideas that can make a real impact.
                </p>
              </div>
            </div>

            {/* Contact Ledger Rows */}
            <div className="divide-y divide-[#2B2B2B]/20 border-b border-[#2B2B2B]/20 mb-12">
              {/* EMAIL */}
              <a
                className="group py-6 flex items-center justify-between transition-colors hover:pl-2 duration-300"
                href="mailto:gouthamvangari4420@gmail.com"
              >
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8E8E8E] group-hover:text-[#0D0D0D]">
                  EMAIL
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-base md:text-lg text-[#0D0D0D] font-medium group-hover:underline underline-offset-4">
                    gouthamvangari4420@gmail.com
                  </span>
                  <span className="font-sans text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    ↗
                  </span>
                </div>
              </a>

              {/* PHONE */}
              <a
                className="group py-6 flex items-center justify-between transition-colors hover:pl-2 duration-300"
                href="tel:8688734420"
              >
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8E8E8E] group-hover:text-[#0D0D0D]">
                  PHONE
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-base md:text-lg text-[#0D0D0D] font-medium group-hover:underline underline-offset-4">
                    8688734420
                  </span>
                  <span className="font-sans text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    ↗
                  </span>
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                className="group py-6 flex items-center justify-between transition-colors hover:pl-2 duration-300"
                href="https://linkedin.com/in/goutham-raj"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8E8E8E] group-hover:text-[#0D0D0D]">
                  LINKEDIN
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-base md:text-lg text-[#0D0D0D] font-medium group-hover:underline underline-offset-4">
                    Goutham Raj
                  </span>
                  <span className="font-sans text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    ↗
                  </span>
                </div>
              </a>

              {/* GITHUB */}
              <a
                className="group py-6 flex items-center justify-between transition-colors hover:pl-2 duration-300"
                href="https://github.com/goutham"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8E8E8E] group-hover:text-[#0D0D0D]">
                  GITHUB
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-base md:text-lg text-[#0D0D0D] font-medium group-hover:underline underline-offset-4">
                    Goutham
                  </span>
                  <span className="font-sans text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    ↗
                  </span>
                </div>
              </a>
            </div>

            {/* Magnetic CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-14">
              <a
                className="group relative inline-flex items-center justify-center px-9 py-5 bg-[#0D0D0D] text-[#E6E6E6] rounded-sm text-xs uppercase tracking-[0.25em] font-medium shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                href="mailto:gouthamvangari4420@gmail.com"
                id="magneticCta"
              >
                <span className="relative z-10 flex items-center gap-3">
                  START A CONVERSATION
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#8E8E8E] uppercase">
                OR JUST SAY HI. I REPLY SOON.
              </span>
            </div>

            {/* Quote & Location */}
            <div className="pt-8 border-t border-[#2B2B2B]/20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <blockquote className="font-serif italic text-xl md:text-2xl text-[#0D0D0D] max-w-md font-light leading-snug pl-4 border-l-2 border-[#0D0D0D]">
                “Building, learning, and looking for the next problem worth solving.”
              </blockquote>
              <div className="text-left sm:text-right font-mono text-[11px] tracking-[0.25em] text-[#0D0D0D] uppercase">
                <p className="font-semibold">HYDERABAD</p>
                <p className="text-[#8E8E8E]">INDIA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer isDark={false} />
      </div>
    </section>
  );
}
