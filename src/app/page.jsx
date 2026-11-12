"use client";
import { motion } from "framer-motion";
import { HelpCircle, BookOpen, MessageSquareQuote, Sparkles, ArrowRight, Code2, Briefcase, Mail, Terminal, ExternalLink, User, Wrench, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-hidden relative selection:bg-emerald-600 selection:text-white">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center justify-center text-center z-10">
        
        {/* Status / Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-emerald-900/50 text-xs text-emerald-400 mb-6 backdrop-blur-md shadow-inner"
        >
          <Sparkles className="w-4 h-4 animate-spin text-red-500" />
          <span>[Your Status / Available for Work]</span>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-red-600 to-purple-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div>
          
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="flex flex-col items-center justify-center text-zinc-500 text-center p-2">
              <User className="w-10 h-10 text-emerald-500 mb-1" />
              <span className="text-[10px] font-mono">[Your Image Here]</span>
            </div>
          </div>
        </motion.div>

        {/* Main Heading with Name Placeholder */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.15]"
        >
          Hi, I am <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">[Your Name Here]</span> <br />
          [Your Professional Title Here]
        </motion.h1>

        {/* Bio / Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          [Write a short, catchy bio about yourself, your expertise, and the technologies you love working with like React, Next.js, and Tailwind CSS.]
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-zinc-900 hover:from-emerald-600 hover:to-zinc-800 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center space-x-2 group cursor-pointer border border-emerald-800/40"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* About Me Link Button */}
          <Link 
            href="/about" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <User className="w-4 h-4 text-emerald-400" />
            <span>About Me</span>
          </Link>
            
          <Link 
            href="/blog" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Blogs</span>
          </Link>


           <Link 
            href="/faqs" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            < HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>FAQS</span>
          </Link>

           <Link 
            href="/testimonials" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-red-500" />
            <span>Testimonials</span>
          </Link>

              <Link 
            href="/guestbook" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-red-500" />
            <span>GuestBook</span>
          </Link>

 
 
              <Link 
            href="/colophon" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-red-500" />
            <span>Colophon</span>
          </Link>


           <Link 
            href="/playground" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-red-500" />
            <span>Playground</span>
          </Link>
      
          {/* Services Link Button */}
          <Link 
            href="/services" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span>Services</span>
          </Link>

          {/* Contact Link Button */}
          <Link 
            href="/contact" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Contact Me</span>
          </Link>

          {/* Uses Link Button */}
          <Link 
            href="/uses" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-emerald-400" />
            <span>Uses</span>
          </Link>

          {/* Analytics Link Button */}
          <Link 
            href="/analytics" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-purple-400" />
            <span>Analytics</span>
          </Link>

          <Link 
            href="/resume" 
            className="px-8 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-emerald-400 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
          >
            <span>View Resume</span>
          </Link>
        </motion.div>

        {/* Tech Stack / Highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-zinc-900 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-mono"
        >
          <div className="flex items-center space-x-2 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/80">
            <Terminal className="w-3.5 h-3.5 text-emerald-500" />
            <span>[Tech Stack 1]</span>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/80">
            <Code2 className="w-3.5 h-3.5 text-red-500" />
            <span>[Tech Stack 2]</span>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/80">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>[Tech Stack 3]</span>
          </div>
        </motion.div>

      </section>

      {/* Featured Projects Preview Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 relative z-10 border-t border-zinc-900">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
            <p className="text-zinc-400 text-sm max-w-lg">[Highlight your best work here. Replace titles, descriptions, and links with your actual projects.]</p>
          </div>
          <Link 
            href="/projects" 
            className="px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-emerald-400 font-semibold text-xs transition-all flex items-center space-x-2 group cursor-pointer shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl hover:border-emerald-600/50 transition-all group">
            <div className="h-48 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-500 font-mono text-xs mb-6 group-hover:scale-[1.01] transition-transform">
              [Your Project Image / Mockup Here]
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">[Project Title 1]</h3>
                <a href="#" className="p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-xl text-zinc-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                [Brief description of project 1, what problem it solves, and the technologies used to build it.]
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs rounded-full font-mono">[Tag 1]</span>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-red-400 text-xs rounded-full font-mono">[Tag 2]</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl hover:border-red-600/50 transition-all group">
            <div className="h-48 rounded-2xl bg-gradient-to-br from-red-950/30 via-zinc-950 to-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-500 font-mono text-xs mb-6 group-hover:scale-[1.01] transition-transform">
              [Your Project Image / Mockup Here]
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">[Project Title 2]</h3>
                <a href="#" className="p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-xl text-zinc-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                [Brief description of project 2, features, and key highlights.]
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs rounded-full font-mono">[Tag 1]</span>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-red-400 text-xs rounded-full font-mono">[Tag 2]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10 border-t border-zinc-900">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What You Do</h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">[List your core skills, expertise, or services you offer to clients.]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-4 hover:border-emerald-600/40 transition-colors">
            <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-800/40 rounded-2xl flex items-center justify-center text-emerald-400">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">[Service / Skill 1]</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">[Describe what you do in this area, tools used, and quality offered.]</p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-4 hover:border-red-600/40 transition-colors">
            <div className="w-12 h-12 bg-red-950/60 border border-red-800/40 rounded-2xl flex items-center justify-center text-red-500">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">[Service / Skill 2]</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">[Describe your second core skill or development area.]</p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-4 hover:border-purple-600/40 transition-colors">
            <div className="w-12 h-12 bg-purple-950/60 border border-purple-800/40 rounded-2xl flex items-center justify-center text-purple-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">[Service / Skill 3]</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">[Describe your third skill, consulting, or project management capability.]</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-zinc-900 bg-black py-12 px-6 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
          
          {/* Internal Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
            <Link href="/uses" className="hover:text-emerald-400 transition-colors">Uses</Link>
            <Link href="/analytics" className="hover:text-emerald-400 transition-colors">Analytics</Link>
            <Link href="/resume" className="hover:text-emerald-400 transition-colors">Resume</Link>
          </div>

          {/* Social Media Links Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-600/50 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-600/50 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-600/50 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-600/50 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            {/* WhatsApp */}
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-600/50 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-600/50 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>

            {/* Upwork */}
            <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" aria-label="Upwork" className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-600/50 transition-all flex items-center space-x-1.5 px-4 font-mono text-[11px]">
              <span className="text-emerald-500 font-bold">up</span>
              <span>Upwork</span>
            </a>

          </div>

          {/* Copyright */}
          <p>© 2026 [Your Name or Brand]. All rights reserved.</p>

        </div>
      </footer>

    </div>
  );
}