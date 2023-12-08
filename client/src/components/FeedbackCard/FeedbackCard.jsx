const FeedbackCard = ({ name, surname, email, message }) => {
  return (
    <div className="feedback-card">
      <p className="feedback-card__text">Name: {name}</p>
      <p className="feedback-card__text">Surname: {surname}</p>
      <p className="feedback-card__text">Email: {email}</p>
      <p className="feedback-card__text">
        Message: <span className="feedback-card__message">{message}</span>
      </p>
    </div>
  )
}

export default FeedbackCard
