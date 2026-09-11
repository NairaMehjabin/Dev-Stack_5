"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "Technologies", href: "#technologies", active: false },
  { name: "Projects", href: "#projects", active: false },
  { name: "About", href: "#about", active: false },
  { name: "Contact", href: "#contact", active: false },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-1 -ml-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo-text.png"
                alt="DevStack Logo"
                width={120}
                height={32}
                priority
                className="h-6 md:h-9 w-auto object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? "text-[#ec4899] font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              type="button"
              className="text-[11px] md:text-sm font-bold text-slate-700 hover:text-slate-900 px-2 py-1.5 md:px-3 md:py-2 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-brand-gradient text-white text-[11px] md:text-sm font-semibold px-3.5 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-sm hover:opacity-95 transition-all transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 absolute w-full shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.active
                  ? "bg-slate-50 text-[#ec4899]"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}