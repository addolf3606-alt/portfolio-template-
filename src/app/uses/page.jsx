"use client";
import { motion } from "framer-motion";
import { Cpu, Laptop, Terminal, Code2, Wrench, ArrowLeft, Shield, Monitor } from "lucide-react";
import Link from "next/link";

export default function UsesPage() {
  const usesData = [
    {
      category: "Development & Coding",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      items: [
        { name: "Visual Studio Code", description: "Primary code editor with custom dark theme and clean extensions." },
        { name: "Terminal / Command Line", description: "Built-in terminal with custom shell styling for smooth workflow." },
        { name: "Git & GitHub", description: "For version control, tracking changes, and project deployment." },
      ],
    },
    {
      category: "Tech Stack & Frameworks",
      icon: <Terminal className="w-5 h-5 text-red-500" />,
      items: [
        { name: "Next.js & React", description: "Core framework and library for building fast, modern web applications." },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid and responsive UI design." },
        { name: "Framer Motion", description: "For smooth component transitions, layout animations, and micro-interactions." },
        { name: "Lucide React", description: "Clean, consistent, and lightweight icon set for modern interfaces." },
      ],
    },
    {
      category: "Hardware & Setup",
      icon: <Laptop className="w-5 h-5 text-purple-400" />,
      items: [
        { name: "Development Laptop/PC", description: "High-performance machine optimized for heavy multitasking and code compilation." },
        { name: "Ergonomic Setup", description: "Comfortable workspace designed for long coding and design sessions." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-hidden relative selection:bg-emerald-600 selection:text-white pb-20">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Header / Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-6 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors bg-zinc-900/80 border border-emerald-900/50 px-4 py-2 rounded-xl backdrop-blur-md shadow-inner"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 relative z-10 pt-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
            <Wrench className="w-3.5 h-3.5 text-red-500" />
            <span>Setup & Gear</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            [ What you <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Use ]</span>
          </h1>
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
            A curated list of all the hardware, software, tools, and technologies You use on a daily basis to build digital products.
          </p>
          <h2 className="text-lg font-semibold text-zinc-300 pt-2">For Example!</h2>
        </motion.div>

        {/* Categories List */}
        <div className="space-y-12">
          {usesData.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 hover:border-emerald-600/40 transition-all"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-zinc-800/60">
                <div className="p-2.5 bg-zinc-950/80 rounded-2xl border border-zinc-800 shadow-inner">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{section.category}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-zinc-950/60 border border-zinc-800/80 p-4 rounded-2xl space-y-1.5 hover:border-emerald-600/50 transition-colors">
                    <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );  
}