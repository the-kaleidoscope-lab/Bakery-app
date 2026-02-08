const stages = ['Baking', 'Packed', 'Out for Delivery', 'Delivered'];

export default function Tracking() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="section-title">Order tracking</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="card space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-bakery-700">Order #WC-34821</h2>
            <p className="text-xs text-bakery-500">Estimated arrival: Today, 5:45 PM</p>
          </div>
          <ol className="space-y-4">
            {stages.map((stage, index) => (
              <li key={stage} className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                    index <= 2 ? 'bg-bakery-600 text-white' : 'bg-bakery-100 text-bakery-600'
                  }`}
                >
                  {index + 1}
                </span>
                <span className="text-sm text-bakery-700">{stage}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-2xl bg-cream-200 px-4 py-3 text-xs text-bakery-600">
            Live updates enabled. Push notifications are active for this order.
          </div>
        </div>
        <div className="card h-fit">
          <h2 className="text-sm font-semibold text-bakery-700">Courier location</h2>
          <div className="mt-4 h-56 rounded-2xl bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center">
            <div className="h-full w-full rounded-2xl bg-bakery-900/20" />
          </div>
          <p className="mt-3 text-xs text-bakery-600">Map tracking powered by Mapbox (preview).</p>
        </div>
      </div>
    </main>
  );
}
