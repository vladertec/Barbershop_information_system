import React from "react"
import { Formik, Field, FieldArray, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import { addNewNews } from "../../api/news"
import { useNavigate } from "react-router-dom"

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите имя"),
  date: Yup.date().required("Введите дату"),
  shortDescription: Yup.string().required("Введите краткое описание"),
  longDescription: Yup.string().required("Введите подробное описание"),
  photoLinks: Yup.array()
    .min(4, "Необходимо ввести не менее 4 ссылок")
    .max(4, "Введите не более 4 ссылок")
    .of(Yup.string().url("Введите корректную ссылку")),
})

const initialValues = {
  name: "",
  date: "",
  shortDescription: "",
  longDescription: "",
  photoLinks: ["", "", "", ""],
}

const ManagerAddNews = () => {
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    await addNewNews(values)
    navigate("/success")
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form">
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            className="form__input"
          />
          <ErrorMessage name="name" component="div" className="form__error" />
        </div>

        <div className="form__group">
          <label htmlFor="date" className="form__label">
            Date
          </label>
          <Field type="date" id="date" name="date" className="form__input" />
          <ErrorMessage name="date" component="div" className="form__error" />
        </div>

        <div className="form__group">
          <label htmlFor="shortDescription" className="form__label">
            Short Description
          </label>
          <Field
            as="textarea"
            id="shortDescription"
            name="shortDescription"
            placeholder="Enter short description"
            className="form__textarea"
          />
          <ErrorMessage
            name="shortDescription"
            component="div"
            className="form__error"
          />
        </div>

        <div className="form__group">
          <label htmlFor="longDescription" className="form__label">
            Long Description
          </label>
          <Field
            as="textarea"
            id="longDescription"
            name="longDescription"
            placeholder="Enter long description"
            className="form__textarea"
          />
          <ErrorMessage
            name="longDescription"
            component="div"
            className="form__error"
          />
        </div>

        <FieldArray name="photoLinks">
          {(arrayHelpers) => (
            <div className="form__group">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <label
                    htmlFor={`photoLinks.${index}`}
                    className="form__label"
                  >
                    Photo {index + 1}
                  </label>
                  <Field
                    type="text"
                    id={`photoLinks.${index}`}
                    name={`photoLinks.${index}`}
                    placeholder="Enter photo link"
                    className="form__input links"
                  />
                  <ErrorMessage
                    name={`photoLinks.${index}`}
                    component="div"
                    className="form__error"
                  />
                </div>
              ))}

              <button type="submit" className="form__button">
                Submit
              </button>
            </div>
          )}
        </FieldArray>
      </Form>
    </Formik>
  )
}

export default ManagerAddNews
