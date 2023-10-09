function StatisticBox(props) {
  const { imgPath, number, name } = props
  return (
    <div className="statistic-card">
      <div>
        <img className="statistic-card__img" src={imgPath} alt={name}></img>
      </div>
      <div className="statistic-card__info">
        <p className="statistic-card__number">{number}</p>
        <p className="statistic-card__name">{name}</p>
      </div>
    </div>
  )
}

export default StatisticBox
