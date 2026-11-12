"use client";
import { motion } from "framer-motion";
import { MessageSquare, ArrowLeft, Send, User, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GuestbookPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Alex Smith",
      message: "Awesome portfolio template! Clean design, smooth animations, and love the color scheme.",
      date: "September 2026",
    },
    {
      id: 2,
      name: "Jessica Taylor",
      message: "Loved the dark aesthetics and Next.js setup. Keep up the great work!",
      date: "September 2026",
    },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputName.trim() || !inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: inputName,
      message: inputMessage,
      date: "Just now",
    };

    setMessages([newMessage, ...messages]);
    setInputName("");
    setInputMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 px-6 py-20 relative selection:bg-emerald-600 selection:text-white pb-20">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Header / Back Navigation */}
      <div className="max-w-3xl mx-auto pb-6 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors bg-zinc-900/85 border border-emerald-900/50 px-4 py-2 rounded-xl backdrop-blur-md shadow-inner group"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
            <span>Visitor Wall</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Sign My <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Guestbook</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto leading-relaxed">
            Leave a public message, feedback, or just say hello to drop your mark on this template.
          </p>
        </motion.div>

        {/* Form to add message */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl mb-12 space-y-4 shadow-2xl hover:border-emerald-600/30 transition-all"
        >
          <div className="space-y-2">
            <label className="text-xs font-mono text-zinc-400">Your Name</label>
            <input 
              type="text" 
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="e.g. Alex Smith"
              required
              className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-3 text-slate-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 text-xs font-mono transition-colors shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-zinc-400">Your Message</label>
            <textarea 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Write your message here..."
              required
              rows={3}
              className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-4 py-3 text-slate-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 text-xs font-mono transition-colors resize-none shadow-inner"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Sign Guestbook</span>
            <Send className="w-3.5 h-3.5 text-red-400" />
          </button>
        </motion.form>

        {/* Messages List */}
        <div className="space-y-4">
          {messages.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-xl space-y-3 hover:border-purple-600/40 transition-all shadow-inner"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 shadow-inner">
                    <User className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="font-bold text-white text-sm">{item.name}</span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">{item.date}</span>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm pl-11 leading-relaxed">
                {item.message}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}