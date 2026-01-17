'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import GalleryCard from '@/components/GalleryCard';
import StatCard from '@/components/StatCard';
import CategoryButton from '@/components/CategoryButton';
import content from '@/data/gallerycontent.json';
// footer

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { categories, stats, galleryItems } = content;

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF6E8]">
        <Navbar/>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[#2C2C2C] mb-4">
            Creative Gallery
          </h1>
          <p className="text-[#2C2C2C]/70 text-lg">
            Explore amazing projects from our creative community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(category => (
            <CategoryButton
              key={category}
              label={category}
              isActive={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
