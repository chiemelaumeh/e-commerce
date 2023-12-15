import Product from '../../models/product.js';

export const fetchFeatured = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    // console.log
    res.status(200).send(allProducts)
  } catch (error) {
    next(error);
  }
};
