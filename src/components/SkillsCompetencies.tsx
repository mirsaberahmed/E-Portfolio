import React from 'react';
import { 
  Code, 
  Database, 
  Wrench
} from 'lucide-react';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../data/defaultPortfolioData';

export const SkillsCompetencies: React.FC = () => {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Programming':
        return Code;
      case 'Databases':
        return Database;
      case 'Tools':
        return Wrench;
      default:
        return Code;
    }
  };

  return (
    <section id="skills" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* 1. Technical Skills Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
            06
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#29252B]">
              Technical Skills
            </h2>
          </div>
        </div>

        {/* Technical Skills Boxes in ONE single line on desktop/laptop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
          {TECHNICAL_SKILLS.map((cat) => {
            const IconComponent = getCategoryIcon(cat.categoryName);
            return (
              <div
                key={cat.categoryName}
                className="bg-white rounded-2xl border border-[#F8DCE7] p-4 shadow-2xs hover:border-[#E88CAE] hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#F8DCE7]/70">
                    <div className="p-1.5 rounded-lg bg-[#FAF7F2] text-[#D76895] shrink-0">
                      <IconComponent className="w-4 h-4 text-[#E88CAE]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#29252B] leading-snug">
                      {cat.categoryName}
                    </h3>
                  </div>

                  {/* Bullet points with title only */}
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E88CAE] mt-1.5 shrink-0" />
                        <span className="font-medium">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Soft Skills Section - In a Separate Box with its own Title */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
            07
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#29252B]">
              Soft Skills
            </h2>
          </div>
        </div>

        {/* Dedicated Soft Skills Separate Box */}
        <div className="bg-white rounded-2xl border border-[#F8DCE7] p-4 sm:p-5 shadow-2xs hover:border-[#E88CAE] transition-all duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SOFT_SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="bg-[#FAF7F2] rounded-xl px-3.5 py-2.5 border border-[#F8DCE7]/70 flex items-center gap-2.5 hover:bg-white hover:border-[#E88CAE]/60 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E88CAE] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#29252B] leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
