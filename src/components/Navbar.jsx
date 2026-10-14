import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor section visibility and determine nav theme
  useEffect(() => {
    if (location.pathname.startsWith('/projects')) {
      setTheme('dark');
      setActiveSection('projects');
      return;
    }

    const hero = document.getElementById('hero');
    const about = document.getElementById('about');
    const skills = document.getElementById('skills');
    const contact = document.getElementById('contact');

    if (!about || !skills || !contact) {
      setTheme('dark');
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 90;
      const contactTop = contact.offsetTop;
      const skillsTop = skills.offsetTop;
      const aboutTop = about.offsetTop;

      if (scrollPos >= contactTop) {
        setTheme('light');
        setActiveSection('contact');
      } else if (scrollPos >= skillsTop) {
        setTheme('dark');
        setActiveSection('skills');
      } else if (scrollPos >= aboutTop) {
        setTheme('light');
        setActiveSection('about');
      } else {
        setTheme('dark');
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const navHeight = 70;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - (sectionId === 'hero' ? 0 : navHeight);
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (sectionId === 'hero' ? 0 : navHeight);
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const isLight = theme === 'light';

  return (
    <>
      <header
        id="global-header"
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 flex items-center justify-between text-xs py-5 transition-all duration-400 backdrop-blur-md ${
          isLight
            ? 'bg-[#E6E6E6]/90 border-b border-[#0D0D0D]/10 text-[#0D0D0D]'
            : 'bg-[#0D0D0D]/85 border-b border-[#E6E6E6]/10 text-[#E6E6E6]'
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <span
            className={`w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125 ${
              isLight ? 'bg-[#0D0D0D]' : 'bg-[#E6E6E6]'
            }`}
          />
          <span
            className={`font-mono text-[11px] md:text-xs tracking-[0.25em] uppercase font-semibold transition-colors duration-300 ${
              isLight ? 'text-[#0D0D0D]' : 'text-[#E6E6E6]'
            }`}
          >
            GOUTHAM RAJ
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] font-mono">
          <Link
            to="/projects"
            className={`transition-colors duration-200 ${
              location.pathname.startsWith('/projects')
                ? isLight ? 'text-[#0D0D0D] font-semibold' : 'text-[#E6E6E6] font-semibold'
                : isLight
                ? 'text-[#2B2B2B] hover:text-[#0D0D0D]'
                : 'text-[#8E8E8E] hover:text-[#E6E6E6]'
            }`}
          >
            WORK
          </Link>

          <button
            onClick={() => scrollToSection('about')}
            className={`cursor-pointer transition-colors duration-200 focus:outline-none ${
              location.pathname === '/' && activeSection === 'about'
                ? isLight ? 'text-[#0D0D0D] font-semibold' : 'text-[#E6E6E6] font-semibold'
                : isLight
                ? 'text-[#2B2B2B] hover:text-[#0D0D0D]'
                : 'text-[#8E8E8E] hover:text-[#E6E6E6]'
            }`}
          >
            ABOUT
          </button>

          <button
            onClick={() => scrollToSection('skills')}
            className={`cursor-pointer transition-colors duration-200 focus:outline-none ${
              location.pathname === '/' && activeSection === 'skills'
                ? isLight ? 'text-[#0D0D0D] font-semibold' : 'text-[#E6E6E6] font-semibold'
                : isLight
                ? 'text-[#2B2B2B] hover:text-[#0D0D0D]'
                : 'text-[#8E8E8E] hover:text-[#E6E6E6]'
            }`}
          >
            SKILLS
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={`cursor-pointer transition-colors duration-200 focus:outline-none ${
              location.pathname === '/' && activeSection === 'contact'
                ? isLight ? 'text-[#0D0D0D] font-semibold' : 'text-[#E6E6E6] font-semibold'
                : isLight
                ? 'text-[#2B2B2B] hover:text-[#0D0D0D]'
                : 'text-[#8E8E8E] hover:text-[#E6E6E6]'
            }`}
          >
            CONTACT
          </button>
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center px-4 py-1.5 border rounded-full font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
              isLight
                ? 'border-[#0D0D0D]/40 text-[#0D0D0D] hover:border-[#0D0D0D] bg-[#0D0D0D]/5'
                : 'border-[#E6E6E6]/40 text-[#E6E6E6] hover:border-[#E6E6E6] bg-[#2B2B2B]/40'
            }`}
          >
            RESUME
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors focus:outline-none cursor-pointer ${
              isLight ? 'text-[#0D0D0D]' : 'text-[#E6E6E6]'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 text-center transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link
          to="/projects"
          onClick={() => setMobileMenuOpen(false)}
          className="font-mono text-base tracking-[0.3em] uppercase text-[#8E8E8E] hover:text-[#E6E6E6] transition-colors"
        >
          WORK
        </Link>
        <button
          onClick={() => scrollToSection('about')}
          className="font-mono text-base tracking-[0.3em] uppercase text-[#8E8E8E] hover:text-[#E6E6E6] transition-colors focus:outline-none"
        >
          ABOUT
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="font-mono text-base tracking-[0.3em] uppercase text-[#8E8E8E] hover:text-[#E6E6E6] transition-colors focus:outline-none"
        >
          SKILLS
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="font-mono text-base tracking-[0.3em] uppercase text-[#8E8E8E] hover:text-[#E6E6E6] transition-colors focus:outline-none"
        >
          CONTACT
        </button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 px-6 py-2.5 border border-[#E6E6E6]/40 rounded-full font-mono text-xs tracking-[0.25em] uppercase text-[#E6E6E6]"
        >
          RESUME
        </a>
      </div>
    </>
  );
}
