import React from 'react';
import { Target, Compass, Sparkles, Cpu, BookOpen, Layers } from 'lucide-react';
import { CareerObjectiveData } from '../types/portfolio';

interface CareerObjectiveProps {
  objective: CareerObjectiveData;
}

export const CareerObjective: React.FC<CareerObjectiveProps> = ({ objective }) => {
  const pillarIcons = [
    { title: "Software Engineering", icon: Layers, desc: "Building scalable, maintainable, and high-performance software systems." },
    { title: "Artificial Intelligence", icon: Cpu, desc: "Designing intelligent architectures and neural representation pipelines." },
    { title: "Machine Learning", icon: Sparkles, desc: "Formulating empirical models for computer vision and dialectal processing." },
    { title: "Continuous Learning", icon: BookOpen, desc: "Assimilating state-of-the-art literature and evolving computational methods." },
    { title: "Research & Innovation", icon: Compass, desc: "Contributing to peer-reviewed discoveries that address societal challenges." },
  ];

  return (
    <section id="objective" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          01
        </span>
        <div>
          <span className="text-xs font-semibold tracking-wider text-[#D76895] uppercase block">
            Academic & Professional Direction
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252B]">
            Career Objective
          </h2>
        </div>
      </div>

      {/* Elegant Soft-Pink Highlighted Container */}
      <div className="bg-gradient-to-br from-[#FAF7F2] via-[#F8DCE7]/40 to-[#FAF7F2] rounded-3xl border-2 border-[#E88CAE]/50 p-6 sm:p-10 lg:p-12 shadow-md">
        <div className="max-w-4xl mx-auto">
          {/* Main Statement Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#F8DCE7] shadow-xs mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F8DCE7]/50 text-[#D76895] shrink-0">
                <Target className="w-6 h-6 text-[#E88CAE]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#D76895] uppercase tracking-wider block">
                  Primary Objective Statement
                </span>
                <p className="text-base sm:text-lg text-[#29252B] font-medium leading-relaxed mt-1">
                  {objective.summary}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F8DCE7]/60 text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              “{objective.aspirations}”
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div>
            <span className="text-xs font-semibold text-[#29252B] uppercase tracking-wider block mb-4 text-center sm:text-left">
              Key Strategic Focus Areas
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {pillarIcons.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white rounded-xl p-4 border border-[#F8DCE7] hover:border-[#E88CAE] transition-colors shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-[#FAF7F2] text-[#D76895]">
                        <IconComponent className="w-4 h-4 text-[#E88CAE]" />
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
