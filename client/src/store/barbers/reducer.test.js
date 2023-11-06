import reducer from "./reducer"

describe("barbers reducer", () => {
  const state = {
    barberList: [],
    isLoading: false,
    hasError: false,
  }

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      barberList: [],
      isLoading: false,
      hasError: false,
    })
  })

  describe("for START_FETCH_BARBERS action", () => {
    it("error barbers", () => {
      expect(
        reducer(state, {
          type: "START_FETCH_BARBERS",
          payload: true,
        })
      ).toEqual({
        ...state,
        isLoading: true,
      })
    })
  })

  describe("for LOADED_BARBER action", () => {
    it("loaded barbers", () => {
      expect(
        reducer(state, {
          type: "LOADED_BARBERS",
          payload: [
            {
              nameSurname: "Vladyslav Sarnavskyi",
              login: "sarnavsk",
              password: "qwerty",
            },
          ],
        })
      ).toEqual({
        ...state,
        barberList: [
          {
            nameSurname: "Vladyslav Sarnavskyi",
            login: "sarnavsk",
            password: "qwerty",
          },
        ],
        isLoading: false,
      })
    })
  })

  describe("for ERROR_LOADED_BARBERS action", () => {
    it("error load barbers", () => {
      expect(
        reducer(state, {
          type: "ERROR_LOADED_BARBERS",
          payload: true,
        })
      ).toEqual({
        ...state,
        hasError: true,
      })
    })
  })
})
