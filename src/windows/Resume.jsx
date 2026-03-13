import { useState } from "react";
import { WindowContorls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { Download } from "lucide-react"
import { pdfjs, Document, Page } from 'react-pdf';
import useWindowStore from "#store/window";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const { windows } = useWindowStore();
  const data = windows?.resume?.data;

  const pdfName = data?.name || "software_engineer.pdf";
  const pdfPath = `/files/${pdfName}`;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setLoading(false);
    setNumPages(numPages);
  };

  const onDocumentLoadError = (err) => {
    setLoading(false);
    setError(err.message);
  };

  return (
    <>
      <div className="window-header">
        <WindowContorls target="resume" />
        <h2>{pdfName}</h2>

        <a
          href={pdfPath}
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="relative max-h-[75vh] min-w-[400px] overflow-y-auto bg-gray-100 p-4 custom-scrollbar">
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
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="flex flex-col items-center pb-8"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer
              renderAnnotationLayer
              className="mb-4 shadow-md bg-white border border-gray-200"
            />
          ))}
        </Document>
      </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow