import { useEffect } from 'react';
import CardPlaceholder from './CardPlaceholder.jsx';
import Divider from '../Divider.jsx';
import Disclaimer from '../other/Disclaimer.jsx';
import 'aos/dist/aos.css';

export default function ThreeCardContent({ cardsToDisplay }) {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <article>
      <div>
        <ul className='flex flex-col gap-8'>
          {cardsToDisplay.map((card, index) => (
            <li className='flex flex-col gap-4' key={card.frontmatter.title}>
              <Divider />
              <br />
              <div
                data-aos='fade-up'
                data-aos-once={true}
                className='text-center flex flex-col gap-2'
              >
                <h2 className='text-lg md:text-2xl font-bold'>
                  {index === 0 ? 'Past' : index === 1 ? 'Present' : 'Future'}
                </h2>
                <CardPlaceholder />
                <h3 className='text-xl md:text-3xl mt-4 text-palette-c-accent'>
                  {card.frontmatter.title}
                </h3>
              </div>
              <div
                data-aos='fade-right'
                data-aos-once={true}
                className='flex flex-col gap-2'
              >
                <p>
                  <b>Upright:</b> {card.frontmatter.keywords}
                </p>
                <p>
                  <b>Reverse:</b> {card.frontmatter.reverse}
                </p>
              </div>
              <div
                data-aos='fade-right'
                data-aos-once={true}
                className='flex flex-col gap-2'
              >
                <p>{card.frontmatter.reading}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='my-12 md:my-16'>
        <Divider />
      </div>
      <aside
        data-aos='fade-right'
        data-aos-once={true}
        className='flex flex-col gap-4'
      >
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
