import { useState, useEffect } from 'react';

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
    <section class='flex flex-col gap-4 m-12 items-center justify-center'>
      <button
        onClick={drawCard}
        class='rounded-md py-2 px-8 bg-palette-c-accent text-palette-c-light'
      >
        Begin Reading
      </button>

      {startQuiz && (
        <div>
          <p>Quiz started</p>
          {cards && (
            <ul>
              {cards.map((card, index) => (
                <li key={index}>
                  {index}: {card.frontmatter.keywords}
                </li>
              ))}
            </ul>
          )}
          <p>---</p>
          {drawnCard && (
            <ul>
              <li>{drawnCard.content}</li>
              <li>{drawnCard.frontmatter.keywords}</li>
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
