import CardPlaceholder from './CardPlaceholder.jsx';
import Divider from '../Divider.jsx';
import Disclaimer from '../other/Disclaimer.jsx';

export default function OneCardContent({
  title = '',
  reading = '',
  reverse = '',
  keywords = '',
}) {
  return (
    <article className='flex flex-col gap-4'>
      <div className='text-center'>
        <CardPlaceholder />
        <h3 className='text-xl md:text-3xl mt-4 text-palette-c-accent'>
          {title}
        </h3>
      </div>
      <Divider />
      <section className='flex flex-col gap-4'>
        <ul className='flex flex-col gap-1 md:gap-2'>
          <li>
            <b>Upright: </b>
            {keywords}
          </li>
          <li>
            <b>Reverse: </b>
            {reverse}
          </li>
        </ul>
      </section>
      <section className='flex flex-col gap-4'>
        <p>{reading}</p>
      </section>
      <div className='my-12 md:my-16'>
        <Divider />
      </div>
      <section className='flex flex-col gap-2'>
        <Disclaimer />
        <p>
          - Learn more about
          <a className='text-palette-c-accent' href={`tarots/${title}`}>
            {' ' + title}
          </a>
          .
        </p>
      </section>
    </article>
  );
}
