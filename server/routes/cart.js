import express from 'express';
import Cart from '../models/Cart.js';

const router = express.Router();

router.get('/:userId', async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.product');
  res.json(cart || { userId: req.params.userId, items: [] });
});

router.post('/:userId/items', async (req, res) => {
  const cart = await Cart.findOneAndUpdate(
    { userId: req.params.userId },
    { $push: { items: req.body } },
    { new: true, upsert: true }
  );
  res.json(cart);
});

router.patch('/:userId/items/:itemId', async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }
  const item = cart.items.id(req.params.itemId);
  if (!item) {
    return res.status(404).json({ message: 'Cart item not found' });
  }
  Object.assign(item, req.body);
  await cart.save();
  return res.json(cart);
});

router.delete('/:userId/items/:itemId', async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }
  const item = cart.items.id(req.params.itemId);
  if (!item) {
    return res.status(404).json({ message: 'Cart item not found' });
  }
  item.remove();
  await cart.save();
  res.json(cart);
});

export default router;
