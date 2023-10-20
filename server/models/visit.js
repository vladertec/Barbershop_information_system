import mongoose from "mongoose"

const visitSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    mobilePhone: Number,
    service: String,
    barber: String,
    date: Date,
    time: String,
  },
  { versionKey: false }
)

const Visit = mongoose.model("visit", visitSchema)

export default Visit
