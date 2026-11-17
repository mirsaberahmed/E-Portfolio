import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Upload, 
  Calendar,
  Building,
  X
} from 'lucide-react';
import { DocumentFolder, AcademicDocument } from '../types/portfolio';

interface AcademicDocumentsProps {
  folders: DocumentFolder[];
  documents: AcademicDocument[];
  onViewDocument: (doc: AcademicDocument, folderName: string, folderDocs: AcademicDocument[]) => void;
  onAttachFile?: (docId: string, fileUrl: string) => void;
}

export const AcademicDocuments: React.FC<AcademicDocumentsProps> = ({
  folders,
  documents,
  onViewDocument,
  onAttachFile,
}) => {
  // Hidden by default; only shows documents when a folder is clicked
  const [activeFolderId, setActiveFolderId] = useState<string | null>(null);

  const activeFolder = folders.find((f) => f.id === activeFolderId) || null;
  const activeDocuments = activeFolderId
    ? documents.filter((doc) => doc.folderId === activeFolderId)
    : [];

  const handleToggleFolder = (folderId: string) => {
    setActiveFolderId((prev) => (prev === folderId ? null : folderId));
  };

  const handleFileUpload = (docId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAttachFile) {
      const url = URL.createObjectURL(file);
      onAttachFile(docId, url);
    }
  };

  return (
    <section id="documents" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          04
        </span>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#29252B]">
            Documents
          </h2>
        </div>
      </div>

      {/* 2 Dedicated Folders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
        {folders.map((folder) => {
          const isActive = folder.id === activeFolderId;
          const folderDocsCount = documents.filter((d) => d.folderId === folder.id).length;

          return (
            <button
              key={folder.id}
              onClick={() => handleToggleFolder(folder.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 ${
                isActive
                  ? 'bg-white border-[#E88CAE] shadow-sm ring-1.5 ring-[#F8DCE7]'
                  : 'bg-[#FAF7F2] border-[#F8DCE7]/80 hover:bg-white hover:border-[#E88CAE]/60'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-2.5 rounded-xl transition-colors ${
                  isActive ? 'bg-[#F8DCE7]/60 text-[#D76895]' : 'bg-white text-[#E88CAE] shadow-xs'
                }`}>
                  {isActive ? (
                    <FolderOpen className="w-5 h-5 text-[#E88CAE]" />
                  ) : (
                    <Folder className="w-5 h-5 text-[#E88CAE]" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#29252B]">
                    {folder.name}
                  </h3>
                  <span className="text-[11px] font-medium text-[#D76895] mt-0.5 block">
                    {isActive ? 'Click to close folder' : 'Click to view documents →'}
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-[#D76895] bg-[#F8DCE7]/50 px-2.5 py-0.5 rounded-full shrink-0">
                {folderDocsCount} Files
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Folder Detailed Contents (Visible ONLY when a folder is clicked) */}
      {activeFolder && (
        <div className="bg-white rounded-2xl border border-[#F8DCE7] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-300">
          {/* Breadcrumb Header & Close button */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-[#F8DCE7]/80 mb-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Documents</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E88CAE]" />
              <span className="font-semibold text-[#29252B]">{activeFolder.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#D76895] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#F8DCE7]">
                {activeDocuments.length} Serialized Item{activeDocuments.length !== 1 ? 's' : ''}
              </span>

              <button
                onClick={() => setActiveFolderId(null)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 hover:text-[#29252B] border border-[#F8DCE7] rounded-lg transition-colors cursor-pointer"
                title="Close Folder"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>
            </div>
          </div>

          {/* Serial Document List */}
          <div className="space-y-3">
            {activeDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#FAF7F2] hover:bg-white rounded-xl border border-[#F8DCE7]/80 hover:border-[#E88CAE] p-3.5 sm:p-4 transition-all duration-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                {/* Document Identity & Serial */}
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#D76895] bg-white border border-[#F8DCE7] w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-2xs">
                    {doc.serialNumber}
                  </span>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#29252B]">
                        {doc.title}
                      </h4>
                      {doc.isAvailable ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.2 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Ready
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-700 bg-amber-50 px-2 py-0.2 rounded-full border border-amber-200">
                          <AlertCircle className="w-2.5 h-2.5" /> Not Available
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1">
                        <Building className="w-3 h-3 text-[#E88CAE]" />
                        {doc.issuingAuthority}
                      </span>
                      {doc.issueDate && (
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3 h-3 text-[#E88CAE]" />
                          {doc.issueDate}
                        </span>
                      )}
                    </div>

                    {doc.notes && (
                      <p className="text-[11px] text-slate-500 pt-0.5 leading-relaxed">
                        {doc.notes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Buttons & Document Preview Trigger */}
                <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                  <button
                    onClick={() => onViewDocument(doc, activeFolder.name, activeDocuments)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      doc.isAvailable
                        ? 'bg-[#E88CAE] hover:bg-[#D76895] text-white shadow-2xs'
                        : 'bg-white border border-[#E88CAE]/50 text-[#29252B] hover:bg-[#F8DCE7]/40'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>{doc.isAvailable ? 'View Document' : 'View Status'}</span>
                  </button>

                  <label
                    className="p-1.5 bg-white hover:bg-[#F8DCE7]/40 text-slate-600 hover:text-[#29252B] rounded-lg border border-[#F8DCE7] cursor-pointer transition-colors"
                    title="Attach or replace local document file (PDF or Image)"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#E88CAE]" />
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => handleFileUpload(doc.id, e)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
