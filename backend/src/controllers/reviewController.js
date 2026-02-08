import Review from '../models/Review.js';

export const listReviews = async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId }).sort({ createdAt: -1 });
  res.json(reviews);
};

export const addReview = async (req, res) => {
  const review = await Review.create({
    ...req.body,
    userId: req.user.id,
    productId: req.params.productId
  });
  res.status(201).json(review);
};
