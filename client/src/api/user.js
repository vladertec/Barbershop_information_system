import axios from "axios"

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`/api/users`)
    return data
  } catch (err) {
    return err
  }
}

export const getUser = async (token) => {
  try {
    const { data } = await axios.get(`/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data.user
  } catch (err) {
    return err
  }
}

export const updateUser = async (token, updateData) => {
  try {
    const { data } = await axios.patch(`/api/user`, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
