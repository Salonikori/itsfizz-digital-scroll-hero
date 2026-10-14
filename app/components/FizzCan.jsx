// Inline SVG soda can, drawn by hand so no image files are needed.

export default function FizzCan() {
  return (
    <svg viewBox="0 0 300 530" role="img" aria-label="Illustration of a lime green Fizz can">
      <defs>
        <linearGradient id="canBody" x1="0" x2="1">
          <stop offset="0" stopColor="#708b1d" />
          <stop offset=".18" stopColor="#c9f33b" />
          <stop offset=".48" stopColor="#efff8d" />
          <stop offset=".72" stopColor="#b7e52e" />
          <stop offset="1" stopColor="#536b15" />
        </linearGradient>
        <linearGradient id="topMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8e9df" />
          <stop offset=".48" stopColor="#777d70" />
          <stop offset="1" stopColor="#d7d9cb" />
        </linearGradient>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0" stopColor="#17200b" stopOpacity=".5" />
          <stop offset=".15" stopColor="#fff" stopOpacity=".16" />
          <stop offset=".45" stopColor="#fff" stopOpacity="0" />
          <stop offset=".86" stopColor="#27320b" stopOpacity=".3" />
          <stop offset="1" stopColor="#10170a" stopOpacity=".65" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="150" cy="500" rx="91" ry="14" fill="#000" opacity=".3" />

      {/* body */}
      <path
        d="M88 42 Q88 25 106 22 L194 22 Q212 25 212 42 L222 72 Q234 92 234 119 L234 441 Q234 469 211 482 Q150 502 89 482 Q66 469 66 441 L66 119 Q66 92 78 72 Z"
        fill="url(#canBody)"
        stroke="#a5c72c"
        strokeWidth="2"
      />
      <path d="M88 42 Q150 55 212 42 L222 72 Q150 90 78 72 Z" fill="#c5c8bd" opacity=".7" />

      {/* lid and pull tab */}
      <ellipse cx="150" cy="37" rx="62" ry="14" fill="url(#topMetal)" stroke="#c7c9bd" strokeWidth="2" />
      <ellipse cx="150" cy="37" rx="42" ry="7" fill="#4a5046" opacity=".65" />
      <path d="M131 34 Q151 24 170 34 L164 43 Q149 48 136 42 Z" fill="#d5d7cc" stroke="#73796c" strokeWidth="2" />

      {/* ridges and shading */}
      <path d="M91 91 Q150 108 209 91" fill="none" stroke="#f3ffb3" strokeWidth="2" opacity=".5" />
      <path d="M92 430 Q150 446 208 430" fill="none" stroke="#506619" strokeWidth="3" opacity=".5" />
      <path
        d="M66 119 L234 119 L234 441 Q234 469 211 482 Q150 502 89 482 Q66 469 66 441 Z"
        fill="url(#shade)"
      />

      {/* label */}
      <g transform="translate(150 236)" textAnchor="middle">
        <text y="-46" fill="#1c2a0b" fontSize="13" fontWeight="800" letterSpacing="3">FRESH / LOUD</text>
        <text y="5" fill="#17200b" fontSize="55" fontWeight="900" letterSpacing="-5">FIZZ</text>
        <path d="M-53 23 L53 23" stroke="#17200b" strokeWidth="2" />
        <text y="48" fill="#26330e" fontSize="11" fontWeight="800" letterSpacing="3">CITRUS POP</text>
        <text y="94" fill="#26330e" fontSize="8" letterSpacing="2">SPARK YOUR DAY</text>
      </g>

      {/* bubbles */}
      <g fill="#f4ffb2" opacity=".9">
        <circle cx="104" cy="158" r="3" />
        <circle cx="194" cy="174" r="2" />
        <circle cx="185" cy="328" r="3" />
        <circle cx="104" cy="353" r="2" />
        <circle cx="203" cy="385" r="2" />
      </g>

      {/* highlight and edge shadow */}
      <path d="M80 106 Q75 270 83 431" fill="none" stroke="#fff" strokeWidth="5" opacity=".24" strokeLinecap="round" />
      <path d="M218 115 Q225 280 215 438" fill="none" stroke="#18230b" strokeWidth="5" opacity=".25" strokeLinecap="round" />

      {/* base */}
      <ellipse cx="150" cy="480" rx="61" ry="12" fill="#9ebc2b" stroke="#4f6418" strokeWidth="2" />
      <ellipse cx="150" cy="481" rx="48" ry="7" fill="#515b3b" opacity=".55" />
    </svg>
  );
}
