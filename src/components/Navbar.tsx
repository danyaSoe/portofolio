'use client';

import Link from 'next/link';

interface NavbarProps {
  activeTab?: string;
}

export default function Navbar({ activeTab = 'root' }: NavbarProps) {
  const navLinks = [
    { href: '/', label: 'root' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/history', label: 'history' },
    { href: '/contact', label: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant bg-surface/80 dark:bg-surface/80">
      <div className="flex justify-between items-center w-full px-gutter max-w-max-width mx-auto h-16">
        <Link href="/">
          <div className="text-headline-md font-headline-md font-bold text-surface-tint tracking-tighter cursor-pointer">
            SYS_PORTFOLIO_V1.0
          </div>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={activeTab === link.label ? 'nav-link-active' : 'nav-link'}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-surface-tint cursor-pointer hover:scale-95 transition-transform">
            terminal
          </span>
          <span className="material-symbols-outlined text-surface-tint cursor-pointer hover:scale-95 transition-transform">
            settings
          </span>
        </div>
      </div>
    </nav>
  );
}
