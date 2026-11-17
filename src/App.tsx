import React, { useState } from 'react';
import { 
  StudentProfile, 
  AcademicDocument, 
  AcademicProject 
} from './types/portfolio';
import {
  DEFAULT_PROFILE,
  DEFAULT_CAREER_OBJECTIVE,
  DEFAULT_EDUCATION,
  DOCUMENT_FOLDERS,
  DEFAULT_DOCUMENTS,
  DEFAULT_ACADEMIC_PROJECTS,
} from './data/defaultPortfolioData';

import { Navbar } from './components/Navbar';
import { CoverHero } from './components/CoverHero';
import { VideoIntroduction } from './components/VideoIntroduction';
import { CareerObjective } from './components/CareerObjective';
import { EducationalQualifications } from './components/EducationalQualifications';
import { AcademicDocuments } from './components/AcademicDocuments';
import { AcademicProjects } from './components/AcademicProjects';
import { SkillsCompetencies } from './components/SkillsCompetencies';
import { ContactInformation } from './components/ContactInformation';

import { DocumentViewerModal } from './components/DocumentViewerModal';
import { FullCVModal } from './components/FullCVModal';

const INTRO_VIDEO_URL = '/assets/intro_video.mp4';

export default function App() {
  const [profile] = useState<StudentProfile>(DEFAULT_PROFILE);
  const [documents, setDocuments] = useState<AcademicDocument[]>(DEFAULT_DOCUMENTS);

  // Modal active states
  const [activeViewerDoc, setActiveViewerDoc] = useState<AcademicDocument | null>(null);
  const [activeViewerFolderName, setActiveViewerFolderName] = useState<string>('Academic Documents');
  const [activeViewerFolderDocs, setActiveViewerFolderDocs] = useState<AcademicDocument[]>([]);

  const [fullCVOpen, setFullCVOpen] = useState(false);

  // Attach or update file for a specific document
  const handleAttachDocumentFile = (docId: string, fileUrl: string) => {
    const updated = documents.map((doc) =>
      doc.id === docId ? { ...doc, fileUrl, isAvailable: true } : doc
    );
    setDocuments(updated);

    if (activeViewerDoc && activeViewerDoc.id === docId) {
      setActiveViewerDoc((prev) => (prev ? { ...prev, fileUrl, isAvailable: true } : null));
    }
  };

  // Open Document Viewer modal
  const handleOpenDocumentViewer = (
    doc: AcademicDocument,
    folderName: string,
    folderDocs: AcademicDocument[]
  ) => {
    setActiveViewerDoc(doc);
    setActiveViewerFolderName(folderName);
    setActiveViewerFolderDocs(folderDocs);
  };

  const scrollToNextSection = () => {
    const elem = document.getElementById('video-introduction');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29252B] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar onOpenCV={() => setFullCVOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* Cover Page with Left (Photo + Details) & Right (Personal Profile) */}
        <CoverHero profile={profile} onExplore={scrollToNextSection} />

        {/* 01. Video Introduction */}
        <VideoIntroduction videoUrl={INTRO_VIDEO_URL} />

        {/* 02. Career Objective */}
        <CareerObjective objective={DEFAULT_CAREER_OBJECTIVE} />

        {/* 03. Educational Qualifications */}
        <EducationalQualifications educationList={DEFAULT_EDUCATION} />

        {/* 04. Academic Documents (2 Folders) */}
        <AcademicDocuments
          folders={DOCUMENT_FOLDERS}
          documents={documents}
          onViewDocument={handleOpenDocumentViewer}
          onAttachFile={handleAttachDocumentFile}
        />

        {/* 05. Academic Projects */}
        <AcademicProjects projects={DEFAULT_ACADEMIC_PROJECTS} />

        {/* 06. Technical Skills & 07. Soft Skills */}
        <SkillsCompetencies />

        {/* 08. Academic Contact & Information */}
        <ContactInformation profile={profile} />
      </main>

      {/* Interactive Document Viewer Modal */}
      <DocumentViewerModal
        document={activeViewerDoc}
        folderName={activeViewerFolderName}
        allFolderDocuments={activeViewerFolderDocs}
        onClose={() => setActiveViewerDoc(null)}
        onSelectDocument={(doc) => setActiveViewerDoc(doc)}
        onAttachFile={handleAttachDocumentFile}
      />

      {/* Full Academic CV Modal (Opened via header CV button) */}
      <FullCVModal
        isOpen={fullCVOpen}
        onClose={() => setFullCVOpen(false)}
        profile={profile}
      />
    </div>
  );
}
