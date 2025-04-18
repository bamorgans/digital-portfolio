import { SectionType } from "../lib/types";
import { projectData } from "../data/projectData";
import { careerData } from "../data/careerData";

interface ContentSectionProps {
  activeSection: SectionType;
}

export default function ContentSection({ activeSection }: ContentSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500">
      {/* About Me Section */}
      <section id="about-content" className={`content-section p-6 md:p-8 ${activeSection === "about" ? "active" : ""}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-600 mb-4">
              Hello! I'm a passionate software engineer with expertise in full-stack development. I love building 
              elegant solutions to complex problems and have a keen interest in web technologies, system design, 
              and machine learning.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new programming languages.
              I believe in continuous learning and regularly contribute to open-source projects.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-map-pin-2-fill text-primary mt-1 mr-3"></i>
                <span className="text-gray-600">Based in San Francisco, CA</span>
              </li>
              <li className="flex items-start">
                <i className="ri-graduation-cap-fill text-primary mt-1 mr-3"></i>
                <span className="text-gray-600">M.S. Computer Science</span>
              </li>
              <li className="flex items-start">
                <i className="ri-book-open-fill text-primary mt-1 mr-3"></i>
                <span className="text-gray-600">20+ years of professional experience</span>
              </li>
              <li className="flex items-start">
                <i className="ri-github-fill text-primary mt-1 mr-3"></i>
                <span className="text-gray-600">100+ GitHub contributions this year</span>
              </li>
              <li className="flex items-start">
                <i className="ri-file-code-fill text-primary mt-1 mr-3"></i>
                <span className="text-gray-600">Open source contributor</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career-content" className={`content-section p-6 md:p-8 ${activeSection === "career" ? "active" : ""}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Career Journey</h2>
        
        <div className="space-y-8">
          {careerData.map((job, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 md:pl-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <span className="text-sm font-medium text-gray-500">{job.period}</span>
              </div>
              <h4 className="text-lg text-primary mb-2">{job.company}</h4>
              <p className="text-gray-600 mb-3">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-content" className={`content-section p-6 md:p-8 ${activeSection === "projects" ? "active" : ""}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href="#" className="text-primary hover:text-primary-dark text-sm font-medium">View Details</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    <i className="ri-github-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition">
            View All Projects
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
