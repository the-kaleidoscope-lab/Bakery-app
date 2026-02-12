import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Tracking from './pages/Tracking';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import { products } from './data/products';

const initialCart = [
  { id: 'p2', quantity: 1, size: 'Medium', addOns: ['Extra berries'] }
];

export default function App() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [wishlist, setWishlist] = useState(['p1']);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    document.documentElement.classList.toggle('dark');
  };

  const cartSummary = useMemo(() => {
    return cartItems.map((item) => ({
      ...item,
      product: products.find((product) => product.id === item.id)
    }));
  }, [cartItems]);

  const updateCartQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-vanilla text-espresso transition-colors duration-300 dark:bg-espresso dark:text-vanilla">
        <Navbar onToggleTheme={toggleTheme} isDark={theme === 'dark'} />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">
          <Routes>
            <Route
              path="/"
              element={<Home wishlist={wishlist} onToggleWishlist={toggleWishlist} />}
            />
            <Route
              path="/products"
              element={<Products wishlist={wishlist} onToggleWishlist={toggleWishlist} />}
            />
            <Route path="/products/:id" element={<ProductDetail onAddToCart={setCartItems} />} />
            <Route
              path="/cart"
              element={<Cart items={cartSummary} onQuantityChange={updateCartQuantity} onRemove={removeFromCart} />}
            />
            <Route path="/checkout" element={<Checkout cartItems={cartSummary} />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/profile" element={<Profile wishlist={wishlist} />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
