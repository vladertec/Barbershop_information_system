import instance from "../ulits/instance"

export const sendContact = async (contactMessage) => {
  try {
    const answer = await instance.post(`/api/contact`, contactMessage)
    return answer
  } catch (err) {
    return err
  }
}

export const getAllContactFeedbacks = async (token) => {
  try {
    const { data } = await instance.get(`/api/contact`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
