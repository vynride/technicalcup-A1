"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Study Hub', path: '/studyhub' },
        { name: 'Announcement', path: '/announcements' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pb-2 pointer-events-none">
            <nav className="bg-[#1A1A1A] rounded-full px-2 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] pointer-events-auto transition-transform duration-300 hover:scale-[1.02]">
                <div className="pl-2 pr-1">
                 <Image src="/mascot-green.jpg" alt="Logo" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                </div>
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link 
                            key={item.name} 
                            href={item.path} 
                            className={`px-6 py-2.5 rounded-full text-base font-medium tracking-tight transition-all duration-300 ease-out ${
                                isActive 
                                    ? 'bg-[#A8E6CF] text-[#1A1A1A] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] transform -translate-y-[1px]' 
                                    : 'text-[#888] hover:text-white hover:bg-white/10 hover:-translate-y-[1px]'
                            }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
};

export default Navbar;
