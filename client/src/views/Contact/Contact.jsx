import { useState } from "react"
import { sendContact } from "../../api/contact"
import LogoBrands from "../../components/BrandLogos/BrandLogos"

const Contact = () => {
  const [contactObject, setContactObject] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  })

  const sendContactInformation = (e) => {
    sendContact(contactObject)
  }

  return (
    <div className="contact-container">
      <section className="blog-section__photo img">
        <img
          className="img__blog"
          src="./img/contact/map.png"
          alt="mapPicture"
        />
      </section>

      <section className="contact-container__help contact-help">
        <div className="contact-help__container contact-us">
          <p className="contact-us__text">Contact Us</p>
          <h3 className="contact-us__title">
            Need Yor any help Contact with Us
          </h3>

          <div className="contact-us__help-block">
            <div className="contact-us__icon">
              <img
                className="contact-us__img"
                src="./img/contact/mobile.svg"
                alt="mobilePhone"
              />
            </div>

            <div className="contact-us__text-block">
              <p className="contact-us__title-emergency">Emergency Help</p>
              <p className="contact-us__info">+123 ( 458 ) 896 895</p>
            </div>
          </div>

          <div className="contact-us__help-block">
            <div className="contact-us__icon">
              <img
                className="contact-us__img"
                src="./img/contact/email.svg"
                alt="Email"
              />
            </div>
            <div className="contact-us__text-block">
              <p className="contact-us__title-emergency">Quick Email!</p>
              <p className="contact-us__info">Support@gamil.com</p>
            </div>
          </div>

          <div className="contact-us__help-block">
            <div className="contact-us__icon">
              <img
                className="contact-us__img"
                src="./img/contact/location.svg"
                alt="location"
              />
            </div>
            <div className="contact-us__text-block">
              <p className="contact-us__title-emergency">Office Address</p>
              <p className="contact-us__info">
                66W3+Q4G Buxton, United Kingdom
              </p>
            </div>
          </div>
        </div>



        


        

        <div className="contact-help__send-message message">
          <h3 className="message__title">Send Message</h3>
          <div className="message__line"></div>
          <form className="message__input-block">
            <input
              className="message__input"
              type="text"
              placeholder="Name"
              name="name"
              value={contactObject.name}
              onInput={(e) =>
                setContactObject({ ...contactObject, name: e.target.value })
              }
            ></input>
            <input
              className="message__input"
              type="text"
              placeholder="Surname"
              name="surname"
              value={contactObject.surname}
              onInput={(e) =>
                setContactObject({ ...contactObject, surname: e.target.value })
              }
            ></input>
            <input
              className="message__input"
              type="email"
              placeholder="Email"
              name="email"
              value={contactObject.email}
              onInput={(e) =>
                setContactObject({ ...contactObject, email: e.target.value })
              }
            ></input>
            <input
              className="message__input"
              type="text"
              placeholder="Message"
              name="message"
              value={contactObject.message}
              onInput={(e) =>
                setContactObject({ ...contactObject, message: e.target.value })
              }
            ></input>
            <button
              onClick={sendContactInformation}
              className="message__btn"
              type="button"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <LogoBrands />
    </div>
  )
}

export default Contact
