"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full py-4 px-6 md:px-16 bg-white/50 backdrop-blur-lg shadow-sm transition-all duration-300 border-b border-white/20">
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full">

                {/* Logo */}
                <div className="text-2xl md:text-[1.8rem] font-extrabold text-black uppercase tracking-wider z-50 relative">
                    ROHIT
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 list-none m-0 p-0">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <Link
                                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                className="text-gray-600 font-medium text-base hover:text-black transition-colors duration-200"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a
                    href="/Resume%20Rohit%20Salve.pdf"
                    download="Rohit_Salve_Resume.pdf"
                    className="hidden md:block bg-gradient-to-r from-[#FF8C61] to-[#FF6B4E] text-white px-8 py-3 rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(255,107,78,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,107,78,0.4)] transition-all duration-300 cursor-pointer border-none"
                >
                    Download Resume
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-800 z-50 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu Dropdown */}
                <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}>
                    <ul className="flex flex-col gap-4 list-none m-0 p-0">
                        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                            <li key={item} className="w-full text-center">
                                <Link
                                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                    className="text-gray-600 font-bold text-lg hover:text-[#FF6B4E] transition-colors block py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center pt-2">
                        <a
                            href="/Resume%20Rohit%20Salve.pdf"
                            download="Rohit_Salve_Resume.pdf"
                            className="bg-gradient-to-r from-[#FF8C61] to-[#FF6B4E] text-white px-8 py-3 rounded-full font-bold text-lg shadow-md w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}