import { motion } from 'motion/react';
import { Search, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Top 5 Cybersecurity Threats Facing Enterprises in 2026',
    excerpt: 'As AI-driven attacks become the norm, traditional defenses are failing. Discover the top threats and how to architect your network to withstand them.',
    category: 'Threat Intelligence',
    readTime: '6 min read',
    date: 'Oct 24, 2026'
  },
  {
    id: 2,
    title: 'Anatomy of an Exploit: How Hackers Bypass WAFs',
    excerpt: 'Web Application Firewalls are a necessary perimeter defense, but they are not silver bullets. We break down common WAF bypass techniques used in modern penetration tests.',
    category: 'Penetration Testing',
    readTime: '8 min read',
    date: 'Oct 18, 2026'
  },
  {
    id: 3,
    title: 'Zero Trust Architecture: A Practical Implementation Guide',
    excerpt: 'Moving beyond the buzzword. Real-world steps to implement a Zero Trust model in hybrid cloud environments without disrupting business operations.',
    category: 'Architecture',
    readTime: '12 min read',
    date: 'Oct 05, 2026'
  },
  {
    id: 4,
    title: 'The Hidden Risks of Third-Party API Integrations',
    excerpt: 'Your code might be secure, but what about the APIs you consume? Why third-party integrations are the new favorite target for initial access brokers.',
    category: 'AppSec',
    readTime: '5 min read',
    date: 'Sep 28, 2026'
  }
];

export default function Blog() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">Security <span className="text-gradient">Insights</span></h1>
          <p className="text-lg text-slate-400">
            Technical write-ups, threat intelligence, and defensive strategies from our elite team of ethical hackers.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search intelligence database..." 
              className="w-full bg-cyber-surface border border-cyber-border rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyber-primary transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {['All', 'Threat Intelligence', 'Penetration Testing', 'Architecture', 'AppSec'].map(tag => (
              <button key={tag} className="whitespace-nowrap px-4 py-1.5 rounded-full border border-cyber-border bg-cyber-surface text-sm text-gray-300 hover:text-cyber-primary hover:border-cyber-primary transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="cyber-card p-8 group cursor-pointer flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4 text-[10px] font-mono tracking-widest uppercase">
                <span className="text-cyber-primary border border-cyber-primary/30 bg-cyber-primary/5 px-2 py-1 rounded-sm">
                  {post.category}
                </span>
                <span className="text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 group-hover:text-cyber-primary transition-colors tracking-wide leading-snug">
                {post.title}
              </h2>
              
              <p className="text-slate-400 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto border-t border-cyber-border/50 pt-4">
                <span className="text-slate-500 text-xs font-mono uppercase">{post.date}</span>
                <Link to="#" className="text-cyber-accent text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:brightness-125 transition-all">
                  Read Report <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
