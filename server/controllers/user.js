import User from "../models/user.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedInformation = jwt.verify(token, process.env.JWT_ACCESS_KEY)

    const user = await User.findById(decodedInformation.id)
    res.json({ user })
  } catch (error) {
    console.error("Error retrieving user information:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

const updateUser = async (req, res) => {
  try {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ error: "Отсутствует заголовок Authorization" })
    }

    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      return res.status(401).json({ error: "Отсутствует токен авторизации" })
    }

    const decodedInformation = jwt.verify(token, process.env.JWT_ACCESS_KEY)
    const user = await User.findById(decodedInformation.id)

    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" })
    }
    console.log(req.body)

    user.cartList = req.body.cartList
    user.favouriteList = req.body.favouriteList

    await user.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export default { getUser, updateUser }
