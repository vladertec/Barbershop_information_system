import reducer from "./reducer"

describe("products reducer", () => {
  const state = {
    productsList: [],
    isLoading: false,
    hasError: false,
  }

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      productsList: [],
      isLoading: false,
      hasError: false,
    })
  })

  describe("for START_FETCH_PRODUCTS action", () => {
    it("error products in shop", () => {
      expect(
        reducer(state, {
          type: "START_FETCH_PRODUCTS",
          payload: true,
        })
      ).toEqual({
        ...state,
        isLoading: true,
      })
    })
  })

  describe("for LOADED_PRODUCTS action", () => {
    it("loaded products in shop", () => {
      expect(
        reducer(state, {
          type: "LOADED_PRODUCTS",
          payload: [
            {
              name: "Gel for hair",
              description:
                "Restorative shampoo based on oat extract is recommended for intensive nutrition and restoration of all types of hair. Gives hair elasticity, firmness and shine. The secret of this line lies in the presence of a valuable component gifted to us by nature — oat extract.",
              photos: [
                "https://res.cloudinary.com/diyffdtzn/image/upload/v1672087925/barbershop/imgonline-com-ua-Resize-pVruSfU29lzkjs7_be2a7d.png",
              ],
              price: 55,
            },
          ],
        })
      ).toEqual({
        ...state,
        productsList: [
          {
            name: "Gel for hair",
            description:
              "Restorative shampoo based on oat extract is recommended for intensive nutrition and restoration of all types of hair. Gives hair elasticity, firmness and shine. The secret of this line lies in the presence of a valuable component gifted to us by nature — oat extract.",
            photos: [
              "https://res.cloudinary.com/diyffdtzn/image/upload/v1672087925/barbershop/imgonline-com-ua-Resize-pVruSfU29lzkjs7_be2a7d.png",
            ],
            price: 55,
          },
        ],
        isLoading: false,
      })
    })
  })

  describe("for ERROR_LOADED_PRODUCTS action", () => {
    it("error load products in shop", () => {
      expect(
        reducer(state, {
          type: "ERROR_LOADED_PRODUCTS",
          payload: true,
        })
      ).toEqual({
        ...state,
        hasError: true,
      })
    })
  })
})
