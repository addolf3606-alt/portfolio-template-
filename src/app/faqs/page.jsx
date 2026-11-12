"use client";
import { motion } from "framer-motion";
import { HelpCircle, ArrowLeft, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What is your typical web development process?",
      answer: "I start from wireframing and UI/UX design concepts to clean component structuring using Next.js and Tailwind CSS, followed by robust testing and final deployment.",
    },
    {
      id: 2,
      question: "What technologies and tools do you use?",
      answer: "My core stack includes React, Next.js, Tailwind CSS, JavaScript, Framer Motion for smooth animations, and Lucide React for modern icons.",
    },
    {
      id: 3,
      question: "Are you available for freelance projects or full-time roles?",
      answer: "Yes! I am open to discussing freelance web development projects, creative frontend contracts, and remote opportunities.",
    },
    {
      id: 4,
      question: "How can we get in touch or start a project?",
      answer: "You can visit the contact section or drop an email directly to discuss your project requirements, timeline, and ideas.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          className="space-y-4 mb-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
            <span>FAQ Section</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto leading-relaxed">
            Find quick answers regarding my workflow, tech stack, services, and development expertise.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl backdrop-blur-xl overflow-hidden transition-all hover:border-emerald-600/40 shadow-inner"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/80 pt-4 bg-zinc-950/40">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}