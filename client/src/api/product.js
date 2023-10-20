import axios from "axios"

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`/api/product`)
    return data
  } catch (err) {
    return err
  }
}