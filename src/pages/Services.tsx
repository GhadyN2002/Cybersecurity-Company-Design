import { motion } from 'motion/react';
import { ShieldCheck, Activity, Server, Lock, FileCode, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    id: 'pentesting',
    icon: ShieldCheck,
    title: 'Penetration Testing',
    desc: 'Simulated cyber attacks on your systems to identify exploitable vulnerabilities.',
    tech: ['Web Applications', 'Mobile Apps', 'Internal/External Networks', 'APIs'],
    benefits: ['Identify zero-days', 'Meet compliance requirements', 'Test defensive controls']
  },
  {
    id: 'vuln-assessment',
    icon: Activity,
    title: 'Vulnerability Assessment',
    desc: 'Comprehensive scanning and evaluation of your infrastructure for known flaws.',
    tech: ['Continuous Scanning', 'Asset Discovery', 'Risk Prioritization', 'Patch Management'],
    benefits: ['Broad coverage', 'Quick turnaround', 'Baseline security posture']
  },
  {
    id: 'network-sec',
    icon: Server,
    title: 'Network Security Architecture',
    desc: 'Design and implementation of robust, resilient network perimeters.',
    tech: ['Zero Trust', 'Firewall Rulesets', 'IDS/IPS Config', 'Segmentation'],
    benefits: ['Reduce attack surface', 'Contain lateral movement', 'Secure remote access']
  },
  {
    id: 'incident-response',
    icon: Lock,
    title: 'Incident Response & Forensics',
    desc: 'Rapid containment, eradication, and root cause analysis during a breach.',
    tech: ['Memory Forensics', 'Log Analysis', 'Malware Reverse Engineering', 'Threat Hunting'],
    benefits: ['Minimize downtime', 'Preserve evidence', 'Prevent recurrence']
  },
  {
    id: 'digital-forensics',
    icon: FileCode,
    title: 'Digital Forensics',
    desc: 'Deep investigation of digital devices to uncover evidence of compromise or fraud.',
    tech: ['Disk Imaging', 'Data Recovery', 'Timeline Analysis', 'Chain of Custody'],
    benefits: ['Legal support', 'Insider threat discovery', 'Detailed reporting']
  },
  {
    id: 'security-training',
    icon: Users,
    title: 'Security Awareness Training',
    desc: 'Empower your workforce to recognize and thwart social engineering attacks.',
    tech: ['Phishing Simulations', 'Interactive Modules', 'Executive Wargaming', 'Metrics Tracking'],
    benefits: ['Reduce human error', 'Build security culture', 'Fulfill compliance']
  }
];

export default function Services() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">Our <span className="text-gradient">Services</span></h1>
          <p className="text-lg text-slate-400">
            Comprehensive offensive security and defensive architecture solutions tailored to protect your most critical assets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="cyber-card p-8 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cyber-primary/10 p-3 rounded-sm border border-cyber-primary/30">
                  <service.icon className="w-8 h-8 text-cyber-primary" />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-wider">{service.title}</h2>
              </div>
              
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{service.desc}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-sm font-mono text-cyber-accent mb-3 uppercase">Technical Focus</h4>
                  <ul className="space-y-2">
                    {service.tech.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-cyber-primary mt-1">▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-cyber-accent mb-3 uppercase">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyber-accent shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/contact" className="cyber-button-outline text-center">
                Request Service
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Assessment Packages</h2>
            <p className="text-gray-400">Choose the right depth of analysis for your organization.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-cyber-border bg-cyber-surface/50">
                  <th className="p-4 font-display font-semibold">Feature</th>
                  <th className="p-4 font-display font-semibold text-center">Basic Assessment</th>
                  <th className="p-4 font-display font-semibold text-center text-cyber-primary">Advanced Penetration Test</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyber-border">
                {[
                  { feature: 'Automated Vulnerability Scanning', basic: true, advanced: true },
                  { feature: 'Manual Exploitation Verification', basic: false, advanced: true },
                  { feature: 'Business Logic Flaw Analysis', basic: false, advanced: true },
                  { feature: 'Custom Exploit Development', basic: false, advanced: true },
                  { feature: 'Detailed Remediation Guidance', basic: true, advanced: true },
                  { feature: 'Executive Summary Report', basic: true, advanced: true },
                  { feature: 'Retesting Post-Remediation', basic: false, advanced: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-cyber-surface/30 transition-colors">
                    <td className="p-4 text-gray-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.basic ? <CheckCircle2 className="w-5 h-5 text-cyber-accent mx-auto" /> : <span className="text-gray-600">-</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.advanced ? <CheckCircle2 className="w-5 h-5 text-cyber-primary mx-auto" /> : <span className="text-gray-600">-</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* CTA */}
        <div className="cyber-card p-10 text-center relative overflow-hidden border-t-4 border-t-cyber-accent">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl font-black mb-4 relative z-10 uppercase">Ready to secure your perimeter?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Contact our team of experts for a custom quote based on your specific infrastructure and compliance requirements.
          </p>
          <Link to="/contact" className="cyber-button-primary relative z-10">
            Get A Custom Quote
          </Link>
        </div>

      </div>
    </div>
  );
}
