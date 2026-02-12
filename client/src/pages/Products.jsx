import { useMemo, useState } from 'react';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function Products({ wishlist, onToggleWishlist }) {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    sort: 'popular',
    availability: ''
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.search) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      result = result.filter((product) => product.category === filters.category);
    }

    if (filters.availability === 'in') {
      result = result.filter((product) => product.stock > 0);
    }

    if (filters.availability === 'low') {
      result = result.filter((product) => product.stock > 0 && product.stock <= 10);
    }

    if (filters.sort === 'low') {
      result.sort((a, b) => a.price - b.price);
    }

    if (filters.sort === 'high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters]);

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Bakery Collection</h1>
        <p className="text-sm text-mocha">Crafted daily with transparent inventory updates.</p>
      </div>
      <FilterBar filters={filters} onChange={handleChange} categories={categories} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard product={product} />
            <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-mocha">
              {product.stock} left
            </div>
            <button
              type="button"
              onClick={() => onToggleWishlist(product.id)}
              className="absolute left-4 top-4 rounded-full bg-rose/80 px-3 py-1 text-xs font-semibold"
            >
              {wishlist.includes(product.id) ? '★ Saved' : '☆ Save'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
