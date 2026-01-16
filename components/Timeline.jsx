import React from 'react';
import Link from 'next/link';

export default function Timeline({ events }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative wrap overflow-hidden p-10 h-full">
                {/* Vertical Line */}
                <div className="border-2 absolute border-opacity-20 border-gray-700 h-full border text-center" style={{ left: '50%' }}></div>

                {events.map((event, index) => {
                    const isRight = index % 2 !== 0;
                    return (
                        <div key={event.id} className={`mb-8 flex justify-between items-center w-full ${isRight ? 'flex-row-reverse' : ''}`}>
                            <div className="order-1 w-5/12"></div>

                            {/* Dot on the line */}
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full border-4 border-white">
                                <div className="mx-auto font-semibold text-lg text-white"></div>
                            </div>

                            {/* Card */}
                            <Link href={`/events/${event.id}`} className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 hover:scale-105 transition-transform cursor-pointer block text-gray-800">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-light text-gray-500 text-sm">{event.date}</span>
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${event.categoryColor || 'bg-gray-200'}`}>
                                        {event.category}
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{event.summary}</h3>
                                <p className="text-gray-600 text-sm">
                                    {event.description}
                                    <span className="block mt-2 font-semibold text-blue-500 text-xs text-right">Check it out ►</span>
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
