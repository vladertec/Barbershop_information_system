import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: "role" }],
    name: { type: String },
    surname: { type: String },
    number: { type: Number },
    cartList: { type: Array },
    favouriteList: { type: Array },
    visits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'visit' }],
  },
  { versionKey: false }
)

const User = mongoose.model("user", userSchema)

export default User
