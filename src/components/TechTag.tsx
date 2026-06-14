'use client';

interface TechTagProps {
  name: string;
}

export default function TechTag({ name }: TechTagProps) {
  return (
    <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant text-surface-tint font-code-md text-code-md hover:bg-surface-tint hover:text-on-primary transition-colors cursor-default">
      {name}
    </span>
  );
}
