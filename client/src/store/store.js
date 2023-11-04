import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import newsReducer from "./news/reducer"
import barberReducer from "./barbers/reducer"
import productsReducer from "./products/reducer"
import visitReducer from "./visits/reducer"
import cartListReducer from "./cart/reducer"
import favouritesListReducer from "./favourite/reducer"
import thunk from "redux-thunk"

const syncCartListLS = (store) => {
  return function (next) {
    return function (action) {
      if (
        action.type === "ADD_PRODUCT_IN_CART" ||
        action.type === "REMOVE_PRODUCT_FROM_CART" ||
        action.type === "REMOVE_ALL_PRODUCT_FROM_CART"
      ) {
        const result = next(action) // starts reducer
        localStorage.setItem(
          "myCart",
          JSON.stringify(store.getState().cart.cartList)
        )
        return result
      }
      return next(action)
    }
  }
}

const syncFavouriteListLS = (store) => {
  return function (next) {
    return function (action) {
      if (
        action.type === "ADD_FAVOURITE" ||
        action.type === "REMOVE_FAVOURITE"
      ) {
        const result = next(action) // starts reducer
        localStorage.setItem(
          "myFavorites",
          JSON.stringify(store.getState().favouriteList)
        )
        return result
      }
      return next(action)
    }
  }
}

export const reducer = combineReducers({
  news: newsReducer,
  products: productsReducer,
  barber: barberReducer,
  visit: visitReducer,
  cart: cartListReducer,
  favourite: favouritesListReducer,
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, syncCartListLS, syncFavouriteListLS), devTools)
)

export default store
