import CardPlaceholder from './templates/CardPlaceholder';
import 'aos/dist/aos.css';

export default function TarotCard({ title }) {
  return <img src={`/tarots/${title}.png`} alt={title} />;
}
