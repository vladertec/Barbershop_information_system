import axios from "axios"

export const createVisit = async (token, visit) => {
  try {
    const data = await axios.post(`/api/visit`, visit, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const deleteVisit = async (token, id) => {
  try {
    const data = await axios.delete(`/api/visit/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const updateVisit = async (token, id, isServiceReady) => {
  try {
    const data = await axios.patch(`/api/visit/${id}`, isServiceReady, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const getAllVisits = async (token) => {
  try {
    const { data } = await axios.get(`/api/visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
