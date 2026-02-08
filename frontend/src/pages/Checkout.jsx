export default function Checkout() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="section-title">Checkout</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form className="card space-y-5">
          <div>
            <h2 className="text-sm font-semibold text-bakery-700">Delivery address</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <input className="input-field" placeholder="First name" />
              <input className="input-field" placeholder="Last name" />
              <input className="input-field sm:col-span-2" placeholder="Street address" />
              <input className="input-field" placeholder="City" />
              <input className="input-field" placeholder="Postal code" />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-bakery-700">Delivery schedule</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <input type="date" className="input-field" />
              <input type="time" className="input-field" />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-bakery-700">Payment options</h2>
            <div className="mt-3 grid gap-3 text-sm text-bakery-600">
              {['Card (Stripe)', 'UPI', 'PayPal', 'Cash on Delivery'].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="payment" />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <button type="button" className="button-primary w-full">
            Pay securely
          </button>
        </form>
        <aside className="card h-fit">
          <h2 className="text-sm font-semibold text-bakery-700">Secure payments</h2>
          <p className="mt-3 text-sm text-bakery-600">
            Stripe and Razorpay integration keep your details encrypted. You can also save payment
            methods for express checkout.
          </p>
          <div className="mt-4 rounded-2xl bg-pastel-mint px-4 py-3 text-xs text-bakery-700">
            Tip: Orders placed before 5 PM qualify for same-day delivery.
          </div>
        </aside>
      </div>
    </main>
  );
}
