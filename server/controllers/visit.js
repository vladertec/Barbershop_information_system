import Visit from "../models/visit.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/user.js"
import mongoose from "mongoose"

dotenv.config()

const createVisit = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedInformation = jwt.verify(token, process.env.JWT_ACCESS_KEY)

    const { barber } = req.body
    const [name, surname] = barber.split(" ")
    const findedBarber = await User.findOne({ roles: "BARBER", name, surname })

    const newVisit = new Visit({
      userId: decodedInformation.id,
      barberId: findedBarber._id,
      barber: req.body.barber,
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      mobilePhone: req.body.mobilePhone,
      date: req.body.date,
      time: req.body.time,
      service: req.body.service,
    })
    await User.findByIdAndUpdate(findedBarber._id, {
      $push: { visits: newVisit },
    })
    await User.findByIdAndUpdate(decodedInformation.id, {
      $push: { visits: newVisit._id },
    })
    const readyVisit = await newVisit.save()
    res.json(readyVisit)
  } catch (error) {
    console.error("Error creating visit:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const deleteVisit = async (req, res) => {
  const { visitId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(visitId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "Visit not found" })
  }
  try {
    await Visit.deleteOne({ _id: visitId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

const updateVisit = async (req, res) => {
  const { visitId } = req.params;
  const { isDone } = req.body; // Предполагается, что isDone приходит в теле запроса

  const isValid = mongoose.Types.ObjectId.isValid(visitId);

  // Проверка валидности ObjectId
  if (!isValid) {
    return res.status(400).json({ error: "Invalid visitId" });
  }

  try {
    // Находим визит по его идентификатору и обновляем isDone
    const visit = await Visit.findByIdAndUpdate(
      visitId,
      { isDone: isDone },
      { new: true }
    );

    // Проверка, найден ли визит
    if (!visit) {
      return res.status(404).json({ error: "Visit not found" });
    }

    // Отправляем обновленный визит в ответе
    res.json(visit);
  } catch (error) {
    console.error("Error updating visit:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default { createVisit, deleteVisit, updateVisit }
