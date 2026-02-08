import { orderStatuses } from '../data/products';

export default function Tracking() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Order Tracking</h1>
        <p className="text-sm text-mocha">Live updates from oven to doorstep.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Current status</h2>
          <div className="mt-4 space-y-4">
            {orderStatuses.map((status, index) => (
              <div key={status} className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${index <= 2 ? 'bg-espresso text-vanilla' : 'bg-rose/40 text-mocha'} flex items-center justify-center text-sm font-semibold`}>
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold">{status}</p>
                  <p className="text-xs text-mocha">ETA {30 + index * 10} min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Live map</h2>
          <div className="mt-4 h-64 rounded-2xl bg-rose/30 flex items-center justify-center text-sm text-mocha">
            Map tracking integration placeholder
          </div>
          <button className="mt-4 w-full rounded-2xl border border-espresso px-4 py-2 text-sm font-semibold">
            Enable push notifications
          </button>
        </div>
      </div>
    </div>
  );
}
