"use client";
import { Info, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ColophonPage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 px-6 py-20 relative selection:bg-emerald-600 selection:text-white">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-2xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
            <span>Colophon</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white">About This Website</h1>
          <p className="text-zinc-400 text-xs sm:text-sm">How this portfolio was designed and built.</p>
        </div>

        {/* Content Box */}
        <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-6 text-xs sm:text-sm text-zinc-300 leading-relaxed backdrop-blur-xl shadow-2xl hover:border-emerald-600/30 transition-all">
          <div className="space-y-2">
            <h2 className="text-white font-bold font-mono text-xs text-emerald-400 uppercase tracking-wider">Design & Framework</h2>
            <p className="text-zinc-400">Built using Next.js (App Router), styled with Tailwind CSS, and powered by Framer Motion animations.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-white font-bold font-mono text-xs text-red-400 uppercase tracking-wider">Typography & Icons</h2>
            <p className="text-zinc-400">Uses clean sans-serif system fonts paired with Lucide React icons for modern UI elements.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-white font-bold font-mono text-xs text-purple-400 uppercase tracking-wider">Deployment</h2>
            <p className="text-zinc-400">Hosted securely on Vercel with continuous deployment and lightning-fast edge performance.</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="flex justify-center pt-4">
          <Link 
            href="/" 
            className="px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-emerald-900/50 text-zinc-300 font-semibold text-xs transition-all flex items-center space-x-2 cursor-pointer shadow-inner group"
          >
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 rotate-180 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}