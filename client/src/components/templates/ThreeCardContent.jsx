import CardPlaceholder from './CardPlaceholder.jsx';
import Divider from '../Divider.jsx';
import Disclaimer from '../other/Disclaimer.jsx';

export default function ThreeCardContent({ cardsToDisplay }) {
  return (
    <article>
      <div>
        <ul className='flex flex-col gap-8'>
          {cardsToDisplay.map((card, index) => (
            <li className='flex flex-col gap-4' key={card.frontmatter.title}>
              <Divider />
              <br />
              <div className='text-center flex flex-col gap-2'>
                <h2 className='text-lg md:text-2xl font-bold'>
                  {index === 0 ? 'PAST' : index === 1 ? 'PRESENT' : 'FUTURE'}
                </h2>
                <CardPlaceholder />
                <h3 className='text-xl md:text-3xl mt-4 text-palette-c-accent'>
                  {card.frontmatter.title}
                </h3>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-sm md:text-xl'>Keywords:</h4>
                <p>
                  <b>Upright:</b> {card.frontmatter.keywords}
                </p>
                <p>
                  <b>Reverse:</b> {card.frontmatter.reverse}
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-sm md:text-xl'>Interpretation:</h4>
                <p>{card.frontmatter.reading}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='my-12 md:my-16'>
        <Divider />
      </div>
      <aside className='flex flex-col gap-4'>
        <h4 className='text-sm md:text-xl'>Furthermore:</h4>
        <Disclaimer />
        <p>
          If you'd like to learn more about each of the cards you received, you
          can follow one of the links below for more details.
        </p>
        <ul>
          {cardsToDisplay.map((card) => (
            <li key={card.frontmatter.title}>
              <p>
                -{' '}
                <a
                  className='text-palette-c-accent'
                  href={`tarots/${card.frontmatter.title}`}
                >
                  {card.frontmatter.title}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
