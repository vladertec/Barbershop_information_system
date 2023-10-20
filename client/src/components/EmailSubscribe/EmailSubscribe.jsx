import { useState } from "react"
import { sendEmail } from "../../api/email"

const SubscribeEmail = () => {
  const [email, setEmail] = useState({ email: "" })

  const sendEmailInformation = (e) => {
    sendEmail(email)
  }

  return (
    <section className="email">
      <h2 className="email__title">Subscribe Our Newsletter</h2>
      <div className="email__container">
        <input
          className="email__input"
          type="email"
          value={email.email}
          onInput={(e) => setEmail({ ...email, email: e.target.value })}
          placeholder="Email"
          maxLength="22"
          required
        ></input>
        <button
          onClick={sendEmailInformation}
          className="email__btn"
          type="button"
        >
          SUBSCRIBE
        </button>
      </div>
    </section>
  )
}

export default SubscribeEmail
