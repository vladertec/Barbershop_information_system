const initialState = {
  visitList: [],
  isLoading: false,
  hasError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH_VISITS": {
      return {
        ...state,
        isLoading: true,
      }
    }

    case "LOADED_VISITS": {
      return {
        ...state,
        visitList: action.payload,
        isLoading: false,
      }
    }

    case "ERROR_LOADED_VISITS": {
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
