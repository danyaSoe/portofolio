import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-gutter flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl w-full space-y-8">
          {/* Welcome Message */}
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-surface-tint glow-text uppercase leading-none tracking-tighter">
                SYSTEM_PORTFOLIO_V1.0
              </h1>
              <p className="font-code-md text-code-md text-on-surface-variant tracking-widest">
                INITIALIZING DECRYPTION_SEQUENCE...
              </p>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-surface border border-outline-variant p-6 space-y-4">
            <div className="flex items-center gap-2 text-surface-tint">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                security
              </span>
              <span className="font-code-md text-code-md tracking-tighter">SYSTEM_INITIALIZED</span>
            </div>

            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Welcome to a retro-terminal themed portfolio system. Explore projects, history, and professional
              achievements through a cyberpunk interface.
            </p>

            {/* Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Link href="/history">
                <button className="w-full group relative flex items-center justify-between px-6 py-4 bg-surface-tint text-on-primary font-headline-md text-headline-md border border-surface-tint hover:bg-transparent hover:text-surface-tint transition-all duration-300 overflow-hidden active:scale-[0.98]">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined">history</span>
                    HISTORY
                  </span>
                  <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </Link>

              <Link href="/projects">
                <button className="w-full group relative flex items-center justify-between px-6 py-4 bg-surface-tint text-on-primary font-headline-md text-headline-md border border-surface-tint hover:bg-transparent hover:text-surface-tint transition-all duration-300 overflow-hidden active:scale-[0.98]">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined">folder_open</span>
                    PROJECTS
                  </span>
                  <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </Link>

              <Link href="/about">
                <button className="w-full group relative flex items-center justify-between px-6 py-4 bg-surface-tint text-on-primary font-headline-md text-headline-md border border-surface-tint hover:bg-transparent hover:text-surface-tint transition-all duration-300 overflow-hidden active:scale-[0.98]">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined">person</span>
                    ABOUT
                  </span>
                  <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </Link>

              <Link href="/contact">
                <button className="w-full group relative flex items-center justify-between px-6 py-4 bg-surface-tint text-on-primary font-headline-md text-headline-md border border-surface-tint hover:bg-transparent hover:text-surface-tint transition-all duration-300 overflow-hidden active:scale-[0.98]">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined">mail</span>
                    CONTACT
                  </span>
                  <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* System Status */}
          <div className="text-center space-y-2 text-code-md font-code-md text-surface-tint/50">
            <p>SECURE_DECRYPTION_READY</p>
            <p className="tracking-widest">STATUS: ALL_SYSTEMS_GO</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
