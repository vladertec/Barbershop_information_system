import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    photos: Array,
    price: Number,
  },
  { versionKey: false }
)

const Product = mongoose.model("product", productSchema)

export default Product
