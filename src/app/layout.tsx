import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import BackgroundCanvas from '@/components/BackgroundCanvas';

export const metadata: Metadata = {
  title: 'SYS_PORTFOLIO_V1.0',
  description: 'A retro-terminal themed portfolio',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="90" font-size="90" font-family="monospace" fill="%2334e507">$</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="crt-overlay terminal-scrollbar min-h-screen flex flex-col">
        {/* Background Layer */}
        <div className="fixed inset-0 z-0 bg-main opacity-40"></div>
        <BackgroundCanvas />

        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-outline-variant backdrop-blur-xl bg-surface/80 dark:bg-surface/80">
          <div className="mx-auto max-w-max-width flex items-center justify-between px-gutter h-16">
            <Navbar />
          </div>
        </header>

        <main className="relative z-10 flex-1 pt-24 pb-24">
          {children}
        </main>

        <Footer />

        {/* System Indicator */}
        <div className="fixed bottom-4 right-4 z-[60] bg-surface-tint text-on-primary px-3 py-1 font-label-sm text-label-sm hidden md:flex items-center gap-2">
          <span>SYSTEM_ACTIVE</span>
          <span className="w-2 h-4 bg-white animate-blink"></span>
        </div>
      </body>
    </html>
  );
}
