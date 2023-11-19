import axios from "axios"

export const sendEmail = async (email) => {
  try {
    const answer = await axios.post(`/api/email`, email)
    return answer
  } catch (err) {
    return err
  }
}
