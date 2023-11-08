import mongoose from "mongoose"

const newsSchema = new mongoose.Schema(
  {
    name: String,
    date: String,
    shortDescription: String,
    detailedDescription: String,
    photos: Array,
  },
  { versionKey: false }
)

const News = mongoose.model("news", newsSchema)

export default News
