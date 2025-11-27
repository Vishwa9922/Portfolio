import projectAllocationImg from "../assets/Pa.png";
import formlixImg from "../assets/Formlix.png";

export default function Projects() {
  return (
    <section className="p-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen pt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Works</h2>
      <div className="grid gap-6">
        {/* Formlix - Report Generator */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300 w-full max-w-md mx-auto">
          <img 
            src={formlixImg} 
            alt="Formlix Report Generator" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Formlix - Report Generator</h3>
          <p className="text-gray-300 text-center text-sm mb-4">
            A dynamic report generation tool that enables users to create professional PDF 
            reports from custom forms. Features real-time form validation, interactive UI 
            components, and seamless PDF generation with custom styling. Built with React.js, 
            Tailwind CSS, jsPDF, and html2canvas for optimal performance.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Vishwa9922/Fromlix" 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://formlix-frontend.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project Allocation System */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300 w-full max-w-md mx-auto">
          <img 
            src={projectAllocationImg} 
            alt="Project Allocation System" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Project Allocation System</h3>
          <p className="text-gray-300 text-center text-sm mb-4">
            A comprehensive full-stack project allocation system designed for college students. 
            It allows students to take quizzes to determine their domain expertise and get 
            allocated projects accordingly. Features include user authentication, project 
            management, and live project selection with detailed requirements.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Vishwa9922/Project_Allocation_System" 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://project-allocation-system.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
