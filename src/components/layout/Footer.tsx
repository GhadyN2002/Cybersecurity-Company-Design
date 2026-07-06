import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cyber-surface border-t border-cyber-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyber-primary rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                <div className="w-6 h-6 border-2 border-cyber-bg rotate-45"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white uppercase">
                CYBERWORLD
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Securing the digital future with military-grade penetration testing and enterprise security architecture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-cyber-primary">Penetration Testing</Link></li>
              <li><Link to="/services" className="hover:text-cyber-primary">Vulnerability Assessment</Link></li>
              <li><Link to="/services" className="hover:text-cyber-primary">Incident Response</Link></li>
              <li><Link to="/services" className="hover:text-cyber-primary">Network Security</Link></li>
              <li><Link to="/services" className="hover:text-cyber-primary">Security Training</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-cyber-primary">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-cyber-primary">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-cyber-primary">Security Blog</Link></li>
              <li><Link to="/pricing" className="hover:text-cyber-primary">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-cyber-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cyber-primary shrink-0" />
                <span>Beirut, Lebanon<br/>Global Remote Services</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyber-primary shrink-0" />
                <span>+961 XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyber-primary shrink-0" />
                <span>security@ghadyscyberworld.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
          <div className="flex gap-6">
            <span>Session ID: AF-204-X</span>
            <span>Node: LBN-CE-01</span>
          </div>
          <div className="flex gap-4">
            <span>Copyright © {new Date().getFullYear()} Ghady's CyberWorld</span>
            <span className="text-cyber-accent hidden sm:inline">Secure Communication Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
