import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-primary", className)}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--primary))" }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--accent))" }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#logoGradient)"
      d="M50 0L95.26 25V75L50 100L4.74 75V25L50 0ZM14.22 30.17V69.83L50 88.66L85.78 69.83V30.17L50 11.34L14.22 30.17Z M23.69 35.34L50 49.99L76.31 35.34L50 20.69L23.69 35.34Z M23.69 64.66L50 50.01V79.31L23.69 64.66Z M76.31 64.66L50 79.31V50.01L76.31 64.66Z"
    />
  </svg>
);
