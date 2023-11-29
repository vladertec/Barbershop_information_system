import axios from "axios"

export const sendPurchase = async (token, purchases) => {
  try {
    const data = await axios.post(`/api/purchase`, purchases, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const getAllPurchases = async (token) => {
  try {
    const { data } = await axios.get(`/api/purchase`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
