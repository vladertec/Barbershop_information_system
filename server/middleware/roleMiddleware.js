import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export default function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next()
    }
    try {
      const token = req.headers.authorization.split(" ")[1]
      if (!token) {
        res.status(400).json({ message: "User not authenticated!" })
      }
      const { roles: userRoles } = jwt.verify(token, process.env.JWT_ACCESS_KEY)
      let hasRole = false
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true
        }
      })

      if (!hasRole) {
        res.status(400).json({ message: "You don't have access!" })
      }

      next()
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: "User not authenticated!" })
    }
  }
}
