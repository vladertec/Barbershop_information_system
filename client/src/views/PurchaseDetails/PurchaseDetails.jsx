import { useDispatch, useSelector } from "react-redux"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { object, string, number } from "yup"
import { useNavigate } from "react-router"
import { removeAllCart } from "../../store/cart/action"
import { sendPurchase } from "../../api/purchases"
import Error from "../Error/Error"
import emailjs from "emailjs-com"

const CustomErrorMessage = ({ name }) => (
  <ErrorMessage name={name}>
    {(message) => (
      <div className="purchase-container__error">
        <i>{message}</i>
      </div>
    )}
  </ErrorMessage>
)

const buySchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().required("Email is required"),
  number: number().required("Number is required"),
  paymentMethod: string().required("Method is required"),
  adress: string().required("Adress is required"),
})

const PurchaseDetails = () => {
  const cartList = useSelector((state) => state.cart.cartList)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const sendEmail = (email, userName, userLength) => {
    emailjs
      .send(
        "service_a7nlbge",
        "template_a21vh6v",
        {
          name: userName,
          email: `${email}`,
          message: `Thanks for your purchase! You bought ${userLength} products! Our manager will contact with you.`,
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

  const handleSubmit = async (values, { setSubmitting }) => {
    let userPurchase = {
      name: values.name,
      surname: values.surname,
      mobileNumber: values.number,
      email: values.email,
      paymentMethod: values.paymentMethod,
      adress: values.adress,
      userListProducts: cartList,
    }

    const result = await sendPurchase(
      localStorage.getItem("accessToken"),
      userPurchase
    )
    if (result.status === 200) {
      navigate("/cart/purchase/success")
      sendEmail(
        userPurchase.email,
        userPurchase.name,
        userPurchase.userListProducts.length
      )
      dispatch(removeAllCart([]))
    } else {
      <Error />
    }
  }

  return (
    <div className="purchase-container">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          paymentMethod: "",
          adress: "",
          number: "",
        }}
        validationSchema={buySchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {(propsFormik) => {
          return (
            <Form className="purchase-container__buy-form">
              <div className="purchase-container__information">
                <label className="purchase-container__label" htmlFor="name">
                  Name
                </label>
                <Field
                  className="purchase-container__name-field"
                  placeholder="Name"
                  id="name"
                  name="name"
                />
                <CustomErrorMessage name="name" />
              </div>

              <div className="purchase-container__information">
                <label className="purchase-container__label" htmlFor="surname">
                  Surname
                </label>
                <Field
                  className="purchase-container__name-field"
                  placeholder="Surname"
                  id="surname"
                  name="surname"
                />
                <CustomErrorMessage name="surname" />
              </div>

              <div className="purchase-container__information">
                <label className="purchase-container__label" htmlFor="surname">
                  Email
                </label>
                <Field
                  className="purchase-container__name-field"
                  placeholder="example@gmail.com"
                  id="email"
                  name="email"
                />
                <CustomErrorMessage name="email" />
              </div>

              <div className="purchase-container__information">
                <label className="purchase-container__label" htmlFor="number">
                  Mobile number
                </label>
                <Field
                  className="purchase-container__name-field"
                  placeholder="Mobile number"
                  id="number"
                  name="number"
                />
                <CustomErrorMessage name="number" />
              </div>

              <div className="purchase-container__information">
                <label className="purchase-container__label" htmlFor="age">
                  Payment method
                </label>
                <Field
                  className="purchase-container__name-field"
                  placeholder="Payment method"
                  id="paymentMethod"
                  name="paymentMethod"
                  as="select"
                >
                  <option></option>
                  <option value="Сash on delivery by mail">
                    Cash on delivery by mail
                  </option>
                  <option value="Cash in our office">Cash in our office</option>
                </Field>
                <CustomErrorMessage name="paymentMethod" />
              </div>

              <div className="purchase-container__information">
                <label className="purchase-container__label" htmlFor="adress">
                  Adress
                </label>
                <Field
                  className="purchase-container__name-field"
                  placeholder="Adress"
                  id="adress"
                  name="adress"
                />
                <CustomErrorMessage name="adress" />
              </div>

              <div className="purchase-container__btn-wrapper">
                <button
                  className="purchase-container__btn"
                  onClick={() => {
                    navigate("/cart")
                  }}
                  type="submit"
                >
                  Back to cart
                </button>
                <button className="purchase-container__btn" type="submit">
                  Checkout
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default PurchaseDetails
