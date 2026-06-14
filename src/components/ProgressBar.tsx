'use client';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

export default function ProgressBar({ label, percentage }: ProgressBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between font-code-md text-code-md text-on-surface">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-surface-container-highest border border-outline-variant relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-surface-tint" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
