import { useStore } from '@nanostores/react';

import CardPlaceholder from './templates/CardPlaceholder';
import { modalState } from '../store/tarotStore';

export default function TarotCard() {
  const $modalState = useStore(modalState);
  return (
    <button
      onClick={() => {
        modalState.set(!$modalState);
      }}
    >
      <CardPlaceholder />
      <h3 className='mt-6'>Title</h3>
    </button>
  );
}
