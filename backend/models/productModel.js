import mongoose from 'mongoose';

// creates a schema for the product, timestamp is needed to determine date it was added
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: false },
    brand: { type: String, required: false },
    category: { type: String, required: false },
    description: { type: String, required: false },
    price: { type: Number, required: false },
    countInStock: { type: Number, required: false },
    rating: { type: Number, required: false },
    numReviews: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

// creates an instance of the product schema and names it Product
const Product = mongoose.model('Product', productSchema);

export default Product;