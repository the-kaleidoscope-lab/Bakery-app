import { recommendations } from '../data/products.js';

const orders = [
  { id: 'WC-34211', date: 'Sept 12, 2024', total: '$58.00', status: 'Delivered' },
  { id: 'WC-33902', date: 'Aug 28, 2024', total: '$42.50', status: 'Delivered' }
];

const addresses = ['18 Brioche Lane, Paris District', '22 Maple Street, Lyon'];
const favorites = ['Berry Chantilly Cake', 'Golden Sourdough Loaf', 'Almond Croissant'];

export default function Profile() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="section-title">Welcome back, Amelie</h1>
          <p className="text-sm text-bakery-600">Your personalized bakery dashboard</p>
        </div>
        <button className="button-primary">Edit profile</button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h2 className="text-sm font-semibold text-bakery-700">Order history</h2>
          <div className="mt-4 space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl bg-cream-200 px-4 py-3 text-sm">
                <div>
                  <p className="font-semibold text-bakery-700">{order.id}</p>
                  <p className="text-xs text-bakery-500">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-bakery-700">{order.total}</p>
                  <p className="text-xs text-bakery-500">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-sm font-semibold text-bakery-700">Saved addresses</h2>
          <ul className="mt-4 space-y-2 text-sm text-bakery-600">
            {addresses.map((address) => (
              <li key={address}>{address}</li>
            ))}
          </ul>
          <button className="button-primary mt-4 w-full">Add new address</button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-sm font-semibold text-bakery-700">Saved payments</h2>
          <div className="mt-4 rounded-2xl bg-pastel-lilac px-4 py-3 text-sm text-bakery-700">
            Visa •••• 4242 (expires 10/27)
          </div>
          <button className="button-primary mt-4 w-full">Manage payment methods</button>
        </div>
        <div className="card">
          <h2 className="text-sm font-semibold text-bakery-700">Recommended next</h2>
          <div className="mt-4 space-y-3">
            {recommendations.map((rec) => (
              <div key={rec.id} className="flex items-center gap-3 rounded-2xl bg-cream-200 px-3 py-2">
                <img src={rec.image} alt={rec.name} className="h-12 w-12 rounded-xl object-cover" />
                <div>
                  <p className="text-sm font-semibold text-bakery-700">{rec.name}</p>
                  <p className="text-xs text-bakery-500">{rec.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 card">
        <h2 className="text-sm font-semibold text-bakery-700">Wishlist & favorites</h2>
        <ul className="mt-4 grid gap-2 text-sm text-bakery-600 sm:grid-cols-2">
          {favorites.map((item) => (
            <li key={item} className="rounded-2xl bg-cream-200 px-4 py-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
