export default function Achievements({ achievements }) {
  return (
    <div
      className="bg-[#A8E6CF] border-2 border-black rounded-2xl p-6
      shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
    >
      <h3 className="font-bold text-lg text-black mb-4">
        Achievements & Hobbies
      </h3>

      <ul className="space-y-2 text-sm font-medium text-black">
        {achievements.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-teal-600">●</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
