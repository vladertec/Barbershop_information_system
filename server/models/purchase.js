import mongoose from "mongoose"

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    userListProducts: { type: Array },
    name: { type: String },
    surname: { type: String },
    email: { type: String },
    mobilePhone: { type: Number },
    paymentMethod: { type: String },
    adress: { type: String },
  },
  { versionKey: false }
)

const Purchase = mongoose.model("purchase", purchaseSchema)

export default Purchase








