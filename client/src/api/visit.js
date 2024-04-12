import instance from "../ulits/instance"

export const createVisit = async (token, visit) => {
  try {
    const data = await instance.post(`/api/visit`, visit, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const deleteVisit = async (token, id) => {
  try {
    const data = await instance.delete(`/api/visit/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const updateVisit = async (token, id, isServiceReady) => {
  try {
    const data = await instance.patch(`/api/visit/${id}`, isServiceReady, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const getAllVisits = async (token) => {
  try {
    const { data } = await instance.get(`/api/visits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
