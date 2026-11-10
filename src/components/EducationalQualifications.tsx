import React from 'react';
import { GraduationCap, Building2, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { EducationItem } from '../types/portfolio';

interface EducationalQualificationsProps {
  educationList: EducationItem[];
}

export const EducationalQualifications: React.FC<EducationalQualificationsProps> = ({
  educationList,
}) => {
  return (
    <section id="qualifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          02
        </span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252B]">
            Educational Qualifications
          </h2>
        </div>
      </div>

      {/* Alternating Left-Right Downward Serial Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center vertical line on desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#E88CAE] via-[#F8DCE7] to-[#E88CAE]/40" />

        {/* Left vertical line on mobile */}
        <div className="md:hidden absolute left-4.5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#E88CAE] via-[#F8DCE7] to-[#E88CAE]/40" />

        <div className="space-y-8 md:space-y-12">
          {educationList.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isCurrent = item.status === 'Graduating' || item.status === 'Enrolled';

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Center / Left Pin Marker */}
                <div
                  className={`absolute z-10 w-9 h-9 rounded-full border-2 flex items-center justify-center transition-transform duration-200 shadow-sm ${
                    /* Mobile: left-4.5, Desktop: center */
                    'left-4.5 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 md:left-1/2'
                  } ${
                    isCurrent
                      ? 'border-[#E88CAE] bg-white ring-4 ring-[#F8DCE7]'
                      : 'border-[#D76895] bg-[#FAF7F2]'
                  }`}
                >
                  <GraduationCap
                    className={`w-4 h-4 ${isCurrent ? 'text-[#D76895]' : 'text-[#E88CAE]'}`}
                  />
                </div>

                {/* Card Container: alternating left and right on desktop */}
                <div
                  className={`w-full pl-12 md:pl-0 flex ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] bg-white rounded-3xl border transition-all duration-300 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group ${
                      isCurrent
                        ? 'border-[#E88CAE] ring-2 ring-[#F8DCE7]/80'
                        : 'border-[#F8DCE7] hover:border-[#E88CAE]'
                    }`}
                  >
                    {/* Top Accent Strip */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 ${
                        isCurrent
                          ? 'bg-gradient-to-r from-[#E88CAE] to-[#D76895]'
                          : 'bg-[#F8DCE7]'
                      }`}
                    />

                    {/* Header: Period & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                      <span className="text-xs font-mono font-semibold text-[#D76895] bg-[#F8DCE7]/50 px-2.5 py-0.5 rounded-full border border-[#E88CAE]/20">
                        {item.period}
                      </span>

                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full border flex items-center gap-1 ${
                          isCurrent
                            ? 'bg-[#E88CAE]/15 text-[#D76895] border-[#E88CAE]/40 font-semibold'
                            : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{item.status === 'Graduating' ? 'Graduating' : 'Completed'}</span>
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#29252B] mb-2 leading-snug group-hover:text-[#D76895] transition-colors">
                      {item.degree}
                    </h3>

                    {/* Institution Name */}
                    <div className="flex items-start gap-2 text-xs text-slate-700 font-medium mb-1">
                      <Building2 className="w-4 h-4 text-[#E88CAE] shrink-0 mt-0.5" />
                      <span>{item.institution}</span>
                    </div>

                    {/* Group / Department */}
                    <p className="text-[11px] text-slate-500 mb-4 pl-6">
                      {item.departmentOrGroup}
                    </p>

                    {/* Result / CGPA Badge */}
                    <div className="bg-[#FAF7F2] rounded-2xl p-3 sm:p-3.5 border border-[#F8DCE7]/80 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Grade / CGPA
                      </span>
                      <div className="text-base sm:text-lg font-bold text-[#29252B] font-mono tabular-nums leading-none">
                        {item.gpa}{' '}
                        <span className="text-xs font-normal text-slate-400">
                          / {item.gpaScale.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
