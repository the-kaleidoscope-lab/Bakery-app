import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';

const recommendations = [
  { label: 'Because you loved brioche', productId: 'p1' },
  { label: 'Inspired by your sweet tooth', productId: 'p2' }
];

export default function Home({ wishlist, onToggleWishlist }) {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mocha">Artisanal Bakery</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Warm, handcrafted bakes delivered to your doorstep.
          </h1>
          <p className="text-base text-mocha">
            Discover small-batch pastries, celebration cakes, and seasonal breads crafted with slow
            fermentation, organic ingredients, and a touch of pastry theater.
          </p>
          <div className="flex flex-wrap gap-3">
            <input
              type="search"
              placeholder="Search croissants, macarons, sourdough..."
              className="w-full rounded-2xl border border-rose/40 px-4 py-3 text-sm md:w-80"
            />
            <button className="rounded-2xl bg-espresso px-6 py-3 text-sm font-semibold text-vanilla">
              Explore Menu
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full bg-rose/40 px-4 py-2 text-xs font-medium">
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="gradient-card rounded-[32px] p-6 shadow-warm">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
            alt="Bakery spread"
            className="h-full w-full rounded-[24px] object-cover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Favorites</h2>
          <span className="text-sm text-mocha">Updated daily · Limited batches</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] bg-white p-8 shadow-warm md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Personalized for you</h3>
          <p className="text-sm text-mocha">
            We curate recommendations based on previous purchases, browsing behavior, and the
            freshest batches coming out of the oven.
          </p>
          <div className="space-y-3">
            {recommendations.map((item) => {
              const product = products.find((match) => match.id === item.productId);
              return (
                <div key={item.label} className="flex items-center justify-between gap-4 rounded-2xl bg-vanilla p-4">
                  <div>
                    <p className="text-xs uppercase text-mocha">{item.label}</p>
                    <p className="text-base font-semibold">{product?.name}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product.id)}
                    className="rounded-full border border-rose/40 px-4 py-2 text-xs font-semibold"
                  >
                    {wishlist.includes(product.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Baker’s Notes</h3>
          <div className="rounded-2xl bg-rose/30 p-4">
            <p className="text-sm text-mocha">
              “Our signature brioche now comes in a honeycomb texture, perfect for French toast or
              a cozy weekend brunch.”
            </p>
          </div>
          <div className="rounded-2xl bg-pistachio/60 p-4">
            <p className="text-sm text-mocha">
              Seasonal special: Lavender citrus cupcakes will be available Friday through Sunday.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
