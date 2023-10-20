import axios from "axios"

export const sendContact = async (contactMessage) => {
  try {
    const answer = await axios.post(`/api/contact`, contactMessage)
    return answer
  } catch (err) {
    return err
  }
}