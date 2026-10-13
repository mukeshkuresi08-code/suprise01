import { useEffect, useRef } from 'react';
import './SparkleBackground.css';

interface Props {
  variant?: 'pink' | 'night' | 'warm';
}

export default function SparkleBackground({ variant = 'pink' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '';

    const count = 18;
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'sparkle-dot';
      star.setAttribute('aria-hidden', 'true');
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
        animation-duration: ${2 + Math.random() * 3}s;
        width: ${2 + Math.random() * 4}px;
        height: ${2 + Math.random() * 4}px;
      `;
      el.appendChild(star);
    }
  }, []);

  const bgClass = `sparkle-bg sparkle-${variant}`;
  return <div ref={ref} className={bgClass} aria-hidden="true" />;
}
