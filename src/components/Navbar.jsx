import Logo from './Logo';
import Hamburger from './other/Hamburger';

import { useState, useEffect } from 'react';

export default function Navbar ()
{
  const [mobileLayout, setMobileLayout] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const mobileWidth = 768;

  return <nav className="sticky top-0 bg-palette-c-dark z-50">
    <ul className="flex justify-between items-center py-8 px-16">
      
      <li className="font-bold mr-auto text-palette-c-accent">
        <Logo/>
        Tiny Visions
      </li>

      { !mobileLayout && <>
        <ul className="flex gap-8 mr-16">
          <li>
            <a href="/">Test</a>
          </li>
          <li>
            <a href="/">Readings</a>
          </li>
          <li>
            <a href="/">Tarots</a>
          </li>
        </ul>
        <li>
          <a href="/">Login</a>
        </li>
      </> }

      { mobileLayout && <>
        
      </> }

    </ul>
  </nav>
}