import React from 'react';
import { Target, Compass, Sparkles, Cpu, BookOpen, Layers } from 'lucide-react';
import { CareerObjectiveData } from '../types/portfolio';

interface CareerObjectiveProps {
  objective: CareerObjectiveData;
}

export const CareerObjective: React.FC<CareerObjectiveProps> = ({ objective }) => {
  const pillarIcons = [
    { title: "Software Support", icon: Layers, desc: "Troubleshooting, diagnosing, and maintaining system stability." },
    { title: "Programming", icon: Cpu, desc: "Applying C++, Java, and C# for application workflows." },
    { title: "Databases & SQL", icon: BookOpen, desc: "Managing relational data structures and SQL-based systems." },
    { title: "Client Service", icon: Sparkles, desc: "Providing active communication, problem resolution, and support." },
    { title: "Enterprise Systems", icon: Compass, desc: "Learning and adapting to enterprise software architectures." },
  ];

  return (
    <section id="objective" className="mt-2 pt-10 pb-8 sm:pt-12 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          02
        </span>
        <div>
          <span className="text-xs font-semibold tracking-wider text-[#D76895] uppercase block">
            Academic & Professional Direction
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#29252B]">
            Career Objective
          </h2>
        </div>
      </div>

      {/* Elegant Soft-Pink Highlighted Container */}
      <div className="bg-gradient-to-br from-[#FAF7F2] via-[#F8DCE7]/40 to-[#FAF7F2] rounded-3xl border-2 border-[#E88CAE]/50 p-5 sm:p-7 lg:p-8 shadow-sm">
        <div className="w-full">
          {/* Main Statement Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-[#F8DCE7] shadow-xs mb-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#F8DCE7]/50 text-[#D76895] shrink-0">
                <Target className="w-5 h-5 text-[#E88CAE]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#D76895] uppercase tracking-wider block">
                  Primary Objective Statement
                </span>
                <p className="text-sm sm:text-base text-[#29252B] font-medium leading-relaxed mt-0.5">
                  {objective.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div>
            <span className="text-xs font-semibold text-[#29252B] uppercase tracking-wider block mb-3 text-center sm:text-left">
              Key Strategic Focus Areas
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {pillarIcons.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white rounded-xl p-3.5 border border-[#F8DCE7] hover:border-[#E88CAE] transition-colors shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1 rounded-lg bg-[#FAF7F2] text-[#D76895]">
                        <IconComponent className="w-3.5 h-3.5 text-[#E88CAE]" />
                      </div>
                      <h4 className="text-xs font-semibold text-[#29252B]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
