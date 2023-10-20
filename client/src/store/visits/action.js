import { getVisit } from "../../api/getVisit"

export const fetchVisits = () => (dispatch) => {
  getVisit().then((data) => {
    dispatch(loadedProducts(data))
  })
}

export const loadedProducts = (visits) => {
  return {
    type: "LOADED_VISIT",
    payload: visits,
  }
}
