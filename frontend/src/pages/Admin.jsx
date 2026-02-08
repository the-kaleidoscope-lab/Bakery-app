const inventory = [
  { id: 'cake-berry', name: 'Berry Chantilly Cake', stock: 12, status: 'Active' },
  { id: 'bread-sourdough', name: 'Golden Sourdough Loaf', stock: 30, status: 'Active' },
  { id: 'cookie-ginger', name: 'Brown Butter Ginger Cookies', stock: 24, status: 'Low stock' }
];

const orders = [
  { id: 'WC-34821', customer: 'Ava Morales', total: '$64.00', status: 'Packed' },
  { id: 'WC-34818', customer: 'Ethan Lee', total: '$28.00', status: 'Baking' }
];

export default function Admin() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="section-title">Admin dashboard</h1>
          <p className="text-sm text-bakery-600">Manage inventory, orders, and promotional offers.</p>
        </div>
        <button className="button-primary">Add product</button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-sm font-semibold text-bakery-700">Inventory control</h2>
          <div className="mt-4 space-y-3 text-sm text-bakery-600">
            {inventory.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl bg-cream-200 px-4 py-3">
                <div>
                  <p className="font-semibold text-bakery-700">{item.name}</p>
                  <p className="text-xs text-bakery-500">Stock: {item.stock}</p>
                </div>
                <span className="text-xs font-semibold text-bakery-600">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="text-sm font-semibold text-bakery-700">Order management</h2>
          <div className="mt-4 space-y-3 text-sm text-bakery-600">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl bg-cream-200 px-4 py-3">
                <div>
                  <p className="font-semibold text-bakery-700">{order.id}</p>
                  <p className="text-xs text-bakery-500">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p>{order.total}</p>
                  <p className="text-xs text-bakery-500">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {[
          'Schedule push notifications',
          'Create seasonal discount',
          'Launch loyalty offer'
        ].map((action) => (
          <div key={action} className="card">
            <h3 className="text-sm font-semibold text-bakery-700">{action}</h3>
            <p className="mt-2 text-xs text-bakery-500">Automate campaigns with one click.</p>
            <button className="button-primary mt-4">Open</button>
          </div>
        ))}
      </div>
    </main>
  );
}
