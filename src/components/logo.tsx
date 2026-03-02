export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef6b35" stopOpacity={1} />
          <stop offset="100%" stopColor="#137f78" stopOpacity={1} />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#1e1e2e" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        dominantBaseline="central"
        fill="url(#logo-grad)"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fontSize="32"
      >
        sb
      </text>
    </svg>
  );
}
