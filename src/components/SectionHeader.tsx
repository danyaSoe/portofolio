'use client';

interface SectionHeaderProps {
  icon: string;
  title: string;
}

export default function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 text-surface-tint font-label-sm text-label-sm border-l-4 border-surface-tint pl-3">
      <span className="material-symbols-outlined">{icon}</span>
      {title}
    </div>
  );
}
