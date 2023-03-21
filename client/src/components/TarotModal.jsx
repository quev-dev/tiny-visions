import { useState } from 'react';
import { useStore } from '@nanostores/react';

import Divider from './divider';
import { modalState, modalContent } from '../store/tarotStore';
import CardPlaceholder from './templates/CardPlaceholder';

export default function TarotModal() {
  const $modalState = useStore(modalState);
  const $modalContent = useStore(modalContent);

  return (
    <>
      {$modalState ? (
        <aside
          className='fixed inset-0 bg-palette-c-semidark/90 z-40 flex items-center justify-center'
          role='dialog'
        >
          <div className='my-12 max-w-4xl sm:text-2xl flex items-center justify-center gap-12'>
            <section>
              <Divider />
              <h2 class='text-center text-2xl sm:text-4xl font-bold text-palette-c-accent my-6'>
                Tarot Card
              </h2>
              <p className='text-center'>
                <span className='text-palette-c-accent'>Keywords:</span> asf,
                fdsf, sg
              </p>
              <p className='text-center mb-16'>
                <span className='text-palette-c-accent'>Reversed:</span> sg,
                fdsf, asf
              </p>
              <p className='mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consectetur libero id faucibus nisl tincidunt eget nullam non.
                Blandit aliquam etiam erat velit scelerisque in dictum. At urna
                condimentum mattis pellentesque id. Dui accumsan sit amet nulla
                facilisi morbi tempus iaculis.
              </p>
              <Divider />
            </section>
            <section>
              <CardPlaceholder />
            </section>
          </div>
          <button
            className='w-full h-full absolute -z-10'
            onClick={() => {
              modalState.set(!$modalState);
            }}
          ></button>
        </aside>
      ) : null}
    </>
  );
}
