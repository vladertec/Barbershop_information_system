import { getProducts } from "../../api/products"

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: "START_FETCH_PRODUCTS" })
  getProducts()
    .then((data) => {
      dispatch(loadedProducts(data))
    })
    .catch(() => {
      dispatch(errorLoadedProducts())
    })
}

export const loadedProducts = (products) => {
  return {
    type: "LOADED_PRODUCTS",
    payload: products,
  }
}

export const errorLoadedProducts = () => ({
  type: "ERROR_LOADED_PRODUCTS",
})
