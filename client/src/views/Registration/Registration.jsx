import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../api/userStatus"
import CustomErrorMessage from "../../components/ErrorMessageCustom/ErrorMessageCustom"

const Registration = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ username: "", password: "" })
  const [error, setError] = useState({ statusError: false, message: "" })

  const registerClick = async (event) => {
    event.preventDefault()
    setError({
      ...error,
      statusError: false,
      message: "",
    })
    const result = await registerUser(login)
    if (result.status === 200) {
      navigate("/registration/success")
    } else {
      const errorMessage = result.response.data.message
      setError({
        ...error,
        statusError: true,
        message: errorMessage,
      })
    }
  }

  return (
    <div className="registration">
      <p className="registration__text">
        Don't have an account? Please, register.
      </p>
      <div className="registration__registration-container">
        <img
          className="registration__img"
          src="./img/Logo.svg"
          alt="Business view - Reports"
        />
        <form
          className="registration__form"
          onSubmit={registerClick}
          autocomplete="on"
        >
          <div className="registration__input-group">
            <label className="registration__input-name" htmlFor="username">
              Username
            </label>
            <input
              className="registration__input"
              type="text"
              name="login"
              id="username"
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
          <button className="registration__btn">Register</button>
        </form>
        {error && (
          <div className="registration__error-message">
            <CustomErrorMessage name={error.message} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Registration
