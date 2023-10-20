const initialState = {
  newsList: [],
  isLoading: false,
  hasError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH_NEWS": {
      return {
        ...state,
        isLoading: true,
      }
    }

    case "LOADED_NEWS": {
      return {
        ...state,
        newsList: action.payload,
        isLoading: false,
        hasError: false,
      }
    }

    case "ERROR_LOADED_NEWS": {
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
