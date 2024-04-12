import instance from "../ulits/instance"

export const getProducts = async () => {
  try {
    const { data } = await instance.get(`/api/product`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewProduct = async (product) => {
  try {
    const { data } = await instance.post("/api/product", product)
    return data
  } catch (err) {
    return err
  }
}

export const updateProduct = async (product, id) => {
  try {
    const { data } = await instance.put(`/api/product/${id}`, product)
    return data
  } catch (err) {
    return err
  }
}

export const deleteProduct = async (id) => {
  try {
    const { data } = await instance.delete(`/api/product/${id}`)
    return data
  } catch (err) {
    return err
  }
}
