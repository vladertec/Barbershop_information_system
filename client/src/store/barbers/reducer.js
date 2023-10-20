const initialState = {
  barberList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADED_BARBER": {
      return {
        barberList: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
