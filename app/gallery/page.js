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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="w-full px-6 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-black mb-4">
            Creative Gallery
          </h1>
          <p className="text-[#2C2C2C] text-lg">
            Discover our class moments and creative achievements
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
          {filteredItems.map(item => (
            <div key={item.id} className="overflow-hidden rounded-lg border-2 border-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[40rem] object-cover"
              />
            </div>
          ))}
          </div>
        </div>
      </main>
    </div>
  );
}
