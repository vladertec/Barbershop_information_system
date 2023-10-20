import mongoose from "mongoose"
import Visit from "../models/visit.js"

const add = async (req, res) => {
  const { name, surname, mobilePhone, service, barber, date, time } = req.body
  const visit = await Visit.create({
    name,
    surname,
    mobilePhone,
    service,
    barber,
    date,
    time,
  })
  res.json(visit)
}

const getAll = async (req, res) => {
  const visit = await Visit.find()
  res.json(visit)
}

const getOne = async (req, res) => {
  const { visitId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(visitId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  const visit = await Visit.findById(visitId)
  if (!visit) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  res.json(visit)
}

const update = async (req, res) => {
  const { visitId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(visitId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  const visit = await Visit.findByIdAndUpdate(visitId, {
    name,
    surname,
    mobilePhone,
  })

  res.json(visit)
}

const deleteOne = async (req, res) => {
  const { visitId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(visitId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await Visit.deleteOne({ _id: visitId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { add, getAll, getOne, update, deleteOne }
