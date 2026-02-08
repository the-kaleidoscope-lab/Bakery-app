import { Router } from 'express';
import { addReview, listReviews } from '../controllers/reviewController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router({ mergeParams: true });

router.get('/', listReviews);
router.post('/', authenticate, addReview);

export default router;
