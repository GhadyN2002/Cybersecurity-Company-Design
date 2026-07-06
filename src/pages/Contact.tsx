import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ShieldAlert, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyber-primary/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">Secure Your <span className="text-gradient">Infrastructure</span></h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Request a free consultation or security audit. Our team of certified ethical hackers is ready to evaluate your defenses. All communications are strictly confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info & Trust Boosters */}
          <div className="lg:col-span-4 space-y-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold mb-6 border-b border-cyber-border pb-4">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-300">
                  <div className="bg-cyber-surface p-3 rounded-lg border border-cyber-border shrink-0">
                    <Mail className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium">secure@ghadyscyberworld.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <div className="bg-cyber-surface p-3 rounded-lg border border-cyber-border shrink-0">
                    <Phone className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-500 mb-1">Phone / WhatsApp</p>
                    <p className="font-medium">+961 XX XXX XXX</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <div className="bg-cyber-surface p-3 rounded-lg border border-cyber-border shrink-0">
                    <MapPin className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-500 mb-1">Headquarters</p>
                    <p className="font-medium">Beirut, Lebanon</p>
                    <p className="text-sm text-gray-500">Global Remote Operations</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-cyber-surface border border-cyber-border p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyber-accent" />
              <ShieldAlert className="w-8 h-8 text-cyber-accent mb-4" />
              <h4 className="font-bold text-lg mb-2">Confidentiality Assured</h4>
              <p className="text-sm text-gray-400">
                We adhere to strict NDA protocols. Your operational data and infrastructure details are encrypted and securely handled.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-cyber-accent bg-cyber-accent/10 px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
                Response within 24 hours
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="cyber-card p-8 md:p-10 border-t-4 border-t-cyber-primary"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider">Request Free Consultation</h2>
                <span className="hidden sm:inline-block text-[10px] text-slate-500 font-mono">ENC: AES-256</span>
              </div>
              
              {formState === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-cyber-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldAlert className="w-8 h-8 text-cyber-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Transmission Secure</h3>
                  <p className="text-gray-400">Your request has been encrypted and sent. A security architect will contact you shortly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 cyber-button-outline"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Work Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Company Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors"
                        placeholder="Corp Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Service Needed</label>
                      <select 
                        required
                        className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="pentest">Penetration Testing</option>
                        <option value="audit">Security Audit</option>
                        <option value="incident">Incident Response</option>
                        <option value="consulting">General Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message / Scope of Work</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors resize-none"
                      placeholder="Briefly describe your infrastructure or the security challenges you are facing..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full bg-transparent border border-cyber-primary text-cyber-primary py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-cyber-primary/10 transition-all flex items-center justify-center gap-2"
                  >
                    {formState === 'submitting' ? (
                      <span className="animate-pulse">Encrypting & Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Initialize Secure Request
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-gray-500 font-mono mt-4">
                    <Lock className="w-3 h-3 inline mr-1" /> End-to-end encrypted submission
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
