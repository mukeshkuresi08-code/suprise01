import { useState } from 'react';
import { envelope } from '../content/surpriseContent';
import SparkleBackground from '../components/SparkleBackground';
import FloatingPetals from '../components/FloatingPetals';
import './EnvelopeChapter.css';

interface Props {
  onNext: () => void;
}

export default function EnvelopeChapter({ onNext }: Props) {
  const [opened, setOpened] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => setLetterVisible(true), 600);
  };

  return (
    <section className="chapter envelope-chapter" aria-label="Secret Envelope">
      <SparkleBackground variant="warm" />
      <FloatingPetals count={8} color="mixed" />

      <div className="chapter-inner">
        {!opened && (
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <p className="envelope-hint handwritten">You've got a special letter... 💌</p>
            <button
              className="envelope-clickable"
              onClick={handleOpen}
              aria-label="Open the envelope"
            >
              <div className="envelope-body">
                <div className="envelope-flap" />
                <div className="envelope-front">
                  <span className="envelope-seal">🌻</span>
                </div>
              </div>
              <p className="envelope-tap-hint">tap to open</p>
            </button>
            <div style={{ marginTop: '1.5rem' }}>
              <button
                className="btn-primary"
                onClick={handleOpen}
                aria-label="Open the letter"
              >
                OPEN THE LETTER 💌
              </button>
            </div>
          </div>
        )}

        {opened && (
          <div className={`letter-slide ${letterVisible ? 'letter-visible' : ''}`}>
            <div className="letter-paper">
              {letterVisible && (
                <div className="letter-text fade-in">
                  {envelope.letter.split('\n').map((line, i) => (
                    <p key={i} className={line.trim() === '' ? 'letter-gap' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {letterVisible && (
              <button
                className="btn-primary fade-in"
                onClick={onNext}
                style={{ marginTop: '2rem' }}
                aria-label="Continue to next chapter"
              >
                {envelope.button}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
