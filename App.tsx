
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Exercises from './pages/Exercises';
import AskTom from './pages/AskTom';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/nutrition':
        return <Nutrition />;
      case '#/exercises':
        return <Exercises />;
      case '#/ask-tom':
        return <AskTom />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4 italic">TOWER TRAINING</h3>
            <p className="text-zinc-400">Founded by Tom. A system of self-improvement, scaled to your life, your needs, and your level of commitment.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-500">
              <li><a href="#/" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#/nutrition" className="hover:text-red-500 transition-colors">Nutrition Hub</a></li>
              <li><a href="#/exercises" className="hover:text-red-500 transition-colors">Training Hub</a></li>
              <li><a href="#/ask-tom" className="hover:text-red-500 transition-colors">Ask Tom</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Tom</h4>
            <p className="text-zinc-500 mb-2">DM on socials for the quickest reply.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/tower_training/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-600">Instagram</a>
              <a href="https://www.facebook.com/towertrainingdarwen/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-600">Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Tower Training. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
