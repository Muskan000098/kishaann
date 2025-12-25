import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String,
  commodity: String,
  quantity: String,
  state: String,
  district: String,
  quality: String,
  availableFrom: String,
  language: String,
  comments: String,
  isOrganic: Boolean,
  isProcessed: Boolean,
  isGraded: Boolean,
  isPacked: Boolean,
  isStoredAC: Boolean,
  image: String, // Cloudinary URL
  name: String,
  email: String,
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
