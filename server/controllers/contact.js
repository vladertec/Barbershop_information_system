import mongoose from "mongoose"
import Barber from "../models/barber.js"

const add = async (req, res) => {
  const { nameSurname, login, password } = req.body
  const barber = await Barber.create({
    nameSurname,
    login,
    password,
  })
  res.json(barber)
}

const getAll = async (req, res) => {
  const barber = await Barber.find()
  res.json(barber)
}

const getOne = async (req, res) => {
  const { barberId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(barberId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  const barber = await Barber.findById(barberId)
  if (!barber) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  res.json(barber)
}

const update = async (req, res) => {
  const { barberId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(barberId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  const barber = await Barber.findByIdAndUpdate(barberId, {
    nameSurname,
    login,
    password,
  })

  res.json(barber)
}

const deleteOne = async (req, res) => {
  const { barberId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(barberId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await Barber.deleteOne({ _id: barberId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { add, getAll, getOne, update, deleteOne }
