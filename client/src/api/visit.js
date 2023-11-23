import axios from "axios"

export const createVisit = async (token, visit) => {
  try {
    const data  = await axios.post(`/api/visit`, visit, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

