import './SunflowerBorder.css';

export default function SunflowerBorder() {
  return (
    <>
      <div className="sf-border sf-border-left" aria-hidden="true">
        <Sunflower size={70} delay={0} />
        <Sunflower size={50} delay={0.3} />
        <Leaf />
        <Sunflower size={40} delay={0.6} />
      </div>
      <div className="sf-border sf-border-right" aria-hidden="true">
        <Sunflower size={60} delay={0.15} />
        <Leaf />
        <Sunflower size={50} delay={0.45} />
        <Sunflower size={45} delay={0.7} />
      </div>
    </>
  );
}

function Sunflower({ size = 60, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <svg
      className="sf-flower"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      style={{ animationDelay: `${delay}s` }}
    >
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <ellipse
          key={angle}
          cx="40"
          cy="40"
          rx="14"
          ry="6"
          fill="#FFD447"
          transform={`rotate(${angle} 40 40) translate(0 -16)`}
          opacity="0.9"
        />
      ))}
      <circle cx="40" cy="40" r="12" fill="#E9A928" />
      <circle cx="40" cy="40" r="7" fill="#C98A1E" opacity="0.5" />
    </svg>
  );
}

function Leaf() {
  return (
    <svg className="sf-leaf" width="36" height="50" viewBox="0 0 36 50">
      <path
        d="M18 2 C8 12, 2 25, 18 48 C34 25, 28 12, 18 2Z"
        fill="#7BC47F"
        opacity="0.7"
      />
      <path
        d="M18 10 L18 40"
        stroke="#5DA362"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
