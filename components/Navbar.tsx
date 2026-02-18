
import React, { useState } from 'react';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '#/' },
    { name: 'Nutrition Hub', path: '#/nutrition' },
    { name: 'Training Hub', path: '#/exercises' },
    { name: 'Ask Tom', path: '#/ask-tom' },
    { name: 'Towers Built', path: '#/towers-built' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 relative flex items-center justify-center overflow-hidden rounded-full border border-zinc-800 bg-white">
                <img
                  src="/logo.jpg"
                  alt="Tower Training Logo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter italic">
                TOWER <span className="text-red-600">TRAINING</span>
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all ${isActive(link.path)
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-900/50'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold uppercase tracking-widest ${isActive(link.path)
                  ? 'text-red-500 bg-red-500/10'
                  : 'text-zinc-300 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
