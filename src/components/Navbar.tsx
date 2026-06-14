'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'root' },
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/history', label: 'history' },
  { href: '/contact', label: 'contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const activeTab = navLinks.find((link) => link.href === pathname)?.label || 'root';

  return (
    <div className="mx-auto max-w-max-width flex justify-between items-center w-full px-gutter h-16">
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
  );
}
