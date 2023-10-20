import axios from "axios"

export const getBarbers = async () => {
  try {
    const { data } = await axios.get(`/api/barber`)
    return data
  } catch (err) {
    return err
  }
}