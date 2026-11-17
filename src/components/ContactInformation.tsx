import React from 'react';
import { Building2, GraduationCap, Mail, ArrowUp, BookOpen, ExternalLink } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface ContactInformationProps {
  profile: StudentProfile;
}

const UNIVERSITY_EMAIL = '22-48813-3@student.aiub.edu';

export const ContactInformation: React.FC<ContactInformationProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      <div className="bg-white rounded-3xl border border-[#F8DCE7] p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D76895] block mb-1">
              Academic Contact
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#29252B] mb-1.5">
              {profile.fullName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {profile.university} · Department of {profile.department}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#F8DCE7] text-xs font-medium text-slate-700">
              <GraduationCap className="w-4 h-4 text-[#E88CAE]" />
              <span>{profile.university}</span>
            </div>
          </div>

          {/* University Name, Department & Varsity Mail Only */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#F8DCE7] text-xs text-[#29252B]">
              <div className="p-1.5 rounded-lg bg-white text-[#D76895] shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#E88CAE]" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[9px] text-slate-400 block uppercase font-medium">University Name</span>
                <span className="font-semibold text-[#29252B] truncate block">{profile.university}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#F8DCE7] text-xs text-[#29252B]">
              <div className="p-1.5 rounded-lg bg-white text-[#D76895] shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-[#E88CAE]" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[9px] text-slate-400 block uppercase font-medium">Department</span>
                <span className="font-medium text-slate-700 truncate block">
                  Department of {profile.department}
                </span>
              </div>
            </div>

            <a
              href={`mailto:${UNIVERSITY_EMAIL}`}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 border border-[#F8DCE7] hover:border-[#E88CAE] transition-colors text-xs text-[#29252B] group"
            >
              <div className="p-1.5 rounded-lg bg-white text-[#D76895] shadow-xs">
                <Mail className="w-3.5 h-3.5 text-[#E88CAE]" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[9px] text-slate-400 block uppercase font-medium">University Email</span>
                <span className="font-mono font-semibold truncate block group-hover:text-[#D76895] transition-colors">
                  {UNIVERSITY_EMAIL}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D76895]" />
            </a>
          </div>
        </div>

        {/* Bottom Academic Footer & Back to Top */}
        <div className="pt-5 border-t border-[#F8DCE7]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#E88CAE]" />
            <span>
              {profile.university} · Department of {profile.department}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 font-medium text-[#D76895] hover:underline cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
