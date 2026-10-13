import { useState } from 'react';
import { apologyChapter, DISPLAY_DATE } from '../content/surpriseContent';
import SparkleBackground from '../components/SparkleBackground';
import FloatingPetals from '../components/FloatingPetals';
import SunflowerBorder from '../components/SunflowerBorder';
import './ApologyChapter.css';

interface Props {
  onNext: () => void;
}

export default function ApologyChapter({ onNext }: Props) {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="chapter apology-chapter" aria-label="Apology chapter">
      <SparkleBackground variant="warm" />
      <FloatingPetals count={10} color="pink" />
      <SunflowerBorder />

      <div className="chapter-inner">
        <h2 className="apology-heading fade-in">{apologyChapter.heading}</h2>

        <p className="apology-date fade-in fade-in-delay-1">{DISPLAY_DATE}</p>

        <div className="letter-paper apology-letter fade-in fade-in-delay-2">
          {apologyChapter.letter.split('\n').map((line, i) => (
            <p key={i} className={line.trim() === '' ? 'letter-gap' : ''}>
              {line}
            </p>
          ))}
        </div>

        {/* Acceptance interaction */}
        <div className="apology-interaction fade-in fade-in-delay-3">
          {!accepted ? (
            <button
              className="accept-btn"
              onClick={() => setAccepted(true)}
              aria-label="Accept the sunflower apology"
            >
              <span className="accept-flower">🌻</span>
              <span>{apologyChapter.acceptButton}</span>
            </button>
          ) : (
            <div className="accept-response fade-in">
              <div className="accept-sunflower-anim" aria-hidden="true">🌻</div>
              <h3 className="accept-title">{apologyChapter.acceptResponse.title}</h3>
              {apologyChapter.acceptResponse.lines.map((line, i) => (
                <p key={i} className="accept-line">{line}</p>
              ))}
            </div>
          )}
        </div>

        <div className="apology-teaser fade-in fade-in-delay-4">
          <p className="teaser-text">{apologyChapter.teaser}</p>
        </div>

        <button
          className="btn-primary fade-in fade-in-delay-4"
          onClick={onNext}
          style={{ marginTop: '1.5rem' }}
        >
          {apologyChapter.button}
        </button>
      </div>
    </section>
  );
}
