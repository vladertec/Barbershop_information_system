import mongoose from "mongoose"
import Contact from "../models/contact.js"

const addContactFeedback = async (req, res) => {
  const { name, surname, email, message } = req.body
  const contactFeedback = await Contact.create({
    name,
    surname,
    email,
    message,
  })
  res.json(contactFeedback)
}
const getAllContactFeedbacks = async (req, res) => {
  const contactFeedbacks = await Contact.find()
  res.json(contactFeedbacks)
}

export default { addContactFeedback, getAllContactFeedbacks }
