import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Document, Page, pdfjs } from 'react-pdf';
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, RefreshCw, AlertCircle, FileText } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { useAuth } from '../../../context/AuthContext';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import { VisuallyHidden } from '../../../components/ui/VisuallyHidden';

// Use local worker for vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfViewer({ 
  pdfUrl = '/document.pdf', 
  isSecure = true,
  title = 'Secure Document'
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [error, setError] = useState(null);
  
  const containerRef = useRef(null);
  const { logout } = useAuth();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Prevent right click to deter easy downloading if secure
  useEffect(() => {
    if (!isSecure) return;
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isSecure]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err) {
    console.error("PDF load error:", err);
    setError(err);
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => {
      const newPage = prevPageNumber + offset;
      if (newPage < 1 || (numPages && newPage > numPages)) return prevPageNumber;
      return newPage;
    });
  };

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 3.0));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

  return (
    <div className="flex flex-col h-screen bg-slate-100 overflow-hidden font-sans select-none">
      
      {/* Top Toolbar */}
      <div 
        className="h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm z-10 shrink-0"
        style={prefersReducedMotion ? {} : { transition: 'all 0.3s ease' }}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <FileText className="w-5 h-5" />
          </div>
          <h2 className="font-semibold text-slate-800 tracking-tight">{title}</h2>
        </div>

        {/* Central Controls */}
        <div className="flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/50">
          <button 
            onClick={() => changePage(-1)} 
            disabled={pageNumber <= 1}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent transition-colors active:scale-[0.95]"
          >
            <ChevronLeft className="w-5 h-5" />
            <VisuallyHidden>Previous Page</VisuallyHidden>
          </button>
          
          <span className="text-sm font-medium text-slate-600 min-w-[5rem] text-center">
            {pageNumber} / {numPages || '--'}
          </span>
          
          <button 
            onClick={() => changePage(1)} 
            disabled={!numPages || pageNumber >= numPages}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent transition-colors active:scale-[0.95]"
          >
            <ChevronRight className="w-5 h-5" />
            <VisuallyHidden>Next Page</VisuallyHidden>
          </button>

          <div className="w-px h-6 bg-slate-300 mx-1" />

          <button 
            onClick={handleZoomOut} 
            disabled={scale <= 0.5}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent transition-colors active:scale-[0.95]"
          >
            <ZoomOut className="w-5 h-5" />
            <VisuallyHidden>Zoom Out</VisuallyHidden>
          </button>
          
          <span className="text-sm font-medium text-slate-600 min-w-[3.5rem] text-center">
            {Math.round(scale * 100)}%
          </span>

          <button 
            onClick={handleZoomIn} 
            disabled={scale >= 3.0}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent transition-colors active:scale-[0.95]"
          >
            <ZoomIn className="w-5 h-5" />
            <VisuallyHidden>Zoom In</VisuallyHidden>
          </button>
        </div>

        {/* Right Controls */}
        <div>
          {isSecure && (
            <button 
              onClick={logout}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors active:scale-[0.95]"
            >
              Lock Screen
            </button>
          )}
        </div>
      </div>

      {/* Main Viewer Area */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-auto flex justify-center py-8 relative isolate"
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="flex flex-col items-center drop-shadow-2xl ring-1 ring-slate-900/5"
          loading={
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-500">
              <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
              <p className="font-medium text-sm">Loading Document...</p>
            </div>
          }
          error={
            <div className="max-w-md p-6 bg-white rounded-2xl border border-red-100 shadow-lg text-center space-y-3">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Document Unavailable</h3>
              <p className="text-sm text-slate-500">
                The requested file could not be loaded or was not found on the server. Please contact an administrator.
              </p>
            </div>
          }
        >
          {/* Render target page */}
          {!error && (
            <Page 
              pageNumber={pageNumber} 
              scale={scale} 
              renderTextLayer={false} 
              renderAnnotationLayer={false}
              className="bg-white"
            />
          )}
        </Document>
      </div>

      {/* Decorative anti-screenshot watermarks (Optional security measure) */}
      {isSecure && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center -z-10" aria-hidden="true" style={{ isolation: 'isolate', touchAction: 'none' }}>
          <div className="transform -rotate-45 text-4xl font-bold tracking-widest text-slate-900 repeat-infinite whitespace-pre line-clamp-none overflow-hidden h-full flex flex-wrap content-start">
            {[...Array(200)].map((_, i) => (
              <span key={i} className="mr-8 mb-8 inline-block">SECURE VIEW</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

PdfViewer.propTypes = {
  pdfUrl: PropTypes.string,
  isSecure: PropTypes.bool,
  title: PropTypes.string
};
