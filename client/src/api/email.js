import axios from "axios"

export const sendEmail = async (email) => {
  try {
    const answer = await axios.post(`/api/email`, email)
    return answer
  } catch (err) {
    return err
  }
}

export const getAllEmails = async (token) => {
  try {
    const { data } = await axios.get(`/api/email`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
