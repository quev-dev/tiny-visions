import CardPlaceholder from './CardPlaceholder.jsx';
import Divider from '../Divider.jsx';

export default function OneCardContent({
  text = '',
  title = '',
  reading = '',
  reverse = '',
  keywords = '',
}) {
  return (
    <article className='flex flex-col gap-4'>
      <div className='text-center'>
        <CardPlaceholder />
        <h3 className='text-xl md:text-3xl mt-4'>{title}</h3>
      </div>
      <Divider />
      <section className='flex flex-col gap-4'>
        <h4 className='text-sm md:text-xl'>Interpretation:</h4>
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
        <p>{text}</p>
      </section>
      <Divider />
      <section className='flex flex-col gap-4'>
        <h4 className='text-sm md:text-xl'>In relation to you:</h4>
        <p>{reading}</p>
      </section>
      <a className='text-palette-c-accent' href={`tarots/${title}`}>
        Learn more about {title}
      </a>
    </article>
  );
}
