export default function Title() {
  return (
    <header className='flex relative gap-12 justify-center my-8 py-8 px-4 sm:px-12 items-center sm:text-2xl md:mr-32'>
      <article className='relative z-10 max-w-2xl'>
        <h1 className='text-4xl mb-2'>Tiny Visions</h1>
        <p>
          Delve into an immersive world, exploring the mysteries of the universe
          as you gain insights into your past, present, and future. Our site
          offers a unique tarot reading experience, where you may explore tarot
          cards through a{' '}
          <a className='text-palette-c-accent' href='/quiz'>
            quiz
          </a>
          , traditional{' '}
          <a className='text-palette-c-accent' href='/readings'>
            reading
          </a>
          , or{' '}
          <a className='text-palette-c-accent' href='/tarots'>
            catalogue
          </a>
          .
        </p>
        <div
          id='title-image'
          className='absolute right-0 top-0 bottom-0 my-auto -z-10 w-64 h-64 bg-palette-c-mid md:-mr-32'
        ></div>
      </article>
    </header>
  );
}
