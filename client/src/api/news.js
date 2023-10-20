import axios from "axios"

export const getNews = async () => {
  try {
    const { data } = await axios.get(`/api/news`)
    return data
  } catch (err) {
    return err
  }
}