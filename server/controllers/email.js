import mongoose from "mongoose"
import Email from "../models/email.js"

const add = async (req, res) => {
  const { email } = req.body
  const emailMessage = await Email.create({ email })
  res.json(emailMessage)
}

const getAll = async (req, res) => {
  const emailMessage = await Email.find()
  res.json(emailMessage)
}

const deleteOne = async (req, res) => {
  const { emailId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(emailId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "News not found" })
  }
  try {
    await Email.deleteOne({ _id: emailId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { add, getAll, deleteOne }
