'use client';

interface AccessLevelBadgeProps {
  level: string;
}

export default function AccessLevelBadge({ level }: AccessLevelBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-surface-tint">
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
        security
      </span>
      <span className="font-code-md text-code-md tracking-tighter">{level}</span>
    </div>
  );
}
