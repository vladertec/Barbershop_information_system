const ServiceCard = (props) => {
  const { imgPath, title, description } = props
  return (
    <div className="service-card">
      <img className="service-card__img" src={imgPath} alt="barberIcon"></img>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <div className="service-card__btn">Read »</div>
    </div>
  )
}

export default ServiceCard
