import express from 'express';
import multer from 'multer';
import Product from '../models/Product.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', async (_req, res) => {
  const products = await Product.find().sort({ popularity: -1 });
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.json(product);
});

router.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

router.put('/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.post('/:id/images', upload.single('image'), async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  product.images.push(`/uploads/${req.file.filename}`);
  await product.save();
  return res.json(product);
});

router.patch('/:id/stock', async (req, res) => {
  const { stock } = req.body;
  const product = await Product.findByIdAndUpdate(req.params.id, { stock }, { new: true });
  res.json(product);
});

export default router;
