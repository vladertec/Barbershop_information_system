import { useEffect, useState } from "react"
import { getUserAppointmentHistory } from "../../api/user"
import AppointmentUserCard from "../../components/AppointmentUserCard/AppointmentUserCard"
import ItemPagination from "../../components/Pagination/ItemPagination"

const UserAppointmentHistory = () => {
  const [appointmentHistory, setAppointmentHistory] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const userInformation = async () => {
      try {
        const result = await getUserAppointmentHistory(
          localStorage.getItem("accessToken")
        )
        setAppointmentHistory(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    userInformation()
  }, [refreshPage])

  const ifRefreshPage = async (value) => {
    setRefreshPage(value)
  }

  return (
    <div className="user-appointment-history">
      {appointmentHistory.length === 0 ? (
        <div className="user-appointment-history__empty">
          Appointment history is empty
        </div>
      ) : (
        <div>
          <p className="user-appointment-history__text">
            Your appointment history:
          </p>
          <div className="user-appointment-history__card-container">
            {appointmentHistory.map((appointment, index) => {
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
                <AppointmentUserCard
                  key={index}
                  id={appointment._id}
                  name={appointment.name}
                  surname={appointment.surname}
                  date={shortDate}
                  time={appointment.time}
                  service={appointment.service}
                  barberName={appointment.barberId.name}
                  barberSurname={appointment.barberId.surname}
                  ifRefreshPage={ifRefreshPage}
                />
              )
            })}
          </div>
          <div className="user-appointment-history__pagination">
            <ItemPagination />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAppointmentHistory
