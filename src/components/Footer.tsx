'use client';

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface dark:bg-surface">
      <div className="mx-auto max-w-max-width flex flex-col md:flex-row justify-between items-center px-gutter py-8 gap-4">
        <div className="text-label-sm font-label-sm text-surface-tint uppercase tracking-widest">
          © 2024 TERMINAL_SYSTEMS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <a
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-label-sm text-label-sm"
            href="https://github.com/danyaSoe"
            target="_blank"
            rel="noreferrer noopener"
          >
            github
          </a>
          <a
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-label-sm text-label-sm"
            href="https://www.linkedin.com/in/danya-damaris/"
            target="_blank"
            rel="noreferrer noopener"
          >
            linkedin
          </a>
        </div>
        <div className="text-code-md font-code-md text-surface-tint/50">SYS_V1.0.4_STABLE</div>
      </div>
    </footer>
  );
}
