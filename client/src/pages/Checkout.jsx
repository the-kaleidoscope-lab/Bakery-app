export default function Checkout({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Delivery details</h2>
          <form className="mt-4 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Full name" />
            <input className="rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Phone" />
            <input className="md:col-span-2 rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Address" />
            <input className="rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="City" />
            <input className="rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Postal code" />
            <input type="date" className="rounded-2xl border border-rose/40 px-4 py-2 text-sm" />
            <input type="time" className="rounded-2xl border border-rose/40 px-4 py-2 text-sm" />
          </form>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-warm">
          <h2 className="text-lg font-semibold">Payment options</h2>
          <div className="mt-4 grid gap-3 text-sm text-mocha">
            <label className="flex items-center gap-2 rounded-2xl border border-rose/40 px-4 py-2">
              <input type="radio" name="payment" defaultChecked /> Card (Stripe)
            </label>
            <label className="flex items-center gap-2 rounded-2xl border border-rose/40 px-4 py-2">
              <input type="radio" name="payment" /> UPI (Razorpay)
            </label>
            <label className="flex items-center gap-2 rounded-2xl border border-rose/40 px-4 py-2">
              <input type="radio" name="payment" /> PayPal
            </label>
            <label className="flex items-center gap-2 rounded-2xl border border-rose/40 px-4 py-2">
              <input type="radio" name="payment" /> Cash on Delivery
            </label>
          </div>
        </div>
      </div>
      <div className="h-fit rounded-3xl bg-white p-6 shadow-warm">
        <h2 className="text-lg font-semibold">Order summary</h2>
        <div className="mt-4 space-y-3 text-sm text-mocha">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex justify-between">
              <span>{item.product.name}</span>
              <span>${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold text-espresso">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="mt-6 w-full rounded-2xl bg-espresso px-4 py-3 text-sm font-semibold text-vanilla">
          Place Secure Order
        </button>
        <p className="mt-3 text-xs text-mocha">
          Payments are securely processed via Stripe or Razorpay integrations on the backend.
        </p>
      </div>
    </div>
  );
}
