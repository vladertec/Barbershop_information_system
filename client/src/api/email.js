
import instance from "../ulits/instance"

export const sendEmail = async (email) => {
  try {
    const answer = await instance.post(`/api/email`, email)
    return answer
  } catch (err) {
    return err
  }
}

export const getAllEmails = async (token) => {
  try {
    const { data } = await instance.get(`/api/email`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
