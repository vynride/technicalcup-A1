'use client';

export default function CategoryButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-base font-bold border-2 border-black transition-all ${
        isActive
          ? 'bg-[var(--color-neo-mint)] text-black neo-shadow-sm translate-x-[1px] translate-y-[1px]'
          : 'bg-white text-black neo-shadow hover:translate-x-[1px] hover:translate-y-[1px] hover:neo-shadow-sm hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
}
