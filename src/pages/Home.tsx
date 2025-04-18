import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DialNavigation from "../components/DialNavigation";
import ContentSection from "../components/ContentSection";
import { SectionType } from "../lib/types";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionType>("about");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="flex flex-col items-center justify-center mb-8 md:mb-16">
          <DialNavigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <p className="mt-4 text-gray-500 text-sm">Click on a section to navigate</p>
        </div>
        
        <ContentSection activeSection={activeSection} />
      </main>
      
      <Footer />
    </div>
  );
}
