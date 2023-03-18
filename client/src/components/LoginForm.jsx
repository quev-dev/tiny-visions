import Divider from './Divider';

export default function LoginForm() {
  return (
    <article className='mt-8 flex flex-col w-full items-center content-center'>
      <section className='p-12 flex flex-col bg-palette-c-mid h-full w-full max-w-xs md:max-w-screen-sm lg:max-w-screen-md'>
        <h2 className='font-bold text-2xl text-center text-palette-c-accent mb-8'>
          Login
        </h2>
        <div className='flex flex-col gap-1 mb-8'>
          <label className='ml-4' htmlFor='email'>
            Email:
          </label>
          <input
            className='bg-palette-c-input p-0.5 mb-2 rounded-sm w-full'
            name='email'
            type='email'
          />
          <div className='' />
          <label className='ml-4' htmlFor='password'>
            Password:
          </label>
          <input
            className='bg-palette-c-input p-0.5 rounded-sm w-full'
            name='password'
            type='password'
          />
        </div>
        <div className='flex flex-col gap-4 items-center justify-center text-center'>
          <button className='rounded-sm block w-full p-1 bg-palette-c-accent text-palette-c-light'>
            Login
          </button>
          <button className='rounded-sm !border block w-full p-1 border-1 border-palette-c-accent bg-palette-c-mid text-palette-c-accent'>
            Register
          </button>
        </div>

        <button></button>

        <Divider />
      </section>
      <aside className='bg-palette-c-darker'></aside>
    </article>
  );
}
