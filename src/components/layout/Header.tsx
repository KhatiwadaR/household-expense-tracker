'use client';

import { useState } from 'react';
import Link from 'next/link';
import { House, X, Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div>
        {/* Logo */}
        <Link href="/">
          <House size={30} />
          <span>Expense Tracker</span>
        </Link>

        {/* Desktop Navbar */}
        <nav>
          <Link href="/">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#about">About</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        {/* Desktop Button */}
        <Link href="/dashboard">Get Started</Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <nav>
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
