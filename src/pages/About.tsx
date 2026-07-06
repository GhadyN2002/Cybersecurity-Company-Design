import { motion } from 'motion/react';
import { Shield, Award, Terminal, Crosshair, Map, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 uppercase"
          >
            Securing The <span className="text-gradient">Digital Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Ghady's CyberWorld is a premier cybersecurity consulting firm dedicated to protecting enterprises from advanced persistent threats through rigorous offensive security testing.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-8"
          >
            <Crosshair className="w-10 h-10 text-cyber-accent mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To provide unparalleled offensive security services that uncover critical vulnerabilities before malicious actors can exploit them, ensuring the resilience of our clients' digital infrastructure.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-8"
          >
            <Map className="w-10 h-10 text-cyber-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To be the globally recognized authority in penetration testing and security architecture, setting the standard for ethical hacking and continuous security validation.
            </p>
          </motion.div>
        </div>

        {/* Founder Profile */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-cyber-primary/20 blur-2xl rounded-full" />
                <div className="cyber-card p-2 relative aspect-square flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 opacity-20">
                     <svg width="100%" height="100%">
                        <pattern id="matrix" width="20" height="20" patternUnits="userSpaceOnUse">
                          <text x="0" y="15" fill="#0ea5e9" className="font-mono text-xs">01</text>
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#matrix)" />
                      </svg>
                   </div>
                   <Terminal className="w-32 h-32 text-cyber-primary z-10" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-black mb-2 uppercase">Ghady H. Najm</h2>
              <p className="text-cyber-primary font-mono text-sm tracking-wider mb-6">Founder & Lead Security Architect</p>
              <div className="space-y-4 text-slate-400 mb-8 leading-relaxed">
                <p>
                  With years of specialized experience in offensive cybersecurity, Ghady leads a team of elite ethical hackers dedicated to securing modern enterprise networks.
                </p>
                <p>
                  Possessing a deep understanding of network protocols, cloud architecture, and application security, he has successfully executed hundreds of penetration tests across the financial, healthcare, and technology sectors.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyber-accent" />
                  <span className="font-mono text-sm">Certified Ethical Hacker</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyber-accent" />
                  <span className="font-mono text-sm">OSCP Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyber-accent" />
                  <span className="font-mono text-sm">CISSP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyber-accent" />
                  <span className="font-mono text-sm">CCNA Routing/Switching</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline / Methodology */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Our <span className="text-gradient">Methodology</span></h2>
          <div className="relative border-l-2 border-cyber-border ml-4 md:ml-1/2 md:translate-x-[-1px] space-y-12 pb-12">
            {[
              { title: 'Reconnaissance', desc: 'Passive and active OSINT gathering to map the external attack surface.' },
              { title: 'Vulnerability Analysis', desc: 'Identifying potential vectors using advanced scanning and manual review.' },
              { title: 'Exploitation', desc: 'Safely proving impact by exploiting vulnerabilities in a controlled manner.' },
              { title: 'Reporting & Remediation', desc: 'Delivering actionable insights and working with your team to patch flaws.' }
            ].map((step, idx) => (
              <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyber-primary border-4 border-cyber-bg" />
                <div className={`pl-8 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12'}`}>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="cyber-button-primary inline-flex">
              Request Free Consultation
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
