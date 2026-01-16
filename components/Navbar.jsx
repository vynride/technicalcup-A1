"use client";
import React from 'react';
import Link from 'next/link';
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
        <header className="flex justify-center items-center py-6 w-full z-20 relative">
            <nav className="bg-[#1A1A1A] rounded-full px-2 py-2 flex gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link 
                            key={item.name} 
                            href={item.path} 
                            className={` px-6 py-2.5 rounded-full text-base font-medium tracking-tight transition-all duration-200 ${
                                isActive 
                                    ? 'bg-[#A8E6CF] text-[#1A1A1A]' 
                                    : 'text-[#888] hover:text-white hover:bg-white/10'
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
