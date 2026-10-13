import { useState, useEffect, useCallback } from 'react';
import { specimenZero } from '../content/surpriseContent';
import SparkleBackground from '../components/SparkleBackground';
import './SpecimenZeroChapter.css';

interface Props {
  onNext: () => void;
}

const GHOST_POSITIONS = [
  { top: '20%', left: '15%' },
  { top: '60%', left: '70%' },
  { top: '35%', left: '55%' },
  { top: '70%', left: '25%' },
  { top: '15%', left: '75%' },
  { top: '50%', left: '40%' },
  { top: '45%', left: '10%' },
  { top: '25%', left: '85%' },
];

export default function SpecimenZeroChapter({ onNext }: Props) {
  const [phase, setPhase] = useState<'intro' | 'game' | 'complete'>('intro');
  const [score, setScore] = useState(0);
  const [ghostPos, setGhostPos] = useState(0);
  const [reaction, setReaction] = useState('');
  const [ghostVisible, setGhostVisible] = useState(true);
  const [showVictory, setShowVictory] = useState(false);

  const moveGhost = useCallback(() => {
    setGhostVisible(false);
    setTimeout(() => {
      setGhostPos((prev) => {
        let next = Math.floor(Math.random() * GHOST_POSITIONS.length);
        while (next === prev) next = Math.floor(Math.random() * GHOST_POSITIONS.length);
        return next;
      });
      setGhostVisible(true);
    }, 400);
  }, []);

  const handleGhostClick = useCallback(() => {
    const newScore = score + 1;
    setScore(newScore);
    const reactions = specimenZero.ghostReactions;
    setReaction(reactions[Math.min(newScore - 1, reactions.length - 1)]);

    if (newScore >= 3) {
      setGhostVisible(false);
      setTimeout(() => {
        setPhase('complete');
        setShowVictory(true);
      }, 600);
    } else {
      moveGhost();
    }
  }, [score, moveGhost]);

  // Auto-move ghost periodically
  useEffect(() => {
    if (phase !== 'game' || !ghostVisible) return;
    const interval = setInterval(moveGhost, 3000);
    return () => clearInterval(interval);
  }, [phase, ghostVisible, moveGhost]);

  const startGame = () => {
    setPhase('game');
    setScore(0);
    setReaction('');
    setGhostVisible(true);
    setGhostPos(0);
  };

  const pos = GHOST_POSITIONS[ghostPos];

  return (
    <section className="chapter specimen-chapter" aria-label="Specimen Zero chapter">
      <SparkleBackground variant="night" />

      {/* Spooky hallway background */}
      <div className="spooky-scene" aria-hidden="true">
        <div className="flashlight-beam" />
        <div className="spooky-dust" />
        {/* Glowing eyes */}
        {[
          { top: '30%', left: '80%', delay: '0s' },
          { top: '55%', left: '12%', delay: '1.5s' },
          { top: '70%', left: '88%', delay: '3s' },
        ].map((e, i) => (
          <div
            key={i}
            className="glowing-eyes"
            style={{ top: e.top, left: e.left, animationDelay: e.delay }}
          >
            <span className="eye" />
            <span className="eye" />
          </div>
        ))}
      </div>

      <div className="chapter-inner">
        {phase === 'intro' && (
          <div className="fade-in">
            <h2 className="spooky-heading">{specimenZero.heading}</h2>

            <div className="spooky-text">
              {specimenZero.openingLines.map((line, i) => (
                <p key={i} className={`fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                  {line}
                </p>
              ))}
            </div>

            <div className="spooky-story fade-in fade-in-delay-4">
              {specimenZero.storyText.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="game-intro fade-in fade-in-delay-4">
              <h3 className="game-title">🎮 MINI-GAME: FIND THE SPOOKY GHOST</h3>
              <p className="game-instructions">Find and click the cute ghost 3 times!</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                <button className="btn-primary spooky-btn" onClick={startGame}>
                  START THE HUNT 👻
                </button>
                <button className="btn-secondary" onClick={onNext}>
                  Continue to Next Chapter 🌻
                </button>
              </div>
            </div>
          </div>
        )}

        {phase === 'game' && (
          <div className="game-area fade-in">
            <div className="game-hud">
              <span className="game-score">👻 {score} / 3</span>
              <button className="btn-secondary" onClick={startGame}>
                Restart
              </button>
            </div>

            <div className="game-room" role="application" aria-label="Ghost hunting game area">
              {/* Room walls / floor */}
              <div className="room-walls" aria-hidden="true">
                <div className="room-floor" />
                <div className="room-door" />
                <div className="room-window" />
              </div>

              {ghostVisible && (
                <button
                  className="ghost-btn"
                  style={{ top: pos.top, left: pos.left }}
                  onClick={handleGhostClick}
                  aria-label="Catch the ghost"
                >
                  <span className="ghost-emoji">👻</span>
                </button>
              )}
            </div>

            {reaction && <p className="ghost-reaction fade-in">{reaction}</p>}

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
              <button
                className="btn-secondary"
                onClick={() => setPhase('complete')}
              >
                Skip to story →
              </button>
              <button
                className="btn-secondary"
                onClick={onNext}
              >
                Continue to Next Chapter 🌻
              </button>
            </div>
          </div>
        )}

        {phase === 'complete' && (
          <div className={`mission-complete ${showVictory ? 'fade-in' : 'fade-in'}`}>
            {showVictory && (
              <>
                <div className="victory-ghost" aria-hidden="true">👻🎉</div>
                <h3 className="victory-title">{specimenZero.missionComplete.title}</h3>
              </>
            )}

            {!showVictory && (
              <h3 className="victory-title">Alright, let's continue the story! 😂</h3>
            )}

            <div className="victory-stats">
              {specimenZero.missionComplete.lines.map((line, i) => (
                <p key={i} className={`fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                  {line}
                </p>
              ))}
            </div>

            <button
              className="btn-primary spooky-btn fade-in fade-in-delay-4"
              onClick={onNext}
            >
              {specimenZero.button}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
