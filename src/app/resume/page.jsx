"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Download, Calendar, Code2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 py-16 px-6 relative selection:bg-emerald-600 selection:text-white">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Header & Back Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-zinc-900 pb-8">
          <div className="space-y-4">
            {/* Proper Back Button */}
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-900/85 hover:bg-zinc-800 border border-emerald-900/50 text-xs text-zinc-300 font-medium transition-all group shadow-inner"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>

            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                My <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Resume</span>
              </h1>
              <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                [A summary of my professional experience, education, and technical background.]
              </p>
            </div>
          </div>

          <a 
            href="#" 
            className="px-6 py-3 rounded-2xl bg-zinc-900/85 hover:bg-zinc-800 border border-emerald-900/50 text-zinc-200 font-semibold text-xs transition-all flex items-center space-x-2 shadow-inner group cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>[Download CV / Resume]</span>
          </a>
        </div>

        {/* Experience Section */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-emerald-950/60 border border-emerald-800/40 rounded-2xl text-emerald-400 shadow-inner">
              <Briefcase className="w-5 h-5 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">Work Experience</h2>
          </div>

          <div className="space-y-6 border-l-2 border-zinc-800/80 pl-6 ml-3">
            
            {/* Experience Item 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-3xl space-y-3 backdrop-blur-xl hover:border-emerald-600/40 transition-all"
            >
              <div className="absolute -left-[31px] top-6 w-3 h-3 bg-emerald-400 rounded-full border-4 border-black shadow-[0_0_10px_#34d399]" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-400 font-mono">
                <span>[Company Name 1]</span>
                <span className="flex items-center space-x-1 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800 shadow-inner text-zinc-300">
                  <Calendar className="w-3 h-3 text-red-500" />
                  <span>[2024 - Present]</span>
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">[Your Job Title / Role 1]</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                [Describe your responsibilities, key projects handled, and achievements in this role. E.g., Built high-performance web apps using Next.js and Tailwind CSS.]
              </p>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-3xl space-y-3 backdrop-blur-xl hover:border-red-600/40 transition-all"
            >
              <div className="absolute -left-[31px] top-6 w-3 h-3 bg-red-500 rounded-full border-4 border-black shadow-[0_0_10px_#ef4444]" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-red-400 font-mono">
                <span>[Company Name 2]</span>
                <span className="flex items-center space-x-1 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800 shadow-inner text-zinc-300">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>[2022 - 2024]</span>
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">[Your Job Title / Role 2]</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                [Describe your previous experience, collaboration with teams, and technical tasks.]
              </p>
            </motion.div>

          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-red-950/60 border border-red-800/40 rounded-2xl text-red-500 shadow-inner">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-6 border-l-2 border-zinc-800/80 pl-6 ml-3">
            
            {/* Education Item */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-3xl space-y-3 backdrop-blur-xl hover:border-purple-600/40 transition-all"
            >
              <div className="absolute -left-[31px] top-6 w-3 h-3 bg-purple-400 rounded-full border-4 border-black shadow-[0_0_10px_#c084fc]" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-purple-400 font-mono">
                <span>[Institution / University Name]</span>
                <span className="flex items-center space-x-1 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800 shadow-inner text-zinc-300">
                  <Calendar className="w-3 h-3 text-red-500" />
                  <span>[Year - Year]</span>
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">[Degree Name / Major]</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                [Mention your relevant coursework, achievements, or focus areas during your degree.]
              </p>
            </motion.div>

          </div>
        </div>

        {/* Skills Summary Grid */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-purple-950/60 border border-purple-800/40 rounded-2xl text-purple-400 shadow-inner">
              <Code2 className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl text-center space-y-1 backdrop-blur-xl hover:border-emerald-600/40 transition-all">
              <span className="text-white font-bold text-sm">[Skill 1]</span>
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">Advanced</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl text-center space-y-1 backdrop-blur-xl hover:border-red-600/40 transition-all">
              <span className="text-white font-bold text-sm">[Skill 2]</span>
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">Advanced</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl text-center space-y-1 backdrop-blur-xl hover:border-purple-600/40 transition-all">
              <span className="text-white font-bold text-sm">[Skill 3]</span>
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">Intermediate</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl text-center space-y-1 backdrop-blur-xl hover:border-emerald-600/40 transition-all">
              <span className="text-white font-bold text-sm">[Skill 4]</span>
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">Intermediate</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}