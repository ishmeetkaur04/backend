import mongoose from "mongoose";

const CardSchema = new mongoose.Schema(
  {
    holder: String,
    number: String,
    expiry: String,
    bank: String,
    status: String
  },
  { timestamps: true }
);

export default mongoose.models.Card ||
mongoose.model("Card", CardSchema);