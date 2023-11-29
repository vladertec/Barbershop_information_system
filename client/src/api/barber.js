import axios from "axios"

export const getBarber = async (token) => {
  try {
    const { data } = await axios.get(`/api/barber`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data.user
  } catch (err) {
    return err
  }
}

export const getBarbers = async () => {
  try {
    const { data } = await axios.get(`/api/barbersAll`)
    return data
  } catch (err) {
    return err
  }
}
