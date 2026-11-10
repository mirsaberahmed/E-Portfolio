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
    <section id="documents" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-bold text-[#D76895] bg-[#F8DCE7]/60 px-2.5 py-1 rounded-md">
          03
        </span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252B]">
            Documents
          </h2>
        </div>
      </div>

      {/* 2 Dedicated Folders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {folders.map((folder) => {
          const isActive = folder.id === activeFolderId;
          const folderDocsCount = documents.filter((d) => d.folderId === folder.id).length;

          return (
            <button
              key={folder.id}
              onClick={() => handleToggleFolder(folder.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                isActive
                  ? 'bg-white border-[#E88CAE] shadow-sm ring-2 ring-[#F8DCE7]'
                  : 'bg-[#FAF7F2] border-[#F8DCE7]/80 hover:bg-white hover:border-[#E88CAE]/60'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl transition-colors ${
                  isActive ? 'bg-[#F8DCE7]/60 text-[#D76895]' : 'bg-white text-[#E88CAE] shadow-xs'
                }`}>
                  {isActive ? (
                    <FolderOpen className="w-6 h-6 text-[#E88CAE]" />
                  ) : (
                    <Folder className="w-6 h-6 text-[#E88CAE]" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#29252B]">
                    {folder.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {folder.description}
                  </p>
                  <span className="text-[11px] font-medium text-[#D76895] mt-1 block">
                    {isActive ? 'Click to close folder' : 'Click to view documents →'}
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-[#D76895] bg-[#F8DCE7]/50 px-3 py-1 rounded-full shrink-0">
                {folderDocsCount} Files
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Folder Detailed Contents (Visible ONLY when a folder is clicked) */}
      {activeFolder && (
        <div className="bg-white rounded-3xl border border-[#F8DCE7] p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300">
          {/* Breadcrumb Header & Close button */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#F8DCE7]/80 mb-6">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Documents</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E88CAE]" />
              <span className="font-semibold text-[#29252B]">{activeFolder.name}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#D76895] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#F8DCE7]">
                {activeDocuments.length} Serialized Item{activeDocuments.length !== 1 ? 's' : ''}
              </span>

              <button
                onClick={() => setActiveFolderId(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-600 bg-[#FAF7F2] hover:bg-[#F8DCE7]/50 hover:text-[#29252B] border border-[#F8DCE7] rounded-lg transition-colors cursor-pointer"
                title="Close Folder"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>
            </div>
          </div>

          {/* Serial Document List */}
          <div className="space-y-4">
            {activeDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#F8DCE7]/80 hover:border-[#E88CAE] p-4 sm:p-5 transition-all duration-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Document Identity & Serial */}
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#D76895] bg-white border border-[#F8DCE7] w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs">
                    {doc.serialNumber}
                  </span>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm sm:text-base font-semibold text-[#29252B]">
                        {doc.title}
                      </h4>
                      {doc.isAvailable ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" /> Ready
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          <AlertCircle className="w-3 h-3" /> Not Available
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-0.5">
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
                      <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                        {doc.notes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Buttons & Document Preview Trigger */}
                <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
                  <button
                    onClick={() => onViewDocument(doc, activeFolder.name, activeDocuments)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl transition-colors cursor-pointer ${
                      doc.isAvailable
                        ? 'bg-[#E88CAE] hover:bg-[#D76895] text-white shadow-xs'
                        : 'bg-white border border-[#E88CAE]/50 text-[#29252B] hover:bg-[#F8DCE7]/40'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{doc.isAvailable ? 'View Document' : 'View Status'}</span>
                  </button>

                  <label
                    className="p-2 bg-white hover:bg-[#F8DCE7]/40 text-slate-600 hover:text-[#29252B] rounded-xl border border-[#F8DCE7] cursor-pointer transition-colors"
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
