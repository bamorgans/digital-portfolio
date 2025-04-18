export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold mb-1">Dev<span className="text-accent">Portfolio</span></p>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <i className="ri-linkedin-box-fill text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">contact@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
