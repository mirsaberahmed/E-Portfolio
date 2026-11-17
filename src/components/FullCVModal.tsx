import React from 'react';
import { X, Printer, ExternalLink, Download } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';
import { 
  DEFAULT_EDUCATION, 
  DEFAULT_ACADEMIC_PROJECTS, 
  TECHNICAL_SKILLS, 
  SOFT_SKILLS,
  VOLUNTEERING,
  LANGUAGES,
  INTERESTS
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#29252B]/80 backdrop-blur-sm p-3 sm:p-6"
    >
      <div className="relative w-full max-w-4xl h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-[#F8DCE7] overflow-hidden">
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#FAF7F2] border-b border-[#F8DCE7]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E88CAE]" />
            <h2 className="text-sm font-semibold text-[#29252B]">
              Curriculum Vitae — {profile.fullName}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/CV_11ad666b.pdf"
              download="Maoun_Billah_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white hover:bg-[#F8DCE7]/50 text-[#29252B] border border-[#E88CAE]/40 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#D76895]" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white hover:bg-[#F8DCE7]/50 text-[#29252B] border border-[#E88CAE]/40 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#D76895]" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-[#29252B] hover:bg-white cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#F5F2EB] p-4 sm:p-8 flex justify-center">
          <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 sm:p-12 border border-slate-200 text-[#29252B] space-y-6 font-sans text-xs sm:text-sm">
            {/* CV Identity */}
            <div className="border-b-2 border-[#E88CAE] pb-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#29252B]">
                    {profile.fullName}
                  </h1>
                  <p className="text-xs text-slate-600 mt-1">
                    {profile.location}
                  </p>
                </div>

                <div className="w-20 h-24 rounded-lg overflow-hidden border border-[#F8DCE7] shrink-0 self-start">
                  <img
                    src={profile.profilePhoto}
                    alt={profile.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CAREER OBJECTIVE */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                CAREER OBJECTIVE
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {profile.aboutMe}
              </p>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-3">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {DEFAULT_EDUCATION.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <span className="font-bold text-[#29252B]">• {edu.degree}</span>
                      <span className="font-mono text-slate-500">{edu.id === 'bsc-cse' ? '2026' : edu.passingYear}</span>
                    </div>
                    <div className="pl-3 text-slate-600">
                      <p>{edu.institution}</p>
                      {edu.id === 'bsc-cse' ? (
                        <>
                          <p>Semester: 12th</p>
                          <p className="font-semibold text-[#D76895]">CGPA: {edu.gpa} | {edu.passingYear}</p>
                        </>
                      ) : (
                        <p className="font-semibold text-[#D76895]">GPA: {edu.gpa} | {edu.passingYear}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700">
                {TECHNICAL_SKILLS.map((cat) => (
                  <div key={cat.categoryName} className="flex flex-col sm:flex-row">
                    <span className="font-bold text-[#29252B] w-32 shrink-0">{cat.categoryName}:</span>
                    <span className="text-slate-600">{cat.items.map((i) => i.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ACADEMIC PROJECTS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2.5">
                ACADEMIC PROJECTS
              </h2>
              <div className="space-y-2 text-xs">
                {DEFAULT_ACADEMIC_PROJECTS.map((proj) => (
                  <div key={proj.id} className="pl-3">
                    <p className="text-slate-700">
                      • <strong className="text-[#29252B]">{proj.title}</strong> — {proj.description}
                    </p>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-[#D76895] hover:underline mt-0.5 ml-2.5"
                      >
                        <span>{proj.githubUrl}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* VOLUNTEERING */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                VOLUNTEERING
              </h2>
              <div className="space-y-1 text-xs text-slate-700 pl-3">
                {VOLUNTEERING.map((vol) => (
                  <p key={vol.organization}>
                    • <strong>{vol.organization}</strong> — {vol.role}
                  </p>
                ))}
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                SOFT SKILLS
              </h2>
              <ul className="space-y-1 text-xs text-slate-700 pl-3">
                {SOFT_SKILLS.map((skill) => (
                  <li key={skill.name}>• {skill.name}</li>
                ))}
              </ul>
            </div>

            {/* LANGUAGES & INTERESTS in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                  LANGUAGES
                </h2>
                <ul className="space-y-1 text-xs text-slate-700 pl-3">
                  {LANGUAGES.map((lang) => (
                    <li key={lang}>• {lang}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#D76895] border-b border-[#F8DCE7] pb-1 mb-2">
                  INTERESTS
                </h2>
                <ul className="space-y-1 text-xs text-slate-700 pl-3">
                  {INTERESTS.map((interest) => (
                    <li key={interest}>• {interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
