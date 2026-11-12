"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowLeft, CheckCircle2, MessageSquare, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Yahan aap backend API ya EmailJS integrate kar sakte hain
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 py-20 px-6 relative selection:bg-emerald-600 selection:text-white">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header & Back Button */}
        <div className="space-y-4 border-b border-zinc-800/80 pb-8">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-900/85 hover:bg-zinc-800 border border-emerald-900/50 text-xs text-zinc-300 font-mono transition-all group shadow-inner"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Let's Build Something <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              Have a project in mind, a question, or just want to connect? Drop a message below and I'll get back to you soon.
            </p>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* Direct Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl space-y-3 hover:border-emerald-600/40 transition-all shadow-inner"
            >
              <div className="w-12 h-12 bg-zinc-900 border border-emerald-900/50 rounded-2xl flex items-center justify-center text-emerald-400 shadow-inner">
                <Mail className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">Email Me</h3>
              <p className="text-white text-sm font-mono font-medium">developer@example.com</p>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl space-y-3 hover:border-red-600/40 transition-all shadow-inner"
            >
              <div className="w-12 h-12 bg-zinc-900 border border-red-900/50 rounded-2xl flex items-center justify-center text-red-400 shadow-inner">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">Location</h3>
              <p className="text-white text-sm font-mono font-medium">Pakistan / Remote</p>
            </motion.div>

            {/* Response Time Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-xl space-y-3 hover:border-purple-600/40 transition-all shadow-inner"
            >
              <div className="w-12 h-12 bg-zinc-900 border border-purple-900/50 rounded-2xl flex items-center justify-center text-purple-400 shadow-inner">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">Response Time</h3>
              <p className="text-white text-sm font-mono font-medium">Within 24 Hours</p>
            </motion.div>

          </div>

          {/* Right Column: Detailed Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-10 backdrop-blur-xl lg:col-span-2 flex flex-col justify-center shadow-2xl hover:border-emerald-600/30 transition-all"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-zinc-900 border border-emerald-900/50 rounded-full flex items-center justify-center text-emerald-400 mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-mono font-semibold transition-colors cursor-pointer shadow-inner"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-400 font-mono">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name" 
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-3.5 text-xs font-mono text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 transition-colors shadow-inner" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-400 font-mono">Your Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email" 
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-3.5 text-xs font-mono text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 transition-colors shadow-inner" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-zinc-400 font-mono">Subject</label>
                  <input 
                    type="text" 
                    required
                    placeholder="What is this regarding? Project, Hiring, etc." 
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-3.5 text-xs font-mono text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 transition-colors shadow-inner" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-zinc-400 font-mono">Message</label>
                  <textarea 
                    rows="5" 
                    required
                    placeholder="Type your message here..." 
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-3.5 text-xs font-mono text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 transition-colors resize-none shadow-inner"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 text-red-400" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
}