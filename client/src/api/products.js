import axios from "axios"

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`/api/product`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewProduct = async (product) => {
  try {
    const { data } = await axios.post("/api/product", product)
    return data
  } catch (err) {
    return err
  }
}

export const updateProduct = async (product, id) => {
  try {
    const { data } = await axios.put(`/api/product/${id}`, product)
    return data
  } catch (err) {
    return err
  }
}

export const deleteProduct = async (id) => {
  try {
    const { data } = await axios.delete(`/api/product/${id}`)
    return data
  } catch (err) {
    return err
  }
}
