import { events } from '../../../data/events';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export default async function EventPage({ params }) {
    const { id } = await params;
    const event = events.find((e) => e.id === parseInt(id));

    if (!event) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="text-4xl font-black mb-4">404 - Event Not Found</h1>
                <Link href="/" className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors">
                    Go Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFBF0] flex items-center justify-center p-4 md:p-8">
            <div className="max-w-5xl w-full">
                <Link href="/blog" className="inline-flex items-center gap-2 mb-6 text-zinc-600 hover:bg-[#A8E6CF] hover:text-[#1A1A1A] px-4 py-2 rounded-full font-bold transition-all w-fit">
                    <ArrowLeft size={20} />
                    Back to Timeline
                </Link>

                <article className="border-4 border-black p-6 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white text-black relative overflow-hidden">
                    <header className="mb-8 border-b-4 border-black pb-8">
                        <div className="flex flex-wrap gap-4 items-center mb-4">
                            <div className={`px-4 py-2 bg-yellow-400 border-2 border-black font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full ${event.categoryColor ? event.categoryColor : 'bg-yellow-400'}`}>
                                {event.category}
                            </div>
                            <div className="flex items-center gap-2 font-bold text-zinc-600">
                                <Calendar size={18} />
                                {event.date}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight">
                            {event.summary}
                        </h1>
                    </header>

                    <div className="prose prose-xl prose-zinc max-w-none text-black">
                        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-8">
                            {event.description}
                        </p>
                        <div className="text-lg leading-relaxed whitespace-pre-line text-zinc-900">
                            {event.details}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
