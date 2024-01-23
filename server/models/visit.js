import mongoose from "mongoose"

const visitSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    barberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: { type: String },
    surname: { type: String },
    email: { type: String },
    date: { type: String},
    time: { type: String },
    mobilePhone: { type: Number },
    service: { type: String, required: true },
    isDone: { type: Boolean, default: false },
  },
  { versionKey: false }
)

const Visit = mongoose.model("visit", visitSchema)
export default Visit




