export default function Auth() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row">
      <div className="card flex-1">
        <h1 className="section-title">Sign in</h1>
        <p className="mt-2 text-sm text-bakery-600">Access your saved orders and recommendations.</p>
        <div className="mt-4 space-y-3">
          <input className="input-field" placeholder="Email address" />
          <input className="input-field" placeholder="Password" type="password" />
          <button className="button-primary w-full">Sign in</button>
        </div>
      </div>
      <div className="card flex-1">
        <h2 className="section-title">Create account</h2>
        <p className="mt-2 text-sm text-bakery-600">Join our loyalty club for exclusive offers.</p>
        <div className="mt-4 space-y-3">
          <input className="input-field" placeholder="Full name" />
          <input className="input-field" placeholder="Email address" />
          <input className="input-field" placeholder="Password" type="password" />
          <button className="button-primary w-full">Sign up</button>
        </div>
      </div>
    </main>
  );
}
