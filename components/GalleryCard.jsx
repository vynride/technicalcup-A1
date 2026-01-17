'use client';

import { Heart} from 'lucide-react';
import UserAvatar from './UserAvatar';

export default function GalleryCard({ item }) {
  return (
    <div className="group bg-[#C8B3E6] rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="px-4 py-2 bg-[#B8E6D5] text-[#2C2C2C] text-sm font-semibold rounded-full">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
          {item.title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className="w-5 h-5 text-[#F4A261]" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
