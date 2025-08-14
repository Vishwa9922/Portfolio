export default function Resume() {
  return (
    <section className="p-10 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white text-center min-h-screen flex flex-col justify-center items-center">

      {/* Mobile-friendly PDF Viewer */}
      <div className="w-full max-w-5xl mb-6 mt-10">
        <iframe
          src="/Resume.pdf"
          className="w-full h-[90vh] border rounded-lg"
          title="Resume"
        >
          {/* Fallback for mobile devices */}
          <p>
            Your browser does not support PDFs.{" "}
            <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="text-blue-400 underline">
              Click here to download
            </a>
          </p>
        </iframe>
      </div>

      {/* Download Button */}
      <a
        href="/Resume.pdf"
        download
        className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-white font-medium"
      >
        Download Resume
      </a>
    </section>
  );
}
