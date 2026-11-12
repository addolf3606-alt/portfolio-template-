"use client";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Code, CheckCircle2, Clock, ArrowLeft, Layers, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AnalyticsPage() {
  const stats = [
    { title: "Completed Projects", value: "12+", icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
    { title: "Coding Experience", value: "Active & Growing", icon: <TrendingUp className="w-5 h-5 text-red-400" /> },
    { title: "Primary Stack", value: "React & Next.js", icon: <Code className="w-5 h-5 text-purple-400" /> },
    { title: "Daily Focus", value: "UI/UX & Performance", icon: <Zap className="w-5 h-5 text-emerald-400" /> },
  ];

  const skillProficiency = [
    { name: "React & Next.js", level: "90%", color: "from-emerald-500 via-red-500 to-purple-500" },
    { name: "Tailwind CSS & Styling", level: "95%", color: "from-red-500 via-purple-500 to-emerald-500" },
    { name: "JavaScript (ES6+)", level: "85%", color: "from-purple-500 via-emerald-500 to-red-500" },
    { name: "UI/UX & Framer Motion", level: "80%", color: "from-emerald-500 via-purple-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-hidden relative selection:bg-emerald-600 selection:text-white pb-20">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Header / Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-6 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors bg-zinc-900/85 border border-emerald-900/50 px-4 py-2 rounded-xl backdrop-blur-md shadow-inner group"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 relative z-10 pt-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
            <span>Developer Metrics</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Portfolio <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Analytics</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed">
            A quick overview of my technical growth, skill proficiencies, and development output metrics.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-3xl backdrop-blur-xl flex items-center justify-between shadow-2xl hover:border-emerald-600/30 transition-all"
            >
              <div className="space-y-1">
                <p className="text-xs text-zinc-400 font-mono">{stat.title}</p>
                <h3 className="text-2xl font-bold text-white font-mono">{stat.value}</h3>
              </div>
              <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-inner">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Proficiency Bars */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-2xl hover:border-emerald-600/30 transition-all"
        >
          <div className="flex items-center space-x-3 pb-4 border-b border-zinc-800/80">
            <div className="p-2.5 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-inner">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Skill Proficiency Breakdown</h2>
          </div>

          <div className="space-y-5">
            {skillProficiency.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-300">{skill.name}</span>
                  <span className="text-emerald-400">{skill.level}</span>
                </div>
                <div className="h-2.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </section>

    </div>
  );
}
