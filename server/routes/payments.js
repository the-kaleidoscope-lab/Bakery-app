import express from 'express';

const router = express.Router();

router.post('/intent', async (_req, res) => {
  res.json({ clientSecret: 'stripe_test_client_secret' });
});

export default router;
