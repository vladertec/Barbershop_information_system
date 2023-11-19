import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../api/userStatus"

const Registration = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ username: "", password: "" })

  const registerClick = async (event) => {
    event.preventDefault()
    const result = await registerUser(login)
    if (result.status === 200) {
      navigate("/registration/success")
      localStorage.setItem("accessToken", result.token)
    }
  }

  return (
    <div className="registration">
      <p className="registration__text">
        Don't have an account? Please, register.
      </p>
      <div className="registration__registration-container">
        <img src="./img/Logo.svg" alt="Business view - Reports" />
        <form onSubmit={registerClick}>
          <div className="registration__input-group">
            <label className="registration__input-name" htmlFor="email">
              Username
            </label>
            <input
              className="registration__input"
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
          <div className="registration__input-group">
            <label className="registration__input-name" htmlFor="password">
              Password
            </label>
            <input
              className="registration__input"
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
          <button className="registration__btn">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Registration
