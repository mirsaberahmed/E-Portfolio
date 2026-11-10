import React, { useState, useEffect } from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Folder, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  Upload, 
  ExternalLink 
} from 'lucide-react';
import { AcademicDocument } from '../types/portfolio';

interface DocumentViewerModalProps {
  document: AcademicDocument | null;
  folderName: string;
  allFolderDocuments: AcademicDocument[];
  onClose: () => void;
  onSelectDocument: (doc: AcademicDocument) => void;
  onAttachFile?: (docId: string, fileUrl: string) => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  document,
  folderName,
  allFolderDocuments,
  onClose,
  onSelectDocument,
  onAttachFile,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [rotation, setRotation] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    // Reset zoom and rotation on document switch
    setZoomLevel(100);
    setRotation(0);
  }, [document?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [document, allFolderDocuments]);

  if (!document) return null;

  const currentIndex = allFolderDocuments.findIndex((d) => d.id === document.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allFolderDocuments.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      onSelectDocument(allFolderDocuments[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onSelectDocument(allFolderDocuments[currentIndex + 1]);
    }
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 25, 250));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 25, 50));
  const handleResetZoom = () => setZoomLevel(100);
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

  const handleLocalFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAttachFile) {
      const url = URL.createObjectURL(file);
      onAttachFile(document.id, url);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#29252B]/85 backdrop-blur-sm p-2 sm:p-4 md:p-6"
    >
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-[#F8DCE7] overflow-hidden">
        {/* Header toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#FAF7F2] border-b border-[#F8DCE7]/80">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#29252B] bg-white border border-[#E88CAE]/40 rounded-lg hover:bg-[#F8DCE7]/50 hover:border-[#E88CAE] transition-colors shrink-0"
              title="Return to folder view"
            >
              <Folder className="w-3.5 h-3.5 text-[#E88CAE]" />
              <span>Back to Folder</span>
            </button>
            <div className="h-4 w-px bg-slate-300 hidden sm:block" />
            <div className="truncate">
              <span className="text-[11px] font-medium text-[#D76895] uppercase tracking-wider block">
                {folderName} · Item {document.serialNumber} of {String(allFolderDocuments.length).padStart(2, '0')}
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-[#29252B] truncate" title={document.title}>
                {document.title}
              </h2>
            </div>
          </div>

          {/* Viewer Tools */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Zoom Controls */}
            <div className="flex items-center bg-white border border-[#E88CAE]/30 rounded-lg p-0.5">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50}
                className="p-1.5 text-slate-600 hover:text-[#29252B] hover:bg-[#F8DCE7]/40 rounded disabled:opacity-40 transition-colors"
                title="Zoom Out"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="px-2 text-xs font-mono tabular-nums text-slate-600 hover:text-[#29252B]"
                title="Reset Zoom"
              >
                {zoomLevel}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 250}
                className="p-1.5 text-slate-600 hover:text-[#29252B] hover:bg-[#F8DCE7]/40 rounded disabled:opacity-40 transition-colors"
                title="Zoom In"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Rotate */}
            <button
              onClick={handleRotate}
              className="p-1.5 bg-white border border-[#E88CAE]/30 text-slate-600 hover:text-[#29252B] hover:bg-[#F8DCE7]/40 rounded-lg transition-colors"
              title="Rotate 90 degrees"
              aria-label="Rotate"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 bg-[#FAF7F2] hover:bg-[#F8DCE7] text-[#29252B] rounded-lg border border-[#E88CAE]/40 transition-colors ml-1"
              title="Close Document Viewer (Esc)"
              aria-label="Close viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Viewer Body */}
        <div className="flex-1 bg-[#F5F2EB] overflow-auto flex items-center justify-center p-4 relative select-none">
          {document.isAvailable ? (
            document.fileUrl ? (
              <div
                style={{
                  transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="max-w-full max-h-full flex items-center justify-center origin-center"
              >
                <img
                  src={document.fileUrl}
                  alt={document.title}
                  referrerPolicy="no-referrer"
                  className="max-w-[85vw] max-h-[70vh] object-contain rounded-lg shadow-xl border border-slate-200 bg-white"
                />
              </div>
            ) : (
              /* High-fidelity official certificate format preview for verified documents */
              <div
                style={{
                  transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="w-[720px] max-w-full bg-white rounded-xl shadow-xl border-4 border-[#FAF7F2] p-8 sm:p-10 text-[#29252B] relative"
              >
                {/* Academic seal outline watermark effect */}
                <div className="border-2 border-[#E88CAE]/30 p-6 sm:p-8 rounded-lg relative overflow-hidden bg-gradient-to-b from-white via-[#FAF7F2]/30 to-white">
                  <div className="flex items-center justify-between border-b border-[#F8DCE7] pb-4 mb-6">
                    <div>
                      <span className="text-[11px] font-semibold text-[#D76895] tracking-widest uppercase">
                        Official Academic Record
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#29252B] tracking-tight">
                        {document.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Issuing Authority: {document.issuingAuthority}
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-full border-2 border-[#E88CAE] bg-[#F8DCE7]/40 flex flex-col items-center justify-center text-center p-1 shrink-0">
                      <span className="text-[8px] font-bold uppercase tracking-tighter text-[#D76895]">VERIFIED</span>
                      <CheckCircle2 className="w-5 h-5 text-[#E88CAE] my-0.5" />
                      <span className="text-[7px] font-mono text-slate-600">AIUB</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    <div className="grid grid-cols-2 gap-4 bg-[#FAF7F2] p-4 rounded-lg border border-[#F8DCE7]/60">
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase font-medium">Document ID</span>
                        <span className="font-mono font-semibold text-[#29252B]">{document.id.toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase font-medium">Issue Date / Period</span>
                        <span className="font-semibold text-[#29252B]">{document.issueDate || 'Curriculum Schedule'}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase font-medium">Folder Archive</span>
                        <span className="font-semibold text-[#29252B]">{folderName}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase font-medium">Verification Status</span>
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Institutional Attestation Ready
                        </span>
                      </div>
                    </div>

                    <div className="py-2">
                      <h4 className="text-xs font-semibold text-[#29252B] mb-1">Archival Description</h4>
                      <p className="text-slate-600">{document.notes || 'Official academic credential maintained for university degree qualification and verification.'}</p>
                    </div>

                    <div className="border-t border-[#F8DCE7] pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                      <span>Serial Registry No: <strong>{document.serialNumber}</strong></span>
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#F8DCE7]/60 text-[#29252B] border border-[#E88CAE]/40 rounded-lg cursor-pointer transition-colors text-xs font-medium">
                        <Upload className="w-3.5 h-3.5 text-[#D76895]" />
                        <span>Upload Scanned File (PDF/Image)</span>
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          onChange={handleLocalFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            /* Clean "Document Not Available" message as strictly requested */
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-[#F8DCE7] p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F8DCE7]/60 text-[#D76895] flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-[#E88CAE]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#29252B] mb-1">
                Document Not Available
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                This academic record is scheduled or pending institutional release by{' '}
                <strong>{document.issuingAuthority}</strong>.
              </p>

              <div className="bg-[#FAF7F2] p-3.5 rounded-lg border border-[#F8DCE7]/80 text-left text-xs mb-5">
                <div className="flex justify-between py-1 border-b border-[#F8DCE7]/50">
                  <span className="text-slate-500">Title:</span>
                  <span className="font-medium text-[#29252B] text-right truncate max-w-[200px]">{document.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F8DCE7]/50">
                  <span className="text-slate-500">Expected Date:</span>
                  <span className="font-medium text-[#29252B]">{document.issueDate || 'Pending Final Defense'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Notice:</span>
                  <span className="text-slate-600">{document.notes || 'Will be uploaded upon official issuance.'}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <label className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#FAF7F2] hover:bg-[#F8DCE7] text-[#29252B] text-xs font-medium rounded-lg border border-[#E88CAE]/50 cursor-pointer transition-colors">
                  <Upload className="w-3.5 h-3.5 text-[#E88CAE]" />
                  <span>Attach Document File Now</span>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleLocalFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-5 py-3 bg-[#FAF7F2] border-t border-[#F8DCE7]/80 flex items-center justify-between text-xs text-slate-600">
          <button
            onClick={handlePrev}
            disabled={!hasPrev}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-[#29252B] hover:bg-[#F8DCE7]/50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Document</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <span className="font-mono text-xs tabular-nums text-slate-500">
            Document {currentIndex + 1} of {allFolderDocuments.length}
          </span>

          <button
            onClick={handleNext}
            disabled={!hasNext}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-[#29252B] hover:bg-[#F8DCE7]/50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          >
            <span className="hidden sm:inline">Next Document</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
