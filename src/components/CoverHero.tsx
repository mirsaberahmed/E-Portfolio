import React from 'react';
import { 
  ArrowDown, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Building2, 
  GraduationCap, 
  IdCard, 
  Calendar 
} from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface CoverHeroProps {
  profile: StudentProfile;
  onExplore: () => void;
}

export const CoverHero: React.FC<CoverHeroProps> = ({ profile, onExplore }) => {
  return (
    <section id="cover" className="relative min-h-[88vh] flex items-center justify-center pt-[calc(3rem+0.2in)] pb-12 px-4 sm:px-6 lg:px-8 mt-[0.2in] scroll-mt-0">
      {/* Subtle background ambient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#F8DCE7]/40 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Picture on top, text underneath, and Explore button */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#F8DCE7] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Picture on Top */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6">
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-[#E88CAE] shadow-md bg-[#FAF7F2] p-1.5">
                  <img
                    src={profile.profilePhoto}
                    alt={profile.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-2.5 right-3 bg-white border border-[#F8DCE7] px-3 py-0.5 rounded-full text-xs font-semibold text-[#D76895] shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E88CAE]" />
                  <span>AIUB Student</span>
                </div>
              </div>

              {/* Text Underneath Picture */}
              <div className="text-center sm:text-left mb-6">
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">
                  Full Name
                </span>
                <h1 className="text-2xl font-bold text-[#29252B] mb-1">
                  {profile.fullName}
                </h1>
                <p className="text-xs font-semibold text-[#D76895]">
                  Computer Science & Engineering
                </p>
              </div>

              {/* Identification details */}
              <div className="space-y-2.5 text-xs text-slate-700 bg-[#FAF7F2] p-4 rounded-2xl border border-[#F8DCE7]/60">
                <div className="flex items-center gap-2.5 py-1 border-b border-[#F8DCE7]/40">
                  <IdCard className="w-4 h-4 text-[#E88CAE] shrink-0" />
                  <span className="text-slate-400 w-24 shrink-0 font-medium">Student ID:</span>
                  <span className="font-mono font-semibold text-[#29252B]">{profile.studentId}</span>
                </div>

                <div className="flex items-center gap-2.5 py-1 border-b border-[#F8DCE7]/40">
                  <Calendar className="w-4 h-4 text-[#E88CAE] shrink-0" />
                  <span className="text-slate-400 w-24 shrink-0 font-medium">Academic Year:</span>
                  <span className="font-semibold text-[#29252B]">{profile.academicYear}</span>
                </div>

                <div className="flex items-center gap-2.5 py-1 border-b border-[#F8DCE7]/40">
                  <Building2 className="w-4 h-4 text-[#E88CAE] shrink-0" />
                  <span className="text-slate-400 w-24 shrink-0 font-medium">Department:</span>
                  <span className="font-medium text-[#29252B]">{profile.department}</span>
                </div>

                <div className="flex items-center gap-2.5 py-1">
                  <GraduationCap className="w-4 h-4 text-[#E88CAE] shrink-0" />
                  <span className="text-slate-400 w-24 shrink-0 font-medium">University:</span>
                  <span className="font-medium text-[#29252B]">{profile.university}</span>
                </div>
              </div>
            </div>

            {/* Explore Portfolio button at the bottom of left card */}
            <div className="mt-8 pt-4 border-t border-[#F8DCE7]/60">
              <button
                onClick={onExplore}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-[#E88CAE] hover:bg-[#D76895] rounded-xl transition-all duration-200 shadow-md shadow-[#E88CAE]/20 hover:shadow-lg cursor-pointer"
              >
                <span>Explore Portfolio</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Personal Info (About Me, Pillars, Contact details) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#F8DCE7] p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#D76895] uppercase block mb-1">
                  Personal Profile
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#29252B] mb-3">
                  About Me
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {profile.aboutMe}
                </p>
              </div>

              {/* Academic Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-[#F8DCE7]">
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#F8DCE7]/60">
                  <span className="text-xs font-semibold text-[#D76895] block mb-1">
                    Academic Focus
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Machine learning architectures, computer vision, data structures, and continuous algorithmic research.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#F8DCE7]/60">
                  <span className="text-xs font-semibold text-[#D76895] block mb-1">
                    Technical Strengths
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Modular software engineering, clean object-oriented architecture, data analysis pipelines, and full-stack implementation.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#F8DCE7]/60">
                  <span className="text-xs font-semibold text-[#D76895] block mb-1">
                    Personal Qualities
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Evidence-based analytical discipline, methodical attention to detail, collaborative teamwork, and curiosity.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#F8DCE7]/60">
                  <span className="text-xs font-semibold text-[#D76895] block mb-1">
                    Career Direction
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Pursuing graduate computational studies and engineering high-impact intelligent software systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Links at the bottom of right card */}
            <div className="mt-6 pt-5 border-t border-[#F8DCE7] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-[#E88CAE] shrink-0" />
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-[#D76895] hover:underline"
                >
                  {profile.email}
                </a>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#E88CAE] shrink-0" />
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 text-[#29252B] border border-[#E88CAE]/40 transition-colors font-medium text-[11px]"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 text-[#29252B] border border-[#E88CAE]/40 transition-colors font-medium text-[11px]"
                >
                  <Github className="w-3.5 h-3.5 text-[#24292e]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
