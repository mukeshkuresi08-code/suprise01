import { useState } from 'react';
import { friendshipChaos } from '../content/surpriseContent';
import SparkleBackground from '../components/SparkleBackground';
import FloatingPetals from '../components/FloatingPetals';
import SunflowerBorder from '../components/SunflowerBorder';
import './FriendshipChapter.css';

interface Props {
  onNext: () => void;
}

export default function FriendshipChapter({ onNext }: Props) {
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="chapter friendship-chapter" aria-label="Friendship chapter">
      <SparkleBackground variant="pink" />
      <FloatingPetals count={10} color="mixed" />
      <SunflowerBorder />

      <div className="chapter-inner">
        {/* Transition ghost */}
        <div className="transition-ghost fade-in" aria-hidden="true">
          <span className="pink-ghost">👻</span>
          <span className="ghost-sunflower">🌻</span>
        </div>

        <h2 className="friendship-heading fade-in">{friendshipChaos.heading}</h2>
        <p className="friendship-sub fade-in fade-in-delay-1">{friendshipChaos.subheading}</p>

        <div className="friendship-cards fade-in fade-in-delay-2">
          {friendshipChaos.cards.map((card) => {
            const isOpen = openCards.has(card.id);
            return (
              <div
                key={card.id}
                className={`f-card ${isOpen ? 'f-card-open' : ''}`}
              >
                <button
                  className="f-card-header"
                  onClick={() => toggleCard(card.id)}
                  aria-expanded={isOpen}
                  aria-controls={`card-content-${card.id}`}
                >
                  <span className="f-card-emoji">{card.emoji}</span>
                  <span className="f-card-title">{card.title}</span>
                  <span className="f-card-arrow">{isOpen ? '▲' : '▼'}</span>
                </button>

                <div
                  id={`card-content-${card.id}`}
                  className="f-card-body"
                  role="region"
                  hidden={!isOpen}
                >
                  {card.message.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Title poll */}
        <div className="title-poll fade-in fade-in-delay-3">
          <h3 className="poll-question">{friendshipChaos.titlePoll.question}</h3>

          <div className="poll-options">
            {friendshipChaos.titlePoll.options.map((opt) => (
              <button
                key={opt.id}
                className={`poll-option ${selectedTitle === opt.id ? 'poll-selected' : ''}`}
                onClick={() => setSelectedTitle(opt.id)}
                aria-pressed={selectedTitle === opt.id}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {selectedTitle && (
            <p className="poll-reaction fade-in">
              {friendshipChaos.titlePoll.reactions[selectedTitle as keyof typeof friendshipChaos.titlePoll.reactions]}
            </p>
          )}
        </div>

        <button
          className="btn-primary fade-in fade-in-delay-4"
          onClick={onNext}
          style={{ marginTop: '2rem' }}
        >
          {friendshipChaos.button}
        </button>
      </div>
    </section>
  );
}
