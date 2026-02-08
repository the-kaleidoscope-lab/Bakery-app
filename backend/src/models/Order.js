import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 },
  size: String,
  addOns: [String]
});

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, default: 'pending' },
    deliveryStatus: { type: String, default: 'baking' },
    address: {
      street: String,
      city: String,
      postalCode: String,
      country: String
    }
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
