import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-black bg-[var(--color-neo-bg)] py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Branding */}
        <div className="text-center md:text-left">
            <h3 className="text-xl font-bold uppercase tracking-wider">Section A1</h3>
            <p className="text-sm font-medium mt-1">Web Wars: Section Showdown</p>
        </div>

        {/* Center: Made with Love */}
        <div className="bg-[var(--color-neo-pink)] border-2 border-black px-6 py-2 rounded-full neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
             <p className="font-bold text-sm">
                Made with ❤️ by <span className="underline decoration-2">Section A1</span>
             </p>
        </div>

        {/* Right Side: Copyright */}
         <div className="text-center md:text-right text-sm font-bold">
            <p>&copy; {new Date().getFullYear()} Section A1.</p>
        </div>

      </div>
    </footer>
  );
}
