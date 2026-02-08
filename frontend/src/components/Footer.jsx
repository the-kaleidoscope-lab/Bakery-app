export default function Footer() {
  return (
    <footer className="mt-16 border-t border-bakery-200 bg-cream-200/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-bakery-800">WarmCrumbs Bakery</h3>
          <p className="mt-3 text-sm text-bakery-700">
            Artisan bakes crafted daily with organic ingredients, local dairy, and seasonal flavors.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-bakery-700">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-bakery-600">
            <li>Delivery & Pickup</li>
            <li>Custom Orders</li>
            <li>Gift Cards</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-bakery-700">Stay in touch</h4>
          <p className="mt-3 text-sm text-bakery-600">
            88 Brioche Lane, Paris District
          </p>
          <p className="text-sm text-bakery-600">hello@warmcrumbs.com</p>
          <button className="button-primary mt-4">Join the newsletter</button>
        </div>
      </div>
    </footer>
  );
}
