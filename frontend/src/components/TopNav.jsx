import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/products' },
  { name: 'Cart', path: '/cart' },
  { name: 'Orders', path: '/tracking' },
  { name: 'Profile', path: '/profile' },
  { name: 'Admin', path: '/admin' }
];

export default function TopNav() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <header className="sticky top-0 z-40 bg-cream-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="font-display text-2xl text-bakery-800">VALENTINE</p>
          <p className="text-xs text-bakery-500">Pâtisserie & Bakery</p>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-bakery-700 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition hover:text-bakery-900 ${
                  isActive ? 'text-bakery-900 underline underline-offset-8' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))}
            className="rounded-full border border-bakery-200 bg-white/80 px-3 py-2 text-xs font-semibold text-bakery-700 shadow-soft"
          >
            {mode === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
          <button className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-bakery-700 shadow-soft">
            Loyalty: 320 pts
          </button>
          <button className="button-primary hidden md:inline-flex">Order Now</button>
        </div>
      </div>
    </header>
  );
}
