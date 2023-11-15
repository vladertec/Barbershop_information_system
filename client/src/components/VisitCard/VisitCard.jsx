const VisitCard = ({ name, surname, date, time, service }) => {
  return (
    <div className="visit-card">
      <p className="visit-card__name">
        {name} {surname}
      </p>
      <p className="visit-card__date">
        {date} {time}
      </p>
      <p className="visit-card__service">{service}</p>
    </div>
  )
}

export default VisitCard
