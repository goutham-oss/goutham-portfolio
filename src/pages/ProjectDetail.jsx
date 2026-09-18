import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PROJECTS_DATA = {
  attendance: {
    number: '01',
    category: 'FULL-STACK DEVELOPMENT',
    ref: 'REF: AMS-PROD-2024',
    title: 'ATTENDANCE MANAGEMENT SYSTEM',
    status: 'COMPLETED / STABLE',
    summary:
      'A full-stack attendance management system designed to manage attendance across multiple academic batches with dedicated workflows for students, teachers, and administrators.',
    github: 'https://github.com/goutham-oss/attendance_management',
    overview:
      'Designed to replace outdated paper registries and ad-hoc attendance sheets with an automated, role-governed web application. The platform provides transparent attendance tracking, automated percentage computations, and structured analytics for institutional stakeholders.',
    specs: [
      { label: 'ROLE MANAGEMENT', value: 'Granular permissions for Administrator, Teacher, and Student roles.' },
      { label: 'BATCH SCHEDULING', value: 'Multi-batch support with subject-to-faculty mapping and semester tracking.' },
      { label: 'ATTENDANCE LEDGER', value: 'Session-wise attendance mark & lock with audit trail capability.' },
      { label: 'REPORTING ENGINE', value: 'Real-time percentage statistics, shortage alerts, and CSV exports.' },
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf', 'Bootstrap'],
    architecture:
      'Engineered around a layered MVC design pattern. Spring Security handles authentication and role authorization. The persistence layer leverages Spring Data JPA over MySQL for ACID compliance, while the presentation tier uses Thymeleaf and responsive CSS components.',
  },
  'ai-voice-assistant': {
    number: '02',
    category: 'AI / VOICE / AUTOMATION',
    ref: 'REF: AVA-AI-2024',
    title: 'AI VOICE ASSISTANT',
    status: 'PROTOTYPE / OPERATIONAL',
    summary:
      'An intelligent desktop voice assistant capable of speech recognition, natural language query processing, and automated desktop operations executed directly on the OS.',
    github: 'https://github.com/goutham-oss/ai-voice-assistant',
    overview:
      'A lightweight desktop automation companion that listens to spoken audio commands, parses intent, and dispatches OS-level instructions. Designed to streamline common developer and workstation workflows without needing mouse or keyboard input.',
    specs: [
      { label: 'SPEECH CAPTURE', value: 'Real-time microphone audio sampling with noise reduction filtering.' },
      { label: 'INTENT PARSER', value: 'Rule-based and pattern matching parser for query classification.' },
      { label: 'SYSTEM AUTOMATION', value: 'Launches desktop apps, manages browser tasks, and controls media.' },
      { label: 'AUDIO SYNTHESIS', value: 'Low-latency text-to-speech audio feedback for seamless conversational interaction.' },
    ],
    tech: ['Python', 'SpeechRecognition', 'Pyttsx3', 'Subprocess APIs', 'Web Scraping'],
    architecture:
      'Built as an asynchronous event-driven loop: Audio Stream Ingestion → Acoustic Filtering → Speech Recognition Engine → Intent Parsing & Matching → Subsystem Dispatcher → Text-to-Speech synthesizer.',
  },
  'dev-ai': {
    number: '03',
    category: 'AI / DESKTOP AUTOMATION',
    ref: 'REF: DEVAI-WIP-2026',
    title: 'DEV-AI',
    status: 'UNDER DEVELOPMENT',
    summary:
      'An experimental AI system under active development, designed to explore desktop workflow automation, intelligent developer assistance, and local AI agent interaction.',
    github: 'https://github.com/goutham-oss/DEV-AI',
    overview:
      'An ambitious exploration into local developer assistance. DEV-AI aims to provide an intelligent agentic partner that can navigate directory trees, inspect logs, automate terminal tasks, and assist in routine engineering chores through structured reasoning loops.',
    specs: [
      { label: 'AGENTIC WORKFLOWS', value: 'Multi-step goal decomposition and self-correcting tool call loops.' },
      { label: 'LOCAL LLM BACKEND', value: 'Designed to operate with local or low-latency LLM inference endpoints.' },
      { label: 'WORKSPACE SAFETY', value: 'Sandbox isolation and permission prompts for critical file operations.' },
      { label: 'TERMINAL IPC', value: 'Direct process communication for non-interactive shell command orchestration.' },
    ],
    tech: ['Python', 'Local LLMs', 'Agentic Workflows', 'OS IPC', 'Tool Calling'],
    architecture:
      'Current architecture prototype employs an autonomous loop consisting of Context Extractor → Plan Generator → Tool Executor → Observation Validator. Actively in prototyping phase.',
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS_DATA[id] || PROJECTS_DATA['attendance'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E6E6E6] pt-24 pb-16 selection:bg-[#E6E6E6] selection:text-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-8">
        {/* Top Back Nav */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#444748]/30 font-mono text-xs uppercase tracking-widest text-[#8E9192]">
          <Link
            to="/projects"
            className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors"
          >
            <span>←</span>
            <span>BACK TO PROJECTS</span>
          </Link>
          <span>{project.ref}</span>
        </div>

        {/* Header Metadata */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#C8C6C5] tracking-widest uppercase mb-4">
          <span className="font-serif text-3xl text-[#FFFFFF] leading-none">{project.number}</span>
          <span>/</span>
          <span>{project.category}</span>
          <span className="ml-auto px-3 py-1 bg-[#1C1B1B] border border-[#444748]/40 text-[10px] text-[#FFFFFF]">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-7xl text-[#FFFFFF] tracking-tight uppercase leading-[0.95] mb-8">
          {project.title}
        </h1>

        {/* Summary */}
        <p className="font-sans text-lg md:text-xl text-[#C4C7C8] font-light leading-relaxed max-w-3xl mb-12 pb-8 border-b border-[#444748]/30">
          {project.summary}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFFFFF] text-[#0D0D0D] font-mono text-xs tracking-widest uppercase font-semibold transition-transform hover:scale-[1.02]"
          >
            <span>VIEW REPOSITORY</span>
            <span>↗</span>
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#444748] text-[#FFFFFF] font-mono text-xs tracking-widest uppercase hover:border-[#FFFFFF] transition-colors"
          >
            <span>ALL PROJECTS</span>
          </Link>
        </div>

        {/* Grid Sections: Overview & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#8E9192]">
              OVERVIEW & PROBLEM DEFINITION
            </h2>
            <p className="font-sans text-base text-[#C4C7C8] font-light leading-relaxed">
              {project.overview}
            </p>

            <h2 className="font-mono text-xs uppercase tracking-widest text-[#8E9192] pt-6">
              SYSTEM ARCHITECTURE
            </h2>
            <p className="font-sans text-sm text-[#C4C7C8] font-light leading-relaxed">
              {project.architecture}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#8E9192]">
              TECHNOLOGY SPECIFICATION
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-[#1C1B1B] text-[#FFFFFF] font-mono text-xs border border-[#444748]/40"
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="font-mono text-xs uppercase tracking-widest text-[#8E9192] pt-6">
              SYSTEM CAPABILITIES
            </h2>
            <div className="space-y-4 font-sans text-xs">
              {project.specs.map((s) => (
                <div key={s.label} className="p-3 bg-[#1C1B1B]/60 border border-[#444748]/20">
                  <div className="font-mono text-[10px] text-[#8E9192] tracking-wider mb-1">
                    {s.label}
                  </div>
                  <div className="text-[#C4C7C8] leading-relaxed">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-[#444748]/30">
          <Footer isDark={true} />
        </div>
      </div>
    </div>
  );
}
