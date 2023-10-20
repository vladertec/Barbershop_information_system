import axios from "axios"

export const sendVisit = async (visit) => {
  try {
    const answer = await axios.post(`api/visit`, visit)
    return answer
  } catch (err) {
    return err
  }
}