import React from 'react';
import { Calendar, Clock, BookOpen, CheckCircle, MoreHorizontal, Settings, Plus, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Box = ({ children, className = "" }) => (
  <div className={`p-5 rounded-[1.5rem] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${className}`}>
    {children}
  </div>
);

const Filter = ({ label, active = false }) => (
  <button className={`whitespace-nowrap px-6 py-2 rounded-full border-2 border-black text-sm font-bold transition-all ${active ? 'bg-[#A8E6CF] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>
    {label}
  </button>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] p-4 md:p-8 font-[family-name:var(--font-montserrat)] text-black">
      <Navbar />
      <header className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-black border-2 border-black text-white flex items-center justify-center font-bold text-lg shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]">PG</div>
          <div><h1 className="text-2xl font-black uppercase">Welcome back!</h1></div>
        </div>
        <button className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full font-bold border-2 border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">Start Session</button>
      </header>

      <main className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col lg:flex-row gap-6 items-end justify-between">
          <div className="w-full overflow-hidden">
            <h2 className="text-4xl font-extrabold tracking-tight">Weekly Schedule</h2>
            <div className="flex items-center gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
              {['All', 'Discrete Math', 'Algorithms', 'Networks'].map((l, i) => <Filter key={l} label={l} active={i === 2} />)}
              <button className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-[#FF8F50] border-2 border-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"><Plus size={20} /></button>
            </div>
          </div>
          <div className="flex gap-12 bg-white/50 p-4 rounded-2xl lg:bg-transparent lg:p-0">
            <div><p className="text-gray-500 text-sm font-bold">Hours</p><p className="text-3xl font-bold">42.5h</p></div>
            <div><p className="text-gray-500 text-sm font-bold">Tasks</p><p className="text-3xl font-bold">12/15</p></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Box className="lg:col-span-8 bg-[#D0BCFF] flex flex-col relative min-h-[480px]">
            <div className="flex justify-between items-start mb-6 z-10">
              <div className="flex items-center gap-3 bg-white/30 backdrop-blur-sm p-2 pr-4 rounded-full">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600"><BookOpen size={20} /></div>
                <div><p className="text-xs font-bold text-purple-900">Focus</p><p className="text-sm font-medium text-purple-800">Algorithms</p></div>
              </div>
              <button className="w-10 h-10 bg-[#FF8F50] rounded-full flex items-center justify-center text-white"><Settings size={18} /></button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 z-10">
              <div className="bg-[#1A1A1A] text-white p-5 rounded-[1.5rem] border-2 border-black flex-1">
                 <div className="flex justify-between mb-4"><span className="text-gray-400 text-sm">October</span><Calendar size={16} className="text-gray-500"/></div>
                 <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
                    {['M','T','W','T','F','S','S'].map((d, i) => <div key={i} className="py-1">{d}</div>)}
                    {Array.from({length: 28}).map((_, i) => (
                        <div key={i} className={`aspect-square flex items-center justify-center rounded-full text-white cursor-pointer ${i===16?'bg-[#A8E6CF] text-black font-bold':'hover:bg-white/10'}`}>{i+1}</div>
                    ))}
                 </div>
              </div>

              <div className="bg-[#1A1A1A] text-white p-5 rounded-[1.5rem] border-2 border-black flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-gray-400 text-sm mb-3">Plan</h3>
                    <div className="flex gap-2"><button className="px-4 py-2 bg-[#2D2D2D] rounded-full text-xs">Lecture</button><button className="px-4 py-2 bg-[#A8E6CF] text-black font-bold rounded-full text-xs">Practice</button></div>
                </div>
                <div className="bg-[#A8E6CF] text-black p-4 rounded-2xl">
                    <div className="flex justify-between"><p className="text-[10px] font-bold uppercase">Deadline</p><ArrowUpRight size={16}/></div>
                    <p className="text-xl font-bold mt-1">Graph Theory</p>
                    <p className="text-xs opacity-80">Fri, 11:59 PM</p>
                </div>
              </div>
            </div>

          </Box>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <Box className="bg-[#D0BCFF] flex-1 flex flex-col justify-between">
                <div className="flex justify-between"><div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center"><CheckCircle size={20} /></div><MoreHorizontal size={20} className="opacity-50"/></div>
                <div>
                    <p className="text-sm font-medium text-purple-900">Pending Tasks</p>
                    <div className="flex items-baseline gap-2"><span className="text-5xl font-medium">5</span><span className="opacity-60">High Priority</span></div>
                </div>
            </Box>

            <Box className="bg-[#D0BCFF] flex-1 flex flex-col justify-between">
                 <div className="flex justify-between"><div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600"><BookOpen size={20} /></div><MoreHorizontal size={20} className="opacity-50"/></div>
                <div>
                     <p className="text-sm font-bold text-purple-900">DAA Notes</p>
                     <div className="mt-2 w-full bg-white/40 h-2 rounded-full overflow-hidden"><div className="w-3/4 bg-blue-600 h-full"></div></div>
                </div>
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
}
