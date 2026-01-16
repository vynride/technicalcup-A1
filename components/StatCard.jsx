'use client';

export default function StatCard({ label, value, prefix = '' }) {
  return (
    <div className="bg-[#C8B3E6] rounded-3xl p-6 hover:scale-[1.02] transition-transform shadow-lg">
      <p className="text-[#2C2C2C]/60 text-sm font-medium mb-2">{label}</p>
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span className="text-2xl font-bold text-[#2C2C2C]">{prefix}</span>
        )}
        <h3 className="text-4xl font-bold text-[#2C2C2C]">{value}</h3>
      </div>
    </div>
  );
}
