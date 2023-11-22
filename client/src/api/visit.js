import axios from "axios"

export const getVisits = async () => {
  try {
    const { data } = await axios.get(`/api/visit`)
    return data
  } catch (err) {
    return err
  }
}

export const sendVisit = async (visit) => {
  try {
    const answer = await axios.post(`api/visit`, visit)
    return answer
  } catch (err) {
    return err
  }
}

export const updateVisit = async (visit, id) => {
  try {
    const { data } = await axios.put(`/api/visit/${id}`, visit)
    return data
  } catch (err) {
    return err
  }
}

export const deleteVisit = async (id) => {
  try {
    const { data } = await axios.delete(`/api/visit/${id}`)
    return data
  } catch (err) {
    return err
  }
}
