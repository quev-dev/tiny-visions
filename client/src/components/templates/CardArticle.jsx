import cardMoon from '../../content/images/cardMoon.png';

export default function CardArticle({
  image = cardMoon,
  title = 'title',
  link = '/',
  description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur molestias ipsa sed soluta vitae asperiores nulla porro, corrupti praesentium quam nemo eum enim, optio voluptatum non quaerat reiciendis libero similique!',
  reverse = false,
}) {
  const flexClass = reverse ? 'flex-row-reverse' : 'flex-row';

  return (
    <article
      className={`flex ${flexClass} my-16 gap-12 justify-center items-center mx-auto max-w-xs md:max-w-screen-sm lg:max-w-screen-md`}
    >
      <section className='w-8/12'>
        <p>{description}</p>
      </section>
      <section className='relative w-4/12'>
        <a href={link}>
          <img
            src={image}
            alt='Card image'
            className='object-cover h-full w-full'
          />
          <p className='absolute z-10 bottom-4 w-full text-center bg-opacity-70'>
            {title}
          </p>
        </a>
      </section>
    </article>
  );
}
