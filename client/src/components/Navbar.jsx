import Logo from './Logo';
import Hamburger from './other/Hamburger';
import { useState } from 'react';

export default function Navbar({ activeLink = '' }) {
  const [showDropdown, setShowDropdown] = useState(false);

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
                {activeLink === 'quiz' ? (
                  <a href='/quiz' className='text-palette-c-accent'>
                    Test
                  </a>
                ) : (
                  <a href='/quiz'>Test</a>
                )}
              </li>
              <li>
                {activeLink === 'readings' ? (
                  <a href='/readings' className='text-palette-c-accent'>
                    Readings
                  </a>
                ) : (
                  <a href='/readings'>Readings</a>
                )}
              </li>
              <li>
                {activeLink === 'tarots' ? (
                  <a href='/tarots' className='text-palette-c-accent'>
                    Tarots
                  </a>
                ) : (
                  <a href='/tarots'>Tarots</a>
                )}
              </li>
            </ul>
            <li>
              {activeLink === 'login' ? (
                <a href='/login' className='text-palette-c-accent'>
                  Login
                </a>
              ) : (
                <a href='/login'>Login</a>
              )}
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
            {activeLink === 'quiz' ? (
              <a href='/quiz' className='text-palette-c-accent'>
                Test
              </a>
            ) : (
              <a href='/quiz'>Test</a>
            )}
          </li>
          <li>
            {activeLink === 'readings' ? (
              <a href='/readings' className='text-palette-c-accent'>
                Readings
              </a>
            ) : (
              <a href='/readings'>Readings</a>
            )}
          </li>
          <li>
            {activeLink === 'tarots' ? (
              <a href='/tarots' className='text-palette-c-accent'>
                Tarots
              </a>
            ) : (
              <a href='/tarots'>Tarots</a>
            )}
          </li>
        </ul>
        <li>
          {activeLink === 'login' ? (
            <a href='/login' className='text-palette-c-accent'>
              Login
            </a>
          ) : (
            <a href='/login'>Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
}
