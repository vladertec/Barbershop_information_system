import React, { useEffect, useState } from "react"
import { Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { createVisit } from "../../api/visit"
import Error from "../Error/Error"
import { getBarbers } from "../../api/barber"
import emailjs from "emailjs-com"

const MakeAppointment = () => {
  const navigate = useNavigate()
  const [barbers, setBarbers] = useState([])

  const [appointmentObject, setAppointmentObject] = useState({
    name: "",
    surname: "",
    email: "",
    mobilePhone: 380,
    service: "",
    barber: "",
    date: "",
    time: "",
  })

  useEffect(() => {
    const namesBarbers = async () => {
      const result = await getBarbers()
      setBarbers(result)
    }
    namesBarbers()
  }, [])

  const sendEmail = (email, userName, date, time) => {
    emailjs
      .send(
        "service_a7nlbge",
        "template_a21vh6v",
        {
          name: userName,
          email: `${email}`,
          message: `Thanks for your appointment! Your time: ${date} at ${time}. Have a good day!`,
        },
        "b-9jRpofu0_GJSdEI"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response)
        },
        (error) => {
          console.error("Error sending email:", error)
        }
      )
  }

  const sendContactInformation = async (e) => {
    const result = await createVisit(
      localStorage.getItem("accessToken"),
      appointmentObject
    )
    if (result.status === 200) {
      sendEmail(
        appointmentObject.email,
        appointmentObject.name,
        appointmentObject.date,
        appointmentObject.time
      )
      navigate("/appointment/success")
    } else {
      ;<Error />
    }
  }

  return (
    <div className="appointment">
      <p className="appointment__title">Make a visit to our barbershop</p>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          mobilePhone: "",
          service: "",
          barber: "",
          date: "",
          time: "",
        }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="appointment__form book-form" onSubmit={handleSubmit}>
            <input
              className="book-form__input"
              placeholder="Name"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={appointmentObject.name}
              onInput={(e) =>
                setAppointmentObject({
                  ...appointmentObject,
                  name: e.target.value,
                })
              }
            />
            {errors.email && touched.email && errors.email}
            <input
              className="book-form__input"
              placeholder="Surname"
              type="surname"
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={appointmentObject.surname}
              onInput={(e) =>
                setAppointmentObject({
                  ...appointmentObject,
                  surname: e.target.value,
                })
              }
            />
            {errors.password && touched.password && errors.password}
            <input
              className="book-form__input"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={appointmentObject.email}
              onInput={(e) =>
                setAppointmentObject({
                  ...appointmentObject,
                  email: e.target.value,
                })
              }
            />
            {errors.password && touched.password && errors.password}
            <input
              className="book-form__input"
              placeholder="Mobile Phone"
              type="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={appointmentObject.mobilePhone}
              onInput={(e) =>
                setAppointmentObject({
                  ...appointmentObject,
                  mobilePhone: e.target.value,
                })
              }
            />
            {errors.password && touched.password && errors.password}

            <select
              className="book-form__input"
              value={appointmentObject.service}
              onChange={(e) =>
                setAppointmentObject({
                  ...appointmentObject,
                  service: e.target.value,
                })
              }
            >
              <option></option>
              <option value="Haircut long hair 30$">
                Haircut long hair 30$
              </option>
              <option value="Haircut fade 25$">Haircut fade 25$</option>
              <option value="Haircut beard 10$">Haircut beard 10$</option>
              <option value="Haircut with a machine 15$">
                Haircut with a machine 15$
              </option>
              <option value="Head camouflage 25$">Head camouflage 25$</option>
              <option value="Сhildren's haircut 35$">
                Сhildren's haircut 35$
              </option>
            </select>

            <select
              className="book-form__input"
              value={appointmentObject.barber}
              onChange={(e) =>
                setAppointmentObject({
                  ...appointmentObject,
                  barber: e.target.value,
                })
              }
            >
              <option></option>
              {barbers.map((barber) => (
                <option
                  key={barber._id}
                  value={`${barber.name} ${barber.surname}`}
                >
                  {barber.name} {barber.surname}
                </option>
              ))}
            </select>

            <input
              className="book-form__input"
              type="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={appointmentObject.date}
              onInput={(e) =>
                setAppointmentObject({
                  ...appointmentObject,
                  date: e.target.value,
                })
              }
            />
            <input
              className="book-form__input"
              type="time"
              name="time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={appointmentObject.time}
              onInput={(e) =>
                setAppointmentObject({
                  ...appointmentObject,
                  time: e.target.value,
                })
              }
            />
            <Link to="/appointment/success">
              <button
                className="book-form__btn"
                disabled={isSubmitting}
                onClick={sendContactInformation}
                type="button"
              >
                Send booking
              </button>
            </Link>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default MakeAppointment
