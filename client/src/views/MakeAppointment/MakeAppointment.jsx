import React, { useEffect, useState } from "react"
import { Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { createVisit } from "../../api/visit"
import Error from "../Error/Error"
import { getBarbers } from "../../api/barber"

const MakeAppointment = () => {
  const navigate = useNavigate()
  const [barbers, setBarbers] = useState([])

  useEffect(() => {
    const namesBarbers = async () => {
      const result = await getBarbers()
      setBarbers(result)
    }

    namesBarbers()
  }, [])

  const [appointmentObject, setAppointmentObject] = useState({
    name: "",
    surname: "",
    mobilePhone: 380,
    service: "",
    barber: "",
    date: "",
    time: "",
  })

  const sendContactInformation = async (e) => {
    const result = await createVisit(
      localStorage.getItem("accessToken"),
      appointmentObject
    )
    if (result.response.status === 200) {
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
