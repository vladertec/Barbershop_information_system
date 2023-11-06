import { getBarbers } from "../../api/barber"

export const fetchBarbers = () => (dispatch) => {
  dispatch({ type: "START_FETCH_BARBERS" })
  getBarbers()
    .then((data) => {
      dispatch(loadedBarbers(data))
    })
    .catch(() => {
      dispatch(errorLoadedBarbers())
    })
}

export const loadedBarbers = (barbers) => {
  return {
    type: "LOADED_BARBERS",
    payload: barbers,
  }
}

export const errorLoadedBarbers = () => ({
  type: "ERROR_LOADED_BARBERS",
})
