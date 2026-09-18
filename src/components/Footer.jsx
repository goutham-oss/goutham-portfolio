import React from 'react';

export default function Footer({ isDark = false }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-[0.28em] uppercase ${
        isDark
          ? 'border-[#444748]/30 text-[#8E8E8E]'
          : 'border-[#2B2B2B]/20 text-[#8E8E8E]'
      }`}
    >
      <div>© 2026 GOUTHAM RAJ</div>
      <div className={`text-center ${isDark ? 'text-[#C4C7C8]' : 'text-[#2B2B2B]'}`}>
        AI/ML × FULL-STACK DEVELOPER
      </div>
      <div>
        <button
          onClick={scrollToTop}
          className={`transition-colors flex items-center gap-1 cursor-pointer focus:outline-none ${
            isDark ? 'hover:text-[#FFFFFF]' : 'hover:text-[#0D0D0D]'
          }`}
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}
