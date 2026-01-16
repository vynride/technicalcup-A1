import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import { events } from '@/data/events';

export const metadata = {
  title: 'Blog | TechCup',
  description: 'TechCup Blog and Dashboard',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-10 py-5">
        <Navbar />
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Our Journey</h2>
            <Timeline events={events} />
        </div>
      </div>
    </div>
  );
}
