"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheckIcon, MenuIcon, LockIcon } from "./Icons";

export default function WizardHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white px-6 lg:px-12 py-6 border-b border-gray-100">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-blue-700">
            <ShieldCheckIcon className="w-7 h-7" />
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">SecureVerify</span>
        </Link>

        {/* Desktop Trust Badge */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-slate-600 font-medium">
          <LockIcon className="w-4 h-4" />
          <span>Independent. Secure. Confidential.</span>
        </div>

        {/* Mobile Menu Toggle (and mobile text) */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            className="text-slate-900 p-1 focus:outline-none"
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
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex items-center gap-2 text-sm text-slate-600 font-medium px-2">
            <LockIcon className="w-4 h-4" />
            <span>Independent. Secure. Confidential.</span>
          </div>
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-800 px-2" onClick={() => setIsMobileMenuOpen(false)}>
            Cancel & Return Home
          </Link>
        </div>
      )}
    </header>
  );
}
