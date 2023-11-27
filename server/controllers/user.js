import User from "../models/user.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import Visit from "../models/visit.js"

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

const getBarber = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedInformation = jwt.verify(token, process.env.JWT_ACCESS_KEY)

    const barber = await User.findById(decodedInformation.id)
    res.json({ barber })
  } catch (error) {
    console.error("Error retrieving user information:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

const getBarbers = async (req, res) => {
  try {
    const barbers = await User.find({ roles: "BARBER" })
    res.json(barbers)
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

    for (const key in req.body) {
      if (
        Object.prototype.hasOwnProperty.call(req.body, key) &&
        req.body[key] !== user[key]
      ) {
        user[key] = req.body[key]
      }
    }
    await user.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}

const getAppointmentHistory = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedInformation = jwt.verify(token, process.env.JWT_ACCESS_KEY)

    const user = await User.findById(decodedInformation.id)

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    let visitDetails

    if (user.roles.includes("BARBER")) {
      visitDetails = await Visit.find({ barberId: user._id })
    } else {
      visitDetails = await Visit.find({ userId: user._id })
    }

    const updatedVisitDetails = await Promise.all(
      visitDetails.map(async (visit) => {
        const targetUserId = user.roles.includes("BARBER")
          ? visit.userId
          : visit.barberId
        const userInfo = await User.findById(targetUserId)

        return {
          ...visit.toObject(),
          [user.roles.includes("BARBER") ? "userId" : "barberId"]:
            user.roles.includes("BARBER")
              ? userInfo
              : { name: userInfo.name, surname: userInfo.surname },
        }
      })
    )

    res.json(updatedVisitDetails)
  } catch (error) {
    console.error("Error retrieving user information:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

const getUserPurchaseHistory = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedInformation = jwt.verify(token, process.env.JWT_ACCESS_KEY)

    const user = await User.findById(decodedInformation.id)

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const purchaseDetails = await Purchase.find({
      _id: { $in: user.purchases },
    })

    for (const purchase of purchaseDetails) {
      const productInfo = await Product.findById(purchase.productId)
      purchase.productId = productInfo
    }

    res.json(purchaseDetails)
  } catch (error) {
    console.error("Error retrieving user purchase history:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export default {
  getUser,
  updateUser,
  getBarber,
  getBarbers,
  getAppointmentHistory,
  getUserPurchaseHistory,
}
