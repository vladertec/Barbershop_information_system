import { deleteVisit } from "../../api/visit"
import Error from "../../views/Error/Error"

const AppointmentUserCard = ({
  name,
  surname,
  date,
  time,
  service,
  barberName,
  barberSurname,
  id,
  ifRefreshPage,
}) => {
  const deleteAppointment = async (event, id) => {
    ifRefreshPage(false)
    event.preventDefault()
    const result = await deleteVisit(localStorage.getItem("accessToken"), id)
    if (result.status === 200) {
      ifRefreshPage(true)
    } else {
      <Error />
    }
  }

  return (
    <div className="appointment-card">
      <div className="appointment-card__text-container">
        <p className="appointment-card__text">
          Client: {name} {surname}
        </p>
        <p className="appointment-card__text">Service: {service}</p>
        <p className="appointment-card__text">
          Time: {date} at {time}
        </p>
        <p className="appointment-card__text">
          Barber: {barberName} {barberSurname}
        </p>
      </div>
      <div
        className="appointment-card__btn-container"
        onClick={(event) => deleteAppointment(event, id)}
      >
        <button className="appointment-card__btn">Cancel</button>
      </div>
    </div>
  )
}

export default AppointmentUserCard
