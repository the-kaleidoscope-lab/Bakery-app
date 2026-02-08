import { useMemo, useState } from 'react';
import { products } from '../data/products.js';
import { Link } from 'react-router-dom';

const initialCart = [
  { ...products[0], quantity: 1 },
  { ...products[2], quantity: 2 }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="section-title">Your cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="card flex flex-col gap-4 md:flex-row md:items-center">
              <img src={item.images[0]} alt={item.name} className="h-24 w-24 rounded-2xl object-cover" />
              <div className="flex-1">
                <h3 className="font-display text-lg text-bakery-800">{item.name}</h3>
                <p className="text-xs text-bakery-600">{item.category}</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                  className="input-field w-20"
                />
                <p className="text-sm font-semibold text-bakery-700">${item.price * item.quantity}</p>
                <button className="text-xs text-bakery-500" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="card h-fit">
          <h2 className="text-lg font-semibold text-bakery-700">Order summary</h2>
          <div className="mt-4 space-y-3 text-sm text-bakery-600">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-bakery-700">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold text-bakery-600">Discount coupon</label>
            <div className="mt-2 flex gap-2">
              <input className="input-field" placeholder="SWEET10" />
              <button className="button-primary px-4">Apply</button>
            </div>
          </div>
          <Link to="/checkout" className="button-primary mt-6 inline-flex w-full justify-center">
            Proceed to checkout
          </Link>
          <p className="mt-3 text-xs text-bakery-500">Prices update in real-time based on customizations.</p>
        </div>
      </div>
    </main>
  );
}
