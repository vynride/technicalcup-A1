import Timeline from '@/components/Timeline';
import { events } from '@/data/events';

export const metadata = {
  title: 'Blog | TechCup',
  description: 'TechCup Blog and Dashboard',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] text-black font-sans pt-24">
      {/* Wrapper to handle navbar positioning if it's fixed, or just consistent padding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">

        <div className="mt-16 sm:mt-20">
            <h2 className="text-4xl sm:text-5xl font-black text-center mb-10 tracking-tight text-black uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">Our Journey</h2>
            <Timeline events={events} />
        </div>
      </div>
    </div>
  );
}
