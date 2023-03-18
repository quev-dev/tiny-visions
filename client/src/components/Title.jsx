export default function Title() {
  return (
    <header className='flex h-96 relative gap-12 justify-center my-8 py-8 px-4 items-center mx-auto max-w-xs md:max-w-screen-sm lg:max-w-screen-md'>
      <article className='relative z-10 md:w-2/3'>
        <h1 className='text-3xl mb-2'>Tiny Visions</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id autem
          nihil incidunt dolorem est eligendi quas quae ratione in laboriosam
          dignissimos totam ad impedit ipsa excepturi molestiae qui dolores
          alias consequatur, quis consectetur odit? Unde repellat doloremque
          vero asperiores mollitia. Est ipsum, quas ducimus officiis
          voluptatibus maiores consequatur obcaecati dolorem?
        </p>
      </article>
      <div className='absolute md:static md:w-1/3 right-0 top-0 h-full w-3/4 bg-palette-c-mid'></div>
    </header>
  );
}
