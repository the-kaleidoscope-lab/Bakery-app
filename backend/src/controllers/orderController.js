import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const order = await Order.create({
    ...req.body,
    userId: req.user.id,
    paymentStatus: 'paid',
    deliveryStatus: 'baking'
  });
  res.status(201).json(order);
};

export const listOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(orders);
};

export const updateOrderStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { deliveryStatus: req.body.deliveryStatus },
    { new: true }
  );
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json(order);
};

export const trackOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json({
    id: order.id,
    deliveryStatus: order.deliveryStatus,
    eta: '45 mins',
    driver: {
      name: 'Camille D.',
      location: 'Baker Street'
    }
  });
};
