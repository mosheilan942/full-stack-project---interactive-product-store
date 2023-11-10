import mongoose, { Document, Schema } from 'mongoose';

export interface Product extends Document {
  name: string;
  price: number;
  category: string;
}

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;
