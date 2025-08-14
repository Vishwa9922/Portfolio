import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
            <FaHome /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
            <FaUser /> About
          </Link>
          <Link to="/projects" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="/resume" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
            <FaFileAlt /> Resume
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          <Link to="/" onClick={toggleMenu} className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
            <FaHome className="inline mr-2" /> Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
            <FaUser className="inline mr-2" /> About
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
            <FaProjectDiagram className="inline mr-2" /> Projects
          </Link>
          <Link to="/resume" onClick={toggleMenu} className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
            <FaFileAlt className="inline mr-2" /> Resume
          </Link>
        </div>
      )}
    </>
  );
}
