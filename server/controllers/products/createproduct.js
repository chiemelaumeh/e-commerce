import Product from '../../models/product.js';

export const createProduct = async (req, res, next) => {
  const { title, slug, image, brand, category, description, price, count } =
    req.body;
  const newProduct = new Product({
    title: title,
    slug: slug,
    image: image,
    brand: brand,
    category: category,
    description: description,
    price: price,
    count: count,
    rating: 0,
    reviews: [],
    reviewCount: 0,
  });
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    next(error);
  }
};
