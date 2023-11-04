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
