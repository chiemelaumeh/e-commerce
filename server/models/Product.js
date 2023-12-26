import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true }
},
 {
  timestamps: true,
 }
)
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    images: [String],
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: [ReviewSchema],
    reviewCount: { type: Number, required: true },
  },
  { timestamps: true, }
);

export default mongoose.model("Product", ProductSchema);