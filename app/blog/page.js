import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import { events } from '@/data/events';

export const metadata = {
  title: 'Blog | TechCup',
  description: 'TechCup Blog and Dashboard',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] text-black font-sans relative overflow-hidden">
      {/* Background Decorations */}
      {/* Top Section */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-black rotate-45 opacity-80 animate-float" />
      <div className="absolute top-20 right-10 flex gap-2 animate-float-delayed">
        <div className="w-3 h-3 rounded-full bg-[var(--color-neo-mint)]" />
        <div className="w-8 h-8 rounded-full bg-[var(--color-neo-yellow)]" />
      </div>

      <div className="absolute top-[15%] left-[5%] flex gap-4 opacity-50 animate-pulse">
        <div className="w-2 h-2 rounded-full bg-[var(--color-neo-mint)]" />
        <div className="w-3 h-3 rounded-full bg-black border border-black" />
      </div>

      <div className="absolute top-[25%] right-[8%] grid grid-cols-2 gap-1 opacity-60 animate-slow-spin">
        <div className="w-1 h-1 bg-[var(--color-neo-yellow)] rounded-full" />
        <div className="w-1 h-1 bg-[var(--color-neo-yellow)] rounded-full" />
        <div className="w-1 h-1 bg-[var(--color-neo-yellow)] rounded-full" />
        <div className="w-1 h-1 bg-[var(--color-neo-yellow)] rounded-full" />
      </div>

      {/* Middle Section */}
      <div className="absolute top-[35%] left-[15%] w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-[var(--color-neo-orange)] border-r-[10px] border-r-transparent rotate-12 opacity-80 animate-float" />

      <div className="absolute top-[40%] left-[2%] w-4 h-4 bg-[var(--color-neo-purple)] rotate-12 opacity-70 animate-float-delayed" />
      <div className="absolute top-[45%] right-[15%] w-3 h-3 rounded-full border-2 border-black opacity-40 animate-bounce" />

      <div className="absolute top-[50%] left-[80%] w-6 h-6 bg-[var(--color-neo-pink)] rotate-45 opacity-60 animate-slow-spin" />

      <div className="absolute top-[55%] left-[10%] flex flex-col gap-3 opacity-30 animate-pulse">
        <div className="w-1.5 h-1.5 bg-black rounded-full" />
        <div className="w-1.5 h-1.5 bg-black rounded-full" />
        <div className="w-1.5 h-1.5 bg-black rounded-full" />
      </div>

      <div className="absolute top-[65%] right-[5%] w-6 h-6 border-4 border-[var(--color-neo-mint)] rounded-full opacity-60 animate-float" />

      <div className="absolute top-[70%] left-[20%] w-4 h-4 bg-black rotate-[30deg] opacity-20 animate-float-delayed" />

      {/* Lower Section */}
      <div className="absolute top-[75%] left-[8%] w-5 h-5 bg-[var(--color-neo-red)] rotate-45 opacity-80 animate-slow-spin" />

      <div className="absolute top-[80%] right-[30%] w-2 h-2 bg-[var(--color-neo-mint)] rounded-full opacity-50 animate-ping" />

      <div className="absolute top-[85%] right-[12%] text-[var(--color-neo-yellow)] opacity-80 animate-float">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="4" cy="4" r="2.5" />
          <circle cx="20" cy="12" r="1.5" />
          <circle cx="10" cy="20" r="2" />
        </svg>
      </div>

      <div className="absolute bottom-40 left-10 w-5 h-5 bg-black opacity-80 animate-float-delayed" />
      <div className="absolute bottom-32 left-20 text-[var(--color-neo-yellow)] opacity-80 animate-slow-spin">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="2" cy="2" r="2" />
          <circle cx="12" cy="8" r="1.5" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 w-4 h-4 bg-[var(--color-neo-mint)] rotate-45 opacity-80 animate-float" />
      <div className="absolute bottom-60 right-5 flex flex-col gap-2 opacity-50 animate-pulse">
        <div className="w-1 h-1 bg-black rounded-full" />
        <div className="w-1 h-1 bg-black rounded-full" />
        <div className="w-1 h-1 bg-black rounded-full" />
      </div>


      {/* Wrapper to handle navbar positioning if it's fixed, or just consistent padding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 relative z-10">
        <Navbar />
        <div className="mt-16 sm:mt-20">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-10 tracking-tight text-black uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">Our Journey</h2>
          <Timeline events={events} />
        </div>
      </div>
    </div>
  );
}
