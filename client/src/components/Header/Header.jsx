import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { Link, useNavigate } from "react-router-dom"
import HeaderMenuList from "../HeaderMenuList/HeaderMenuList"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import HeaderMenuListPhoneVersion from "../HeaderMenuListPhoneVersion/HeaderMenuListPhoneVersion"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../api/user"
import { removeAllCart } from "../../store/cart/action"
import { removeAllFavourite } from "../../store/favourite/action"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const userCartList = useSelector((state) => state.cart.cartList)
  const userFavouriteList = useSelector(
    (state) => state.favourite.favouriteList
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const updateUserData = {
    cartList: userCartList,
    favouriteList: userFavouriteList,
  }

  const logoutClick = async (event) => {
    event.preventDefault()
    if (localStorage.getItem("accessToken").length > 0) {
      await updateUser(localStorage.getItem("accessToken"), updateUserData)
      dispatch(removeAllCart([]))
      dispatch(removeAllFavourite([]))
      localStorage.setItem("accessToken", [])
    }
    navigate("/login")
  }

  return (
    <div className="header">
      <Link to="/" className="header__logo-link">
        <img src="/img/Logo.svg" className="header__logo-img" alt="logo"></img>
      </Link>

      <div className="header__menu-list">
        <HeaderMenuList />
      </div>

      {isOpen && (
        <div className="header__menu-list-phone">
          <HeaderMenuListPhoneVersion />
        </div>
      )}

      <div className="header__user-container active-container">
        <div className="active-container__icons-container">
          <Link
            className="active-container__menu-link"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <MenuIcon className="active-container__menu-icon" />
          </Link>

          <Link to="/cart" className="active-container__shopping-link">
            <ShoppingBasketIcon className="active-container__shopping-icon" />
            <p className="active-container__shopping-number">
              {userCartList.length}
            </p>
          </Link>

          <Link to="/favourite" className="active-container__shopping-link">
            <FavoriteBorderIcon className="active-container__shopping-icon" />
          </Link>

          <Link className="active-container__btn-link">
            <button
              className="active-container__book-btn"
              onClick={(event) => logoutClick(event)}
            >
              {localStorage.getItem("accessToken") &&
              localStorage.getItem("accessToken").length > 0
                ? "Logout"
                : "Login"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
