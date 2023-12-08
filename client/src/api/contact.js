import axios from "axios"

export const sendContact = async (contactMessage) => {
  try {
    const answer = await axios.post(`/api/contact`, contactMessage)
    return answer
  } catch (err) {
    return err
  }
}

export const getAllContactFeedbacks = async (token) => {
  try {
    const { data } = await axios.get(`/api/contact`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
