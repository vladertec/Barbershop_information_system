import axios from "axios"
import instance from "../ulits/instance"

export const getNews = async () => {
  try {
    const { data } = await instance.get(`/api/news`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewNews = async (values) => {
  try {
    const { data } = await instance.post("/api/news", values)
    return data
  } catch (err) {
    return err
  }
}

export const updateNews = async (news, id) => {
  try {
    const { data } = await instance.put(`/api/news/${id}`, news)
    return data
  } catch (err) {
    return err
  }
}

export const deleteNews = async (id) => {
  try {
    const { data } = await axios.delete(`/api/news/${id}`)
    return data
  } catch (err) {
    return err
  }
}
