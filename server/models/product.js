import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    name: String,
    shortDescription: String,
    longDescription: String,
    photos: Array,
    price: Number,
    vendorCode: Number,
  },
  { versionKey: false }
)
const Product = mongoose.model("product", productSchema)

export default Product










