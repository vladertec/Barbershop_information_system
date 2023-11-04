import React, { useState } from "react"
import { Formik } from "formik"
import { Link } from "react-router-dom"
import { sendVisit } from "../../api/visit"

const MakeAppointment = () => {
  const [appointmentObject, setAppointmentObject] = useState({
    name: "",
    surname: "",
    mobilePhone: 380,
    service: "",
    barber: "",
    date: "",
    time: "",
  })

  const sendContactInformation = (e) => {
    sendVisit(appointmentObject)
  }

  return (
    <div className="appointment">
      <p className="appointment__title">
        Make a visit to our barbershop
      </p>
      <Formik
        initialValues={{
          name: "",
          surname: "",
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
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
          <form
            className="appointment__form book-form"
            onSubmit={handleSubmit}
          >
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
              <option value="Vladik Sarnavskyi">Vladik Sarnavskyi</option>
              <option value="Alina Levchenko">Alina Levchenko</option>
              <option value="Yuryi Podnebesov">Yuryi Podnebesov</option>
              <option value="Kornaga Yaroslav">Kornaga Yaroslav</option>
              <option value="Yurii Polischuk">Yurii Polischuk</option>
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