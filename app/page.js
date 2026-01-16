import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF0] text-black font-sans selection:bg-teal-300 selection:text-black pt-28">
      <Navbar />
      <div className="relative isolate flex flex-col">
        <div className="px-6 lg:px-8 z-10">
        </div>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32 z-10">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="text-center lg:text-left max-w-3xl flex-1">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
                Welcome to <span className="text-teal-600"> Section A1</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-800 font-medium">
                Explore our journey, read our latest updates, and see what makes our team stand out.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  href="/blog"
                  className="w-full sm:w-auto text-center rounded-full border-2 border-black bg-[#A8E6CF] px-7 py-3 text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  Read Blog
                </Link>
                <Link
                  href="/gallery"
                  className="w-full sm:w-auto text-center rounded-full border-2 border-black bg-white px-7 py-3 text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  View Gallery <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 w-full max-w-md lg:max-w-xl">
              <div className="relative aspect-square w-full rounded-2xl border-4 border-black bg-[#A8E6CF] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                 <Image
                  src="/mascot-with-books.png"
                  alt="Mascot with books"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
