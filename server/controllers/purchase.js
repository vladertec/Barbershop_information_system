import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/user.js"
import Purchase from "../models/purchase.js"
import emailjs from "emailjs-com"

dotenv.config()

const createPurchase = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedInformation = jwt.verify(token, process.env.JWT_ACCESS_KEY)

    const newPurchase = new Purchase({
      userId: decodedInformation.id,
      name: req.body.name,
      userListProducts: req.body.userListProducts,
      surname: req.body.surname,
      mobilePhone: req.body.mobilePhone,
      email: req.body.email,
      paymentMethod: req.body.paymentMethod,
      adress: req.body.adress,
    })
    await User.findByIdAndUpdate(decodedInformation.id, {
      $push: { purchases: newPurchase._id },
    })
    await newPurchase.save()
    res.json(newPurchase)
  } catch (error) {
    console.error("Error creating visit:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const getAllPurchases = async (req, res) => {
  try {
    const product = await Purchase.find()
    res.json(product)
  } catch (error) {
    console.error("Error creating visit:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export default { createPurchase, getAllPurchases }
