import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ["Profile", "Academic", "Skills", "Achievements", "Contact"];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.toLowerCase(),
        offset: document.getElementById(item.toLowerCase())?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const current = sections.reduce((acc, section) => {
        return scrollPosition >= section.offset ? section.id : acc;
      }, sections[0].id);

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold">Giulia Talà</span>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <div className={`
            ${isOpen ? 'block' : 'hidden'} 
            md:block absolute md:relative top-16 md:top-0 
            left-0 right-0 bg-white md:bg-transparent
            border-b md:border-0 border-gray-200
            transition-all duration-300 ease-in-out
          `}>
            <ul className="flex flex-col md:flex-row md:gap-8 p-4 md:p-0">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`
                      block py-2 md:py-0 relative
                      transition-colors duration-300
                      ${activeSection === item.toLowerCase() 
                        ? 'text-black font-semibold' 
                        : 'text-gray-600 hover:text-black'}
                      after:content-[''] after:absolute after:bottom-0 after:left-0 
                      after:w-full after:h-0.5 after:bg-black
                      after:scale-x-0 hover:after:scale-x-100
                      after:transition-transform after:duration-300
                      ${activeSection === item.toLowerCase() ? 'after:scale-x-100' : ''}
                    `}
                    onClick={() => setIsOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}