import reducer from "./reducer"

describe("news reducer", () => {
  const state = {
    newsList: [
      {
        name: "New haircut is here",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
        photos: [
          "https://res.cloudinary.com/diyffdtzn/image/upload/v1671997825/barbershop/blog-1_y9i65f.png",
        ],
      },
    ],
    isLoading: false,
    hasError: false,
  }

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      newsList: [],
      isLoading: false,
      hasError: false,
    })
  })

  describe("for START_FETCH_NEWS action", () => {
    it("error load news in blog", () => {
      expect(
        reducer(state, {
          type: "START_FETCH_NEWS",
          payload: true,
        })
      ).toEqual({
        ...state,
        isLoading: true,
      })
    })
  })

  describe("for LOADED_NEWS action", () => {
    it("loaded news in blog", () => {
      expect(
        reducer(state, {
          type: "LOADED_NEWS",
          payload: [
            {
              name: "New balsam is here",
              description:
                "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
              photos: [
                "https://res.cloudinary.com/diyffdtzn/image/upload/v1671997825/barbershop/blog-1_y9i65f.png-2",
              ],
            },
          ],
        })
      ).toEqual({
        ...state,
        newsList: [
          {
            name: "New balsam is here",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
            photos: [
              "https://res.cloudinary.com/diyffdtzn/image/upload/v1671997825/barbershop/blog-1_y9i65f.png-2",
            ],
          },
        ],
        isLoading: false,
      })
    })
  })

  describe("for ERROR_LOADED_NEWS action", () => {
    it("error load news in blog", () => {
      expect(
        reducer(state, {
          type: "ERROR_LOADED_NEWS",
          payload: true,
        })
      ).toEqual({
        ...state,
        hasError: true,
      })
    })
  })
})
