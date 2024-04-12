import instance from "../ulits/instance"

export const registerUser = async (value) => {
  try {
    const answer = await instance.post(`api/registration`, value)
    return answer
  } catch (err) {
    return err
  }
}

export const loginUser = async (value) => {
  try {
    const answer = await instance.post(`api/login`, value)
    return answer
  } catch (err) {
    return err
  }
}


