import { useEffect } from 'react';
import ImgPlaceholder from '../../components/templates/ImgPlaceholder.jsx';
import 'aos/dist/aos.css';

export default function CardArticle({
  title = 'title',
  link = '/',
  description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur molestias ipsa sed soluta vitae asperiores nulla porro, corrupti praesentium quam nemo eum enim, optio voluptatum non quaerat reiciendis libero similique!',
  reverse = false,
}) {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init();
    });
  }, []);

  const dataAOS = reverse ? 'fade-left' : 'fade-right';

  return (
    <article
      data-aos={dataAOS}
      data-aos-once={true}
      className={`flex flex-col 
      ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
      my-16 gap-24 justify-center items-center px-4 sm:px-12 sm:text-2xl`}
    >
      <section className='max-w-2xl'>
        <p>{description}</p>
      </section>
      <section className='relative'>
        <a href={link}>
          <ImgPlaceholder></ImgPlaceholder>
          <p className='absolute z-10 bottom-4 text-center bg-opacity-70 w-full'>
            {title}
          </p>
        </a>
      </section>
    </article>
  );
}
