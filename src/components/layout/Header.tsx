'use client';

import { useState } from 'react';
import Link from 'next/link';
import { House, X, Menu, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full">
      <div className="flex justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex gap-2">
          <House size={30} />
          <span>Expense Tracker</span>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden sm:flex sm:gap-4 md:gap-8">
          <Link href="/">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#about">About</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        {/* Desktop Button */}
        <Link href="/dashboard" className="hidden sm:flex sm:gap-1">
          <span>Get Started</span> <ArrowRight />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="absolute flex flex-col gap-2 right-0 z-50">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="#features" onClick={() => setIsMenuOpen(false)}>
            Features
          </Link>
          <Link href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="#faq" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
        </nav>
      )}
    </header>
  );
}
