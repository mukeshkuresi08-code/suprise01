import { useEffect, useRef } from 'react';
import './FloatingPetals.css';

export default function FloatingPetals({ count = 12, color = 'pink' }: { count?: number; color?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    const colors: Record<string, string[]> = {
      pink: ['#F8C8DC', '#FCE7F3', '#E879A9'],
      yellow: ['#FFD447', '#E9A928', '#FFF3C4'],
      mixed: ['#F8C8DC', '#FFD447', '#FCE7F3', '#E879A9'],
    };

    const palette = colors[color] || colors.pink;
    const petals = Math.min(count, 20); // cap for performance

    for (let i = 0; i < petals; i++) {
      const petal = document.createElement('div');
      petal.className = 'floating-petal';
      petal.setAttribute('aria-hidden', 'true');
      const size = 8 + Math.random() * 14;
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 8 + Math.random() * 8;
      const c = palette[Math.floor(Math.random() * palette.length)];

      petal.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        background: ${c};
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${0.3 + Math.random() * 0.4};
      `;
      container.appendChild(petal);
    }
  }, [count, color]);

  return <div ref={containerRef} className="petals-container" aria-hidden="true" />;
}
