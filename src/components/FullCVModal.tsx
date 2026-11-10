import React from 'react';
import { X, Printer, Download, Mail, MapPin, Linkedin, Github, Building, GraduationCap } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';
import { 
  DEFAULT_EDUCATION, 
  DEFAULT_PUBLICATIONS, 
  DEFAULT_ACADEMIC_PROJECTS, 
  TECHNICAL_SKILLS, 
  ACHIEVEMENTS_DATA 
} from '../data/defaultPortfolioData';

interface FullCVModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
}

export const FullCVModal: React.FC<FullCVModalProps> = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#29252B]/85 backdrop-blur-sm p-3 sm:p-6"
    >
      <div className="relative w-full max-w-4xl h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-[#F8DCE7] overflow-hidden">
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#FAF7F2] border-b border-[#F8DCE7]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E88CAE]" />
            <h2 className="text-sm font-semibold text-[#29252B]">
              Academic Curriculum Vitae — {profile.fullName}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white hover:bg-[#F8DCE7]/50 text-[#29252B] border border-[#E88CAE]/40 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#D76895]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-[#29252B] hover:bg-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#F5F2EB] p-4 sm:p-8 flex justify-center">
          <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 sm:p-12 border border-slate-200 text-[#29252B] space-y-7 font-sans text-xs sm:text-sm">
            {/* CV Identity */}
            <div className="border-b-2 border-[#E88CAE] pb-6">
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#29252B]">
                {profile.fullName}
              </h1>
              <p className="text-sm font-medium text-[#D76895] mt-1">
                Undergraduate Senior · B.Sc. in Computer Science & Engineering
              </p>
              <p className="text-xs text-slate-500">
                {profile.university} · {profile.department} · Student ID: {profile.studentId}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-3 pt-3 border-t border-[#F8DCE7]/60">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#E88CAE]" />
                  {profile.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#E88CAE]" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-1">
                  <Linkedin className="w-3 h-3 text-[#E88CAE]" />
                  {profile.linkedin}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                Academic Profile & Career Objective
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                {profile.aboutMe}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-3">
                Education History
              </h2>
              <div className="space-y-3">
                {DEFAULT_EDUCATION.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <div className="flex justify-between font-semibold text-[#29252B]">
                      <span>{edu.degree}</span>
                      <span className="font-mono">{edu.period}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>{edu.institution}</span>
                      <span className="font-mono font-medium text-[#D76895]">
                        CGPA: {edu.gpa} / {edu.gpaScale}
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px] mt-0.5">{edu.departmentOrGroup}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Publications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-3">
                Research Publications
              </h2>
              <div className="space-y-3">
                {DEFAULT_PUBLICATIONS.map((pub) => (
                  <div key={pub.id} className="text-xs space-y-0.5">
                    <p className="font-semibold text-[#29252B] leading-snug">
                      "{pub.title}"
                    </p>
                    <p className="text-slate-600">
                      {pub.authors.join(', ')} — <em className="text-[#D76895]">{pub.venue}</em> ({pub.publicationYear}). Status: <strong>{pub.status}</strong>.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-3">
                Selected Academic Projects
              </h2>
              <div className="space-y-3">
                {DEFAULT_ACADEMIC_PROJECTS.map((proj) => (
                  <div key={proj.id} className="text-xs space-y-0.5">
                    <div className="flex justify-between font-semibold text-[#29252B]">
                      <span>{proj.title}</span>
                      <span className="text-slate-500 font-mono text-[11px]">{proj.category}</span>
                    </div>
                    <p className="text-slate-600">{proj.description}</p>
                    <p className="text-slate-400 text-[11px]">
                      <strong>Stack:</strong> {proj.technologies.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                Technical Proficiencies
              </h2>
              <div className="space-y-1 text-xs text-slate-700">
                {TECHNICAL_SKILLS.map((cat) => (
                  <div key={cat.categoryName} className="flex">
                    <span className="w-48 font-medium text-slate-500 shrink-0">{cat.categoryName}:</span>
                    <span>{cat.items.map((i) => i.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Awards */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                Honors & Academic Awards
              </h2>
              <div className="space-y-2 text-xs">
                {ACHIEVEMENTS_DATA.map((ach) => (
                  <div key={ach.id} className="flex justify-between">
                    <div>
                      <span className="font-semibold text-[#29252B]">{ach.title}</span>
                      <span className="text-slate-500"> — {ach.organization}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400 shrink-0">{ach.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
