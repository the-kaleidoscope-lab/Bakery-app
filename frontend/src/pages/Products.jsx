import { useMemo, useState } from 'react';
import { products, categories } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [price, setPrice] = useState('All');
  const [sort, setSort] = useState('popularity');
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return products
      .filter((product) => (activeCategory === 'All' ? true : product.category === activeCategory))
      .filter((product) => {
        if (price === 'All') return true;
        if (price === 'Under $15') return product.price < 15;
        if (price === '$15 - $30') return product.price >= 15 && product.price <= 30;
        return product.price > 30;
      })
      .sort((a, b) => {
        if (sort === 'price') return a.price - b.price;
        if (sort === 'stock') return b.stock - a.stock;
        return b.popularity - a.popularity;
      });
  }, [activeCategory, price, sort]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="section-title">Shop all bakes</h1>
          <p className="text-sm text-bakery-600">Real-time stock updated every 15 minutes.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className="input-field">
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select value={price} onChange={(e) => setPrice(e.target.value)} className="input-field">
            <option value="All">All Prices</option>
            <option value="Under $15">Under $15</option>
            <option value="$15 - $30">$15 - $30</option>
            <option value="Above $30">Above $30</option>
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="input-field">
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={() => navigate(`/products/${product.id}`)} />
        ))}
      </div>
    </main>
  );
}
