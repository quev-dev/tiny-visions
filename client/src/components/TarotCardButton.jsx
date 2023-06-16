import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { dialogState, dialogContent } from '@src/store/tarotStore';
import TarotCard from './TarotCard';

export default function TartCardButton({ info }) {
  const $dialogState = useStore(dialogState);
  const $dialogContent = useStore(dialogContent);

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <button
      data-aos='fade-right'
      data-aos-once={true}
      className='tarot-button bg-palette-c-darker pt-2 pb-8 px-2 rounded-sm'
      onClick={() => {
        dialogState.set(!$dialogState);
        dialogContent.set(info);
      }}
    >
      <TarotCard title={info.frontmatter.title} />
      <h3 className='mt-6'>{info.frontmatter.title}</h3>
    </button>
  );
}
