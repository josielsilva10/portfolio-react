import { useState } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-700 to-purple-600 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Josiel Alexandre
        </div>
        
        <ul className="flex gap-8">
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-semibold transition-colors ${
                activeSection === 'about'
                  ? 'text-white'
                  : 'text-purple-100 hover:text-white'
              }`}
            >
              Sobre mim
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={`font-semibold transition-colors ${
                activeSection === 'projects'
                  ? 'text-white'
                  : 'text-purple-100 hover:text-white'
              }`}
            >
              Meus Projetos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
