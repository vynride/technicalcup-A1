import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] text-black font-sans selection:bg-teal-300 selection:text-black pt-28">
      <div className="relative isolate flex flex-col">
        <div className="px-6 lg:px-8 z-10">
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8 lg:py-56 z-10">
           <div className="text-center sm:text-left max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
              Welcome to <span className="text-teal-600"> Section A1</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800 font-medium">
              Explore our journey, read our latest updates, and see what makes our team stand out.
            </p>
            <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
              <Link
                href="/blog"
                className="rounded-full border-2 border-black bg-[#A8E6CF] px-7 py-3 text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                Read Blog
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border-2 border-black bg-white px-7 py-3 text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                View Gallery <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
