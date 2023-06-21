import { useStore } from '@nanostores/react';
import { useRef, useEffect } from 'react';
import { dialogState, dialogContent } from '../store/tarotStore';
import Divider from './Divider';
import TarotCard from './TarotCard';

export default function TarotDialog() {
  const dialogRef = useRef(null);
  const $dialogState = useStore(dialogState);
  const $dialogContent = useStore(dialogContent);
  useEffect(() => {
    if (dialogRef.current) {
      if ($dialogState) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [$dialogState]);
  return (
    <dialog
      className='tarot-dialogue backdrop:cursor-pointer backdrop:bg-zinc-900/80 bg-palette-c-dark text-palette-c-light p-12'
      ref={dialogRef}
      onClose={() => {
        dialogState.set(false);
      }}
      onClick={() => {
        dialogRef?.current.close();
      }}
    >
      <div
        className='my-12 max-w-5xl sm:text-2xl flex flex-col md:flex-row items-center justify-center gap-12'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <section>
          <Divider />
          <h2 className='text-center text-2xl sm:text-4xl font-bold text-palette-c-accent my-6'>
            {$dialogContent?.frontmatter?.title}
          </h2>
          <p className='text-center'>
            <span className='text-palette-c-accent'>Keywords: </span>
            {$dialogContent?.frontmatter?.keywords}
          </p>
          <p className='text-center mb-16'>
            <span className='text-palette-c-accent'>Reversed: </span>
            {$dialogContent?.frontmatter?.reverse}
          </p>
          <p className='mb-6'>{$dialogContent?.content}</p>
          <Divider />
        </section>
        <section className='min-w-[270px] min-h-[489px] md:translate-y-5 flex flex-col items-center justify-center gap-8 md:gap-0'>
          <TarotCard title={$dialogContent?.frontmatter?.title} />
          <button
            className='bg-palette-c-accent rounded-md px-2 py-1 md:invisible'
            onClick={() => {
              dialogRef.current.close();
            }}
          >
            Close
          </button>
        </section>
      </div>
    </dialog>
  );
}
