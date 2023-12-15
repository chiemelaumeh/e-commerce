import express from 'express';
import { createProduct } from '../controllers/products/createproduct.js';
import { fetchFeatured } from '../controllers/products/fetchfeatured.js';

const productRouter = express.Router();

productRouter.post('/createproduct', createProduct);
productRouter.get('/fetchfeatured', fetchFeatured);

export default productRouter;
