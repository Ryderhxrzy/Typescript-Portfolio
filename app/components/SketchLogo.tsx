export default function SketchLogo() {
  return (
    <div
      className="inline-flex items-center gap-2 active:scale-95 transition-transform cursor-pointer"
      style={{ transform: "rotate(-1deg)" }}
    >
      <svg
        viewBox="-5 -10 320 170"
        width={48}
        height={26}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", flexShrink: 0, overflow: "visible" }}
      >
        {/* Left Shape - Primary Color */}
        <path
          d="M10 90 Q5 40 80 30 Q140 20 120 80 Q100 140 30 120 Q5 110 10 90 Z"
          fill="var(--color-primary)"
          stroke="var(--color-pencil)"
          strokeWidth="3"
          style={{ filter: "drop-shadow(3px 3px 0 var(--color-pencil))" }}
        />
        {/* Right Shape - Accent Color */}
        <path
          d="M160 20 Q250 0 280 60 Q300 120 220 140 Q150 150 150 90 Q150 40 160 20 Z"
          fill="var(--color-accent)"
          stroke="var(--color-pencil)"
          strokeWidth="3"
          style={{ filter: "drop-shadow(3px 3px 0 var(--color-pencil))" }}
        />

        {/* Code Symbols */}
        <path
          d="M80 60 L40 80 L80 100"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M190 60 L240 80 L190 100"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      <div className="flex items-baseline gap-1.5 pt-0.5">
        <span className="font-heading text-xl leading-none text-pencil">
          Jhay-R
        </span>
        <span className="font-body text-base leading-none text-pencil bg-highlight/30 px-1.5 pb-0.5 border border-pencil/10 rounded-sm -rotate-2">
          / Dev
        </span>
      </div>

    </div>
  );
}





