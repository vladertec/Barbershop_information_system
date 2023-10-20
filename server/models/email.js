import mongoose from "mongoose"

const emailSchema = new mongoose.Schema(
  {
    email: String,
  },
  { versionKey: false }
)

const Email = mongoose.model("email", emailSchema)

export default Email
