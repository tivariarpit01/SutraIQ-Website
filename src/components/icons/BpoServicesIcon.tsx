import { cn } from "@/lib/utils";

export const BpoServicesIcon = ({ className }: { className?: string }) => (
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
      <linearGradient id="bpoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    <path
      d="M18 2h-4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
      stroke="url(#bpoGradient)"
    />
    <path
      d="M12 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8"
      stroke="url(#bpoGradient)"
    />
    <path d="M6 12h.01" stroke="url(#bpoGradient)" />
  </svg>
);
