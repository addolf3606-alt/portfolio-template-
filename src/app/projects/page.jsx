"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 py-16 px-6 relative selection:bg-emerald-600 selection:text-white">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header & Back Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-zinc-900 pb-8">
          <div className="space-y-4">
            {/* Back Button */}
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-900/85 hover:bg-zinc-800 border border-emerald-900/50 text-xs text-zinc-300 font-medium transition-all group shadow-inner"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>

            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                All <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-zinc-400 text-sm mt-2 max-w-xl leading-relaxed">
                [Explore a complete collection of web applications, client projects, and experimental works built using Next.js, React, and Tailwind CSS.]
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl hover:border-emerald-600/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="h-48 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-zinc-950 to-red-950/60 border border-zinc-800/80 flex items-center justify-center text-zinc-400 font-mono text-xs mb-6 group-hover:scale-[1.01] transition-transform shadow-inner">
                [Project Mockup / Image 1]
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">[Project Title 1]</h3>
                  <div className="flex items-center space-x-2">
                    <a href="#" className="p-2 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-300 transition-colors shadow-inner" title="Source Code">
                      <Code2 className="w-4 h-4 text-emerald-400" />
                    </a>
                    <a href="#" className="p-2 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-300 transition-colors shadow-inner" title="Live Preview">
                      <ExternalLink className="w-4 h-4 text-red-500" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  [Detailed description of project 1, key features, and how it performs.]
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-zinc-800/60">
              <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800/60 text-emerald-400 text-[10px] rounded-full font-mono shadow-inner">Next.js</span>
              <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800/60 text-red-400 text-[10px] rounded-full font-mono shadow-inner">Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl hover:border-red-600/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="h-48 rounded-2xl bg-gradient-to-br from-red-950/60 via-zinc-950 to-purple-950/60 border border-zinc-800/80 flex items-center justify-center text-zinc-400 font-mono text-xs mb-6 group-hover:scale-[1.01] transition-transform shadow-inner">
                [Project Mockup / Image 2]
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">[Project Title 2]</h3>
                  <div className="flex items-center space-x-2">
                    <a href="#" className="p-2 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-300 transition-colors shadow-inner" title="Source Code">
                      <Code2 className="w-4 h-4 text-red-500" />
                    </a>
                    <a href="#" className="p-2 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-300 transition-colors shadow-inner" title="Live Preview">
                      <ExternalLink className="w-4 h-4 text-purple-400" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  [Detailed description of project 2 and state management or API integration used.]
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-zinc-800/60">
              <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800/60 text-red-500 text-[10px] rounded-full font-mono shadow-inner">React</span>
              <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800/60 text-purple-400 text-[10px] rounded-full font-mono shadow-inner">JavaScript</span>
            </div>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl hover:border-purple-600/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="h-48 rounded-2xl bg-gradient-to-br from-purple-950/60 via-zinc-950 to-emerald-950/60 border border-zinc-800/80 flex items-center justify-center text-zinc-400 font-mono text-xs mb-6 group-hover:scale-[1.01] transition-transform shadow-inner">
                [Project Mockup / Image 3]
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">[Project Title 3]</h3>
                  <div className="flex items-center space-x-2">
                    <a href="#" className="p-2 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-300 transition-colors shadow-inner" title="Source Code">
                      <Code2 className="w-4 h-4 text-purple-400" />
                    </a>
                    <a href="#" className="p-2 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-300 transition-colors shadow-inner" title="Live Preview">
                      <ExternalLink className="w-4 h-4 text-emerald-400" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  [Detailed description of project 3, UI components, and animations.]
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-zinc-800/60">
              <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800/60 text-purple-400 text-[10px] rounded-full font-mono shadow-inner">Framer Motion</span>
              <span className="px-3 py-1 bg-zinc-950/80 border border-zinc-800/60 text-emerald-400 text-[10px] rounded-full font-mono shadow-inner">Tailwind CSS</span>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}