import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  label: String,
  street: String,
  city: String,
  postalCode: String,
  country: String
});

const paymentSchema = new mongoose.Schema({
  provider: String,
  last4: String,
  expiry: String
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    addresses: [addressSchema],
    paymentMethods: [paymentSchema],
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
