import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-primary", className)}
    aria-hidden="true"
    role="img"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--primary))" }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--accent))" }} />
      </linearGradient>
    </defs>

    {/* Outer Circle */}
    <circle
      cx="512"
      cy="512"
      r="460"
      stroke="url(#logoGradient)"
      strokeWidth="64"
      fill="none"
    />

    {/* Infinity Loop inside */}
    <path
      d="
        M 320 512
        C 320 400, 500 400, 512 512
        C 524 624, 704 624, 704 512
        C 704 400, 524 400, 512 512
        C 500 624, 320 624, 320 512 Z
      "
      fill="none"
      stroke="url(#logoGradient)"
      strokeWidth="64"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
