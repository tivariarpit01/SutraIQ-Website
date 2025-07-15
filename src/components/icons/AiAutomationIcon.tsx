import { cn } from "@/lib/utils";

export const AiAutomationIcon = ({ className }: { className?: string }) => (
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
      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    <path d="M12 2a10 10 0 0 0-3.38 19.46" stroke="url(#aiGradient)" />
    <path d="M12 2a10 10 0 0 1 3.38 19.46" stroke="url(#aiGradient)" />
    <path d="M2 12h2.5" stroke="url(#aiGradient)" />
    <path d="M19.5 12H22" stroke="url(#aiGradient)" />
    <path d="M12 17.5V22" stroke="url(#aiGradient)" />
    <path d="M12 2v4.5" stroke="url(#aiGradient)" />
    <path d="M8.5 4.5l-2 2" stroke="url(#aiGradient)" />
    <path d="M17.5 6.5l-2-2" stroke="url(#aiGradient)" />
    <path d="M6.5 17.5l-2 2" stroke="url(#aiGradient)" />
    <path d="M15.5 19.5l2-2" stroke="url(#aiGradient)" />
    <circle cx="12" cy="12" r="2.5" fill="url(#aiGradient)" stroke="none" />
  </svg>
);