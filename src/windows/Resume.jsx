import { useState } from "react";
import { WindowContorls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { Download } from "lucide-react"
import { pdfjs, Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = () => {
    setLoading(false);
  };

  const onDocumentLoadError = (err) => {
    setLoading(false);
    setError(err.message);
  };

  return (
    <>
      <div id="window-header">
        <WindowContorls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="/files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="relative min-h-[500px] min-w-[400px]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <p className="text-gray-500">Loading PDF...</p>
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10 p-4">
            <p className="text-red-500 text-center">Failed to load PDF: {error}</p>
          </div>
        )}
        <Document
          file="/files/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow