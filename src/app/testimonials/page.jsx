"use client";
import { motion } from "framer-motion";
import { MessageSquareQuote, ArrowLeft, Star, User } from "lucide-react";
import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "[Client Name 1]",
      role: "[Client Role / CEO at Company]",
      comment: "[Write a positive feedback comment about how great it was working with you, the quality of the project delivered, and your communication skills.]",
      rating: 5,
    },
    {
      id: 2,
      name: "[Client Name 2]",
      role: "[Product Manager / Startup Founder]",
      comment: "[Write another placeholder testimonial highlighting your problem-solving skills, speed, and expertise in modern web development.]",
      rating: 5,
    },
    {
      id: 3,
      name: "[Client Name 3]",
      role: "[Senior Developer / Colleague]",
      comment: "[Write a placeholder about your clean code structure, teamwork, and dedication to building scalable web apps.]",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-hidden relative selection:bg-emerald-600 selection:text-white pb-20">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Header / Back Navigation */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors bg-zinc-900/80 border border-emerald-900/50 px-4 py-2 rounded-xl backdrop-blur-md shadow-inner"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 relative z-10 pt-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
            <MessageSquareQuote className="w-3.5 h-3.5 text-red-500" />
            <span>[Testimonials Section]</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Client <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Feedback</span>
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            [Write a brief introductory note about what clients, managers, or peers say about your work ethic and development skills.]
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-emerald-600/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Star Ratings */}
                <div className="flex space-x-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-zinc-800/80">
                <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                  <User className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-zinc-500 font-mono">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}