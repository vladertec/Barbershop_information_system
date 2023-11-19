import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../api/userStatus"

const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ username: "", password: "" })

  const loginClick = async (event) => {
    event.preventDefault()
    const result = await loginUser(login)
    if (result.status === 200) {
      localStorage.setItem("accessToken", result.data.token)
      navigate("/")
    }
    console.log(result)
  }

  return (
    <div className="login">
      <p className="login__text">Do you have an account? Please, log in!</p>
      <div className="login__login-container">
        <img src="./img/Logo.svg" alt="Business view - Reports" />
        <div>
          <div className="login__input-group">
            <label className="login__input-name" htmlFor="email">
              Username
            </label>
            <input
              className="login__input"
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
