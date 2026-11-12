"use client";
import { motion } from "framer-motion";
import { Code2, Terminal, Briefcase, Layout, Cpu, Globe, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 py-16 px-6 relative selection:bg-emerald-600 selection:text-white">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header & Back Button */}
        <div className="space-y-4 border-b border-zinc-900 pb-8">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-emerald-900/50 text-xs text-zinc-300 font-medium transition-all group shadow-inner"
          >
            <span className="transition-transform group-hover:-translate-x-1 text-emerald-400">←</span>
            <span>Back to Home</span>
          </Link>

          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              My <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl leading-relaxed">
              [Explore the professional web development and design services I offer to bring your ideas to life with high performance.]
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-600/50 transition-all group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-emerald-950/60 border border-emerald-800/40 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-inner">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">[Frontend Development]</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                [Building responsive, fast, and modern user interfaces using React, Next.js, and Tailwind CSS with smooth animations.]
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>[Custom React & Next.js Apps]</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>[Tailwind CSS Styling]</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-zinc-800/60">
              <a href="/#contact" className="text-xs text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center space-x-1">
                <span>Get Started</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl hover:border-red-600/50 transition-all group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-red-950/60 border border-red-800/40 rounded-2xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-inner">
                <Layout className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">[UI/UX Implementation]</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                [Converting designs into pixel-perfect, interactive, and user-friendly web layouts optimized for all screens.]
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>[Responsive Design]</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>[Framer Motion Animations]</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-zinc-800/60">
              <a href="/#contact" className="text-xs text-red-400 font-semibold hover:text-red-300 transition-colors flex items-center space-x-1">
                <span>Get Started</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-600/50 transition-all group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-purple-950/60 border border-purple-800/40 rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shadow-inner">
                <Terminal className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">[API Integration & Logic]</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                [Connecting external data sources, handling JSON structures, and managing asynchronous states cleanly using JavaScript.]
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>[Async / Await Operations]</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>[Clean State Management]</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-zinc-800/60">
              <a href="/#contact" className="text-xs text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center space-x-1">
                <span>Get Started</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}