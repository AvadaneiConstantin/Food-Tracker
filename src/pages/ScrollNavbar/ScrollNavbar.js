import { useState, useEffect } from 'react';
import './ScrollNavbar.css';

export default function ScrollNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='scrollNavbar' style={{ display: showNavbar ? 'block' : 'none', position: 'fixed', top: '0', zIndex: 8 }}>
      <ul className='scrollNavbarList'>
        <li>Daily food intake tracker</li>
        <li>Daily weight tracker</li>
        <li>Daily exercise tracker</li>
        <li>Progress reports</li>
        <li>Daily drinks tracker</li>
      </ul>
    </nav>
  );
}
