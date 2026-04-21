"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/documentation', label: 'Documentation' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="absolute top-0 z-50 w-full px-4 py-4 text-white md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/50 px-4 py-3 shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center">
            <img src="/logo-1.webp" alt="RS Group Logo" className="mr-3 h-12 w-auto sm:h-14 md:h-16" />
            <span className="truncate text-base font-bold sm:text-lg">RS Group</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-orange-400' : 'hover:text-orange-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href="/Riviera-Greens-Brochure.pdf"
              className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
            >
              Download Brochure
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-colors hover:bg-white/20 lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-white/10 text-orange-400'
                          : 'text-white hover:bg-white/10 hover:text-orange-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href="/Riviera-Greens-Brochure.pdf"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600"
            >
              Download Brochure
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
