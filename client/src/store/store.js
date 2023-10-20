import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import newsReducer from "./news/reducer"
import barberReducer from "./barbers/reducer"
import productsReducer from "./products/reducer"
import visitReducer from "./visits/reducer"
import thunk from "redux-thunk"

export const reducer = combineReducers({
  news: newsReducer,
  products: productsReducer,
  barber: barberReducer,
  visit: visitReducer,
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f

const store = createStore(reducer, compose(applyMiddleware(thunk), devTools))

export default store
