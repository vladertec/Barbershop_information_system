import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../api/userStatus"
import CustomErrorMessage from "../../components/ErrorMessageCustom/ErrorMessageCustom"

const UserView = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    role: "BARBER",
  })

  const [error, setError] = useState({ statusError: false, message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(userData)
    setError({
      ...error,
      statusError: false,
      message: "",
    })
    const result = await registerUser(userData)
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
    <div className="manager-page">
      <div className="manager-page__container">
        <div className="manager-page__form-container">
          <p className="manager-page__title">Register new barber:</p>
          <form onSubmit={handleSubmit} className="manager-page__form">
            <div className="manager-page__information">
              <label className="manager-page__label" htmlFor="username">
                Username:
              </label>
              <input
                className="manager-page__name-field"
                placeholder="Barber username"
                id="username"
                name="username"
                type="text"
                value={userData.username}
                onChange={handleChange}
              />
            </div>

            <div className="manager-page__information">
              <label className="manager-page__label" htmlFor="password">
                Password:
              </label>
              <input
                className="manager-page__name-field"
                placeholder="Password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>

            <div className="manager-page__btn-update">
              <button className="manager-page__btn" type="submit">
                Register barber
              </button>
            </div>
            {error && (
              <div className="registration__error-message">
                <CustomErrorMessage name={error.message} />
              </div>
            )}
          </form>
        </div>
        <div className="manager-page__btn-history">
          <Link
            to="/managerPage/sendEmailMessages"
            className="manager-page__btn"
          >
            Send email messages
          </Link>
          <Link
            to="/managerPage/appointmentHistory"
            className="manager-page__btn"
          >
            See appointments
          </Link>
          <Link to="/managerPage/feedbackHistory" className="manager-page__btn">
            See feedbacks
          </Link>
          <Link to="/managerPage/purchaseHistory" className="manager-page__btn">
            See orders
          </Link>

          <Link to="/managerPage/addNews" className="manager-page__btn">
            Add news
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserView
