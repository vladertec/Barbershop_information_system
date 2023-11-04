export const addInCart = (productInCart) => {
  return {
    type: "ADD_PRODUCT_IN_CART",
    payload: productInCart,
  }
}

export const removeInCart = (key) => {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: key,
  }
}

export const removeAllCart = (value) => {
  return {
    type: "REMOVE_ALL_PRODUCT_FROM_CART",
    payload: value,
  }
}

export const hideModalCart = (value) => {
  return {
    type: "HIDE_MODAL",
    payload: value,
  }
}

export const hideBuyModal = (value) => {
  return {
    type: "HIDE_BUY_MODAL",
    payload: value,
  }
}

export const showBuyModal = (value) => {
  return {
    type: "SHOW_BUY_MODAL",
    payload: value,
  }
}
