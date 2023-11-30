import { Link } from "react-router-dom"
import { getUser } from "../../api/user"
import { useEffect, useState } from "react"

const HeaderMenuList = () => {
  const [userData, setUserData] = useState({
    role: "",
  })
  let linkTo = "/"

  useEffect(() => {
    const userInformation = async () => {
      if (localStorage.getItem("accessToken")) {
        const result = await getUser(localStorage.getItem("accessToken"))
        if (result.roles && result.roles.length > 0) {
          setUserData({
            role: result.roles[0],
          })
        } else {
          setUserData({
            role: "",
          })
        }
      }
    }
    userInformation()
  }, [localStorage.getItem("accessToken")])

  switch (userData.role) {
    case "ADMIN":
      linkTo = "/managerPage"
      break
    case "USER":
      linkTo = "/userPage"
      break
    case "BARBER":
      linkTo = "/barberPage"
      break
    default:
      break
  }

  return (
    <div className="menu-header">
      <Link to="/" className="menu-header__text">
        HOME +
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

      {localStorage.getItem("accessToken") ? (
        <Link to={linkTo} className="menu-header__text">
          CABINET +
        </Link>
      ) : (
        <Link to="/barbers" className="menu-header__text">
          BARBERS +
        </Link>
      )}
    </div>
  )
}

export default HeaderMenuList
