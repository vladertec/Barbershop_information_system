export const getFavoritesListFromLS = () => {
  try {
    const favorites = localStorage.getItem("myFavorites")
    if (!favorites) return []
    const parsed = JSON.parse(favorites)
    return parsed
  } catch (e) {
    return []
  }
}

const initialState = {
  favouriteList: getFavoritesListFromLS(),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE": {
      return {
        ...state,
        favouriteList: [...state.favouriteList, action.payload],
      }
    }
    case "REMOVE_FAVOURITE": {
      return {
        ...state,
        favouriteList: state.favouriteList.filter(
          (card) => card.vendorCode !== action.payload
        ),
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
