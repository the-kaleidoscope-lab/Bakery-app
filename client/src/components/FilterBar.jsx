export default function FilterBar({ filters, onChange, categories }) {
  return (
    <div className="grid gap-4 rounded-3xl bg-white p-4 shadow-warm md:grid-cols-4">
      <input
        type="search"
        value={filters.search}
        onChange={(event) => onChange('search', event.target.value)}
        placeholder="Search pastries, breads, cakes..."
        className="rounded-2xl border border-rose/40 px-4 py-2 text-sm"
      />
      <select
        value={filters.category}
        onChange={(event) => onChange('category', event.target.value)}
        className="rounded-2xl border border-rose/40 px-4 py-2 text-sm"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        value={filters.sort}
        onChange={(event) => onChange('sort', event.target.value)}
        className="rounded-2xl border border-rose/40 px-4 py-2 text-sm"
      >
        <option value="popular">Popularity</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      <select
        value={filters.availability}
        onChange={(event) => onChange('availability', event.target.value)}
        className="rounded-2xl border border-rose/40 px-4 py-2 text-sm"
      >
        <option value="">All Stock</option>
        <option value="in">In Stock</option>
        <option value="low">Low Stock</option>
      </select>
    </div>
  );
}
