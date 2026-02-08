export default function Admin() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-mocha">Manage products, inventory, and orders in real-time.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Inventory control</h2>
          <div className="mt-4 space-y-3 text-sm text-mocha">
            <div className="flex items-center justify-between rounded-2xl bg-vanilla p-3">
              <span>Honey Almond Brioche</span>
              <button className="rounded-full border border-rose/40 px-3 py-1 text-xs font-semibold">
                Update Stock
              </button>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-vanilla p-3">
              <span>Velvet Raspberry Cake</span>
              <button className="rounded-full border border-rose/40 px-3 py-1 text-xs font-semibold">
                Update Stock
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Order pipeline</h2>
          <div className="mt-4 space-y-3 text-sm text-mocha">
            <div className="flex items-center justify-between rounded-2xl bg-vanilla p-3">
              <span>Order GC-1024</span>
              <span className="text-xs font-semibold text-espresso">Baking</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-vanilla p-3">
              <span>Order GC-1031</span>
              <span className="text-xs font-semibold text-espresso">Packed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
