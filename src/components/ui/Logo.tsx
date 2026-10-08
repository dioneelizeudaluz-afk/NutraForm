interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function Logo({ className = "", variant = "full" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        role="img"
        aria-label="NutraForm"
        viewBox="0 0 64 64"
        className={className}
      >
        <rect width="64" height="64" rx="14" fill="#2D6A4F" />
        <path
          d="M20 40 Q24 22 32 22 Q40 22 44 40"
          stroke="#D8F3DC"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="32" cy="42" r="3" fill="#D8F3DC" />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        role="img"
        aria-label="NutraForm"
        viewBox="0 0 64 64"
        className="h-8 w-8"
      >
        <rect width="64" height="64" rx="14" fill="#2D6A4F" />
        <path
          d="M20 40 Q24 22 32 22 Q40 22 44 40"
          stroke="#D8F3DC"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="32" cy="42" r="3" fill="#D8F3DC" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-nf-ink">
        NutraForm
      </span>
    </div>
  );
}
