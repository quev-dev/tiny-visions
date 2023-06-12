import { useEffect } from 'react';
import CardPlaceholder from './templates/CardPlaceholder';
import 'aos/dist/aos.css';

export default function TarotCard({title}) {
  
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <img data-aos='fade-right' data-aos-once={true} src={`/tarots/${title}.png`} alt={title} />
  );
}
