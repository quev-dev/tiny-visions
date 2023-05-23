import { useEffect } from 'react';
import CardPlaceholder from './templates/CardPlaceholder';
import 'aos/dist/aos.css';

export default function TarotCard() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <div data-aos='fade-up' data-aos-once={true}>
      <CardPlaceholder />
      <h3 className='mt-6'>Title</h3>
    </div>
  );
}
