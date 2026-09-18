import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState('01');
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-project');
            if (id) setActiveProject(id);
          }
        });
      },
      { threshold: 0.35 }
    );

    [card1Ref.current, card2Ref.current, card3Ref.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (id) => {
    const el = document.getElementById(`project-${id}`);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#E6E6E6] pt-24 pb-16 overflow-x-hidden selection:bg-[#E6E6E6] selection:text-[#0D0D0D]">
      {/* Architectural Coordinate Grid & Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-12 left-8 font-mono text-[11px] text-[#444748]/50 tracking-widest uppercase">
          LAT: 12.9716° N / LON: 77.5946° E · REF: ARCHIVE_V26
        </div>
        <div className="absolute top-96 right-8 font-mono text-[11px] text-[#444748]/40 tracking-widest uppercase hidden lg:block">
          SYS: MONOLITH · FLD: 1000/1000 · RES: ZERO_DEV
        </div>

        {/* Top Right Blueprint Geometric Vector */}
        <svg
          aria-hidden="true"
          className="absolute top-24 -right-48 w-[640px] h-[640px] text-[#444748]/15 stroke-current fill-none"
          viewBox="0 0 600 600"
        >
          <circle cx="300" cy="300" r="280" strokeDasharray="4 8" strokeWidth="1" />
          <circle cx="300" cy="300" r="200" strokeWidth="1" />
          <circle cx="300" cy="300" r="120" strokeDasharray="2 6" strokeWidth="0.75" />
          <line strokeWidth="0.5" x1="20" x2="580" y1="300" y2="300" />
          <line strokeWidth="0.5" x1="300" x2="300" y1="20" y2="580" />
        </svg>

        {/* Bottom Left Blueprint Geometric Vector */}
        <svg
          aria-hidden="true"
          className="absolute bottom-40 -left-64 w-[720px] h-[720px] text-[#444748]/10 stroke-current fill-none"
          viewBox="0 0 600 600"
        >
          <circle cx="300" cy="300" r="290" strokeWidth="0.75" />
          <circle cx="300" cy="300" r="190" strokeDasharray="8 8" strokeWidth="1" />
          <rect height="240" strokeWidth="0.5" width="240" x="180" y="180" />
          <line strokeWidth="0.5" x1="0" x2="600" y1="0" y2="600" />
        </svg>
      </div>

      {/* Sticky Right Progress Index (Desktop) */}
      <aside
        aria-label="Project Quick Index"
        className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4"
      >
        <div className="font-mono text-[10px] text-[#8E9192] tracking-widest [writing-mode:vertical-rl] rotate-180 uppercase opacity-60">
          CATALOGUE INDEX
        </div>
        <div className="h-12 w-[1px] bg-[#444748]/40" />

        <button
          onClick={() => scrollToCard('01')}
          className="group flex items-center gap-2 transition-all cursor-pointer focus:outline-none"
          aria-label="Go to Project 01"
        >
          <span
            className={`font-mono text-[11px] transition-colors ${
              activeProject === '01' ? 'text-[#FFFFFF] font-semibold' : 'text-[#8E9192] group-hover:text-[#FFFFFF]'
            }`}
          >
            01
          </span>
          <div
            className={`w-1.5 h-1.5 transition-all ${
              activeProject === '01' ? 'bg-[#FFFFFF] scale-125' : 'bg-[#444748]/60 group-hover:bg-[#FFFFFF]'
            }`}
          />
        </button>

        <button
          onClick={() => scrollToCard('02')}
          className="group flex items-center gap-2 transition-all cursor-pointer focus:outline-none"
          aria-label="Go to Project 02"
        >
          <span
            className={`font-mono text-[11px] transition-colors ${
              activeProject === '02' ? 'text-[#FFFFFF] font-semibold' : 'text-[#8E9192] group-hover:text-[#FFFFFF]'
            }`}
          >
            02
          </span>
          <div
            className={`w-1.5 h-1.5 transition-all ${
              activeProject === '02' ? 'bg-[#FFFFFF] scale-125' : 'bg-[#444748]/60 group-hover:bg-[#FFFFFF]'
            }`}
          />
        </button>

        <button
          onClick={() => scrollToCard('03')}
          className="group flex items-center gap-2 transition-all cursor-pointer focus:outline-none"
          aria-label="Go to Project 03"
        >
          <span
            className={`font-mono text-[11px] transition-colors ${
              activeProject === '03' ? 'text-[#FFFFFF] font-semibold' : 'text-[#8E9192] group-hover:text-[#FFFFFF]'
            }`}
          >
            03
          </span>
          <div
            className={`w-1.5 h-1.5 transition-all ${
              activeProject === '03' ? 'bg-[#FFFFFF] scale-125' : 'bg-[#444748]/60 group-hover:bg-[#FFFFFF]'
            }`}
          />
        </button>

        <div className="h-12 w-[1px] bg-[#444748]/40" />
      </aside>

      {/* Page Masthead */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-20 relative z-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between text-[#8E9192] border-b border-[#444748]/30 pb-3 font-mono text-[11px] uppercase tracking-widest">
            <span>03 / WORK</span>
            <span className="hidden sm:inline-block">SELECTED ARCHIVES — REPOSITORIES</span>
            <span>INDEX 2024–2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-baseline">
            <div className="lg:col-span-8">
              <h1 className="font-serif italic font-normal text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FFFFFF] tracking-tighter uppercase leading-none">
                SELECTED
                <br />
                PROJECTS
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="font-mono text-[11px] text-[#C8C6C5] tracking-widest uppercase mb-3">
                THREE PROJECTS.
                <br />
                DIFFERENT PROBLEMS.
                <br />
                ONE APPROACH.
              </p>
              <p className="font-sans text-sm text-[#C4C7C8] font-light leading-relaxed">
                A selection of systems, intelligent applications, and software experiments built
                across full-stack development, AI, automation, and real-world problem solving.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Projects Collection */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-24 relative z-10 pb-24">
        {/* ======================================================== */}
        {/* PROJECT 01: ATTENDANCE MANAGEMENT SYSTEM                 */}
        {/* ======================================================== */}
        <article
          id="project-01"
          ref={card1Ref}
          data-project="01"
          className="group relative bg-[#0E0E0E] border border-[#444748]/40 transition-transform duration-500 hover:-translate-y-1 p-6 md:p-12 rounded-sm"
        >
          <div className="flex items-center justify-between border-b border-[#444748]/30 pb-3 mb-8 font-mono text-[11px] text-[#8E9192] tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[#FFFFFF] leading-none">01</span>
              <span className="text-[#444748]">/</span>
              <span className="text-[#C8C6C5]">FULL-STACK DEVELOPMENT</span>
            </div>
            <div className="text-[#444748] uppercase">REF: AMS-PROD-2024</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight uppercase leading-[0.95] mb-5">
                  ATTENDANCE
                  <br />
                  MANAGEMENT
                  <br />
                  SYSTEM
                </h2>
                <p className="font-sans text-sm md:text-base text-[#C4C7C8] max-w-lg mb-8 leading-relaxed font-light">
                  A full-stack attendance management system designed to manage attendance across
                  multiple academic batches with dedicated workflows for students, teachers, and
                  administrators.
                </p>
              </div>

              {/* Abstract Vector Specimen (No Mockups) */}
              <div
                aria-hidden="true"
                className="w-full h-24 bg-[#1C1B1B] border border-[#444748]/20 p-4 flex items-center justify-between my-6"
              >
                <div className="flex flex-col justify-center">
                  <span className="font-mono text-[9px] text-[#8E9192] tracking-widest">
                    SYSTEM PIPELINE
                  </span>
                  <span className="font-mono text-xs text-[#FFFFFF] font-medium tracking-wider">
                    BATCH_REGISTRY → DAILY_LEDGER
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] text-[#C4C7C8] tracking-widest uppercase">
                    ACTIVE NODE
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://github.com/goutham-oss/attendance_management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#444748] bg-[#1C1B1B] text-[#FFFFFF] font-mono text-xs tracking-widest uppercase transition-colors hover:border-[#FFFFFF] hover:bg-[#201F1F]"
                >
                  <span>GITHUB</span>
                  <span>↗</span>
                </a>
                <Link
                  to="/projects/attendance"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#FFFFFF] text-[#0D0D0D] font-mono text-xs tracking-widest uppercase font-semibold transition-transform hover:translate-x-1"
                >
                  <span>LEARN MORE</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Ledger & Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#444748]/30 pt-8 lg:pt-0 lg:pl-10">
              <div className="divide-y divide-[#444748]/30 font-sans text-xs">
                {/* Core Problem */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    CORE PROBLEM
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    Inefficient, error-prone paper-based attendance tracking across multiple
                    academic batches, lacking centralized record keeping and analytics.
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    KEY CAPABILITIES
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    Multi-batch scheduling, role-based dashboards (Admin, Faculty, Student), automated
                    percentage calculations, and daily reporting.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="py-4 space-y-2">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    TECH STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf', 'Bootstrap'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#1C1B1B] text-[#C4C7C8] font-mono text-[10px] border border-[#444748]/40"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Architecture */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    ARCHITECTURE
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    Layered MVC Architecture with RESTful APIs, Session Management, and Role-Based
                    Access Control (RBAC).
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#444748]/30 flex items-center justify-between font-mono text-[9px] text-[#8E9192] uppercase tracking-widest">
                <span>STAGE: COMPLETED</span>
                <span>STATUS: STABLE</span>
              </div>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* PROJECT 02: AI VOICE ASSISTANT                           */}
        {/* ======================================================== */}
        <article
          id="project-02"
          ref={card2Ref}
          data-project="02"
          className="group relative bg-[#0E0E0E] border border-[#444748]/40 transition-transform duration-500 hover:-translate-y-1 p-6 md:p-12 rounded-sm"
        >
          <div className="flex items-center justify-between border-b border-[#444748]/30 pb-3 mb-8 font-mono text-[11px] text-[#8E9192] tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[#FFFFFF] leading-none">02</span>
              <span className="text-[#444748]">/</span>
              <span className="text-[#C8C6C5]">AI / VOICE / AUTOMATION</span>
            </div>
            <div className="text-[#444748] uppercase">REF: AVA-AI-2024</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight uppercase leading-[0.95] mb-5">
                  AI VOICE
                  <br />
                  ASSISTANT
                </h2>
                <p className="font-sans text-sm md:text-base text-[#C4C7C8] max-w-lg mb-8 leading-relaxed font-light">
                  An intelligent desktop voice assistant capable of speech recognition, natural
                  language query processing, and automated desktop operations executed directly on
                  the OS.
                </p>
              </div>

              {/* Abstract Acoustic Waveform Specimen */}
              <div
                aria-hidden="true"
                className="w-full h-24 bg-[#1C1B1B] border border-[#444748]/20 p-4 flex items-center justify-between my-6"
              >
                <div className="flex flex-col justify-center">
                  <span className="font-mono text-[9px] text-[#8E9192] tracking-widest">
                    ACOUSTIC PIPELINE
                  </span>
                  <span className="font-mono text-xs text-[#FFFFFF] font-medium tracking-wider">
                    SPEECH_STREAM → INTENT_DISPATCHER
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-3 bg-[#FFFFFF]" />
                  <div className="w-1 h-6 bg-[#FFFFFF]" />
                  <div className="w-1 h-4 bg-[#FFFFFF]" />
                  <div className="w-1 h-7 bg-[#FFFFFF]" />
                  <div className="w-1 h-2 bg-[#FFFFFF]" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://github.com/goutham-oss/ai-voice-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#444748] bg-[#1C1B1B] text-[#FFFFFF] font-mono text-xs tracking-widest uppercase transition-colors hover:border-[#FFFFFF] hover:bg-[#201F1F]"
                >
                  <span>GITHUB</span>
                  <span>↗</span>
                </a>
                <Link
                  to="/projects/ai-voice-assistant"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#FFFFFF] text-[#0D0D0D] font-mono text-xs tracking-widest uppercase font-semibold transition-transform hover:translate-x-1"
                >
                  <span>LEARN MORE</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Ledger & Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#444748]/30 pt-8 lg:pt-0 lg:pl-10">
              <div className="divide-y divide-[#444748]/30 font-sans text-xs">
                {/* Core Problem */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    CORE PROBLEM
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    Executing routine repetitive desktop tasks manually introduces context switching
                    and inefficiency.
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    KEY CAPABILITIES
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    Speech-to-text conversion, system command execution, browser search automation,
                    and text-to-speech audio feedback.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="py-4 space-y-2">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    TECH STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SpeechRecognition', 'Pyttsx3', 'Subprocess', 'Web Scraping'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#1C1B1B] text-[#C4C7C8] font-mono text-[10px] border border-[#444748]/40"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Architecture */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    ARCHITECTURE
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    Pipeline Architecture: Audio Stream Ingestion → Intent Parsing & Matching →
                    Execution Dispatcher.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#444748]/30 flex items-center justify-between font-mono text-[9px] text-[#8E9192] uppercase tracking-widest">
                <span>STAGE: PROTOTYPE</span>
                <span>LATENCY: LOW</span>
              </div>
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* PROJECT 03: DEV-AI                                       */}
        {/* ======================================================== */}
        <article
          id="project-03"
          ref={card3Ref}
          data-project="03"
          className="group relative bg-[#0E0E0E] border border-[#444748]/40 transition-transform duration-500 hover:-translate-y-1 p-6 md:p-12 rounded-sm"
        >
          <div className="flex items-center justify-between border-b border-[#444748]/30 pb-3 mb-8 font-mono text-[11px] text-[#8E9192] tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl text-[#FFFFFF] leading-none">03</span>
              <span className="text-[#444748]">/</span>
              <span className="text-[#C8C6C5]">AI / DESKTOP AUTOMATION</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full animate-ping" />
              <span className="text-[#FFFFFF] uppercase font-semibold">UNDER DEVELOPMENT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#FFFFFF] tracking-tight uppercase leading-[0.95] mb-5">
                  DEV-AI
                </h2>
                <p className="font-sans text-sm md:text-base text-[#C4C7C8] max-w-lg mb-8 leading-relaxed font-light">
                  An experimental AI system under active development, designed to explore desktop
                  workflow automation, intelligent developer assistance, and local AI agent
                  interaction.
                </p>
              </div>

              {/* Abstract Agent Node Network Specimen */}
              <div
                aria-hidden="true"
                className="w-full h-24 bg-[#1C1B1B] border border-[#444748]/20 p-4 flex items-center justify-between my-6"
              >
                <div className="flex flex-col justify-center">
                  <span className="font-mono text-[9px] text-[#8E9192] tracking-widest">
                    AGENT GRAPH TOPOLOGY
                  </span>
                  <span className="font-mono text-xs text-[#FFFFFF] font-medium tracking-wider">
                    CORE_AGENT → REASONING_LOOP → TOOL_IPC
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 border border-[#FFFFFF] rounded-full" />
                  <div className="w-4 h-[1px] bg-[#FFFFFF]" />
                  <div className="w-2 h-2 bg-[#FFFFFF] rounded-full" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://github.com/goutham-oss/DEV-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#444748] bg-[#1C1B1B] text-[#FFFFFF] font-mono text-xs tracking-widest uppercase transition-colors hover:border-[#FFFFFF] hover:bg-[#201F1F]"
                >
                  <span>GITHUB REPOSITORY</span>
                  <span>↗</span>
                </a>
                <Link
                  to="/projects/dev-ai"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#FFFFFF] text-[#0D0D0D] font-mono text-xs tracking-widest uppercase font-semibold transition-transform hover:translate-x-1"
                >
                  <span>LEARN MORE</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Ledger & Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#444748]/30 pt-8 lg:pt-0 lg:pl-10">
              <div className="divide-y divide-[#444748]/30 font-sans text-xs">
                {/* Core Problem */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    CORE PROBLEM
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    High cognitive load and context switching during software development,
                    debugging, and local environment management.
                  </p>
                </div>

                {/* Key Objectives */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    KEY OBJECTIVES
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    Autonomous workspace exploration, tool orchestration, natural language
                    command synthesis, and local execution safety guardrails.
                  </p>
                </div>

                {/* Planned Stack */}
                <div className="py-4 space-y-2">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    PLANNED STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Local LLMs', 'Agentic Workflows', 'OS IPC', 'Tool Calling'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#1C1B1B] text-[#C4C7C8] font-mono text-[10px] border border-[#444748]/40"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Current Status */}
                <div className="py-4 space-y-1">
                  <div className="font-mono text-[10px] text-[#8E9192] uppercase tracking-widest">
                    CURRENT STATUS
                  </div>
                  <p className="text-[#C4C7C8] leading-relaxed">
                    Active Architecture Design & Prototype Phase. Not yet for production deployment.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#444748]/30 flex items-center justify-between font-mono text-[9px] text-[#8E9192] uppercase tracking-widest">
                <span>STAGE: IN PROGRESS</span>
                <span>ACCESS: PUBLIC REPO</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* More to Build Section */}
      <section className="w-full border-t border-[#444748]/30 py-24 bg-[#0E0E0E] relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs text-[#8E9192] tracking-widest uppercase mb-2">
              04 / COLLABORATION
            </div>
            <h3 className="font-serif italic text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight uppercase">
              MORE TO BUILD.
            </h3>
            <p className="font-sans text-sm text-[#C4C7C8] mt-2 max-w-md font-light">
              Interested in collaborating, reviewing architecture, or building something together?
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:gouthamvangari4420@gmail.com"
              className="px-8 py-4 bg-[#FFFFFF] text-[#0D0D0D] font-mono text-xs tracking-widest uppercase font-semibold transition-transform hover:scale-[1.02]"
            >
              START A CONVERSATION →
            </a>
            <Link
              to="/"
              className="px-6 py-4 border border-[#444748] text-[#FFFFFF] font-mono text-xs tracking-widest uppercase transition-colors hover:border-[#FFFFFF]"
            >
              RETURN HOME
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Footer */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 pt-8">
        <Footer isDark={true} />
      </div>
    </div>
  );
}
