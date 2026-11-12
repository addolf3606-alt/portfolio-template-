"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, ArrowRight, RefreshCw, Palette, ChevronDown, Lock, Calculator } from "lucide-react";
import Link from "next/link";

export default function PlaygroundPage() {
  // Experiment 1 State: Counter
  const [count, setCount] = useState(0);

  // Experiment 2 State: Theme Color Switcher
  const [themeColor, setThemeColor] = useState("from-emerald-500 to-red-600");

  // Experiment 3 State: Live Text Input
  const [liveText, setLiveText] = useState("");

  // Experiment 4 State: Random Color Generator
  const [bgColor, setBgColor] = useState("#059669");
  const generateRandomColor = () => {
    const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setBgColor(randomHex);
  };

  // Experiment 5 State: Accordion Toggle
  const [isOpen, setIsOpen] = useState(false);

  // Experiment 6 State: Password Strength Checker
  const [password, setPassword] = useState("");
  const getStrength = (pass) => {
    if (pass.length === 0) return { text: "Enter password", color: "text-zinc-500" };
    if (pass.length < 6) return { text: "Weak", color: "text-red-500" };
    if (pass.length < 10) return { text: "Medium", color: "text-purple-400" };
    return { text: "Strong", color: "text-emerald-400" };
  };

  // Experiment 7 State: Tip & Bill Calculator
  const [bill, setBill] = useState(100);
  const [tipPercent, setTipPercent] = useState(15);
  const totalAmount = (Number(bill) + (Number(bill) * Number(tipPercent)) / 100).toFixed(2);

  return (
    <div className="min-h-screen bg-black text-slate-100 px-6 py-20 relative selection:bg-emerald-600 selection:text-white">
      
      {/* Background Glow Effects (Red, Dark Green, Purple & Black Blend) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/85 border border-emerald-900/50 text-xs text-emerald-400 font-mono shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-red-500" />
            <span>Interactive Lab & Sandbox</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Playground</h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            A collection of live mini-experiments, state management tests, and UI components built with React and Tailwind CSS.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Experiment 1: Interactive Counter */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-6 backdrop-blur-xl flex flex-col justify-between hover:border-emerald-600/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono">
                <Terminal className="w-4 h-4 text-red-500" />
                <span>Test 01: useState Hook</span>
              </div>
              <h2 className="text-white font-bold text-lg">Interactive Counter</h2>
              <p className="text-zinc-400 text-xs leading-relaxed">Tests state increment, decrement, and reset logic in real-time.</p>
            </div>

            <div className="h-40 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center justify-center space-y-4 shadow-inner">
              <span className="text-4xl font-extrabold font-mono text-white">{count}</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setCount(count - 1)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-200 transition-colors cursor-pointer shadow-inner"
                >
                  - Decrement
                </button>
                <button 
                  onClick={() => setCount(0)}
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 transition-colors cursor-pointer shadow-inner"
                  title="Reset"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                </button>
                <button 
                  onClick={() => setCount(count + 1)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-mono text-white transition-colors cursor-pointer shadow-md"
                >
                  + Increment
                </button>
              </div>
            </div>
            
            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 shadow-inner">
              Code: <code className="text-emerald-400">const [count, setCount] = useState(0);</code>
            </div>
          </div>

          {/* Experiment 2: Theme Color Switcher */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-6 backdrop-blur-xl flex flex-col justify-between hover:border-red-600/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-red-400 text-xs font-mono">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Test 02: Dynamic Styling</span>
              </div>
              <h2 className="text-white font-bold text-lg">Theme Color Switcher</h2>
              <p className="text-zinc-400 text-xs leading-relaxed">Click buttons to instantly change the dynamic gradient preview box.</p>
            </div>

            <div className="h-40 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center justify-center space-y-4 p-4 shadow-inner">
              <motion.div 
                layout
                className={`w-full h-12 rounded-xl bg-gradient-to-r ${themeColor} shadow-lg transition-all duration-300 border border-white/10`}
              />
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setThemeColor("from-emerald-500 to-red-600")}
                  className="w-6 h-6 rounded-full bg-emerald-500 hover:scale-110 transition-transform cursor-pointer shadow-md"
                  title="Emerald & Red"
                />
                <button 
                  onClick={() => setThemeColor("from-red-500 to-purple-600")}
                  className="w-6 h-6 rounded-full bg-red-500 hover:scale-110 transition-transform cursor-pointer shadow-md"
                  title="Red & Purple"
                />
                <button 
                  onClick={() => setThemeColor("from-purple-500 to-emerald-600")}
                  className="w-6 h-6 rounded-full bg-purple-500 hover:scale-110 transition-transform cursor-pointer shadow-md"
                  title="Purple & Emerald"
                />
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 shadow-inner">
              Code: <code className="text-red-400">{"className={`bg-gradient-to-r ${themeColor}`}"}</code>
            </div>
          </div>

          {/* Experiment 4: Random Hex Color Shuffler */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-6 backdrop-blur-xl flex flex-col justify-between hover:border-purple-600/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-purple-400 text-xs font-mono">
                <Palette className="w-4 h-4 text-emerald-400" />
                <span>Test 04: Random Hex Generator</span>
              </div>
              <h2 className="text-white font-bold text-lg">Color Shuffler</h2>
              <p className="text-zinc-400 text-xs leading-relaxed">Generates randomized hex color codes and updates styling dynamically.</p>
            </div>

            <div className="h-40 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center justify-center space-y-4 p-4 shadow-inner">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl shadow-inner border border-white/20" style={{ backgroundColor: bgColor }} />
                <span className="font-mono text-white text-sm font-bold">{bgColor}</span>
              </div>
              <button 
                onClick={generateRandomColor}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-mono text-white transition-colors cursor-pointer shadow-md"
              >
                Generate Color
              </button>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 shadow-inner">
              Code: <code className="text-purple-400">{"Math.floor(Math.random() * 16777215)"}</code>
            </div>
          </div>

          {/* Experiment 5: Accordion Toggle State */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-6 backdrop-blur-xl flex flex-col justify-between hover:border-emerald-600/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono">
                <Terminal className="w-4 h-4 text-red-500" />
                <span>Test 05: Boolean Toggle State</span>
              </div>
              <h2 className="text-white font-bold text-lg">Interactive Accordion</h2>
              <p className="text-zinc-400 text-xs leading-relaxed">Toggles display status using boolean state logic.</p>
            </div>

            <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 overflow-hidden shadow-inner">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 flex items-center justify-between text-xs font-mono text-zinc-200 bg-zinc-900/60 hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <span>Click to Expand Info</span>
                <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="p-4 text-xs text-zinc-400 border-t border-zinc-800/80 leading-relaxed bg-zinc-950/40">
                  This content is conditionally rendered based on <code className="text-emerald-400">isOpen</code> boolean state value!
                </div>
              )}
            </div>

            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 shadow-inner">
              Code: <code className="text-emerald-400">{"setIsOpen(!isOpen)"}</code>
            </div>
          </div>

          {/* Experiment 6: Password Strength Checker */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-6 backdrop-blur-xl flex flex-col justify-between hover:border-red-600/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-red-400 text-xs font-mono">
                <Lock className="w-4 h-4 text-purple-400" />
                <span>Test 06: String Validation</span>
              </div>
              <h2 className="text-white font-bold text-lg">Password Strength</h2>
              <p className="text-zinc-400 text-xs leading-relaxed">Evaluates character length and computes security level live.</p>
            </div>

            <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 space-y-3 shadow-inner">
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type password..."
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-red-500 transition-colors shadow-inner"
              />
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Strength:</span>
                <span className={`font-bold ${getStrength(password).color}`}>{getStrength(password).text}</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 shadow-inner">
              Code: <code className="text-red-400">{"pass.length < 6 ? 'Weak' : 'Strong'"}</code>
            </div>
          </div>

          {/* Experiment 7: Quick Tip Calculator */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-6 backdrop-blur-xl flex flex-col justify-between hover:border-purple-600/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-purple-400 text-xs font-mono">
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Test 07: Arithmetic Calculation</span>
              </div>
              <h2 className="text-white font-bold text-lg">Tip Calculator</h2>
              <p className="text-zinc-400 text-xs leading-relaxed">Calculates total expense based on bill input and tip percentage.</p>
            </div>

            <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 space-y-3 shadow-inner">
              <div className="flex items-center justify-between gap-4">
                <input 
                  type="number"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  className="w-1/2 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-purple-500 shadow-inner"
                  placeholder="Bill ($)"
                />
                <select 
                  value={tipPercent}
                  onChange={(e) => setTipPercent(e.target.value)}
                  className="w-1/2 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-purple-500 cursor-pointer shadow-inner"
                >
                  <option value="10">10% Tip</option>
                  <option value="15">15% Tip</option>
                  <option value="20">20% Tip</option>
                </select>
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-zinc-400">Total with Tip:</span>
                <span className="text-purple-400 font-bold">${totalAmount}</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 shadow-inner">
              Code: <code className="text-purple-400">{"Number(bill) + (bill * tip) / 100"}</code>
            </div>
          </div>

          {/* Experiment 3: Live Input Binding (Spans full width) */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl space-y-6 backdrop-blur-xl flex flex-col justify-between md:col-span-2 hover:border-emerald-600/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono">
                <Terminal className="w-4 h-4 text-red-500" />
                <span>Test 03: Two-way Data Binding</span>
              </div>
              <h2 className="text-white font-bold text-lg">Live Typing Previewer</h2>
              <p className="text-zinc-400 text-xs leading-relaxed">Type anything in the input box to see it rendered instantly on the screen.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-zinc-950/80 border border-zinc-800/80 p-6 rounded-2xl shadow-inner">
              <input 
                type="text" 
                value={liveText}
                onChange={(e) => setLiveText(e.target.value)}
                placeholder="Type something here..." 
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-emerald-500 transition-colors shadow-inner"
              />
              <div className="px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-emerald-400 truncate min-h-[42px] flex items-center shadow-inner">
                {liveText ? liveText : <span className="text-zinc-600 italic">Preview will appear here...</span>}
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 shadow-inner">
              Code: <code className="text-emerald-400">{"onChange={(e) => setLiveText(e.target.value)}"}</code>
            </div>
          </div>

        </div>

        {/* Back Link */}
        <div className="flex justify-center pt-6">
          <Link 
            href="/" 
            className="px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-emerald-900/50 text-zinc-300 font-semibold text-xs transition-all flex items-center space-x-2 cursor-pointer shadow-inner group"
          >
            <ArrowRight className="w-4 h-4 text-emerald-400 rotate-180 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}