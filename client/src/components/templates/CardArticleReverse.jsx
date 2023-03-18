import CardPlaceholder from '../../components/templates/CardPlaceholder.jsx';
import cardMoon from '../../content/images/cardMoon.png';

export default function CardArticle({
  image = cardMoon,
  title = 'title',
  link = '/',
  description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur molestias ipsa sed soluta vitae asperiores nulla porro, corrupti praesentium quam nemo eum enim, optio voluptatum non quaerat reiciendis libero similique!',
}) {
  return (
    <article className='flex flex-col md:flex-row-reverse my-16 gap-12 justify-center items-center mx-auto max-w-xs md:max-w-screen-sm lg:max-w-screen-md'>
      <section className='md:w-8/12'>
        <p>{description}</p>
      </section>
      <section className='relative w-3/5 md:w-4/12'>
        <a href={link}>
          <CardPlaceholder></CardPlaceholder>
          <p className='absolute z-10 bottom-4 w-full text-center bg-opacity-70'>
            {title}
          </p>
        </a>
      </section>
    </article>
  );
}
