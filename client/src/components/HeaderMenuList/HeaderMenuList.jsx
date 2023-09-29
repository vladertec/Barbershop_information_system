import { Link } from "react-router-dom"

const HeaderMenuList = () => {
  return (
    <div className="menu-header">
      <Link to="/" className="menu-header__text">
        HOME +
      </Link>
      <Link to="/barbers" className="menu-header__text">
        BARBERS +
      </Link>
      <Link to="/blog" className="menu-header__text">
        BLOG +
      </Link>
      <Link to="/photo" className="menu-header__text">
        PHOTO +
      </Link>
      <Link to="/shop" className="menu-header__text">
        SHOP +
      </Link>
      <Link to="/contact" className="menu-header__text">
        CONTACT +
      </Link>
    </div>
  )
}

export default HeaderMenuList