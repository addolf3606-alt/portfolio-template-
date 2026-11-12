"use client";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Next.js App Router: Complete Guide",
      description: "Learn how to build fast and scalable web applications using Next.js App Router, server components, and dynamic routing.",
      date: "September 2026",
      readTime: "5 min read",
      category: "Next.js",
      slug: "#",
    },
    {
      id: 2,
      title: "Why Tailwind CSS is a Game Changer for Frontend Developers",
      description: "Explore how utility-first CSS frameworks speed up UI development and keep your design consistent across all devices.",
      date: "August 2026",
      readTime: "4 min read",
      category: "Tailwind CSS",
      slug: "#",
    },
    {
      id: 3,
      title: "Building Smooth Animations with Framer Motion in React",
      description: "A practical guide to adding eye-catching micro-interactions, page transitions, and gestures to your React apps.",
      date: "August 2026",
      readTime: "6 min read",
      category: "Animation",
      slug: "#",
    },
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
          className="space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
            <span>Articles & Thoughts</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            My <span className="bg-gradient-to-r from-emerald-400 via-red-500 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed">
            Sharing my learning journey, web development tutorials, tips, and insights on building modern user interfaces.
          </p>
        </motion.div>

        {/* Blog List */}
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-emerald-600/40 transition-all group space-y-4 shadow-2xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="px-3.5 py-1 bg-zinc-900 border border-emerald-900/50 text-emerald-400 text-xs rounded-full font-mono shadow-inner">
                  {post.category}
                </span>
                <div className="flex items-center space-x-4 text-xs text-zinc-500 font-mono">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-red-400" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href={post.slug} 
                  className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    </div>
  );
}