'use client';

export default function CategoryButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-semibold transition-all ${
        isActive
          ? 'bg-[#B8E6D5] text-[#2C2C2C] shadow-lg scale-105'
          : 'bg-[#2C2C2C] text-white hover:bg-[#E8DCC4]'
      }`}
    >
      {label}
    </button>
  );
}
