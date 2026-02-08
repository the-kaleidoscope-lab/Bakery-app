export default function ProductCard({ product, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="card group text-left transition hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="badge absolute left-4 top-4">{product.category}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="font-display text-lg text-bakery-800">{product.name}</h3>
        <p className="text-sm font-semibold text-bakery-700">${product.price}</p>
      </div>
      <p className="mt-2 text-xs text-bakery-600">{product.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-bakery-600">
        <span>⭐ {product.rating}</span>
        <span>{product.stock} in stock</span>
      </div>
    </button>
  );
}
