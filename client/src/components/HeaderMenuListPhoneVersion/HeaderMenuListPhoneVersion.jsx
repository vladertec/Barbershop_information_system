import { Link } from "react-router-dom"

const HeaderMenuListPhoneVersion = () => {
  return (
    <div className="menu-header-mobile">
      <Link to="/" className="menu-header-mobile__text">
        HOME +
      </Link>
      <Link to="/barbers" className="menu-header-mobile__text">
        BARBERS +
      </Link>
      <Link to="/blog" className="menu-header-mobile__text">
        BLOG +
      </Link>
      <Link to="/photo" className="menu-header-mobile__text">
        PHOTO +
      </Link>
      <Link to="/shop" className="menu-header-mobile__text">
        SHOP +
      </Link>
      <Link to="/contact" className="menu-header-mobile__text">
        CONTACT +
      </Link>
    </div>
  )
}

export default HeaderMenuListPhoneVersion
