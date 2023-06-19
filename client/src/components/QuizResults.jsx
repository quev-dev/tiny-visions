import Divider from './Divider';
import OneCardContent from './templates/OneCardContent';

function scorePercent(max, value) {
  const percent = (value / max) * 100;
  return `${percent}%`;
}

export default function Results({ quiz, cardData }) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const quizAnswers = {};
  let isValid = true;

  let counter = 0;
  for (const [key, value] of urlParams) {
    const options = new Set([0, 1, 2]);
    if (key != counter) {
      isValid = false;
    }
    if (!options.has(Number(value))) {
      isValid = false;
      console.log("doesn't have value: ", value);
    }
    quizAnswers[key] = value;
    counter++;
  }
  if (counter != 20) isValid = false;

  let totalScores = {};
  if (isValid) {
    for (let [indx, opt] of Object.entries(quizAnswers)) {
      const answerScore = quiz[indx].options[opt].score;
      for (let [card, score] of Object.entries(answerScore)) {
        if (totalScores[card]) {
          totalScores[card] += score;
        } else {
          totalScores[card] = score;
        }
      }
    }
  }

  const sorted = Object.entries(totalScores).sort((a, b) => b[1] - a[1]);
  let topResultTitle = sorted.length > 0 ? sorted[0][0] : '';
  let selectedCard;
  for (const card of cardData) {
    if (card.frontmatter.filename === topResultTitle) {
      selectedCard = card;
      break;
    }
  }

  return (
    <main className='bg-palette-c-dark text-palette-c-light mx-auto sm:text-2xl px-4 sm:px-8 mb-24'>
      <header className='my-12 max-w-4xl mx-auto'>
        <h2 className='text-center text-2xl sm:text-4xl mb-16 font-bold text-palette-c-accent'>
          Quiz Results
        </h2>
        <p className='text-center'>
          {isValid
            ? 'Following the results of your test, your character is most aligned with:'
            : 'Invalid results, please retake the quiz'}
        </p>
      </header>
      <div className='max-w-4xl mx-auto'>
        <OneCardContent
          title={selectedCard.frontmatter.title}
          keywords={selectedCard.frontmatter.keywords}
          reverse={selectedCard.frontmatter.reverse}
          reading={selectedCard.content}
          showDisclaimer={false}
        />
      </div>
      <div className='my-12'>
        <Divider />
      </div>
      {isValid ? (
        <section className='flex flex-col gap-2 max-w-5xl mx-auto'>
          <h5 className='font-bold text-center mb-4'>Statistics</h5>
          <div className='grid grid-flow-row'>
            {sorted.map((item) => {
              return (
                <div key={item[0]} className='flex flex-col capitalize mb-4'>
                  {item[0]}
                  <div className='w-full rounded h-7 bg-zinc-700 mt-2'>
                    <div
                      className='bg-palette-c-accent h-7 rounded'
                      style={{ width: scorePercent(sorted[0][1], item[1]) }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <aside className='bg-palette-c-darker rounded-md p-4'>
            Learn more about{' '}
            <a className='text-palette-c-accent' href='/tarots'>
              {selectedCard.frontmatter.title}
            </a>
            .
          </aside>
        </section>
      ) : null}
    </main>
  );
}
