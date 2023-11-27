import { useEffect, useState } from "react"
import { getUserAppointmentHistory } from "../../api/user"
import ItemPagination from "../../components/Pagination/ItemPagination"
import AppointmentBarberCard from "../../components/AppointmentBarberCard/AppointmentBarberCard"

const BarberAppointmentSchedule = () => {
  const [appointmentHistory, setAppointmentHistory] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const barberInformation = async () => {
      try {
        const result = await getUserAppointmentHistory(
          localStorage.getItem("accessToken")
        )
        console.log(result)
        setAppointmentHistory(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    barberInformation()
  }, [refreshPage])

  const ifRefreshPage = async (value) => {
    setRefreshPage(value)
  }

  return (
    <div className="barber-appointment-history">
      {appointmentHistory.length === 0 ? (
        <div className="barber-appointment-history__empty">
          Appointments is empty
        </div>
      ) : (
        <div>
          <p className="barber-appointment-history__text">
            Your appointment schedule:
          </p>
          <div className="barber-appointment-history__card-container">
            {appointmentHistory.map((appointment, index) => {
              if (!appointment.isDone) {
                const fullDate = new Date(appointment.date)
                const shortDate = `${fullDate.getFullYear()}-${(
                  fullDate.getMonth() + 1
                )
                  .toString()
                  .padStart(2, "0")}-${fullDate
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`

                return (
                  <AppointmentBarberCard
                    key={index}
                    id={appointment._id}
                    name={appointment.name}
                    surname={appointment.surname}
                    email={appointment.email}
                    date={shortDate}
                    time={appointment.time}
                    service={appointment.service}
                    isDone={appointment.isDone}
                    ifRefreshPage={ifRefreshPage}
                  />
                )
              }
            })}
          </div>
          <div className="barber-appointment-history__pagination">
            <ItemPagination />
          </div>
        </div>
      )}
    </div>
  )
}

export default BarberAppointmentSchedule
