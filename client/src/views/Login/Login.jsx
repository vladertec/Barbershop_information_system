import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../api/userStatus"
import CustomErrorMessage from "../../components/ErrorMessageCustom/ErrorMessageCustom"
import { getUser } from "../../api/user"
import { useDispatch } from "react-redux"
import { updateCart } from "../../store/cart/action"
import { updateFavourite } from "../../store/favourite/action"

const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ username: "", password: "" })
  const [error, setError] = useState({ statusError: false, message: "" })
  const dispatch = useDispatch()

  const loginClick = async (event) => {
    event.preventDefault()
    setError({
      ...error,
      statusError: false,
      message: "",
    })

    const token = await loginUser(login)
    if (token.status === 200) {
      localStorage.setItem("accessToken", token.data.token)
      const result = await getUser(localStorage.getItem("accessToken"))
      dispatch(updateCart(result.cartList))
      dispatch(updateFavourite(result.favouriteList))
      navigate("/")
    } else {
      const errorMessage = token.response.data.message
      setError({
        ...error,
        statusError: true,
        message: errorMessage,
      })
    }
  }

  return (
    <div className="login">
      <p className="login__text">Do you have an account? Please, log in!</p>
      <div className="login__login-container">
        <img
          className="login__img"
          src="./img/Logo.svg"
          alt="Business view - Reports"
        />
        <div>
          <div className="login__input-group">
            <label className="login__input-name" htmlFor="username">
              Username
            </label>
            <input
              className="login__input"
              id="username"
              type="text"
              name="login"
              value={login.username}
              onInput={(e) =>
                setLogin({
                  ...login,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div className="login__input-group">
            <label className="login__input-name" htmlFor="password">
              Password
            </label>
            <input
              className="login__input"
              type="text"
              name="password"
              id="password"
              value={login.password}
              onInput={(e) =>
                setLogin({
                  ...login,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button className="login__btn" onClick={(event) => loginClick(event)}>
            Log In
          </button>
        </div>
        {error && (
          <div className="login__error-message">
            <CustomErrorMessage name={error.message} />
          </div>
        )}
        <Link to="/registration" className="login__registration-link">
          <span className="login__registration-text">
            If you are not registered, please do it.
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Login
