import express from "express";
import { addProduct } from "../controllers/product.js";
const productRouter = express.Router();


productRouter.post("/createproduct", addProduct)

export default productRouter