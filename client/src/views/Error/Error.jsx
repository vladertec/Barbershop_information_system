import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="error">
      <div className="error__message-container">
        <h2 className="error__message">Ooops! Page not found...</h2>
        <Link to="/" >
          <button className="error__btn">Homepage</button>
        </Link>
      </div>
      <img className="error__img" alt="error" src="/img/error.png" />
    </div>
  )
}

export default Error
