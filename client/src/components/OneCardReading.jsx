import { useState, useEffect } from 'react';
import OneCardContent from './templates/OneCardContent';

export default function OneCardReading({ cards }) {
  const [startQuiz, setStartQuiz] = useState(false);
  const [drawnCard, setDrawnCard] = useState();

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const drawCard = () => {
    const card = cards[Math.floor(Math.random() * cards.length)];
    setDrawnCard(card);
    setStartQuiz(true);
  };

  return (
    <section className='flex flex-col gap-4 my-12 items-center justify-center'>
      {!startQuiz && (
        <button
          onClick={drawCard}
          className='rounded-md py-2 px-8 bg-palette-c-accent'
        >
          Begin Reading
        </button>
      )}

      {startQuiz && (
        <div>
          {drawnCard && (
            <OneCardContent
              title={drawnCard.frontmatter.title}
              keywords={drawnCard.frontmatter.keywords}
              reading={drawnCard.frontmatter.reading}
              reverse={drawnCard.frontmatter.reverse}
            />
          )}
        </div>
      )}
    </section>
  );
}
