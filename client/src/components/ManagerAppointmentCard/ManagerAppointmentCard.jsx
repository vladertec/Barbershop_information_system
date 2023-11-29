const ManagerAppointmentCard = ({
  barberName,
  barberSurname,
  name,
  surname,
  email,
  mobilePhone,
  service,
  date,
  time,
  isDone,
}) => {
  return (
    <div className="appointment-manager-card">
      <div className="appointment-manager-card__text-container">
        <p className="appointment-manager-card__text">
          Time:{" "}
          <span className="appointment-manager-card__date">
            {date} at {time}
          </span>
        </p>
        <p className="appointment-manager-card__text">Service: {service}</p>
        <p className="appointment-manager-card__text">
          Barber: {barberName} {barberSurname}
        </p>
        <p className="appointment-manager-card__text">
          Client: {name} {surname}
        </p>
        <p className="appointment-manager-card__text">Email: {email}</p>
        <p className="appointment-manager-card__text">Phone: {mobilePhone}</p>
        <p className="appointment-manager-card__text">
          Is done: {isDone ? "Yes" : "No"}
        </p>
      </div>
    </div>
  )
}

export default ManagerAppointmentCard
