import React from 'react';
import { GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import { EducationItem } from '../types/portfolio';

interface EducationalQualificationsProps {
  educationList: EducationItem[];
}

export const EducationalQualifications: React.FC<EducationalQualificationsProps> = ({
  educationList,
}) => {
  return (
    <section id="qualifications" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-14">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          03
        </span>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#29252B]">
            Educational Qualifications
          </h2>
        </div>
      </div>

      {/* Alternating Left-Right Downward Serial Timeline */}
      <div className="relative max-w-5xl lg:max-w-6xl mx-auto">
        {/* Center vertical line on desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#E88CAE] via-[#F8DCE7] to-[#E88CAE]/40" />

        {/* Left vertical line on mobile */}
        <div className="md:hidden absolute left-4.5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#E88CAE] via-[#F8DCE7] to-[#E88CAE]/40" />

        <div className="space-y-4 md:space-y-5">
          {educationList.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isCurrent = item.status === 'Graduating' || item.status === 'Enrolled';
            const isSscOrHsc = item.id === 'ssc' || item.id === 'hsc';

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Center / Left Pin Marker */}
                <div
                  className={`absolute z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-200 shadow-2xs ${
                    'left-4.5 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 md:left-1/2'
                  } ${
                    isCurrent
                      ? 'border-[#E88CAE] bg-white ring-3 ring-[#F8DCE7]'
                      : 'border-[#D76895] bg-[#FAF7F2]'
                  }`}
                >
                  <GraduationCap
                    className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#D76895]' : 'text-[#E88CAE]'}`}
                  />
                </div>

                {/* Card Container: alternating left and right on desktop */}
                <div
                  className={`w-full pl-12 md:pl-0 flex ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div
                    className={`w-full md:w-[calc(50%-1.75rem)] bg-white rounded-2xl border transition-all duration-300 p-4 sm:p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 relative overflow-hidden group ${
                      isCurrent
                        ? 'border-[#E88CAE] ring-1.5 ring-[#F8DCE7]/80'
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

                    {/* Header: Period on Left & Status on Right */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[11px] font-mono font-semibold text-[#D76895] bg-[#F8DCE7]/50 px-2.5 py-0.5 rounded-full border border-[#E88CAE]/20">
                        {item.period}
                      </span>

                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border flex items-center gap-1 ${
                          isCurrent
                            ? 'bg-[#E88CAE]/15 text-[#D76895] border-[#E88CAE]/40 font-semibold'
                            : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        }`}
                      >
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>{item.status}</span>
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-sm sm:text-base font-bold text-[#29252B] mb-1 leading-snug group-hover:text-[#D76895] transition-colors">
                      {item.degree}
                    </h3>

                    {/* Institution Name */}
                    <div className="flex items-start gap-1.5 text-xs text-slate-700 font-medium mb-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#E88CAE] shrink-0 mt-0.5" />
                      <span>{item.institution}</span>
                    </div>

                    {/* Academic details */}
                    <div className="text-[11px] text-slate-600 mb-3 pl-5 space-y-0.5">
                      {item.faculty ? (
                        <>
                          <p className="font-medium text-[#29252B]">{item.departmentOrGroup}</p>
                          <p className="font-semibold text-[#D76895]">{item.faculty}</p>
                        </>
                      ) : (
                        <>
                          <p><span className="text-slate-400 font-medium">Group:</span> {item.group || 'Science'}</p>
                          <p><span className="text-slate-400 font-medium">Passing Year:</span> {item.passingYear}</p>
                        </>
                      )}
                    </div>

                    {/* Replaced Highlights with Grade & CGPA box */}
                    <div className="bg-[#FAF7F2] rounded-xl p-2.5 sm:p-3 border border-[#F8DCE7] flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        {isSscOrHsc ? 'Grade' : 'CGPA'}
                      </span>
                      <div className="text-sm font-bold text-[#29252B] font-mono leading-none">
                        <span className="text-[#D76895]">{item.gpa}</span>
                        <span className="text-slate-400 text-xs font-normal"> / {item.gpaScale}</span>
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
