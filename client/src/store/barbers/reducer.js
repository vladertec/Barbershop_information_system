const initialState = {
  barberList: [],
  isLoading: false,
  hasError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH_BARBERS": {
      return {
        ...state,
        isLoading: true,
      }
    }

    case "LOADED_BARBERS": {
      return {
        ...state,
        barberList: action.payload,
        isLoading: false,
      }
    }

    case "ERROR_LOADED_BARBERS": {
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
