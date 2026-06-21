"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageCircle, Bot, Zap, Cpu, ArrowUpRight, 
  Mic, Smartphone, Terminal, Layers, Code2, 
  Linkedin, Mail, Globe, CheckCircle
} from 'lucide-react';

// --- Reusable Components ---

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-4xl font-bold text-white mb-4"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "80px" }}
      className="h-1 bg-cyan-500 rounded-full mb-4"
    />
    <p className="text-slate-400 max-w-xl">{subtitle}</p>
  </div>
);

// --- Sections ---

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <main className="relative grainy-bg">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
        <div className="glass-card px-8 py-4 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter text-white">USMAN.AI</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {['Services', 'Workflow', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
            HIRE ME
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full animate-pulse delay-700" />

        <motion.div style={{ opacity }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-xs font-bold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            GHL AUTOMATION ARCHITECT
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.9] text-white mb-8"
          >
            AI VOICE <br /> <span className="text-slate-500">EXPERIENCE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-slate-400 mb-12"
          >
            I connect Vapi and Retell AI directly into your GoHighLevel CRM via n8n. 
            Scaling conversations without human limits.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] transition-all">
              Book a Strategy Call
            </button>
            <div className="glass-card px-10 py-5 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-slate-800" />)}
              </div>
              <span className="text-xs font-medium text-slate-300">Trusted by 25+ Companies</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. STATS STRIP */}
      <section className="py-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Followers', val: '2K+' },
            { label: 'Workflows Built', val: '50+' },
            { label: 'Client Retention', val: '30%↑' },
            { label: 'Satisfaction', val: '95%' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-white">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BENTO SERVICES */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <SectionHeading 
          title="The Core Stack" 
          subtitle="Specialized in the niche gaps most developers miss: Voice AI to CRM synchronization."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 glass-card p-10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 text-cyan-500 opacity-20 group-hover:rotate-12 transition-transform">
                <Mic size={120} />
             </div>
             <h3 className="text-3xl font-bold mb-4">AI Voice Integration</h3>
             <p className="text-slate-400 max-w-md">Wiring Vapi and Retell AI into GHL using n8n for automated inbound/outbound calling that updates your CRM in real-time.</p>
             <div className="mt-8 flex gap-2">
                {['Vapi', 'Retell AI', 'n8n'].map(tag => <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold">{tag}</span>)}
             </div>
          </div>

          <div className="md:col-span-4 glass-card p-10 bg-gradient-to-br from-cyan-500/10 to-transparent">
             <Bot className="text-cyan-400 mb-6" size={40} />
             <h3 className="text-2xl font-bold mb-4">SMS Bots</h3>
             <p className="text-slate-400 text-sm">Conversational AI for lead qualification and follow-ups.</p>
          </div>

          <div className="md:col-span-4 glass-card p-10">
             <Layers className="text-violet-400 mb-6" size={40} />
             <h3 className="text-2xl font-bold mb-4">GHL Logic</h3>
             <p className="text-slate-400 text-sm">Custom Snapshots, Workflow Architecture, and API-based problem solving.</p>
          </div>

          <div className="md:col-span-8 glass-card p-10 flex flex-col justify-between">
             <div>
                <h3 className="text-3xl font-bold mb-4">Web Architecture</h3>
                <p className="text-slate-400">WordPress to Figma, high-converting landing pages built inside GoHighLevel for campaign tracking.</p>
             </div>
             <div className="flex gap-4 mt-8">
               <Smartphone size={20} className="text-slate-500" />
               <Globe size={20} className="text-slate-500" />
               <Terminal size={20} className="text-slate-500" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE TIMELINE */}
      <section id="experience" className="py-32 px-6 max-w-4xl mx-auto">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="From Graphic Design to AI Architecture. A evolution of technical skill."
        />

        <div className="space-y-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-[15px] md:ml-[19px]" />
          
          {[
            {
              title: "GHL Developer",
              company: "Bit and Bytes LLC",
              date: "2023 - Present",
              points: ["AI Voice Integrations", "n8n Workflow Design", "GHL Funnel Building"]
            },
            {
              title: "Client Success Manager",
              company: "Carpe Diem Team",
              date: "2023",
              points: ["95% Client Satisfaction", "40% faster onboarding", "Retention focus"]
            },
            {
              title: "Automation Associate",
              company: "Carpe Diem Team",
              date: "2024",
              points: ["50+ Workflows", "CRM integration", "30% efficiency gain"]
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border border-white/20 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
              </div>
              <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">{item.date}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
              <p className="text-slate-500 font-medium mb-4">{item.company}</p>
              <ul className="space-y-2">
                {item.points.map(p => (
                  <li key={p} className="text-sm text-slate-400 flex items-center gap-2">
                    <CheckCircle size={14} className="text-cyan-500/50" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
          
          <h2 className="text-5xl font-black text-white mb-6">Ready to Automate?</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Whether you need a custom AI Voice agent or a complete GHL infrastructure, let's talk about shipping your project.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:usmannajeebx@gmail.com" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-3 glass-card px-8 py-4 rounded-2xl font-bold text-white">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-slate-600 text-xs tracking-widest uppercase">
          Designed for 2026 • Usman Najeeb • All Rights Reserved
        </p>
      </footer>

      {/* STICKY WHATSAPP */}
      <motion.a
        href="https://wa.me/YOUR_PHONE_HERE" // REPLACE WITH YOUR NUMBER
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[110] bg-green-500 text-white p-5 rounded-3xl shadow-[0_20px_40px_-10px_rgba(34,197,94,0.5)]"
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* BOTTOM STICKY BUTTON */}
      <div className="fixed bottom-8 left-8 z-[110]">
        <div className="glass-card px-4 py-2 flex items-center gap-3 animate-bounce">
           <div className="w-2 h-2 bg-green-500 rounded-full" />
           <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Available for hire</span>
        </div>
      </div>
    </main>
  );
}
