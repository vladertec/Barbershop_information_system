import mongoose from "mongoose"
import Product from "../models/product.js"

const add = async (req, res) => {
  const { name, description, photos, price } = req.body
  const product = await Product.create({
    name,
    description,
    photos,
    price,
  })
  res.json(product)
}

const getAll = async (req, res) => {
  const product = await Product.find()
  res.json(product)
}

const getOne = async (req, res) => {
  const { productId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(productId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  const product = await Product.findById(productId)
  if (!visit) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  res.json(product)
}

const deleteOne = async (req, res) => {
  const { productId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(productId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await Product.deleteOne({ _id: productId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { add, getAll, getOne, deleteOne }
