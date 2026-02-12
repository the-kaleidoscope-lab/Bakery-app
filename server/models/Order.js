import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 },
    size: String,
    addOns: [String],
    notes: String
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, default: 'pending' },
    deliveryStatus: { type: String, default: 'Baking' },
    address: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
