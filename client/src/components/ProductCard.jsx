import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-warm">
      <img src={product.images[0]} alt={product.name} className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-rose/40 px-3 py-1 text-xs font-medium text-espresso">
            {product.category}
          </span>
          <span className="text-sm font-semibold text-mocha">{product.rating} ★</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-mocha">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
          <Link
            to={`/products/${product.id}`}
            className="rounded-full bg-espresso px-4 py-2 text-xs font-semibold text-vanilla"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
