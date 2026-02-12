export default function Footer() {
  return (
    <footer className="mt-16 border-t border-rose/40 bg-vanilla/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Golden Crust Bakery</p>
          <p className="text-sm text-mocha">Freshly baked joy delivered daily.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-mocha">
          <span>hello@goldencrust.com</span>
          <span>+1 (415) 555-0123</span>
          <span>Mon-Sun · 7am - 8pm</span>
        </div>
      </div>
    </footer>
  );
}
