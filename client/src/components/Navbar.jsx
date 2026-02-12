import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Shop' },
  { to: '/cart', label: 'Cart' },
  { to: '/tracking', label: 'Track Order' },
  { to: '/profile', label: 'Profile' }
];

export default function Navbar({ onToggleTheme, isDark }) {
  return (
    <header className="sticky top-0 z-40 bg-vanilla/90 backdrop-blur border-b border-rose/40">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-espresso text-vanilla flex items-center justify-center font-semibold">GC</div>
          <div>
            <p className="text-lg font-semibold">Golden Crust</p>
            <p className="text-xs text-mocha">Bakery Atelier</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-espresso' : 'text-mocha hover:text-espresso'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-mocha/40 px-3 py-1 text-xs font-medium"
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
          <NavLink
            to="/auth"
            className="rounded-full bg-espresso px-4 py-2 text-xs font-semibold text-vanilla"
          >
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
