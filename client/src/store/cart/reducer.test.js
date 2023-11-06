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
    buyModalIsOpen: false,
  }

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      cartList: [],
      modalIsOpen: false,
      buyModalIsOpen: false,
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

  describe("for HIDE_MODAL action", () => {
    it("should hide modal when click to add to cart product", () => {
      expect(
        reducer(state, {
          type: "HIDE_MODAL",
          payload: true,
        })
      ).toEqual({
        ...state,
        modalIsOpen: true,
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

  describe("for SHOW_BUY_MODAL action", () => {
    it("should show modal when click buy product", () => {
      expect(
        reducer(state, {
          type: "SHOW_BUY_MODAL",
          payload: true,
        })
      ).toEqual({
        ...state,
        buyModalIsOpen: true,
      })
    })
  })

  describe("for HIDE_BUY_MODAL action", () => {
    it("should hide modal when click buy product", () => {
      expect(
        reducer(state, {
          type: "HIDE_BUY_MODAL",
          payload: false,
        })
      ).toEqual({
        ...state,
        buyModalIsOpen: false,
      })
    })
  })
})
