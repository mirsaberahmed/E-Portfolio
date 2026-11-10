import React from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink, GraduationCap, ArrowUp } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface ContactInformationProps {
  profile: StudentProfile;
}

export const ContactInformation: React.FC<ContactInformationProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          06
        </span>
        <div>
          <span className="text-xs font-semibold tracking-wider text-[#D76895] uppercase block">
            Direct Academic Channels
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252B]">
            Contact Information
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-[#F8DCE7] p-8 sm:p-12 shadow-sm text-center sm:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D76895] block mb-1">
              Academic Inquiries & Verification
            </span>
            <h3 className="text-2xl font-bold text-[#29252B] mb-2">
              {profile.fullName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For academic evaluations, degree verification, capstone inquiries, or research collaboration discussions, please reach out via institutional communication channels.
            </p>
          </div>

          {/* Contact Direct Links */}
          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 border border-[#F8DCE7] hover:border-[#E88CAE] transition-colors text-xs text-[#29252B] group"
            >
              <div className="p-2 rounded-lg bg-white text-[#D76895] shadow-xs">
                <Mail className="w-4 h-4 text-[#E88CAE]" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Institutional Email</span>
                <span className="font-mono font-semibold truncate block group-hover:text-[#D76895] transition-colors">{profile.email}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D76895]" />
            </a>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#F8DCE7] text-xs text-[#29252B]">
              <div className="p-2 rounded-lg bg-white text-[#D76895] shadow-xs">
                <MapPin className="w-4 h-4 text-[#E88CAE]" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Academic Location</span>
                <span className="font-medium text-slate-700 truncate block">{profile.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 border border-[#F8DCE7] text-xs font-medium text-[#29252B] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 border border-[#F8DCE7] text-xs font-medium text-[#29252B] transition-colors"
              >
                <Github className="w-4 h-4 text-[#24292e]" />
                <span>GitHub Archive</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Institutional Disclaimer & Back to Top */}
        <div className="pt-8 border-t border-[#F8DCE7]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#E88CAE]" />
            <span>
              {profile.university} · Department of Computer Science & Engineering
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>Academic Year {profile.academicYear}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-medium text-[#D76895] hover:underline cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
