import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId }).populate('items.product');
  const purchasedCategories = new Set();
  orders.forEach((order) => {
    order.items.forEach((item) => {
      if (item.product?.category) {
        purchasedCategories.add(item.product.category);
      }
    });
  });

  const categoryRecommendations = await Product.find({ category: { $in: [...purchasedCategories] } })
    .sort({ popularity: -1 })
    .limit(6);
  const popular = await Product.find().sort({ popularity: -1 }).limit(6);

  res.json({
    basedOnPurchases: categoryRecommendations,
    popular
  });
});

export default router;
