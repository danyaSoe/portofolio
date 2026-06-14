'use client';

interface TerminalHeaderProps {
  title: string;
  subtitle?: string;
  onClose?: () => void;
}

export default function TerminalHeader({ title, subtitle, onClose }: TerminalHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-surface-container-highest border-b border-outline-variant">
      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-surface-tint/40"></div>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant tracking-widest">{title}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-surface-tint transition-colors flex items-center gap-1 group"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
          <span className="hidden md:inline group-hover:underline">TERMINATE_SESSION</span>
        </button>
      )}
    </div>
  );
}
