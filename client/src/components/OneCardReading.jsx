import { useState, useEffect } from 'react';

export default function OneCardReading({ cards }) {
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <section class='flex flex-col gap-4 m-12 items-center justify-center'>
      <button
        onClick={() => setStartQuiz(true)}
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
                <li key={index}>{card.frontmatter.keywords}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
