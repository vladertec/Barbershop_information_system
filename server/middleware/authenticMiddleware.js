import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export default function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }

  try {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      res.status(400).json({ message: "User not authenticated!" })
    }
    const decodedInformation = jwt.verify(token, process.env.JWT_ACCESS_KEY)
    req.user = decodedInformation
    next()
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: "User not authenticated!" })
  }
}
