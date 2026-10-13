import { welcome } from '../content/surpriseContent';
import FloatingPetals from '../components/FloatingPetals';
import SparkleBackground from '../components/SparkleBackground';
import SunflowerBorder from '../components/SunflowerBorder';
import './WelcomeChapter.css';

interface Props {
  onNext: () => void;
}

export default function WelcomeChapter({ onNext }: Props) {
  return (
    <section className="chapter welcome-chapter" aria-label="Welcome">
      <SparkleBackground variant="pink" />
      <FloatingPetals count={14} color="pink" />
      <SunflowerBorder />

      {/* Floating hearts */}
      <div className="welcome-hearts" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="welcome-heart"
            style={{
              left: `${15 + i * 14}%`,
              animationDelay: `${i * 1.2}s`,
              fontSize: `${14 + (i % 4) * 3}px`,
            }}
          >
            💗
          </span>
        ))}
      </div>

      <div className="chapter-inner fade-in">
        {/* Clickable animated envelope */}
        <button
          type="button"
          className="welcome-envelope"
          onClick={onNext}
          aria-label="Open your surprise envelope"
          title="Click to open the letter! 💌"
        >
          <svg viewBox="0 0 120 90" width="120" height="90">
            <rect x="5" y="20" width="110" height="65" rx="8" fill="#FFF0E0" stroke="#F8C8DC" strokeWidth="2" />
            <polygon points="5,20 60,55 115,20" fill="#FCE7F3" stroke="#F8C8DC" strokeWidth="2" />
            <circle cx="60" cy="40" r="10" fill="#FFD447" />
            <text x="60" y="44" textAnchor="middle" fontSize="10" fill="#E9A928">🌻</text>
          </svg>
          <span className="envelope-click-hint">tap to open 💌</span>
        </button>

        <h1 className="welcome-heading">{welcome.heading}</h1>
        <p className="welcome-subheading fade-in fade-in-delay-1">{welcome.subheading}</p>
        <p className="welcome-description fade-in fade-in-delay-2">{welcome.description}</p>

        <button
          className="btn-primary welcome-btn fade-in fade-in-delay-3"
          onClick={onNext}
          aria-label="Open your surprise and start the adventure"
        >
          {welcome.button}
        </button>
      </div>
    </section>
  );
}
