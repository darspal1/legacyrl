import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("h-16 w-16 text-muted-foreground/80", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50 90 V 25 C 50 15, 40 10, 35 10" />
      <path d="M50 25 C 50 15, 60 10, 65 10" />

      <path d="M50 75 C 60 70, 70 55, 75 45" />
      <path d="M50 60 C 58 55, 65 45, 70 35" />
      <path d="M50 45 C 55 40, 60 35, 65 25" />

      <path d="M50 75 C 40 70, 30 55, 25 45" />
      <path d="M50 60 C 42 55, 35 45, 30 35" />
      <path d="M50 45 C 45 40, 40 35, 35 25" />
    </svg>
  );
}
