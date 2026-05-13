type LeafDecorationProps = { className: string };

export function LeafDecoration({ className }: LeafDecorationProps) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" aria-hidden>
      <path d="M24 151C40 116 73 85 119 62" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M64 103C51 86 47 67 53 48C73 57 82 72 82 93"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M98 75C91 53 95 34 111 20C126 39 128 58 116 79"
        fill="currentColor"
        opacity="0.17"
      />
      <path
        d="M119 61C134 46 151 40 169 45C161 65 147 75 125 76"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M45 131C31 121 22 106 19 88C40 88 54 97 62 116"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
}
