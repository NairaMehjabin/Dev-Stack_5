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
        <div className="flex items-center justify-between h-20">
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo*/}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo-text.png"
                alt="DevStack Logo"
                width={150}
                height={40}
                priority
                className="h-9 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop nav links*/}
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

          {/* Auth Action Buttons (Right) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              type="button"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="bg-brand-gradient text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:opacity-95 transition-all transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
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