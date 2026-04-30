import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    user: String,
    amount: Number,
    type: String
  },
  { timestamps: true }
);

export default mongoose.models.Transaction ||
mongoose.model("Transaction", TransactionSchema);