import emailjs from "emailjs-com"
import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { getAllEmails } from "../../api/email"

const ManagerSendEmails = () => {
  const [emailHistory, setEmailHistory] = useState([])

  useEffect(() => {
    const emailInformation = async () => {
      try {
        const result = await getAllEmails(localStorage.getItem("accessToken"))
        if (result) {
          setEmailHistory(result)
        } else {
          setEmailHistory([])
        }
      } catch (error) {
        console.error("Error fetching user purchase history:", error)
      }
    }
    emailInformation()
  }, [])

  const sendEmail = (email, managerMessage) => {
    emailjs
      .send(
        "service_a7nlbge",
        "template_a21vh6v",
        {
          name: "dear client",
          email: `${email}`,
          message: `${managerMessage}`,
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

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: Yup.object({
      text: Yup.string().required("It`s required, paste a text here!"),
    }),
    onSubmit: (values) => {
      emailHistory.map((email) => {
        sendEmail(email.email, values.text)
      })
    },
  })

  return (
    <div className="manager-email-form">
      <label htmlFor="textInput" className="manager-email-form__label">
        Please put your text here for sending mails:
      </label>
      <textarea
        id="textInput"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`manager-email-form__textarea ${
          formik.touched.text && formik.errors.text
            ? "manager-email-form__textarea--error"
            : ""
        }`}
      />
      {formik.touched.text && formik.errors.text && (
        <div className="manager-email-form__error">{formik.errors.text}</div>
      )}
      <button
        type="submit"
        className="manager-email-form__send-button"
        onClick={formik.handleSubmit}
      >
        Send to emails
      </button>
    </div>
  )
}

export default ManagerSendEmails
