import React from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Cpu, 
  Wrench 
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/defaultPortfolioData';

export const SkillsCompetencies: React.FC = () => {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Programming Languages':
        return Code;
      case 'Web Development':
        return Globe;
      case 'Database Management':
        return Database;
      case 'Artificial Intelligence & ML':
        return Cpu;
      case 'Developer Tools & Systems':
        return Wrench;
      default:
        return Code;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          05
        </span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252B]">
            Technical Skills
          </h2>
        </div>
      </div>

      {/* Technical Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TECHNICAL_SKILLS.map((cat) => {
          const IconComponent = getCategoryIcon(cat.categoryName);
          return (
            <div
              key={cat.categoryName}
              className="bg-white rounded-2xl border border-[#F8DCE7] p-5 sm:p-6 shadow-xs hover:border-[#E88CAE] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#F8DCE7]/60">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#D76895]">
                  <IconComponent className="w-4 h-4 text-[#E88CAE]" />
                </div>
                <h3 className="text-sm font-bold text-[#29252B]">
                  {cat.categoryName}
                </h3>
              </div>

              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="text-xs">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-[#29252B]">{item.name}</span>
                      <span className="text-[11px] font-mono text-[#D76895]">{item.level}</span>
                    </div>
                    {item.detail && (
                      <p className="text-[11px] text-slate-500 leading-normal">{item.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
