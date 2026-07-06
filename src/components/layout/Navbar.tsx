import { Link } from 'react-router-dom';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Insights', path: '/blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-cyber-border bg-cyber-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-cyber-primary rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all group-hover:brightness-110">
                <div className="w-6 h-6 border-2 border-cyber-bg rotate-45"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white uppercase">
                GHADY'S <span className="text-cyber-primary">CYBERWORLD</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-cyber-primary hover:text-white px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-cyber-border">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-slate-500 uppercase">Threat Level</span>
                  <span className="text-cyber-accent text-xs font-mono font-bold">SECURE // NO BREACHES</span>
                </div>
                <div className="w-2 h-2 bg-cyber-accent rounded-full animate-pulse shadow-[0_0_8px_#00ff9d]"></div>
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-cyber-surface focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cyber-surface border-b border-cyber-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-cyber-primary font-bold block px-3 py-2 rounded-md text-base"
              onClick={() => setIsOpen(false)}
            >
              Request Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
