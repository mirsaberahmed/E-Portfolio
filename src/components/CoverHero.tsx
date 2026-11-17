import React from 'react';
import { 
  ArrowDown, 
  MapPin, 
  Github, 
  Building2, 
  GraduationCap, 
  Calendar 
} from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface CoverHeroProps {
  profile: StudentProfile;
  onExplore: () => void;
}

export const CoverHero: React.FC<CoverHeroProps> = ({ profile, onExplore }) => {
  return (
    <section id="cover" className="relative min-h-[78vh] flex items-center justify-center py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Subtle background ambient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#F8DCE7]/40 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Picture on top, text underneath, and Explore button */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#F8DCE7] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              {/* Animated Profile Picture */}
              <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44 mb-4 group profile-animate-float">
                {/* Flowing gradient ring with glowing pulse aura */}
                <div className="w-full h-full rounded-2xl p-[3px] profile-gradient-border profile-glow-ring shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="w-full h-full rounded-[13px] overflow-hidden bg-white">
                    <img
                      src={profile.profilePhoto}
                      alt={profile.fullName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Text Underneath Picture */}
              <div className="text-center sm:text-left mb-4">
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 block">
                  Full Name
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#29252B] mb-0.5">
                  {profile.fullName}
                </h1>
                <p className="text-xs font-semibold text-[#D76895]">
                  Computer Science and Engineering
                </p>
              </div>

              {/* Identification details */}
              <div className="space-y-2 text-xs text-slate-700 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#F8DCE7]/60">
                <div className="flex items-center gap-2 py-0.5 border-b border-[#F8DCE7]/40">
                  <GraduationCap className="w-3.5 h-3.5 text-[#E88CAE] shrink-0" />
                  <span className="text-slate-400 w-24 shrink-0 font-medium">Degree:</span>
                  <span className="font-semibold text-[#29252B]">B.Sc. in CSE (12th Sem)</span>
                </div>

                <div className="flex items-center gap-2 py-0.5 border-b border-[#F8DCE7]/40">
                  <Building2 className="w-3.5 h-3.5 text-[#E88CAE] shrink-0" />
                  <span className="text-slate-400 w-24 shrink-0 font-medium">Institution:</span>
                  <span className="font-medium text-[#29252B]">{profile.university}</span>
                </div>

                <div className="flex items-center gap-2 py-0.5 border-b border-[#F8DCE7]/40">
                  <Calendar className="w-3.5 h-3.5 text-[#E88CAE] shrink-0" />
                  <span className="text-slate-400 w-24 shrink-0 font-medium">Academic Year:</span>
                  <span className="font-semibold text-[#29252B]">{profile.academicYear}</span>
                </div>

                <div className="flex items-center gap-2 py-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E88CAE] shrink-0" />
                  <span className="text-slate-400 w-24 shrink-0 font-medium">Location:</span>
                  <span className="font-medium text-[#29252B]">Bashundhara R/A, Dhaka 1229</span>
                </div>
              </div>
            </div>

            {/* Explore Portfolio button at the bottom of left card */}
            <div className="mt-5 pt-3 border-t border-[#F8DCE7]/60">
              <button
                onClick={onExplore}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#E88CAE] hover:bg-[#D76895] rounded-xl transition-all duration-200 shadow-xs hover:shadow cursor-pointer"
              >
                <span>Explore Portfolio</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Personal Info (About Me, Pillars, Contact details) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#F8DCE7] p-5 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-[#D76895] uppercase block mb-1">
                  Personal Profile
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#29252B] mb-2">
                  About Me
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {profile.aboutMe}
                </p>
              </div>

              {/* Core Focus Pillars based strictly on CV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#F8DCE7]">
                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#F8DCE7]/60">
                  <span className="text-xs font-semibold text-[#D76895] block mb-0.5">
                    Technical Skills
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Programming (C++, Java, C#), Database Management Systems, and SQL-related coursework.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#F8DCE7]/60">
                  <span className="text-xs font-semibold text-[#D76895] block mb-0.5">
                    Volunteering
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Bashundhara Shovoshongho — Volunteer.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#F8DCE7]/60">
                  <span className="text-xs font-semibold text-[#D76895] block mb-0.5">
                    Soft Skills
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Communication, teamwork, problem-solving, adaptability, and organization.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#F8DCE7]/60">
                  <span className="text-xs font-semibold text-[#D76895] block mb-0.5">
                    Target Role
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Software Support Engineer - Intern at Progeny Technologies Ltd.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Location & GitHub Links at the bottom of right card */}
            <div className="mt-4 pt-3 border-t border-[#F8DCE7] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
              <div className="flex flex-wrap items-center gap-2 text-slate-600">
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#E88CAE] shrink-0" />
                  Bashundhara R/A, Dhaka 1229
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 text-[#29252B] border border-[#E88CAE]/40 transition-colors font-medium text-[11px]"
                >
                  <Github className="w-3 h-3 text-[#24292e]" />
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
