import { useMemo, useState } from 'react';
import { categories, products, recommendations } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <span className="badge w-fit">Freshly baked this morning</span>
          <h1 className="font-display text-4xl text-bakery-900 md:text-5xl">
            Discover artisan bakes crafted for celebrations, cozy mornings, and sweet cravings.
          </h1>
          <p className="text-sm text-bakery-700">
            Browse curated collections of cakes, breads, pastries, and seasonal treats. Personalize every
            order with size options, add-ons, and favorite flavors.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for croissants, tarts, sourdough..."
              className="input-field"
            />
            <button className="button-primary">Explore menu</button>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {['All', ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 transition ${
                  activeCategory === category
                    ? 'border-bakery-500 bg-bakery-500 text-white'
                    : 'border-bakery-200 bg-white/70 text-bakery-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} onSelect={() => navigate(`/products/${product.id}`)} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Recommended for you</h2>
          <button className="text-sm font-semibold text-bakery-600">View all</button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {recommendations.map((rec) => (
            <div key={rec.id} className="card flex items-center gap-4">
              <img src={rec.image} alt={rec.name} className="h-20 w-20 rounded-2xl object-cover" />
              <div>
                <h3 className="font-display text-lg text-bakery-800">{rec.name}</h3>
                <p className="text-xs text-bakery-600">{rec.note}</p>
                <button className="mt-3 text-xs font-semibold text-bakery-600">Add to cart →</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
