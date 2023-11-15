import { useNavigate } from "react-router"

const Success = ({ words }) => {
  const navigate = useNavigate()

  return (
    <div className="success-container">
      <img
        className="success-container__img"
        src="/img/appointment/success.png"
        alt="success"
      />
      <p className="success-container__text">Hooray! Success action!</p>
      <button
        className="success-container__btn"
        onClick={() => {
          navigate("/")
        }}
      >
        Go to homepage
      </button>
    </div>
  )
}

export default Success
