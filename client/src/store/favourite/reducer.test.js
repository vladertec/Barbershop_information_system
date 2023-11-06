import reducer from "./reducer"

describe("favourites reducer", () => {
  const state = {
    favouriteList: [
      {
        name: "Gel",
        description: "For body",
        vendorCode: 111111,
      },
      {
        name: "Balsam",
        description: "For hair",
        vendorCode: 222222,
      },
    ],
  }

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({ favouriteList: [] })
  })

  describe("for ADD_FAVOURITE action", () => {
    it("should add favourite", () => {
      expect(
        reducer(state, {
          type: "ADD_FAVOURITE",
          payload: {
            name: "Shampoo",
            description: "For head",
            vendorCode: 333333,
          },
        })
      ).toEqual({
        ...state,
        favouriteList: [
          {
            name: "Gel",
            description: "For body",
            vendorCode: 111111,
          },
          {
            name: "Balsam",
            description: "For hair",
            vendorCode: 222222,
          },
          {
            name: "Shampoo",
            description: "For head",
            vendorCode: 333333,
          },
        ],
      })
    })
  })

  describe("for REMOVE_FAVOURITE", () => {
    it("should remove favourite", () => {
      expect(
        reducer(state, {
          type: "REMOVE_FAVOURITE",
          payload: 222222,
        })
      ).toEqual({
        ...state,
        favouriteList: [
          {
            name: "Gel",
            description: "For body",
            vendorCode: 111111,
          },
        ],
      })
    })
  })
})
