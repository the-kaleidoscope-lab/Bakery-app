import { Router } from 'express';
import {
  createOrder,
  listOrders,
  trackOrder,
  updateOrderStatus
} from '../controllers/orderController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.post('/', authenticate, createOrder);
router.get('/', authenticate, listOrders);
router.patch('/:id/status', authenticate, updateOrderStatus);
router.get('/:id/track', authenticate, trackOrder);

export default router;
