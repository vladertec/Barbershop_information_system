import mongoose from "mongoose"

const barberSchema = new mongoose.Schema(
  {
    nameSurname: String,
    login: String,
    password: String,
  },
  { versionKey: false }
)

const Barber = mongoose.model("barber", barberSchema)

export default Barber
