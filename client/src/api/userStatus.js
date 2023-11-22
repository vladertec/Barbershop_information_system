import axios from "axios"

export const registerUser = async (value) => {
  try {
    const answer = await axios.post(`api/registration`, value)
    return answer
  } catch (err) {
    return err
  }
}

export const loginUser = async (value) => {
  try {
    const answer = await axios.post(`api/login`, value)
    return answer
  } catch (err) {
    return err
  }
}


