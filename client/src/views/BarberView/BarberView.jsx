import { useEffect, useState } from "react"
import { getUser, updateNumberBarbershop, updateUser } from "../../api/user"
import { Link } from "react-router-dom"

const BarberView = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
  })

  const [barbershopNumber, setBarbershopNumber] = useState({
    number: "",
  })

  useEffect(() => {
    const userInformation = async () => {
      const result = await getUser(localStorage.getItem("accessToken"))

      setUserData({
        name: result.name || "",
        surname: result.surname || "",
        email: result.email || "",
        number: result.number || "",
      })
    }
    userInformation()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleChange2 = (e) => {
    const { name, value } = e.target
    setBarbershopNumber((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateUser(localStorage.getItem("accessToken"), userData)
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await updateNumberBarbershop(
      localStorage.getItem("accessToken"),
      barbershopNumber
    )
  }

  return (
    <div className="user-page">
      <div className="user-page__container">
        <div className="user-page__form-container">
          <p className="user-page__title">Your personal information:</p>
          <form onSubmit={handleSubmit} className="user-page__form">
            <div className="user-page__information">
              <label className="user-page__label" htmlFor="name">
                Name:
              </label>
              <input
                className="user-page__name-field"
                placeholder="Name"
                id="name"
                name="name"
                type="text"
                value={userData.name}
                onChange={handleChange}
              />
            </div>

            <div className="user-page__information">
              <label className="user-page__label" htmlFor="surname">
                Surname:
              </label>
              <input
                className="user-page__name-field"
                placeholder="Surname"
                id="surname"
                name="surname"
                value={userData.surname}
                onChange={handleChange}
              />
            </div>

            <div className="user-page__information">
              <label className="user-page__label" htmlFor="surname">
                Email:
              </label>
              <input
                className="user-page__name-field"
                placeholder="example@gmail.com"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>

            <div className="user-page__information">
              <label className="user-page__label" htmlFor="number">
                Mobile number:
              </label>
              <input
                className="user-page__name-field"
                placeholder="Mobile number"
                id="number"
                name="number"
                value={userData.number}
                onChange={handleChange}
              />
            </div>
            <div className="user-page__btn-update">
              <button className="user-page__btn" type="submit">
                Update information
              </button>
            </div>
          </form>

          <form onSubmit={handleSubmit2} className="user-page__form">
            <div className="user-page__information">
              <label className="user-page__label" htmlFor="number">
                Barbershop number:
              </label>
              <input
                className="user-page__name-field"
                placeholder="Barbershop number"
                id="number"
                name="number"
                value={barbershopNumber.number}
                onChange={handleChange2}
              />
            </div>
            <div className="user-page__btn-update">
              <button className="user-page__btn" type="submit">
                Add number
              </button>
            </div>
          </form>
        </div>
        <div className="user-page__btn-history">
          <Link to="/barberPage/appointmentsBarber" className="user-page__btn">
            Go to Appointments
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BarberView
