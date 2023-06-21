import Divider from './Divider';
export default function Footer() {
  return (
    <footer className='flex flex-col'>
      <aside className='p-8 md:rounded-md max-w-5xl mx-auto bg-palette-c-darker'>
        <p>
          You can use the link below to visit the GitHub repository for this
          project.
        </p>
        <a
          className='text-palette-c-accent'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/quev-dev/tiny-visions'
        >
          tiny-visions
        </a>
      </aside>
      <div className='my-12'>
        <Divider />
      </div>
    </footer>
  );
}
