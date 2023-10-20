import { getNews } from "../../api/news"

export const fetchNews = () => (dispatch) => {
  dispatch({ type: "START_FETCH_NEWS" })
  getNews()
    .then((data) => {
      dispatch(loadedNews(data))
    })
    .catch(() => {
      dispatch(errorLoadedNews())
    })
}

export const loadedNews = (news) => {
  return {
    type: "LOADED_NEWS",
    payload: news,
  }
}

export const errorLoadedNews = () => ({
  type: "ERROR_LOADED_NEWS",
})
