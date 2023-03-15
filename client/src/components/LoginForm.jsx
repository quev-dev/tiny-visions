export default function LoginForm() {
  return (
    <article className='m-4 flex flex-col items-center content-center'>
      <section className='flex flex-col bg-palette-c-mid h-full'>
        <h2 className='text-2xl text-center text-palette-c-accent'>Login</h2>

        <div className='flex flex-col m-4 p-4'>
          <label className='ml-4' htmlFor='email'>
            Email:
          </label>
          <input
            className='bg-palette-c-dark rounded-md'
            name='email'
            type='email'
          />
          <div className='m-2' />
          <label className='ml-4' htmlFor='password'>
            Password:
          </label>
          <input
            className='bg-palette-c-dark rounded-md'
            name='password'
            type='password'
          />
        </div>
        <div className='m-4 flex flex-col gap-4 items-center justify-center text-center'>
          <button className='block w-full p-1 bg-palette-c-accent text-palette-c-light'>
            Login
          </button>
          <button className='block w-full p-1 border-1 border-palette-c-accent bg-palette-c-mid text-palette-c-accent'>
            Register
          </button>
        </div>
      </section>
      <aside className='bg-palette-c-darker'></aside>
    </article>
  );
}
