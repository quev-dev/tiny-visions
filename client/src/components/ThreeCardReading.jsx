import { useState, useEffect } from 'react';
import ThreeCardContent from './templates/ThreeCardContent';

export default function OneCardReading({ cards }) {
  const [startQuiz, setStartQuiz] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(() => {
    console.log(drawnCards);
  }, [drawnCards]);

  const drawCard = () => {
    const cardsCopy = [...cards]; // Make a copy of the cards array to avoid modifying the original
    const drawnCards = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * cardsCopy.length);
      const card = cardsCopy.splice(randomIndex, 1)[0]; // Remove the selected card from the copy
      drawnCards.push(card);
    }
    setDrawnCards(drawnCards);
    setStartQuiz(true);

    setTimeout(() => {
      const scrollTarget = document.querySelector('#scroll-target');
      scrollTarget.scrollIntoView({ behavior: 'smooth' });
    }, 50);
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
        <div className='relative'>
          <span
            id='scroll-target'
            className='absolute -top-16 md:-top-24'
          ></span>
          {drawnCards && <ThreeCardContent cardsToDisplay={drawnCards} />}
        </div>
      )}
    </section>
  );
}
