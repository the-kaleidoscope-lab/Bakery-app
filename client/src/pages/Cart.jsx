import { Link } from 'react-router-dom';

export default function Cart({ items, onQuantityChange, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">Your Cart</h1>
        {items.map((item) => (
          <div key={`${item.id}-${item.size}`} className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-warm md:flex-row">
            <img src={item.product.images[0]} alt={item.product.name} className="h-28 w-28 rounded-2xl object-cover" />
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{item.product.name}</p>
                  <p className="text-xs text-mocha">Size: {item.size} · Add-ons: {item.addOns.join(', ') || 'None'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="text-xs font-semibold text-rose-700"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                    className="h-8 w-8 rounded-full border border-rose/40"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                    className="h-8 w-8 rounded-full border border-rose/40"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-fit rounded-3xl bg-white p-6 shadow-warm">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="mt-4 space-y-2 text-sm text-mocha">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-espresso">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Link
          to="/checkout"
          className="mt-6 flex w-full justify-center rounded-2xl bg-espresso px-4 py-3 text-sm font-semibold text-vanilla"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
