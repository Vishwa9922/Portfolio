import projectAllocationImg from "../assets/Pa.png";
import inventoryImg from "../assets/Inventory.png";

export default function Projects() {
  return (
    <section className="p-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen pt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Works</h2>
      <div className="grid gap-6">

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

        {/* Inventory Management System */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300 w-full max-w-md mx-auto">
          <img 
            src={inventoryImg} 
            alt="Inventory Management System" 
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Inventory Management System</h3>
          <p className="text-gray-300 text-center text-sm mb-4">
            A simple yet effective inventory management system for tracking products and stock. 
            It allows users to add, update, and delete products, monitor stock levels, and 
            generate reports to streamline inventory operations for small businesses.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Vishwa9922/Inventory_Management_System" 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
