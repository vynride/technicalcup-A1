import React from 'react';
import Link from 'next/link';
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Timeline({ events }) {
    if (!events || events.length === 0) return null;

    return (
        <div className="container mx-auto px-2 md:px-4 py-8">
            <div className="relative wrap overflow-hidden p-2 md:p-6 lg:p-10 h-full">
                <div className="absolute border-opacity-20 border-zinc-400 dark:border-zinc-700 h-full border-r-[2px] left-6 md:left-1/2 -ml-[1px]"></div>

                {events.map((event, index) => {
                    const isRight = index % 2 !== 0;
                    return (
                        <div key={event.id} className={`mb-8 flex md:justify-between items-center w-full gap-3 md:gap-0 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                            <div className="order-1 w-5/12 hidden md:block"></div>

                            {/* Dot on the line */}
                            <div className="z-20 flex-shrink-0 flex items-center justify-center order-1 w-8 h-8 rounded-full border-2 border-black bg-[var(--color-neo-mint)] neo-shadow-sm">
                            </div>

                            {/* Card */}
                            <Link href={`/events/${event.id}`} className="order-1 flex-1 md:flex-none bg-white rounded-xl neo-shadow border-2 border-black md:w-5/12 px-4 py-4 md:px-6 md:py-6 hover:translate-x-[2px] hover:translate-y-[2px] hover:neo-shadow-sm transition-all duration-200 cursor-pointer block group">
                                <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                                    <span className="font-bold text-black text-sm tracking-wide">{event.date}</span>
                                    <span className={`px-3 py-1 rounded-md text-sm font-black uppercase tracking-wider border-2 border-black neo-shadow-sm ${event.categoryColor ? event.categoryColor : 'bg-gray-100 text-black'}`}>
                                        {event.category}
                                    </span>
                                </div>
                                <h3 className="font-black text-xl mb-2 text-black group-hover:underline decoration-2 underline-offset-4">{event.summary}</h3>
                                <ScrollArea className="max-h-[200px] w-full rounded-md border-2 border-black bg-white p-4 text-base neo-shadow-sm">
                                    <p className="text-black text-base leading-relaxed font-medium">
                                        {event.description}
                                    </p>
                                </ScrollArea>
                                <div className="flex justify-end mt-4">
                                     <span className="text-black text-xs font-black uppercase tracking-widest group-hover:bg-[var(--color-neo-mint)] px-1 transition-colors">Read More -&gt;</span>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
