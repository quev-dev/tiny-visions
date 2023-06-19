import { useEffect } from 'react';
import CardPlaceholder from './CardPlaceholder.jsx';
import Divider from '../Divider.jsx';
import Disclaimer from '../other/Disclaimer.jsx';
import 'aos/dist/aos.css';

export default function OneCardContent({
  title = '',
  reading = '',
  reverse = '',
  keywords = '',
  showDisclaimer = true,
}) {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <article className='flex flex-col gap-4'>
      <div data-aos='fade-right' data-aos-once={true} className='text-center'>
        <CardPlaceholder />
        <h3 className='text-xl md:text-3xl mt-4 text-palette-c-accent'>
          {title}
        </h3>
      </div>
      {showDisclaimer && (
        <div className='my-8 md:my-12'>
          <Divider />
        </div>
      )}
      <section
        data-aos='fade-right'
        data-aos-once={true}
        className='flex flex-col gap-4'
      >
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
      <section
        data-aos='fade-right'
        data-aos-once={true}
        className='flex flex-col gap-4'
      >
        <p>{reading}</p>
      </section>
      {showDisclaimer && (
        <div>
          <div className='my-8 md:my-12'>
            <Divider />
          </div>
          <section
            data-aos='fade-right'
            data-aos-once={true}
            className='flex flex-col gap-2'
          >
            <Disclaimer />
            <p className='p-4 bg-palette-c-darker rounded-md'>
              Learn more about{' '}
              <a className='text-palette-c-accent' href='/tarots'>
                {title}
              </a>
              .
            </p>
          </section>
        </div>
      )}
    </article>
  );
}
