"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheckIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 py-4 lg:px-8 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-blue-700">
            <ShieldCheckIcon className="w-7 h-7" />
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">SecureVerify</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-blue-700 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-blue-700">
            Home
          </Link>
          <Link href="/process" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            Verification Process
          </Link>
          <Link href="/faq" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            FAQ
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            Privacy
          </Link>
          <Link href="/support" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            Support
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            Contact
          </Link>
        </div>

        {/* Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/start-verification" className="hidden lg:inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm">
            Start Verification
          </Link>
          <button 
            className="lg:hidden text-slate-900 p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 pb-2 border-t border-gray-100 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200">
          <Link href="/" className="text-sm font-medium text-blue-700 px-2" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/process" className="text-sm font-medium text-slate-600 hover:text-blue-700 px-2" onClick={() => setIsMobileMenuOpen(false)}>
            Verification Process
          </Link>
          <Link href="/faq" className="text-sm font-medium text-slate-600 hover:text-blue-700 px-2" onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-slate-600 hover:text-blue-700 px-2" onClick={() => setIsMobileMenuOpen(false)}>
            Privacy
          </Link>
          <Link href="/support" className="text-sm font-medium text-slate-600 hover:text-blue-700 px-2" onClick={() => setIsMobileMenuOpen(false)}>
            Support
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-700 px-2" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-700 px-2" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/start-verification" className="inline-flex items-center justify-center bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-lg w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            Start Verification
          </Link>
        </div>
      )}
    </nav>
  );
}