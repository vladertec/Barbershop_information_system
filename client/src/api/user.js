import instance from "../ulits/instance"

export const getUsers = async () => {
  try {
    const { data } = await instance.get(`/api/users`)
    return data
  } catch (err) {
    return err
  }
}

export const getUser = async (token) => {
  try {
    const { data } = await instance.get(`/api/user`, {
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
    const { data } = await instance.patch(`/api/user`, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const updateNumberBarbershop = async (token, number) => {
  try {
    const { data } = await instance.patch(`/api/userNumberBarbershop`, number, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const getUserAppointmentHistory = async (token) => {
  try {
    const { data } = await instance.get(`/api/user/appointmentHistory`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const getUserPurchaseHistory = async (token) => {
  try {
    const { data } = await instance.get(`/api/user/purchaseHistory`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
