import { useState, useCallback } from 'react';
import { finaleChapter, DISPLAY_DATE_LONG, apologyChapter } from '../content/surpriseContent';
import './FinaleChapter.css';

interface Props {
  onRestart: () => void;
  onGoToChapter?: (chapter: number) => void;
  initialBloomed?: boolean;
  onBloom?: () => void;
}

const MAX_EXTRA_FLOWERS = 15;

const EXTRA_FLOWER_CONFIGS = [
  { left: '16%', bottom: '16%', size: 38 },
  { left: '82%', bottom: '18%', size: 36 },
  { left: '26%', bottom: '24%', size: 34 },
  { left: '70%', bottom: '26%', size: 40 },
  { left: '48%', bottom: '20%', size: 42 },
  { left: '10%', bottom: '26%', size: 32 },
  { left: '85%', bottom: '30%', size: 35 },
  { left: '38%', bottom: '28%', size: 38 },
  { left: '62%', bottom: '18%', size: 36 },
  { left: '22%', bottom: '32%', size: 30 },
  { left: '76%', bottom: '34%', size: 34 },
  { left: '52%', bottom: '30%', size: 36 },
  { left: '32%', bottom: '14%', size: 40 },
  { left: '66%', bottom: '14%', size: 38 },
  { left: '44%', bottom: '34%', size: 32 },
];

export default function FinaleChapter({
  onRestart,
  onGoToChapter,
  initialBloomed = false,
  onBloom,
}: Props) {
  const [bloomed, setBloomed] = useState(initialBloomed);
  const [isBlooming, setIsBlooming] = useState(false);
  const [showLetter, setShowLetter] = useState(initialBloomed);
  const [extraFlowers, setExtraFlowers] = useState(0);
  const [rereadOpen, setRereadOpen] = useState(false);

  const handleBloom = useCallback(() => {
    if (bloomed || isBlooming) return;
    setIsBlooming(true);
    setBloomed(true);
    if (onBloom) onBloom();
    setTimeout(() => {
      setShowLetter(true);
      setIsBlooming(false);
    }, 2200);
  }, [bloomed, isBlooming, onBloom]);

  const growFlower = () => {
    setExtraFlowers((prev) => Math.min(prev + 1, MAX_EXTRA_FLOWERS));
  };

  // Base sunflower positions for the garden
  const gardenFlowers = [
    { left: '8%', bottom: '8%', size: 52, delay: 0.2 },
    { left: '20%', bottom: '12%', size: 44, delay: 0.5 },
    { left: '35%', bottom: '6%', size: 58, delay: 0.1 },
    { left: '50%', bottom: '10%', size: 48, delay: 0.7 },
    { left: '65%', bottom: '8%', size: 54, delay: 0.3 },
    { left: '78%', bottom: '14%', size: 42, delay: 0.6 },
    { left: '90%', bottom: '10%', size: 50, delay: 0.4 },
    { left: '12%', bottom: '22%', size: 38, delay: 0.9 },
    { left: '30%', bottom: '20%', size: 36, delay: 1.1 },
    { left: '55%', bottom: '24%', size: 40, delay: 0.8 },
    { left: '72%', bottom: '22%', size: 34, delay: 1.0 },
    { left: '88%', bottom: '26%', size: 36, delay: 1.2 },
    { left: '5%', bottom: '32%', size: 30, delay: 1.3 },
    { left: '42%', bottom: '18%', size: 46, delay: 0.45 },
    { left: '60%', bottom: '30%', size: 32, delay: 1.15 },
  ];

  return (
    <section className="chapter finale-chapter" aria-label="Secret Sunflower Garden">
      {/* Sky gradient */}
      <div className={`garden-sky ${bloomed ? 'sky-sunset' : 'sky-pre'}`} aria-hidden="true" />

      {/* Floating soft clouds */}
      <div className="garden-clouds" aria-hidden="true">
        <div className="garden-cloud cloud-1" />
        <div className="garden-cloud cloud-2" />
        <div className="garden-cloud cloud-3" />
      </div>

      {/* Glowing particles & stars on bloom */}
      {bloomed && (
        <div className="garden-particles" aria-hidden="true">
          {['✨', '⭐', '✨', '⭐', '✨', '⭐', '✨', '⭐'].map((star, i) => (
            <span
              key={i}
              className="garden-star"
              style={{
                left: `${8 + i * 11.5}%`,
                top: `${12 + ((i * 17) % 36)}%`,
                animationDelay: `${(i * 0.5) % 3}s`,
              }}
            >
              {star}
            </span>
          ))}
        </div>
      )}

      {/* Fireflies */}
      {bloomed && (
        <div className="fireflies" aria-hidden="true">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="firefly"
              style={{
                left: `${(i * 7 + 4) % 96}%`,
                top: `${12 + ((i * 13) % 65)}%`,
                animationDelay: `${(i * 0.7) % 5}s`,
                animationDuration: `${3.5 + (i % 4)}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating hearts on bloom */}
      {bloomed && (
        <div className="finale-hearts" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="finale-heart"
              style={{
                left: `${12 + i * 11}%`,
                animationDelay: `${i * 0.85}s`,
                fontSize: `${14 + (i % 4) * 3}px`,
              }}
            >
              💗
            </span>
          ))}
        </div>
      )}

      {/* Garden path & hills */}
      <div className={`garden-ground ${bloomed ? 'ground-visible' : ''}`} aria-hidden="true">
        <div className="garden-hills" />
        <svg className="garden-path-svg" viewBox="0 0 400 100" preserveAspectRatio="none">
          <path
            d="M0,80 Q100,40 200,60 Q300,80 400,50"
            fill="none"
            stroke="#E9A928"
            strokeWidth="4"
            opacity="0.45"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Sunflower garden */}
      <div className={`garden-flowers ${bloomed ? 'flowers-bloomed' : ''}`} aria-hidden="true">
        {gardenFlowers.map((f, i) => (
          <div
            key={`base-${i}`}
            className="garden-flower"
            style={
              {
                left: f.left,
                bottom: f.bottom,
                '--bloom-delay': `${f.delay}s`,
                '--flower-size': `${f.size}px`,
              } as React.CSSProperties
            }
          >
            <div className="flower-stem">
              <div className="stem-leaf stem-leaf-left" />
              <div className="stem-leaf stem-leaf-right" />
            </div>
            <svg className="flower-head" viewBox="0 0 60 60" width={f.size} height={f.size}>
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <ellipse
                  key={angle}
                  cx="30"
                  cy="30"
                  rx="11"
                  ry="5"
                  fill="#FFD447"
                  transform={`rotate(${angle} 30 30) translate(0 -12)`}
                />
              ))}
              <circle cx="30" cy="30" r="9" fill="#E9A928" />
              <circle cx="30" cy="30" r="5" fill="#C98A1E" opacity="0.6" />
            </svg>
          </div>
        ))}

        {EXTRA_FLOWER_CONFIGS.slice(0, extraFlowers).map((f, i) => (
          <div
            key={`extra-${i}`}
            className="garden-flower extra-flower"
            style={
              {
                left: f.left,
                bottom: f.bottom,
                '--bloom-delay': '0s',
                '--flower-size': `${f.size}px`,
              } as React.CSSProperties
            }
          >
            <div className="flower-stem">
              <div className="stem-leaf stem-leaf-left" />
              <div className="stem-leaf stem-leaf-right" />
            </div>
            <svg className="flower-head" viewBox="0 0 60 60" width={f.size} height={f.size}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <ellipse
                  key={angle}
                  cx="30"
                  cy="30"
                  rx="10"
                  ry="4.5"
                  fill="#FFD447"
                  transform={`rotate(${angle} 30 30) translate(0 -11)`}
                />
              ))}
              <circle cx="30" cy="30" r="8" fill="#E9A928" />
            </svg>
          </div>
        ))}
      </div>

      {/* Falling petals on bloom */}
      {bloomed && (
        <div className="bloom-petals" aria-hidden="true">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="bloom-petal"
              style={{
                left: `${(i * 7.5 + 3) % 96}%`,
                animationDelay: `${(i * 0.6) % 6}s`,
                animationDuration: `${7 + (i % 5)}s`,
                background: ['#FFD447', '#F8C8DC', '#FCE7F3', '#E9A928'][i % 4],
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="chapter-inner finale-content">
        {!bloomed && (
          <div className="pre-bloom fade-in">
            <h2 className="finale-pre-heading">{finaleChapter.preHeading}</h2>
            <p className="finale-pre-sub">{finaleChapter.preSubheading}</p>
            <button
              className="btn-primary bloom-btn"
              onClick={handleBloom}
              disabled={isBlooming}
              aria-label="Make the flowers bloom and reveal the garden"
            >
              {finaleChapter.bloomButton}
            </button>
          </div>
        )}

        {showLetter && (
          <div className="post-bloom fade-in">
            <div className="finale-letter-wrap">
              <div className="letter-paper finale-letter">
                {finaleChapter.finalLetter.split('\n').map((line, i) => (
                  <p key={i} className={line.trim() === '' ? 'letter-gap' : ''}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <h2 className="finale-headline fade-in fade-in-delay-1">{finaleChapter.finalHeadline}</h2>
            <p className="finale-sub fade-in fade-in-delay-2">{finaleChapter.finalSubheading}</p>
            <p className="finale-date fade-in fade-in-delay-2">{DISPLAY_DATE_LONG}</p>

            <div className="finale-actions fade-in fade-in-delay-3">
              <button
                className="btn-secondary"
                onClick={() => setRereadOpen(true)}
                aria-label="Read apology letter from chapter 6 again"
              >
                {finaleChapter.rereadButton}
              </button>
              <button
                className="btn-secondary"
                onClick={growFlower}
                disabled={extraFlowers >= MAX_EXTRA_FLOWERS}
                aria-label="Grow one more sunflower in the garden"
              >
                {finaleChapter.growButton}
              </button>
              <button
                className="btn-secondary"
                onClick={onRestart}
                aria-label="Relive the adventure from chapter 1"
              >
                {finaleChapter.restartButton}
              </button>
            </div>

            {extraFlowers > 0 && (
              <p className="extra-count" aria-live="polite">
                🌻 {extraFlowers} extra sunflower{extraFlowers > 1 ? 's' : ''} planted!
              </p>
            )}
          </div>
        )}

        {/* Reread apology modal */}
        {rereadOpen && (
          <div
            className="reread-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Apology letter from Chapter 6"
            onClick={() => setRereadOpen(false)}
          >
            <div className="reread-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="reread-close"
                onClick={() => setRereadOpen(false)}
                aria-label="Close letter"
              >
                ✕
              </button>
              <div className="letter-paper">
                {apologyChapter.letter.split('\n').map((line, i) => (
                  <p key={i} className={line.trim() === '' ? 'letter-gap' : ''}>
                    {line}
                  </p>
                ))}
                <div
                  style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    gap: '0.75rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <button className="btn-primary" onClick={() => setRereadOpen(false)}>
                    Back to Garden 🌻
                  </button>
                  {onGoToChapter && (
                    <button className="btn-secondary" onClick={() => onGoToChapter(6)}>
                      View Chapter 6 💌
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
