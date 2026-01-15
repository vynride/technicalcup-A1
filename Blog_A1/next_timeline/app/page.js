import { events } from '../data/events';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center font-sans">
      <Timeline events={events} />
    </main>
  );
}
