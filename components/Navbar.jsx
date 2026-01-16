"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Study Hub', path: '/studyhub' },
        { name: 'Announcement', path: '/announcements' },
        { name: 'Gallery', path: '/gallery' },
    ];

    // Close mobile menu when path changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Desktop Navbar (Pill) */}
            <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center pt-6 pb-2 pointer-events-none">
                <nav className="bg-[#1A1A1A] rounded-full px-2 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] pointer-events-auto transition-all duration-300 hover:scale-[1.02] relative">
                    <div className="pl-2 pr-1 flex-shrink-0">
                        <Link href="/">
                            <Image src="/mascot-with-books.png" alt="Logo" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        </Link>
                    </div>
                    <div className="w-0.5 h-6 bg-[#A8E6CF] mx-1 rounded-full opacity-40"></div>
                    <div className="flex items-center gap-1">
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
                    </div>
                </nav>
            </header>

            {/* Mobile Header */}
            <header className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center h-16 px-4 pointer-events-none">
                 {/* Mobile Nav Container */}
                 <div className="w-full flex items-center justify-between pointer-events-auto">
                    {/* Hamburger Button (Left) */}
                    <button 
                        onClick={() => setIsOpen(true)}
                        className="p-2 bg-[#1A1A1A] text-[#A8E6CF] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-lg"
                        aria-label="Open Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </button>

                    {/* Centered Mascot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/" className="block relative group">
                            <div className="absolute inset-0 bg-black rounded-full translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                            <Image 
                                src="/mascot-with-books.png" 
                                alt="Logo" 
                                width={48} 
                                height={48} 
                                className="w-12 h-12 rounded-full object-cover border-2 border-black relative z-10 bg-white" 
                            />
                        </Link>
                    </div>

                    {/* Spacer for balance (optional, helps flex spacing if needed, but absolute centering handles the mascot) */}
                    <div className="w-10"></div>
                 </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            <div 
                className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar */}
            <aside 
                className={`fixed top-0 left-0 bottom-0 z-[70] w-64 bg-[#A8E6CF] border-r-4 border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-black text-black tracking-tighter uppercase">Menu</span>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="p-2 bg-white border-2 border-black hover:bg-black hover:text-white transition-colors rounded-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
                    </button>
                </div>

                <nav className="flex flex-col gap-3">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link 
                                key={item.name} 
                                href={item.path} 
                                className={`px-4 py-3 text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                                    isActive 
                                        ? 'bg-[#1A1A1A] text-[#A8E6CF]' 
                                        : 'bg-white text-black hover:bg-gray-50'
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
};

export default Navbar;
