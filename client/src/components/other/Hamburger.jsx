export default function Hamburger({ color = 'palette-c-accent' }) {
  return (
    <div className='flex items-center justify-center'>
      <div className={`text-${color} focus:outline-none`}>
        <svg
          className={`h-6 w-6 text-${color}`}
          fill='none'
          viewBox='0 0 24 24'
          stroke={`currentColor`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
    </div>
  );
}
