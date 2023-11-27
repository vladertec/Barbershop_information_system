import { updateVisit } from "../../api/visit"
import Error from "../../views/Error/Error"

const AppointmentBarberCard = ({
  name,
  surname,
  date,
  time,
  service,
  ifRefreshPage,
  email,
  isDone,
  id,
}) => {
  const updateAppointment = async (event, id) => {
    ifRefreshPage(false)
    event.preventDefault()
    const updateInfo = {
      isDone: true,
    }
    const result = await updateVisit(
      localStorage.getItem("accessToken"),
      id,
      updateInfo
    )
    if (result.status === 200) {
      ifRefreshPage(true)
    } else {
      <Error />
    }
  }

  return (
    <div className="appointment-barber-card">
      <div className="appointment-barber-card__text-container">
        <p className="appointment-barber-card__text">
          Time:{" "}
          <span className="appointment-barber-card__date">
            {date} at {time}
          </span>
        </p>
        <p className="appointment-barber-card__text">
          Client: {name} {surname}
        </p>
        <p className="appointment-barber-card__text">Email: {email}</p>
        <p className="appointment-barber-card__text">Service: {service}</p>
      </div>
      <div
        className="appointment-barber-card__btn-container"
        onClick={(event) => updateAppointment(event, id)}
      >
        <button className="appointment-barber-card__btn">Is done</button>
      </div>
    </div>
  )
}

export default AppointmentBarberCard
