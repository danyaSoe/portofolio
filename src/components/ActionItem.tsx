'use client';

interface ActionItemProps {
  number: string;
  title: string;
  description: string;
}

export default function ActionItem({ number, title, description }: ActionItemProps) {
  return (
    <div className="flex gap-4 p-4 border border-outline-variant/20 bg-surface-container-low/30 hover:bg-surface-container-low/50 transition-colors group">
      <span className="text-surface-tint font-code-md text-code-md mt-1">{number}</span>
      <div>
        <h3 className="text-label-sm font-label-sm text-surface-tint group-hover:glow-text">{title}</h3>
        <p className="text-body-md font-body-md text-on-surface-variant/80 mt-1">{description}</p>
      </div>
    </div>
  );
}
