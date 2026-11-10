import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Layers, CheckCircle2, Terminal } from 'lucide-react';
import { AcademicProject } from '../types/portfolio';

interface AcademicProjectsProps {
  projects: AcademicProject[];
}

const CATEGORIES = [
  'All Projects',
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Web Development',
  'Software Development',
  'Other Academic Projects',
] as const;

export const AcademicProjects: React.FC<AcademicProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          04
        </span>
        <div>
          <span className="text-xs font-semibold tracking-wider text-[#D76895] uppercase block">
            Practical Implementation Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252B]">
            Academic Projects
          </h2>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
              selectedCategory === cat
                ? 'bg-[#E88CAE] text-white shadow-xs'
                : 'bg-white border border-[#F8DCE7] text-slate-600 hover:text-[#29252B] hover:bg-[#FAF7F2]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl border border-[#F8DCE7] overflow-hidden shadow-xs hover:shadow-md hover:border-[#E88CAE]/80 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Optional Screenshot Banner */}
              {project.image ? (
                <div className="relative h-56 sm:h-64 w-full bg-[#FAF7F2] overflow-hidden border-b border-[#F8DCE7]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-semibold text-[#D76895] shadow-xs">
                    {project.category}
                  </div>
                </div>
              ) : (
                <div className="h-28 w-full bg-gradient-to-r from-[#FAF7F2] via-[#F8DCE7]/30 to-[#FAF7F2] border-b border-[#F8DCE7] p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white text-[#D76895] border border-[#F8DCE7]">
                      <Terminal className="w-5 h-5 text-[#E88CAE]" />
                    </div>
                    <span className="text-xs font-semibold text-[#D76895]">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#29252B] mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Architectural Features
                  </span>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E88CAE] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Academic Relevance */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#F8DCE7]/60 text-xs">
                  <span className="font-semibold text-[#D76895] block mb-0.5">
                    Academic Curriculum Relevance:
                  </span>
                  <p className="text-slate-600">{project.academicRelevance}</p>
                </div>

                {/* Technologies used: unboxed metadata */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Technologies
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap text-xs text-slate-700">
                    {project.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono">{tech}</span>
                        {tIdx < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-300">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Footer Links */}
            <div className="px-6 sm:px-8 py-4 bg-[#FAF7F2] border-t border-[#F8DCE7] flex items-center justify-between">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#29252B] hover:text-[#D76895] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              ) : (
                <span className="text-xs text-slate-400">Institutional Codebase</span>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#D76895] hover:underline"
                >
                  <span>Live System</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
