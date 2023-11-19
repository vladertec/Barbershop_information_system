import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { Link } from "react-router-dom"
import HeaderMenuList from "../HeaderMenuList/HeaderMenuList"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import HeaderMenuListPhoneVersion from "../HeaderMenuListPhoneVersion/HeaderMenuListPhoneVersion"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useSelector } from "react-redux"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cartList = useSelector((state) => state.cart.cartList)

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
          <HeaderMenuListPhoneVersion />{" "}
        </div>
      )}

      <div className="header__user-container active-container">
        <Link to="/login" className="active-container__btn-link">
          <button className="active-container__book-btn" type="button">
            Login
          </button>
        </Link>

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
              {cartList.length}
            </p>
          </Link>

          <Link to="/favourite" className="active-container__shopping-link">
            <FavoriteBorderIcon className="active-container__shopping-icon" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
