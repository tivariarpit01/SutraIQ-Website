import { cn } from "@/lib/utils";

export const DigitalMarketingIcon = ({ className }: { className?: string }) => (
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
      <linearGradient id="marketingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    <path d="M3 3v18h18" stroke="url(#marketingGradient)" />
    <path d="M18.7 8.3c.5-.5.5-1.4 0-1.8l-1.8-1.8c-.5-.4-1.3-.4-1.8 0L12 8l-3.1-3.1a.9.9 0 0 0-1.3 0l-3.1 3.1c-.4.4-.4 1.1 0 1.5l3.1 3.1c.4.4 1.1.4 1.5 0L9 11l3.1 3.1c.4.4 1.1.4 1.5 0l5.1-5.2z" fill="url(#marketingGradient)" stroke="none" />
  </svg>
);
