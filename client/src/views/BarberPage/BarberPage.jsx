import { useSelector } from "react-redux"
import VisitCard from "../../components/VisitCard/VisitCard"

const BarberPage = () => {
  const nameBarber = useSelector((state) => state.barber.barberList.nameSurname)
  const visits = useSelector((state) => state.visit.visitList)

  return (
    <div className="barberschedule-container">
      <p className="barberschedule-container__text">Hello, dear {nameBarber}</p>

      <div className="barberschedule-container__card">
        {visits.map((visit) => {
          if (visit.barber === nameBarber) {
            return (
              <VisitCard
                key={visit._id}
                name={visit.name}
                surname={visit.surname}
                date={visit.date}
                time={visit.time}
                service={visit.service}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default BarberPage
