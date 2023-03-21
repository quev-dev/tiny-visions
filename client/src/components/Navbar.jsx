import Logo from './Logo';
import Hamburger from './other/Hamburger';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    const regex = /^\/([^/]+)/;
    const match = regex.exec(path);
    setCurrentPage(match ? match[0] : '');
    // setCurrentPage(window.location.pathname);
  }, []);

  return (
    <nav className='sticky top-0 bg-palette-c-dark text-palette-c-light z-30'>
      {/* Mobile */}
      <ul className='flex md:hidden justify-between items-center py-4 px-4'>
        <li className='font-bold mr-auto text-palette-c-accent'>
          <a href='/'>
            <Logo />
            Tiny Visions
          </a>
        </li>

        <button onClick={() => setShowDropdown(!showDropdown)}>
          <Hamburger />
        </button>

        {showDropdown && (
          <div className='text-palette-c-accent bg-palette-c-dark w-full absolute text-right right-0 top-12 pb-4 px-4'>
            <ul className='flex flex-col gap-1'>
              <li>
                <a href='/quiz'>Test</a>
              </li>
              <li>
                <a href='/readings'>Readings</a>
              </li>
              <li>
                <a href='/tarots'>Tarots</a>
              </li>
            </ul>
            <li>
              <a href='/login'>Login</a>
            </li>
          </div>
        )}
      </ul>

      {/* Desktop */}
      <ul className='hidden md:flex justify-between items-center py-8 px-16'>
        <li className='font-bold mr-auto text-palette-c-accent'>
          <a href='/'>
            <Logo />
            Tiny Visions
          </a>
        </li>

        <ul className='flex gap-8 mr-16'>
          <li>
            {currentPage === '/quiz' && (
              <a className='text-palette-c-accent' href='/quiz'>
                Test
              </a>
            )}
            {currentPage !== '/quiz' && <a href='/quiz'>Test</a>}
          </li>
          <li>
            {currentPage === '/readings' && (
              <a className='text-palette-c-accent' href='/readings'>
                Readings
              </a>
            )}
            {currentPage !== '/readings' && <a href='/readings'>Readings</a>}
          </li>
          <li>
            {currentPage === '/tarots' && (
              <a className='text-palette-c-accent' href='/tarots'>
                Tarots
              </a>
            )}
            {currentPage !== '/tarots' && <a href='/tarots'>Tarots</a>}
          </li>
        </ul>
        <li>
          {currentPage === '/login' && (
            <a className='text-palette-c-accent' href='/login'>
              Login
            </a>
          )}
          {currentPage !== '/login' && <a href='/login'>Login</a>}
        </li>
      </ul>
    </nav>
  );
}
