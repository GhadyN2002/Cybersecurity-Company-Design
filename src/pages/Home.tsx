import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Lock, Activity, Server, FileCode, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: ShieldCheck, title: 'Penetration Testing', desc: 'Identify and exploit vulnerabilities before attackers do.' },
  { icon: Activity, title: 'Vulnerability Assessment', desc: 'Continuous scanning and risk scoring of your infrastructure.' },
  { icon: Server, title: 'Network Security', desc: 'Enterprise-grade architecture and firewall design.' },
  { icon: Lock, title: 'Incident Response', desc: '24/7 rapid containment and forensic analysis.' },
  { icon: FileCode, title: 'Secure Code Review', desc: 'Deep dive analysis of application source code.' },
  { icon: Users, title: 'Security Awareness', desc: 'Training your team to be the first line of defense.' }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden scanline">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-cyber-surface border border-cyber-border text-[10px] uppercase tracking-widest text-cyber-primary rounded mb-6"
            >
              Global Cyber Defense & Response
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tight uppercase"
            >
              Fortify Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-accent">Digital Perimeter</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              Enterprise-grade cybersecurity solutions. We simulate real-world attacks to identify vulnerabilities before malicious actors exploit them.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="cyber-button-primary">
                Request Free Audit
              </Link>
              <Link to="/services" className="cyber-button-outline">
                Explore Services
              </Link>
            </motion.div>

            {/* Micro Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-cyber-border/50 max-w-lg"
            >
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-[10px] uppercase text-slate-500 tracking-wider">Systems Audited</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-[10px] uppercase text-slate-500 tracking-wider">Resilience Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-[10px] uppercase text-slate-500 tracking-wider">Threat Monitoring</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements for immersive theme */}
        <div className="hidden lg:block absolute right-10 top-20 w-32 h-32 border-t border-r border-cyber-primary opacity-40" />
        <div className="hidden lg:block absolute right-40 bottom-20 w-32 h-32 border-b border-l border-cyber-accent opacity-40" />
      </section>

      {/* Trust Bar */}
      <section className="border-y border-cyber-border bg-cyber-surface/30 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-mono text-slate-500 mb-6 uppercase tracking-widest">Trusted By Innovative Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simulated Logos */}
            <div className="font-display font-bold text-2xl">TECHCORP</div>
            <div className="font-display font-bold text-2xl tracking-tighter">GLOBAL<span className="text-cyber-primary">FIN</span></div>
            <div className="font-display font-bold text-xl uppercase border-2 px-2 py-1">Nexus</div>
            <div className="font-display font-bold text-2xl italic">Stark Industries</div>
            <div className="font-display font-bold text-2xl tracking-widest">AERIS</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Core <span className="text-cyber-primary">Capabilities</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive security assessments and defensive architecture to protect your critical assets against modern threats.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-6 group"
            >
              <service.icon className="w-12 h-12 text-cyber-primary mb-4 group-hover:text-cyber-accent transition-colors" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
              <Link to="/services" className="text-cyber-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cyber-surface/30 border-y border-cyber-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With <span className="text-gradient">Ghady's CyberWorld?</span></h2>
              <p className="text-gray-400 mb-8 text-lg">We don't just run automated scanners. Our certified experts think like hackers to find logical flaws and complex attack vectors that automated tools miss.</p>
              
              <div className="space-y-6">
                {[
                  { title: 'Certified Expertise', desc: 'OSCP, CEH, and CISSP certified professionals handling your data.' },
                  { title: 'Zero-Disruption Testing', desc: 'Rigorous methodologies that ensure your business operations remain uninterrupted.' },
                  { title: 'Actionable Reporting', desc: 'Clear, prioritized remediation steps, not just a list of CVEs.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-cyber-primary/20 p-2 rounded-lg h-fit">
                      <ShieldCheck className="w-6 h-6 text-cyber-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/10 to-cyber-accent/10 blur-3xl -z-10" />
              <div className="cyber-card p-8 font-mono text-sm overflow-hidden h-[400px] flex flex-col justify-end relative border-l-4 border-l-cyber-primary">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-cyber-primary mt-8">guest@ghadys-cyberworld:~$ ./run_audit.sh</div>
                <div className="text-gray-400 mt-2">[+] Initializing stealth scan...</div>
                <div className="text-gray-400">[+] Bypassing WAF rulesets... OK</div>
                <div className="text-gray-400">[+] Enumerating active directories...</div>
                <div className="text-yellow-500 mt-2">[!] VULNERABILITY FOUND: CVE-2023-XXXX</div>
                <div className="text-cyber-accent mt-2 font-bold">[&gt;] DEPLOYING REMEDIATION PROTOCOL...</div>
                <div className="text-gray-400 mt-4 animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't Wait For A <span className="text-red-500">Breach</span>.</h2>
          <p className="text-xl text-gray-400 mb-10">Secure your infrastructure today with a comprehensive security audit.</p>
          <Link to="/contact" className="cyber-button-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            <Lock className="w-5 h-5" /> Schedule Your Confidential Audit
          </Link>
          <p className="mt-4 text-sm text-gray-500 font-mono">Encrypted communication channel • 100% Confidential</p>
        </div>
      </section>
    </div>
  );
}
