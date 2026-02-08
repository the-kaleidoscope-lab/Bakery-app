import Product from '../models/Product.js';
import Order from '../models/Order.js';

export const getRecommendations = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id }).populate('items.product');
  const categories = new Set();

  orders.forEach((order) => {
    order.items.forEach((item) => {
      if (item.product?.category) {
        categories.add(item.product.category);
      }
    });
  });

  const recommendations = await Product.find({
    category: { $in: Array.from(categories) }
  })
    .sort({ ratings: -1 })
    .limit(4);

  res.json({
    recommendations,
    strategy: ['previous purchases', 'popular items']
  });
};
