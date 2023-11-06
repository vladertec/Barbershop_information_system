import reducer from "./reducer"

describe("visits reducer", () => {
  const state = {
    visitList: [],
    isLoading: false,
    hasError: false,
  }

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      visitList: [],
      isLoading: false,
      hasError: false,
    })
  })

  describe("for START_FETCH_VISITS action", () => {
    it("if visits loaded", () => {
      expect(
        reducer(state, {
          type: "START_FETCH_VISITS",
          payload: true,
        })
      ).toEqual({
        ...state,
        isLoading: true,
      })
    })
  })

  describe("for LOADED_VISITS action", () => {
    it("loaded visits", () => {
      expect(
        reducer(state, {
          type: "LOADED_VISITS",
          payload: [
            {
              name: "Vladyslav",
              surname: "Kildan",
              mobilePhone: 380981181505,
              service: "Haircat",
              barber: "Vladyslav Sarnavskyi",
            },
          ],
        })
      ).toEqual({
        ...state,
        visitList: [
          {
            name: "Vladyslav",
            surname: "Kildan",
            mobilePhone: 380981181505,
            service: "Haircat",
            barber: "Vladyslav Sarnavskyi",
          },
        ],
        isLoading: false,
      })
    })
  })

  describe("for ERROR_LOADED_VISITS action", () => {
    it("error load visits", () => {
      expect(
        reducer(state, {
          type: "ERROR_LOADED_VISITS",
          payload: true,
        })
      ).toEqual({
        ...state,
        hasError: true,
      })
    })
  })
})
