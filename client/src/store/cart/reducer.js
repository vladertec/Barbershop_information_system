export const getCartListFromLS = () => {
  try {
    const cart = localStorage.getItem("myCart")
    if (!cart) return []
    const parsed = JSON.parse(cart)
    return parsed
  } catch (e) {
    return []
  }
}

const initialState = {
  cartList: getCartListFromLS(),
  modalIsOpen: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_IN_CART": {
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
        modalIsOpen: true,
      }
    }

    case "REMOVE_PRODUCT_FROM_CART": {
      return {
        ...state,
        cartList: state.cartList.filter(
          (card) => card.vendorCode !== action.payload
        ),
      }
    }

    case "REMOVE_ALL_PRODUCT_FROM_CART": {
      return {
        ...state,
        cartList: action.payload,
      }
    }
      
    case "UPDATE_PRODUCT_IN_CART": {
      return {
        ...state,
        cartList: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
