import { validationResult } from "express-validator"
import Role from "../models/role.js"
import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const generateAccessToken = async (id, roles) => {
  const payload = {
    id,
    roles,
  }
  return jwt.sign(payload, process.env.JWT_ACCESS_KEY, { expiresIn: "24h" })
}

const removeFromTokenStore = async (token) => {
  const tokenIndex = tokenStore.indexOf(token)
  if (tokenIndex !== -1) {
    tokenStore.splice(tokenIndex, 1)
  }
}

const registration = async (req, res) => {
  try {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json({ message: "Error in validation!", error })
    }
    const { username, password } = req.body
    const candidate = await User.findOne({ username })
    if (candidate) {
      return res
        .status(400)
        .json({ message: "User with the same name already exists" })
    }
    const hashPassword = bcrypt.hashSync(password, 7)
    const userRole = await Role.findOne({ value: "USER" })
    const user = new User({
      username,
      password: hashPassword,
      roles: [userRole.value],
      // name: "",
      // surname: ""
    })
    user.save()
    return res.json({ message: "User saved successfully" })
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: "Registration has error!" })
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const candidate = await User.findOne({ username })
    if (!candidate) {
      return res.status(400).json({
        message: `User ${username} does not exist`,
      })
    } else {
      const validPassword = bcrypt.compareSync(password, candidate.password)
      if (!validPassword) {
        return res.status(400).json({ message: `Incorrect password` })
      }

      const token = await generateAccessToken(candidate._id, candidate.roles)
      return res.json({ token })
    }
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: "Registration has error!" })
  }
}

const logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]

    if (!token) {
      return res.status(401).json({ message: "No token provided" })
    }

    // Инвалидируем токен, удаляя его из хранилища
    removeFromTokenStore(token)

    res.json({ message: "Logout successful" })
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: "Logout has error!" })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: "Registration has error!" })
  }
}

export default { registration, login, logout, getUsers }
