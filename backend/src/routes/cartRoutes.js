import { Router } from 'express';
import {
  addToCart,
  getCart,
  removeCartItem,
  updateCartItem
} from '../controllers/cartController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.get('/', authenticate, getCart);
router.post('/items', authenticate, addToCart);
router.patch('/items/:itemId', authenticate, updateCartItem);
router.delete('/items/:itemId', authenticate, removeCartItem);

export default router;
