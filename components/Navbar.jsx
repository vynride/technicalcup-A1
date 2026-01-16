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
        <header className="flex justify-between items-center py-5 mb-15 w-full">
            <div className="font-bold text-2xl text-[#1A1A1A]">Logo</div>

            <nav className="bg-[#1A1A1A] rounded-full px-2.5 py-2 flex gap-2.5">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link 
                            key={item.name} 
                            href={item.path} 
                            className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                                isActive 
                                    ? 'bg-[#A8E6CF] text-[#1A1A1A] font-medium' 
                                    : 'text-[#888] hover:bg-[#A8E6CF] hover:text-[#1A1A1A] hover:font-medium'
                            }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
            
            <div></div> 
        </header>
    );
};

export default Navbar;
