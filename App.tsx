
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
            <p className="text-zinc-400">Founded by Tom. Built for the elite. No excuses, just results. Stand tall, build your tower.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-500">
              <li><a href="#/" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#/nutrition" className="hover:text-red-500 transition-colors">Nutrition AI</a></li>
              <li><a href="#/exercises" className="hover:text-red-500 transition-colors">Exercise Library</a></li>
              <li><a href="#/ask-tom" className="hover:text-red-500 transition-colors">Ask Tom</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Tom</h4>
            <p className="text-zinc-500">Ready to transform? Join the tower. </p>
            <p className="text-red-600 font-bold mt-2">support@towertraining.fit</p>
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
