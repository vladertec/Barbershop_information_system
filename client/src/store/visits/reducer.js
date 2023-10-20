const initialState = {
  visitList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADED_VISIT": {
      return {
        visitList: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
