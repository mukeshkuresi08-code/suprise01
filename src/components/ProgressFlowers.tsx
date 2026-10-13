import './ProgressFlowers.css';

interface Props {
  currentChapter: number;
  totalChapters: number;
  onSelectChapter?: (chapter: number) => void;
}

export default function ProgressFlowers({
  currentChapter,
  totalChapters,
  onSelectChapter,
}: Props) {
  return (
    <nav className="progress-bar" aria-label="Chapter slide navigation">
      {Array.from({ length: totalChapters }, (_, i) => {
        const chapterNum = i + 1;
        const isCurrent = chapterNum === currentChapter;
        const isBloomed = chapterNum <= currentChapter;

        return (
          <button
            key={i}
            type="button"
            className={`progress-flower ${isBloomed ? 'bloomed' : ''} ${isCurrent ? 'active' : ''}`}
            onClick={() => onSelectChapter?.(chapterNum)}
            aria-label={`Chapter ${chapterNum}${isCurrent ? ' (Current chapter)' : ''}`}
            title={`Go to Chapter ${chapterNum}`}
            aria-current={isCurrent ? 'step' : undefined}
          >
            <svg viewBox="0 0 40 40" width="100%" height="100%">
              {/* Petals */}
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <ellipse
                  key={angle}
                  cx="20"
                  cy="20"
                  rx="7"
                  ry="4"
                  fill={isBloomed ? '#FFD447' : '#d4d0cc'}
                  transform={`rotate(${angle} 20 20) translate(0 -7)`}
                  style={{ transition: 'fill 0.4s ease' }}
                />
              ))}
              {/* Center */}
              <circle
                cx="20"
                cy="20"
                r="5"
                fill={isBloomed ? '#E9A928' : '#bbb'}
                style={{ transition: 'fill 0.4s ease' }}
              />
            </svg>
          </button>
        );
      })}
    </nav>
  );
}
