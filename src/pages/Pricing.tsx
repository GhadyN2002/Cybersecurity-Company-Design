import { motion } from 'motion/react';
import { Check, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter Security',
    target: 'Small Businesses & Startups',
    price: '$2,500',
    frequency: 'per assessment',
    description: 'Essential vulnerability scanning and external perimeter testing.',
    features: [
      'External Network Vulnerability Scan',
      'Basic Web Application Scan (1 App)',
      'Automated Reporting',
      'High-Level Remediation Summary',
      '1 Hour Consultation'
    ],
    highlight: false
  },
  {
    name: 'Business Protection',
    target: 'Mid-Market & SaaS',
    price: '$7,500',
    frequency: 'per assessment',
    description: 'Comprehensive manual penetration testing and logical flaw analysis.',
    features: [
      'Everything in Starter',
      'Manual Web Application Pen Test',
      'API Security Testing',
      'Business Logic Flaw Discovery',
      'Detailed Technical Remediation Report',
      'Post-Remediation Retest (1 Round)'
    ],
    highlight: true
  },
  {
    name: 'Enterprise Defense',
    target: 'Large Corps & High-Risk targets',
    price: 'Custom',
    frequency: 'annual contract',
    description: 'Full-scope red teaming, internal testing, and continuous security.',
    features: [
      'Everything in Business Protection',
      'Internal Network Penetration Testing',
      'Active Directory Compromise Simulation',
      'Social Engineering / Phishing',
      'Dedicated Security Architect',
      '24/7 Incident Response Retainer'
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyber-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">Investment in <span className="text-gradient">Resilience</span></h1>
          <p className="text-lg text-slate-400">
            Transparent pricing for world-class offensive security services. Choose the level of depth your organization requires.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`cyber-card relative p-8 flex flex-col ${plan.highlight ? 'border-cyber-primary shadow-[0_0_30px_rgba(14,165,233,0.15)]' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyber-primary text-slate-950 text-[10px] font-bold px-4 py-1 rounded-sm uppercase tracking-widest border border-cyber-primary">
                  Recommended
                </div>
              )}
              
              <div className="mb-6 border-b border-cyber-border/50 pb-6">
                <h2 className="text-2xl font-black text-white mb-1 uppercase tracking-wider">{plan.name}</h2>
                <p className="text-xs font-mono text-cyber-primary mb-4 tracking-wider">{plan.target}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500 text-xs tracking-widest uppercase">{plan.frequency}</span>
                </div>
                <p className="text-slate-400 text-sm mt-4 leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-cyber-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to="/contact" 
                className={`text-center w-full ${plan.highlight ? 'cyber-button-primary' : 'cyber-button-outline'}`}
              >
                Request Quote
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-cyber-primary mb-4">
            <Shield className="w-5 h-5" />
            <span className="font-bold">Not sure what you need?</span>
          </div>
          <p className="text-gray-400 mb-6">
            Every organization's risk profile is unique. Contact us for a free, confidential scoping call to determine the exact requirements for your environment.
          </p>
          <Link to="/contact" className="text-white hover:text-cyber-primary font-medium underline underline-offset-4">
            Schedule Scoping Call
          </Link>
        </div>

      </div>
    </div>
  );
}
