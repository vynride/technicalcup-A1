"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <header className="header">
            <div className="logo">Logo</div>

            <nav className="nav-pill">
                <Link href="/" className="nav-item">Home</Link>
                <Link href="#" className="nav-item">Announcement</Link>
                <Link href="#" className="nav-item">Study Hub</Link>
                <Link href="/" className="nav-item">Blog</Link>
                <Link href="#" className="nav-item">Gallery</Link>
            </nav>

            <div className="music-player flex items-center gap-2 bg-white border border-gray-900 rounded-full px-4 py-2">
                <button
                    onClick={togglePlay}
                    className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors focus:outline-none"
                >
                    <span className="text-lg">{isPlaying ? '⏸' : '▶'}</span>
                </button>
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-900">A1-Anthem</span>
                    <span className="text-[10px] text-gray-500">
                        {isPlaying ? 'Music Playing...' : 'Click to Play'}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
