import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('items.product');
  res.json(cart || { userId: req.user.id, items: [] });
};

export const addToCart = async (req, res) => {
  const cart = await Cart.findOneAndUpdate(
    { userId: req.user.id },
    { $push: { items: req.body } },
    { new: true, upsert: true }
  );
  res.status(201).json(cart);
};

export const updateCartItem = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }
  const item = cart.items.id(req.params.itemId);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  item.set(req.body);
  await cart.save();
  return res.json(cart);
};

export const removeCartItem = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }
  cart.items.id(req.params.itemId)?.deleteOne();
  await cart.save();
  return res.json(cart);
};
