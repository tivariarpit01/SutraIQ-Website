import { cn } from "@/lib/utils";

export const AppDevIcon = ({ className }: { className?: string }) => (
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
      <linearGradient id="appDevGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    <rect
      x="5"
      y="2"
      width="14"
      height="20"
      rx="2"
      ry="2"
      stroke="url(#appDevGradient)"
    ></rect>
    <line
      x1="12"
      y1="18"
      x2="12"
      y2="18"
      stroke="url(#appDevGradient)"
      strokeWidth="3"
      strokeLinecap="round"
    ></line>
  </svg>
);
