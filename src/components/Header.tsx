import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">Bob Morganstern</div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-primary transition">Contact</a>
          <a href="#" className="text-gray-600 hover:text-primary transition">Resume</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
            <i className="ri-github-fill text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
            <i className="ri-linkedin-box-fill text-xl"></i>
          </a>
        </div>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-md absolute w-full z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a href="#" className="text-gray-600 hover:text-primary transition py-2">Contact</a>
          <a href="#" className="text-gray-600 hover:text-primary transition py-2">Resume</a>
          <div className="flex space-x-4 py-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
