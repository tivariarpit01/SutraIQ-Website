import { cn } from "@/lib/utils";

export const WebDevIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(className)}
  >
    <defs>
      <linearGradient id="webDevGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    <polyline points="16 18 22 12 16 6" stroke="url(#webDevGradient)" />
    <polyline points="8 6 2 12 8 18" stroke="url(#webDevGradient)" />
  </svg>
);