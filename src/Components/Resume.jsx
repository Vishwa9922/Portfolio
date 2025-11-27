import { useState, useEffect } from 'react';

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="p-6 md:p-10 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white text-center min-h-screen flex flex-col justify-center items-center">
      {/* Resume Viewer Section */}
      <div className="w-full max-w-5xl mb-6 mt-10">
        {isMobile ? (
          // Mobile View - Show image preview with download prompt
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="bg-gray-700 rounded-lg p-8 mb-4">
              <svg 
                className="w-24 h-24 mx-auto text-blue-400 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Resume Preview</h3>
              <p className="text-gray-300 text-sm mb-4">
                For best viewing experience on mobile, please download the PDF
              </p>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="/Resume.pdf"
                download
                className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-white font-medium"
              >
                📥 Download Resume
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200 text-white font-medium"
              >
                👁️ View in Browser
              </a>
            </div>
          </div>
        ) : (
          // Desktop View - Show PDF in iframe
          <iframe
            src="/Resume.pdf"
            className="w-full h-[90vh] border border-gray-700 rounded-lg"
            title="Resume"
          >
            <p>
              Your browser does not support PDFs.{" "}
              <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="text-blue-400 underline">
                Click here to view
              </a>
            </p>
          </iframe>
        )}
      </div>

      {/* Desktop Download Button */}
      {!isMobile && (
        <a
          href="/Resume.pdf"
          download
          className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-white font-medium"
        >
          📥 Download Resume
        </a>
      )}
    </section>
  );
}
