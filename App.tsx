
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Exercises from './pages/Exercises';
import PrimalGym from './pages/PrimalGym';
import TowersBuilt from './pages/TowersBuilt';
import TermsOfUse from './pages/TermsOfUse';
import HealthDisclaimer from './pages/HealthDisclaimer';
import MediaPrivacyNotice from './pages/MediaPrivacyNotice';

const QUICK_LINKS = [
  { href: '#/', label: 'Home' },
  { href: '#/nutrition', label: 'Nutrition Hub' },
  { href: '#/exercises', label: 'Training Hub' },
  { href: '#/primal-gym', label: 'Primal Gym' },
  { href: '#/towers-built', label: 'Towers Built' },
];

const LEGAL_LINKS = [
  { href: '#/terms-of-use', label: 'Terms of Use' },
  { href: '#/health-disclaimer', label: 'Health Disclaimer' },
  { href: '#/media-privacy-notice', label: 'Media & Privacy Notice' },
];

const normalizePath = (path: string) => {
  if (!path) {
    return '#/';
  }

  if (path === '#/ask-tom') {
    return '#/primal-gym';
  }

  return path;
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(normalizePath(window.location.hash || '#/'));

  useEffect(() => {
    const handleHashChange = () => {
      const rawPath = window.location.hash || '#/';

      if (rawPath === '#/ask-tom') {
        window.location.hash = '#/primal-gym';
        return;
      }

      setCurrentPath(normalizePath(rawPath));
    };

    handleHashChange();
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
      case '#/primal-gym':
      case '#/ask-tom':
        return <PrimalGym />;
      case '#/towers-built':
        return <TowersBuilt />;
      case '#/terms-of-use':
        return <TermsOfUse />;
      case '#/health-disclaimer':
        return <HealthDisclaimer />;
      case '#/media-privacy-notice':
        return <MediaPrivacyNotice />;
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4 italic">TOWER TRAINING</h3>
            <p className="text-zinc-400">Founded by Tom. A system of self-improvement, scaled to your life, your needs, and your level of commitment.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-500">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-red-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-zinc-500">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-red-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-zinc-600 text-sm mt-4 leading-relaxed">
              Use of this website is subject to the linked terms, notices, and disclaimers.
            </p>
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
          <p className="max-w-4xl mx-auto leading-relaxed">
            By continuing to use this website, you acknowledge that its nutrition, exercise, and general content is used at your own discretion and risk.
          </p>
          <p className="mt-4">&copy; {new Date().getFullYear()} Tower Training. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
