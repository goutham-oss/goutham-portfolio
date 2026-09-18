import React, { useRef } from 'react';

export default function AboutSection() {
  const frameRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!frameRef.current || !imgRef.current) return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    imgRef.current.style.transform = `scale(1.04) translate(${x * 14}px, ${y * 14}px)`;
  };

  const handleMouseLeave = () => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = 'scale(1) translate(0px, 0px)';
  };

  return (
    <section
      id="about"
      className="relative w-full bg-[#E6E6E6] text-[#0D0D0D] py-28 md:py-36 lg:py-40 px-6 md:px-12 lg:px-20 xl:px-24 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Spread 02 Top Header Grid */}
        <div className="flex items-center justify-between pb-8 mb-16 md:mb-24 border-b border-[#2B2B2B]/20">
          <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] font-mono uppercase text-[#0D0D0D] font-medium">
            <span>02 / ABOUT</span>
            <div className="hidden sm:block w-16 md:w-32 h-[1px] bg-[#2B2B2B]/30" />
          </div>
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] font-mono uppercase text-[#8E8E8E]">
            PEOPLE × PRODUCTS × PROGRESS
          </div>
        </div>

        {/* Editorial Grid with Portrait Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-24 items-start">
          {/* LEFT SIDE: Portrait Frame */}
          <div className="lg:col-span-5 xl:col-span-5 relative">
            <div className="flex items-stretch gap-4 md:gap-6">
              <div className="hidden sm:flex items-center justify-center select-none">
                <span className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-[#8E8E8E] [writing-mode:vertical-rl] rotate-180 font-mono whitespace-nowrap">
                  DEVELOPER × PROBLEM SOLVER × LIFELONG LEARNER
                </span>
              </div>

              {/* Portrait Container */}
              <div
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative flex-1 overflow-hidden bg-[#2B2B2B]/10 cursor-pointer aspect-[2/3] w-full max-h-[850px] shadow-[0_24px_70px_-15px_rgba(13,13,13,0.22)]"
                id="portrait-frame"
              >
                <img
                  ref={imgRef}
                  alt="Goutham Raj - Portrait"
                  className="w-full h-full object-cover object-center grayscale contrast-[1.06] transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                  id="portrait-img"
                  src="/assets/image2.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                  <div className="bg-[#0D0D0D]/90 backdrop-blur-md px-4 py-2.5 text-[#E6E6E6] border border-[#2B2B2B]">
                    <p className="font-sans text-[10px] tracking-[0.25em] font-semibold uppercase">
                      GOUTHAM RAJ
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.18em] text-[#8E8E8E] uppercase mt-0.5">
                      PORTRAIT · 02
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-[#E6E6E6]/80 tracking-widest hidden sm:block">
                    FIGURE [01]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Editorial Content */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between pt-2 lg:pt-0">
            <div>
              <h2 className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-[#0D0D0D] leading-[0.9] select-none mb-7">
                ABOUT ME
              </h2>
              <div className="w-16 h-[1px] bg-[#0D0D0D] mb-12" />
            </div>

            <div className="mb-10">
              <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#0D0D0D] uppercase leading-snug">
                I BUILD AT THE INTERSECTION OF CODE, INTELLIGENCE AND EXPERIENCE.
              </h3>
            </div>

            <div className="space-y-6 text-[#0D0D0D] text-[17.5px] leading-[1.78] font-normal max-w-2xl">
              <p>
                I'm <strong className="text-[#0D0D0D] font-semibold">Goutham Raj</strong>, a B.Tech
                student specializing in AI/ML with a strong interest in full-stack and frontend
                development. I enjoy turning ideas into functional products — from intelligent
                applications and machine-learning systems to interactive web experiences.
              </p>
              <p>
                My approach is simple: understand the problem, build thoughtfully, and keep
                improving the experience until technology feels natural to use.
              </p>
            </div>

            <div className="my-14 pl-7 border-l-2 border-[#0D0D0D]">
              <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#0D0D0D] leading-snug tracking-tight font-light">
                “Currently learning. Constantly building.”
              </blockquote>
            </div>

            {/* Capability 3-Column Ledger */}
            <div className="pt-12 border-t border-[#2B2B2B]/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
                <div className="group pr-4">
                  <div className="font-mono text-xs text-[#8E8E8E] tracking-widest uppercase mb-1.5">
                    01 —
                  </div>
                  <h4 className="font-serif text-2xl font-medium tracking-tight text-[#0D0D0D] mb-3">
                    FRONTEND
                  </h4>
                  <p className="font-sans text-sm text-[#2B2B2B] leading-relaxed tracking-wide">
                    Interfaces
                    <br />
                    Interaction
                    <br />
                    Experiences
                  </p>
                </div>

                <div className="group sm:border-l sm:border-[#2B2B2B]/20 sm:pl-8 pr-4">
                  <div className="font-mono text-xs text-[#8E8E8E] tracking-widest uppercase mb-1.5">
                    02 —
                  </div>
                  <h4 className="font-serif text-2xl font-medium tracking-tight text-[#0D0D0D] mb-3">
                    FULL-STACK
                  </h4>
                  <p className="font-sans text-sm text-[#2B2B2B] leading-relaxed tracking-wide">
                    Systems
                    <br />
                    APIs
                    <br />
                    Scalable Products
                  </p>
                </div>

                <div className="group sm:border-l sm:border-[#2B2B2B]/20 sm:pl-8">
                  <div className="font-mono text-xs text-[#8E8E8E] tracking-widest uppercase mb-1.5">
                    03 —
                  </div>
                  <h4 className="font-serif text-2xl font-medium tracking-tight text-[#0D0D0D] mb-3">
                    AI / ML
                  </h4>
                  <p className="font-sans text-sm text-[#2B2B2B] leading-relaxed tracking-wide">
                    Models
                    <br />
                    Intelligence
                    <br />
                    Real World Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spread 02 Bottom Footer Marker */}
        <div className="mt-24 md:mt-32 pt-8 border-t border-[#2B2B2B]/20 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-[#8E8E8E]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full" />
            <span>02 — IDEAS TO IMPACT</span>
          </div>
          <div className="hidden sm:block text-right">
            STUDENT × BUILDER × CREATIVE TECH
          </div>
        </div>
      </div>
    </section>
  );
}
