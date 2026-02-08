import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

router.get('/product/:productId', async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId }).populate('userId', 'name');
  res.json(reviews);
});

router.post('/', async (req, res) => {
  const review = await Review.create(req.body);
  res.status(201).json(review);
});

export default router;
