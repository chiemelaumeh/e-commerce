import Product from "../../models/product.js";

export const deleteProducts = async(req, res, next) => {
try {
  const deleted = await Product.deleteMany();
  console.log(deleted)
  
} catch (error) {
  next(error)
}
}
