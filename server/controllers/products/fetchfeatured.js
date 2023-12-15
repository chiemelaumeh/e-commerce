import Product from '../../models/product.js';

export const fetchFeatured = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    console.log(allProducts);
  } catch (error) {
    next(error);
  }
};
