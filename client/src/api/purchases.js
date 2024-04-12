import instance from "../ulits/instance"

export const sendPurchase = async (token, purchases) => {
  try {
    const data = await instance.post(`/api/purchase`, purchases, {
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
    const { data } = await instance.get(`/api/purchase`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
