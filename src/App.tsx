import { useState, useEffect } from 'react';
import ProgressFlowers from './components/ProgressFlowers';
import WelcomeChapter from './chapters/WelcomeChapter';
import EnvelopeChapter from './chapters/EnvelopeChapter';
import SpecimenZeroChapter from './chapters/SpecimenZeroChapter';
import FriendshipChapter from './chapters/FriendshipChapter';
import DistanceChapter from './chapters/DistanceChapter';
import ApologyChapter from './chapters/ApologyChapter';
import FinaleChapter from './chapters/FinaleChapter';

export default function App() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [gardenBloomed, setGardenBloomed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapter]);

  const handleRestart = () => {
    setGardenBloomed(false);
    setCurrentChapter(1);
  };

  return (
    <div className="app-layout">
      <ProgressFlowers
        currentChapter={currentChapter}
        totalChapters={7}
        onSelectChapter={(chapter) => setCurrentChapter(chapter)}
      />

      {currentChapter === 1 && <WelcomeChapter onNext={() => setCurrentChapter(2)} />}
      {currentChapter === 2 && <EnvelopeChapter onNext={() => setCurrentChapter(3)} />}
      {currentChapter === 3 && <SpecimenZeroChapter onNext={() => setCurrentChapter(4)} />}
      {currentChapter === 4 && <FriendshipChapter onNext={() => setCurrentChapter(5)} />}
      {currentChapter === 5 && <DistanceChapter onNext={() => setCurrentChapter(6)} />}
      {currentChapter === 6 && <ApologyChapter onNext={() => setCurrentChapter(7)} />}
      {currentChapter === 7 && (
        <FinaleChapter
          onRestart={handleRestart}
          onGoToChapter={(ch) => setCurrentChapter(ch)}
          initialBloomed={gardenBloomed}
          onBloom={() => setGardenBloomed(true)}
        />
      )}
    </div>
  );
}
