import { Router } from 'express';
import multer from 'multer';
import {
  createProduct,
  deleteProduct,
  getProduct,
  listProducts,
  updateProduct
} from '../controllers/productController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/', authenticate, upload.array('images', 5), createProduct);
router.put('/:id', authenticate, updateProduct);
router.delete('/:id', authenticate, deleteProduct);

export default router;
