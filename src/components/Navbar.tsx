import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Always smoothly scroll to the exact initial top position
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleMobileProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#F8DCE7]/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#cover"
          onClick={handleScrollToTop}
          className="text-lg font-semibold tracking-tight text-[#29252B] hover:text-[#D76895] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E88CAE] shrink-0" />
          <span>Academic E-Portfolio</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#29252B]/80">
          <a
            href="#cover"
            onClick={handleScrollToTop}
            className="hover:text-[#D76895] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Profile
          </a>
          <a
            href="#qualifications"
            className="hover:text-[#D76895] transition-colors whitespace-nowrap shrink-0"
          >
            Education
          </a>
          <a
            href="#documents"
            className="hover:text-[#D76895] transition-colors whitespace-nowrap shrink-0"
          >
            Documents
          </a>
          <a
            href="#projects"
            className="hover:text-[#D76895] transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-[#D76895] transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-[#D76895] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 compact primary action button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenCV}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#E88CAE] hover:bg-[#D76895] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            title="View Full Curriculum Vitae"
          >
            CV
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#29252B] hover:bg-[#F8DCE7]/40 rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F8DCE7] px-6 py-4 space-y-3 shadow-lg">
          <a
            href="#cover"
            onClick={handleMobileProfileClick}
            className="block text-sm font-medium text-[#29252B] hover:text-[#D76895] py-1 cursor-pointer"
          >
            Personal Profile & Overview
          </a>
          <a
            href="#objective"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#29252B] hover:text-[#D76895] py-1"
          >
            Career Objective
          </a>
          <a
            href="#qualifications"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#29252B] hover:text-[#D76895] py-1"
          >
            Educational Qualifications
          </a>
          <a
            href="#documents"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#29252B] hover:text-[#D76895] py-1"
          >
            Documents
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#29252B] hover:text-[#D76895] py-1"
          >
            Academic Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#29252B] hover:text-[#D76895] py-1"
          >
            Technical Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#29252B] hover:text-[#D76895] py-1"
          >
            Contact Information
          </a>
        </div>
      )}
    </header>
  );
};
