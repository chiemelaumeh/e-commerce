import express from 'express';
import { createProduct } from '../controllers/products/createproduct.js';
import { fetchFeatured } from '../controllers/products/fetchfeatured.js';
import { deleteProducts } from '../controllers/products/deleteProduct.js';
const productRouter = express.Router();

productRouter.post('/createproduct', createProduct);
productRouter.delete('/deleteproducts', deleteProducts)
productRouter.get('/fetchfeatured', fetchFeatured);

export default productRouter;
