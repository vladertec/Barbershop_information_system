import mongoose from "mongoose"
import News from "../models/news.js"

const add = async (req, res) => {
  const { name, date, description, photos } = req.body
  const news = await News.create({ name, date, description, photos })
  res.json(news)
}

const getAll = async (req, res) => {
  const news = await News.find()
  res.json(news)
}

const deleteOne = async (req, res) => {
  const { newsId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(newsId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "News not found" })
  }
  try {
    await News.deleteOne({ _id: newsId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { add, getAll, deleteOne }
