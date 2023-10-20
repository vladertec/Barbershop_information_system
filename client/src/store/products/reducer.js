const initialState = {
  productsList: [],
  isLoading: false,
  hasError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH_PRODUCTS": {
      return {
        ...state,
        isLoading: true,
      }
    }

    case "LOADED_PRODUCTS": {
      return {
        ...state,
        productsList: action.payload,
        isLoading: false,
        hasError: false,
      }
    }

    case "ERROR_LOADED_PRODUCTS": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
