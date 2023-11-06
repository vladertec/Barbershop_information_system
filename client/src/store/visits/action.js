import { getVisit } from "../../api/getVisit"

export const fetchVisits = () => (dispatch) => {
  dispatch({ type: "START_FETCH_VISITS" })
  getVisit()
    .then((data) => {
      dispatch(loadedVisits(data))
    })
    .catch(() => {
      dispatch(errorLoadedVisits())
    })
}

export const loadedVisits = (visits) => {
  return {
    type: "LOADED_VISITS",
    payload: visits,
  }
}

export const errorLoadedVisits = () => ({
  type: "ERROR_LOADED_VISITS",
})
