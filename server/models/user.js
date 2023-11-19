import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: "Role" }],
    name: { type: String },
    surname: { type: String },
    number: { type: Number },
    cartList: { type: Array },
    favouriteList: { type: Array },
    visit: { type: Array },
  },
  { versionKey: false }
)

const User = mongoose.model("user", userSchema)

export default User
