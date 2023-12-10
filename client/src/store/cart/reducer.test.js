import reducer from "./reducer"

describe("cart reducer", () => {
  const state = {
    cartList: [
      {
        name: "Gel",
        description: "For body",
        vendorCode: 111111,
      },
    ],
    modalIsOpen: false,
  }

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      cartList: [],
      modalIsOpen: false,
    })
  })

  describe("for ADD_PRODUCT_IN_CART action", () => {
    it("add one product in cart", () => {
      expect(
        reducer(state, {
          type: "ADD_PRODUCT_IN_CART",
          payload: {
            name: "Shampoo",
            description: "For head",
            vendorCode: 222222,
          },
        })
      ).toEqual({
        ...state,
        cartList: [
          {
            name: "Gel",
            description: "For body",
            vendorCode: 111111,
          },
          {
            name: "Shampoo",
            description: "For head",
            vendorCode: 222222,
          },
        ],
        modalIsOpen: true,
      })
    })
  })

  describe("for REMOVE_PRODUCT_FROM_CART action", () => {
    it("remove one product from cart", () => {
      expect(
        reducer(state, {
          type: "REMOVE_PRODUCT_FROM_CART",
          payload: 222222,
        })
      ).toEqual({
        ...state,
        cartList: [
          {
            name: "Gel",
            description: "For body",
            vendorCode: 111111,
          },
        ],
      })
    })
  })

  describe("for REMOVE_ALL_PRODUCT_FROM_CART action", () => {
    it("should remove all products from cart", () => {
      expect(
        reducer(state, {
          type: "REMOVE_ALL_PRODUCT_FROM_CART",
          payload: [],
        })
      ).toEqual({
        ...state,
        cartList: [],
      })
    })
  })

})
