import { motion } from 'motion/react';
import { Target, Search, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    id: 'fintech-breach',
    title: 'FinTech Platform Zero-Day Discovery',
    client: 'Global Payment Processor',
    industry: 'Financial Services',
    problem: 'Client needed to ensure their new payment gateway was impenetrable before public launch. Automated scanners reported zero vulnerabilities.',
    methodology: 'Manual gray-box penetration testing mimicking advanced persistent threat (APT) tactics.',
    tools: ['Burp Suite Professional', 'Custom Python Scripts', 'Ghidra'],
    outcome: 'Discovered a critical business logic flaw allowing transaction manipulation. Patched 48 hours before launch, preventing millions in potential losses.',
    highlight: 'Saved $5M+ in potential fraud.'
  },
  {
    id: 'healthcare-ransomware',
    title: 'Hospital Network Ransomware Prevention',
    client: 'Regional Healthcare Provider',
    industry: 'Healthcare',
    problem: 'Client experienced a near-miss ransomware attempt. They needed a complete architecture review to stop lateral movement.',
    methodology: 'Internal network penetration testing and active directory mapping.',
    tools: ['BloodHound', 'Nmap', 'Metasploit Framework'],
    outcome: 'Identified severely misconfigured AD permissions. Designed and implemented a Zero Trust architecture, successfully segregating critical patient data from general network access.',
    highlight: 'Secured 500k+ Patient Records.'
  }
];

export default function CaseStudies() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">Real-World <span className="text-gradient">Threat Mitigation</span></h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Explore how we've helped enterprises uncover critical vulnerabilities and redesign their security architecture.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16 mb-24">
          {cases.map((study, idx) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="cyber-card overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-4 bg-cyber-surface/50 p-8 border-r border-cyber-border flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyber-primary" />
                  <div className="inline-block px-3 py-1 bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary font-mono text-[10px] uppercase tracking-widest rounded-sm mb-4 w-fit">
                    {study.industry}
                  </div>
                  <h2 className="text-2xl font-black mb-2 uppercase tracking-wider">{study.title}</h2>
                  <p className="text-slate-400 text-sm mb-6 font-mono">Client: Confidential ({study.client})</p>
                  
                  <div className="bg-cyber-accent/5 border border-cyber-accent/20 p-4 rounded-sm mt-auto">
                    <ShieldCheck className="w-6 h-6 text-cyber-accent mb-2" />
                    <p className="font-bold text-cyber-accent text-sm tracking-wide uppercase">{study.highlight}</p>
                  </div>
                </div>
                
                <div className="lg:col-span-8 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-red-400" />
                        <h3 className="font-bold text-lg text-white">The Threat Profile</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {study.problem}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Search className="w-5 h-5 text-cyber-primary" />
                        <h3 className="font-bold text-lg text-white">Our Methodology</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {study.methodology}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Wrench className="w-5 h-5 text-gray-300" />
                        <h3 className="font-bold text-lg text-white">Tools Deployed</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tools.map(tool => (
                          <span key={tool} className="bg-cyber-bg border border-cyber-border px-2 py-1 rounded text-xs font-mono text-gray-300">
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="w-5 h-5 text-cyber-accent" />
                        <h3 className="font-bold text-lg text-white">The Outcome</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-6">Is your infrastructure resilient enough to stop advanced attackers?</p>
          <Link to="/contact" className="cyber-button-primary inline-flex items-center gap-2">
            Schedule a Vulnerability Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
