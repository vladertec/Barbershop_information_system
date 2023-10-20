import mongoose from "mongoose"

const contactSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    email: String,
    message: String,
  },
  { versionKey: false }
)

const Contact = mongoose.model("contact", contactSchema)

export default Contact
