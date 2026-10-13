import { useState } from 'react';
import { distanceChapter } from '../content/surpriseContent';
import SparkleBackground from '../components/SparkleBackground';
import FloatingPetals from '../components/FloatingPetals';
import './DistanceChapter.css';

interface Props {
  onNext: () => void;
}

export default function DistanceChapter({ onNext }: Props) {
  const [starRevealed, setStarRevealed] = useState(false);

  return (
    <section className="chapter distance-chapter" aria-label="Long-distance connection">
      <SparkleBackground variant="night" />
      <FloatingPetals count={6} color="mixed" />

      {/* Night sky scene */}
      <div className="night-scene" aria-hidden="true">
        {/* Constellations */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="constellation-star"
            style={{
              top: `${5 + ((i * 19 + 7) % 88)}%`,
              left: `${(i * 13 + 3) % 96}%`,
              animationDelay: `${(i * 0.4) % 4}s`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
            }}
          />
        ))}

        {/* Two connected stars */}
        <div className="connected-stars">
          <div className="big-star star-left">✦</div>
          <svg className="connection-line" viewBox="0 0 400 20" preserveAspectRatio="none">
            <line x1="0" y1="10" x2="400" y2="10" stroke="#E9A928" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
            </line>
          </svg>
          <div className="big-star star-right">✦</div>
        </div>

        {/* Clouds */}
        <div className="night-cloud cloud-1" />
        <div className="night-cloud cloud-2" />

        {/* Bottom sunflowers */}
        <div className="distance-sunflowers">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="distance-sf" style={{ animationDelay: `${i * 0.3}s` }}>🌻</span>
          ))}
        </div>
      </div>

      <div className="chapter-inner">
        <h2 className="distance-heading fade-in">{distanceChapter.heading}</h2>

        <div className="distance-text fade-in fade-in-delay-1">
          {distanceChapter.text.split('\n').map((line, i) => (
            <p key={i} className={line.trim() === '' ? 'distance-gap' : ''}>
              {line}
            </p>
          ))}
        </div>

        {/* Interactive star */}
        <div className="star-interaction fade-in fade-in-delay-2">
          <button
            className={`star-button ${starRevealed ? 'star-revealed' : ''}`}
            onClick={() => setStarRevealed(true)}
            aria-label="Reveal a hidden message"
            aria-expanded={starRevealed}
          >
            <span className="star-icon">✨</span>
            <span className="star-label">{distanceChapter.starLabel}</span>
          </button>

          {starRevealed && (
            <div className="hidden-note fade-in" role="region" aria-label="Hidden message">
              <div className="letter-paper" style={{ marginTop: '1.5rem' }}>
                {distanceChapter.hiddenNote.split('\n').map((line, i) => (
                  <p key={i} className={line.trim() === '' ? 'letter-gap' : ''}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          className="btn-primary distance-btn fade-in fade-in-delay-3"
          onClick={onNext}
          style={{ marginTop: '2rem' }}
        >
          {distanceChapter.button}
        </button>
      </div>
    </section>
  );
}
