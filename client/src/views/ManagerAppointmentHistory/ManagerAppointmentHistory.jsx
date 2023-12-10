import { useEffect, useState } from "react"
import ItemPagination from "../../components/Pagination/ItemPagination"
import { getAllVisits } from "../../api/visit"
import ManagerAppointmentCard from "../../components/ManagerAppointmentCard/ManagerAppointmentCard"

const ManagerAppointmentHistory = () => {
  const [appointmentHistory, setAppointmentHistory] = useState([])

  useEffect(() => {
    const appointmentInformation = async () => {
      try {
        const result = await getAllVisits(localStorage.getItem("accessToken"))
        if (result) {
          setAppointmentHistory(result)
        } else {
          setAppointmentHistory([])
        }
      } catch (error) {
        console.error("Error fetching user purchase history:", error)
      }
    }
    appointmentInformation()
  }, [])

  return (
    <div className="manager-appointment-history">
      {appointmentHistory.length === 0 ? (
        <div className="manager-appointment-history__empty">
          Appointment history is empty
        </div>
      ) : (
        <div>
          <p className="manager-appointment-history__text">
            Appointment history:
          </p>
          <div className="manager-appointment-history__card-container">
            {appointmentHistory.map((appointment) => {
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
                <ManagerAppointmentCard
                  key={appointment._id}
                  barberName={appointment.barber.name}
                  barberSurname={appointment.barber.surname}
                  name={appointment.name}
                  surname={appointment.surname}
                  email={appointment.email}
                  mobilePhone={appointment.mobilePhone}
                  service={appointment.service}
                  date={shortDate}
                  time={appointment.time}
                  isDone={appointment.isDone}
                />
              )
            })}
          </div>
          <div className="manager-appointment-history__pagination">
            <ItemPagination />
          </div>
        </div>
      )}
    </div>
  )
}

export default ManagerAppointmentHistory
