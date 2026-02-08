import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products, reviews } from '../data/products.js';

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => item.id === id) ?? products[0], [id]);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [size, setSize] = useState('Medium');
  const [customIngredients, setCustomIngredients] = useState([]);
  const [addOns, setAddOns] = useState([]);

  const toggleSelection = (value, setter) => {
    setter((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img src={activeImage} alt={product.name} className="h-80 w-full rounded-3xl object-cover" />
          <div className="mt-4 flex gap-3">
            {product.images.map((image) => (
              <button key={image} type="button" onClick={() => setActiveImage(image)}>
                <img
                  src={image}
                  alt="Gallery thumbnail"
                  className={`h-16 w-20 rounded-2xl object-cover ring-2 ${
                    activeImage === image ? 'ring-bakery-400' : 'ring-transparent'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <span className="badge">{product.category}</span>
            <h1 className="mt-3 font-display text-3xl text-bakery-800">{product.name}</h1>
            <p className="mt-2 text-sm text-bakery-600">{product.description}</p>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-bakery-700">Choose a size</p>
              <p className="text-sm text-bakery-500">Base price: ${product.price}</p>
            </div>
            <div className="mt-3 flex gap-3">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                    size === option ? 'border-bakery-500 bg-bakery-500 text-white' : 'border-bakery-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card">
              <h3 className="text-sm font-semibold text-bakery-700">Ingredient customization</h3>
              <div className="mt-3 space-y-2 text-xs text-bakery-600">
                {product.ingredients.map((ingredient) => (
                  <label key={ingredient} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={customIngredients.includes(ingredient)}
                      onChange={() => toggleSelection(ingredient, setCustomIngredients)}
                    />
                    {ingredient}
                  </label>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold text-bakery-700">Add-ons</h3>
              <div className="mt-3 space-y-2 text-xs text-bakery-600">
                {product.addOns.map((addon) => (
                  <label key={addon} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addOns.includes(addon)}
                      onChange={() => toggleSelection(addon, setAddOns)}
                    />
                    {addon}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-sm font-semibold text-bakery-700">Ingredients & nutrition</h3>
            <p className="mt-2 text-xs text-bakery-600">
              {product.ingredients.join(', ')}. Contains dairy, wheat, and tree nuts.
            </p>
            <div className="mt-3 text-xs text-bakery-600">
              Calories: 320 | Sugar: 18g | Protein: 6g
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="button-primary">Add to cart</button>
            <p className="text-sm text-bakery-600">Rating {product.rating} ⭐</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="section-title">Customer reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.id} className="card">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-bakery-700">{review.name}</h4>
                <span className="text-xs text-bakery-500">{review.date}</span>
              </div>
              <p className="mt-2 text-xs text-bakery-600">Rating: {review.rating} ⭐</p>
              <p className="mt-3 text-sm text-bakery-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
