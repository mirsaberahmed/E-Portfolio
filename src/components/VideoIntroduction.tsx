import React from 'react';
import { Video, ExternalLink } from 'lucide-react';

interface VideoIntroductionProps {
  videoUrl: string;
}

export const VideoIntroduction: React.FC<VideoIntroductionProps> = ({ videoUrl }) => {
  return (
    <section id="video-introduction" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          01
        </span>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#29252B]">
            Video Introduction
          </h2>
        </div>
      </div>

      {/* Video Player Card */}
      <div className="bg-white rounded-3xl border border-[#F8DCE7] p-4 sm:p-6 shadow-xs">
        <div className="rounded-2xl overflow-hidden bg-white border border-[#F8DCE7]/80 flex justify-center p-2">
          <video
            src={videoUrl}
            controls
            playsInline
            preload="metadata"
            className="w-auto max-w-full max-h-[560px] mx-auto block rounded-xl bg-white"
          >
            Your browser does not support embedded video playback.
          </video>
        </div>

        <div className="mt-3.5 pt-3 border-t border-[#F8DCE7]/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-[#E88CAE] shrink-0" />
            <span className="font-medium text-[#29252B]">Video Introduction</span>
          </div>

          <a
            href={videoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[#D76895] hover:underline"
          >
            <span>Open Video in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
