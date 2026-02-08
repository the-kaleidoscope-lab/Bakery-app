import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const order = await Order.create(req.body);
  const io = req.app.get('io');
  io?.emit('order:created', order);
  res.status(201).json(order);
});

router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id).populate('items.product');
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json(order);
});

router.patch('/:id/status', async (req, res) => {
  const { deliveryStatus } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { deliveryStatus }, { new: true });
  const io = req.app.get('io');
  io?.emit('order:status', order);
  res.json(order);
});

export default router;
