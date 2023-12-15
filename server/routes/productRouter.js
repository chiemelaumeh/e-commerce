import express from 'express';
import { createProduct } from '../controllers/products/createproduct.js';
const productRouter = express.Router();

productRouter.post('/createproduct', createProduct);
// productRouter.get('/fetchfeatured', fetchFeatured);

export default productRouter;
