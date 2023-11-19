import axios from "axios"

export const getNews = async () => {
  try {
    const { data } = await axios.get(`/api/news`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewNews = async (values) => {
  try {
    const { data } = await axios.post("/api/news", values)
    return data
  } catch (err) {
    return err
  }
}

export const updateNews = async (news, id) => {
  try {
    const { data } = await axios.put(`/api/news/${id}`, news)
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
