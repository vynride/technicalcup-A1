'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import content from '@/data/gallerycontent.json';


export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { categories, stats, galleryItems } = content;

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);



  const bgColors = [
    'bg-[#A8E6CF]', // Mint
    'bg-[#FBE36A]', // Yellow
    'bg-[#D0BCFF]', // Purple
    'bg-[#FFD6E8]', // Pink
    'bg-[#FF8F50]', // Orange
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="w-full px-6 py-12">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-12 w-full max-w-6xl">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="group relative w-full">
              {/* Shadow Layer */}
              <div className="absolute top-4 left-4 w-full h-full bg-black rounded-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              {/* Color Layer */}
              <div className={`absolute top-2 left-2 w-full h-full ${bgColors[index % bgColors.length]} rounded-3xl border-2 border-black transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1`}></div>
              
              {/* Content Layer */}
              <div className="relative z-10 bg-white rounded-3xl border-4 border-black p-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <div className="overflow-hidden rounded-xl border-2 border-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 sm:h-96 md:h-[40rem] object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 md:gap-0 px-2">
                  <h3 className="text-3xl font-black uppercase tracking-tight text-black bg-[#A8E6CF] px-3 py-1 border-2 border-black rounded-lg w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {item.title}
                  </h3>
                  <div className={`px-3 py-1 rounded-full border-2 border-black text-sm font-bold ${bgColors[index % bgColors.length]}`}>
                    {item.category || 'Gallery'}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </main>
    </div>
  );
}
