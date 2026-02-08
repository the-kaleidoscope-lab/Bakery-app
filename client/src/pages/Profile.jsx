import { products } from '../data/products';

const orders = [
  {
    id: 'GC-1024',
    date: 'Aug 18, 2024',
    total: 58.4,
    items: ['Velvet Raspberry Cake', 'Pistachio Financier']
  },
  {
    id: 'GC-1009',
    date: 'Aug 02, 2024',
    total: 22.0,
    items: ['Salted Caramel Cookies']
  }
];

export default function Profile({ wishlist }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Welcome back, Shima</h1>
        <p className="text-sm text-mocha">Manage your bakery preferences and recent orders.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Order history</h2>
          <div className="mt-4 space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="rounded-2xl bg-vanilla p-3">
                <p className="text-sm font-semibold">{order.id}</p>
                <p className="text-xs text-mocha">{order.date} · ${order.total.toFixed(2)}</p>
                <p className="text-xs text-mocha">{order.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Saved addresses</h2>
          <div className="mt-4 space-y-3 text-sm text-mocha">
            <div className="rounded-2xl bg-vanilla p-3">
              <p className="font-semibold text-espresso">Home</p>
              <p>19 Baker Street, San Francisco, CA</p>
            </div>
            <div className="rounded-2xl bg-vanilla p-3">
              <p className="font-semibold text-espresso">Work</p>
              <p>325 Market Ave, San Francisco, CA</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Saved payment methods</h2>
          <div className="mt-4 space-y-3 text-sm text-mocha">
            <div className="rounded-2xl bg-vanilla p-3">
              <p className="font-semibold text-espresso">Visa ···· 1987</p>
              <p>Expires 07/26</p>
            </div>
            <div className="rounded-2xl bg-vanilla p-3">
              <p className="font-semibold text-espresso">UPI · shima@bank</p>
              <p>Default for quick checkout</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-warm">
        <h2 className="text-lg font-semibold">Wishlist & recommendations</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {products.filter((product) => wishlist.includes(product.id)).map((product) => (
            <div key={product.id} className="rounded-2xl bg-vanilla p-4">
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-xs text-mocha">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
