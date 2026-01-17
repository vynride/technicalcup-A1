"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import ImageCard from "@/components/ui/image-card";
import profileData from "@/data/profile.json";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  const carouselRef = useRef(null);

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
              <ScrollArea className="mt-6 w-full rounded-md border-2 border-black bg-[#A8E6CF] p-4 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-lg leading-8 text-gray-800 font-medium">
                  Explore our journey, read our latest updates, and see what makes our team stand out.
                </p>
              </ScrollArea>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Button asChild className="w-full sm:w-auto text-base bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    <Link href="/blog">Read Blog</Link>
                </Button>
                <Button asChild className="w-full sm:w-auto text-base bg-blue-400 hover:bg-blue-500 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    <Link href="/gallery">
                        View Gallery <span aria-hidden="true">→</span>
                    </Link>
                </Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 w-full max-w-md lg:max-w-xl">
              <div className="relative aspect-square w-full rounded-2xl border-4 border-black bg-[#A8E6CF] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                 <Image
                  src="/mascot-with-books.webp"
                  alt="Mascot with books"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="w-full h-4 bg-black"></div>

        {/* The People Section */}
        <section className="mx-auto w-full py-20 lg:py-32 overflow-hidden">
          <div className="px-6 lg:px-8 mb-12 text-center">
             <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
                The <span className="text-teal-600">People</span>
             </h2>
          </div>
          
           {/* Carousel */}
          <ScrollArea className="w-full whitespace-nowrap pb-4 mr-6 lg:mr-20">
            <div className="flex w-max gap-6 px-6 lg:px-20 pt-10 pb-12">
              {profileData.map((person) => (
                <Link href={`/profile/${person._id.$oid}`} key={person._id.$oid} className="shrink-0">
                    <ImageCard
                      imageUrl="/mascot-coding.jpeg"
                      caption={person.name}
                      className="hover:-translate-y-2 transition-transform duration-200"
                    />
                </Link>
              ))}
            </div>
          </ScrollArea>
        </section>
      </div>
    </main>
  );
}
