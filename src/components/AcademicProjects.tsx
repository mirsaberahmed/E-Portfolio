import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { AcademicProject } from '../types/portfolio';

interface AcademicProjectsProps {
  projects: AcademicProject[];
}

export const AcademicProjects: React.FC<AcademicProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-5 sm:mb-6">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          05
        </span>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#29252B]">
            Academic Projects
          </h2>
        </div>
      </div>

      {/* Compact Project Cards Grid without filter tabs and extra bloated text */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-[#F8DCE7] p-4 shadow-2xs hover:shadow-md hover:border-[#E88CAE] transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* Category badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-semibold text-[#D76895] bg-[#F8DCE7]/50 px-2 py-0.5 rounded-full border border-[#E88CAE]/20">
                  {project.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E88CAE]/50 group-hover:bg-[#E88CAE] transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-[#29252B] mb-1.5 leading-snug group-hover:text-[#D76895] transition-colors">
                {project.title}
              </h3>

              {/* Concise Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex items-center gap-1.5 flex-wrap mb-3.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono bg-[#FAF7F2] text-[#29252B] px-1.5 py-0.5 rounded-md border border-[#F8DCE7]/80 text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct GitHub Link */}
            {project.githubUrl && (
              <div className="pt-2.5 border-t border-[#F8DCE7]/70 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29252B] hover:text-[#D76895] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#24292e]" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
