import { useState } from "react"
import { getBarbers } from "../../api/barber"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loadedBarbers } from "../../store/barbers/action"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, setLogin] = useState({ login: "", password: "" })

  const barberValidation = async () => {
    const result = await getBarbers()
    result.forEach((barber) => {
      if (barber.login === login.login && barber.password === login.password) {
        dispatch(loadedBarbers(barber))
        navigate("/login/barber")
      }
    })
  }

  return (
    <div className="login">
      <p className="login__text">If you a barber? Please, register!</p>
      <div className="login__login-container">
        <img src="./img/Logo.svg" alt="Business view - Reports" />
        <form>
          <div className="login__input-group">
            <label className="login__input-name" htmlFor="email">
              Login
            </label>
            <input
              className="login__input"
              type="text"
              name="login"
              value={login.login}
              onInput={(e) =>
                setLogin({
                  ...login,
                  login: e.target.value,
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
          <button className="login__btn" onClick={barberValidation}>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
