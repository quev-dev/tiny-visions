import Logo from './Logo';
import Hamburger from './other/Hamburger';

import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className='sticky top-0 bg-palette-c-dark text-palette-c-light z-30'>
      {/* Mobile */}
      <ul className='flex md:hidden justify-between items-center py-4 px-4'>
        <li className='font-bold mr-auto text-palette-c-accent'>
          <Logo />
          Tiny Visions
        </li>

        <button onClick={() => setShowDropdown(!showDropdown)}>
          <Hamburger />
        </button>

        {showDropdown && (
          <div className='sticky top-10'>
            <p>Hello</p>
          </div>
        )}
      </ul>

      {/* Desktop */}
      <ul className='hidden md:flex justify-between items-center py-8 px-16'>
        <li className='font-bold mr-auto text-palette-c-accent'>
          <Logo />
          Tiny Visions
        </li>

        <ul className='flex gap-8 mr-16'>
          <li>
            <a href='/'>Test</a>
          </li>
          <li>
            <a href='/'>Readings</a>
          </li>
          <li>
            <a href='/'>Tarots</a>
          </li>
        </ul>
        <li>
          <a href='/login'>Login</a>
        </li>
      </ul>
    </nav>
  );
}
