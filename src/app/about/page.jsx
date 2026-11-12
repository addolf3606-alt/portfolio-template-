"use client";
import { motion } from "framer-motion";
import { User, Code2, Terminal, Sparkles, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 py-16 px-6 relative selection:bg-emerald-600 selection:text-white">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Header & Back Button */}
        <div className="space-y-4 border-b border-zinc-800/80 pb-8">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-900/85 hover:bg-zinc-800 border border-emerald-900/50 text-xs text-zinc-300 font-mono transition-all group shadow-inner"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
              <span>Bio & Profile</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              About <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-mono">
              [Get to know more about my background, passion for web development, and expertise.]
            </p>
          </div>
        </div>

        {/* Main Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Avatar Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl flex flex-col items-center text-center space-y-4 md:col-span-1 shadow-2xl hover:border-emerald-600/30 transition-all"
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-500 via-red-500 to-purple-500 p-1 flex items-center justify-center shadow-lg">
              <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
                <User className="w-10 h-10 text-emerald-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">[Your Name]</h3>
              <p className="text-xs text-emerald-400 font-mono mt-1">[Web Developer]</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl space-y-4 md:col-span-2 shadow-2xl hover:border-emerald-600/30 transition-all"
          >
            <h2 className="text-xl font-bold text-white flex items-center space-x-2 font-mono">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span>Who I Am</span>
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              [Write a detailed introduction about yourself here. Mention how you started web development, your dedication to writing clean and efficient code, and what drives you to build modern web applications.]
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed font-mono">
              [Add details about your focus on performance, user interface design, and seamless user experience using modern web technologies.]
            </p>
          </motion.div>

        </div>

        {/* Expertise / What I Use */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-xl space-y-6 shadow-2xl hover:border-emerald-600/30 transition-all"
        >
          <h2 className="text-xl font-bold text-white flex items-center space-x-2 font-mono">
            <Code2 className="w-5 h-5 text-purple-400" />
            <span>My Core Tech Stack</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-inner">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white font-mono">Next.js & React</h4>
                <p className="text-xs text-zinc-400 mt-1">[Building dynamic, high-performance web applications and component structures.]</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-inner">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white font-mono">Tailwind CSS</h4>
                <p className="text-xs text-zinc-400 mt-1">[Designing modern, responsive, and aesthetically pleasing user interfaces.]</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-inner">
              <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white font-mono">JavaScript & ES6+</h4>
                <p className="text-xs text-zinc-400 mt-1">[Writing clean logic, handling async/await operations, and state management.]</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-inner">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white font-mono">UI Animations</h4>
                <p className="text-xs text-zinc-400 mt-1">[Adding smooth interactions and motion using Framer Motion and Lucide icons.]</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}