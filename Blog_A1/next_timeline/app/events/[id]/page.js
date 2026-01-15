import { events } from '../../../data/events';
import Link from 'next/link';

// Helper to simulate data fetching
function getEvent(id) {
    return events.find(e => e.id === parseInt(id));
}

// Generate static params for all events (optional but good for static export, mainly helps Next.js know routes)
export async function generateStaticParams() {
    return events.map((event) => ({
        id: event.id.toString(),
    }));
}

export default async function EventPage({ params }) {
    const { id } = await params;
    const event = getEvent(id);

    if (!event) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-2xl text-red-500 font-bold mb-4">Event not found</h1>
                <Link href="/" className="text-blue-500 hover:underline">← Back to Timeline</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className={`h-2 ${event.categoryColor || 'bg-gray-500'}`}></div>
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <Link href="/" className="text-blue-500 hover:text-blue-700 transition-colors">
                            ← Back to Timeline
                        </Link>
                        <span className="text-gray-500">{event.date}</span>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title || event.summary}</h1>

                    <div className="mb-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${event.categoryColor || 'bg-gray-200'} mr-2 mb-2`}>
                            {event.category}
                        </span>
                    </div>

                    <div className="prose max-w-none text-gray-700">
                        <p className="text-lg mb-4">{event.description}</p>
                        <hr className="my-6 border-gray-200" />
                        <h2 className="text-xl font-semibold mb-3">More Details</h2>
                        <p>{event.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
