export default function Auth() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl bg-white p-6 shadow-warm">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-mocha">Access your orders and personalized offers.</p>
        <form className="mt-4 space-y-3">
          <input className="w-full rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Email" />
          <input className="w-full rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Password" type="password" />
          <button className="w-full rounded-2xl bg-espresso px-4 py-2 text-sm font-semibold text-vanilla">
            Sign In
          </button>
        </form>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-warm">
        <h2 className="text-2xl font-semibold">Create account</h2>
        <p className="text-sm text-mocha">Join to earn rewards and access member-only drops.</p>
        <form className="mt-4 space-y-3">
          <input className="w-full rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Full name" />
          <input className="w-full rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Email" />
          <input className="w-full rounded-2xl border border-rose/40 px-4 py-2 text-sm" placeholder="Password" type="password" />
          <button className="w-full rounded-2xl border border-espresso px-4 py-2 text-sm font-semibold">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
