import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products, reviews } from '../data/products';

const nutrition = [
  { label: 'Calories', value: '320 kcal' },
  { label: 'Protein', value: '5g' },
  { label: 'Sugar', value: '18g' }
];

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id) || products[0];
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [notes, setNotes] = useState('');

  const toggleAddOn = (addon) => {
    setSelectedAddOns((prev) =>
      prev.includes(addon) ? prev.filter((item) => item !== addon) : [...prev, addon]
    );
  };

  const handleAdd = () => {
    onAddToCart((prev) => [
      ...prev,
      { id: product.id, quantity: 1, size, addOns: selectedAddOns, notes }
    ]);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <img src={activeImage} alt={product.name} className="h-96 w-full rounded-[32px] object-cover" />
        <div className="flex gap-3">
          {product.images.map((image) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`h-20 w-20 overflow-hidden rounded-2xl border ${
                activeImage === image ? 'border-espresso' : 'border-transparent'
              }`}
            >
              <img src={image} alt={product.name} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase text-mocha">{product.category}</p>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-sm text-mocha">{product.description}</p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-warm">
          <h2 className="text-lg font-semibold">Customize your bake</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm font-semibold">Select size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSize(option)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                      size === option ? 'border-espresso bg-espresso text-vanilla' : 'border-rose/40'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">Ingredient customization</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <span key={ingredient} className="rounded-full bg-rose/30 px-3 py-1 text-xs">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">Add-ons</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.addOns.map((addon) => (
                  <button
                    key={addon}
                    type="button"
                    onClick={() => toggleAddOn(addon)}
                    className={`rounded-full border px-3 py-1 text-xs ${
                      selectedAddOns.includes(addon) ? 'border-espresso bg-espresso text-vanilla' : 'border-rose/40'
                    }`}
                  >
                    {addon}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">Baker's notes</p>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows="3"
                placeholder="Add a message for the baker..."
                className="mt-2 w-full rounded-2xl border border-rose/40 px-3 py-2 text-sm"
              />
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="w-full rounded-2xl bg-espresso px-4 py-3 text-sm font-semibold text-vanilla"
            >
              Add to cart · ${product.price.toFixed(2)}
            </button>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl bg-white p-5 shadow-warm">
          <h2 className="text-lg font-semibold">Ingredients & Nutrition</h2>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ingredient) => (
              <span key={ingredient} className="rounded-full bg-pistachio/60 px-3 py-1 text-xs">
                {ingredient}
              </span>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {nutrition.map((item) => (
              <div key={item.label} className="rounded-2xl bg-vanilla p-3 text-center">
                <p className="text-xs text-mocha">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-warm">
          <h2 className="text-lg font-semibold">Customer Reviews</h2>
          <div className="mt-3 space-y-3">
            {reviews.map((review) => (
              <div key={review.id} className="rounded-2xl bg-vanilla p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-mocha">{review.rating} ★</p>
                </div>
                <p className="text-sm text-mocha">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
