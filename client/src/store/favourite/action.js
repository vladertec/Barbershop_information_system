export const addFavorite = (favourite) => {
  return {
    type: "ADD_FAVOURITE",
    payload: favourite,
  }
}

export const removeFavourite = (key) => {
  return {
    type: "REMOVE_FAVOURITE",
    payload: key,
  }
}

export const removeAllFavourite = (value) => {
  return {
    type: "REMOVE_ALL_PRODUCT_FROM_FAVOURITE",
    payload: value,
  }
}

export const updateFavourite = (value) => {
  return {
    type: "UPDATE_PRODUCT_IN_FAVOURITE",
    payload: value,
  }
}