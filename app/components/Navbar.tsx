"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50 bg-white border-2 shadow-lg p-2">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          Dr. Serena Blake
        </Link>

        {/* Toggle Button (mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden text-gray-700 focus:outline-none text-2xl cursor-pointer"
        >
          ☰
        </button>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="/faq">Rates & FAQs</Link></li>
          <li><Link href="/locations">Areas Reserved</Link></li>
          <li><Link href="/contact">Contact</Link></li>

        </ul>
      </nav>

      {/* Right Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-800 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col px-6 gap-4 text-gray-800 font-medium">
          <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/faq" onClick={() => setIsOpen(false)}>Rates & FAQs</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link href="/locations">Areas Reserved</Link></li>
        </ul>
      </div>

      {/* Optional overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
