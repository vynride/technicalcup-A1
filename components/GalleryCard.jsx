'use client';

import { Heart} from 'lucide-react';

export default function GalleryCard({ item }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border-2 border-black neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200">
      <div className="relative h-64 overflow-hidden border-b-2 border-black">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="px-4 py-2 bg-[var(--color-neo-mint)] text-black text-sm font-bold rounded-full border-2 border-black">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-black mb-4">
          {item.title}
        </h3>

        <div className="flex items-center justify-between">
        
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className="w-5 h-5 text-black hover:fill-red-500 transition-colors" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
