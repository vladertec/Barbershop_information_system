import { useDispatch, useSelector } from "react-redux"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { hideBuyModal, removeAllCart } from "../../store/cart/actions.js"
import { object, string, number } from "yup"

const CustomErrorMessage = ({ name }) => (
  <ErrorMessage name={name}>
    {(message) => (
      <div className="information__error">
        <i>{message}</i>
      </div>
    )}
  </ErrorMessage>
)

const buySchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  age: number().required("Age is required"),
  adress: string().required("Adress is required"),
  number: number().required("Number is required"),
})

const BuyModal = () => {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.cart.cartList)

  const clickHideBuyModal = (event) => {
    event.preventDefault()
    dispatch(hideBuyModal(false))
  }

  const handleSubmit = (values) => {
    let user = {
      name: values.name,
      surname: values.surname,
      age: values.age,
      adress: values.adress,
      number: values.number,
      userListProducts: cartList,
    }

    console.log("##########USER_INFORMATION###########")
    console.log(`
    Name: ${user.name},
    Surname: ${user.surname},
    Age: ${user.age},
    Adress: ${user.adress},
    Number: ${user.number}`)
    console.log("###########USER_PRODUCTS#############")
    console.log(
      user.userListProducts.forEach((product) => console.log(product))
    )
    dispatch(removeAllCart([]))
    dispatch(hideBuyModal(false))
  }

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        age: "",
        adress: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={buySchema}
    >
      {(propsFormik) => {
        return (
          <Form className="buy-modal">
            <div className="buy-modal__container information">
              <label className="information__label" htmlFor="name">
                Name
              </label>
              <Field
                className="information__name-field"
                id="name"
                name="name"
              />
              <CustomErrorMessage name="name" />
            </div>
            <div className="buy-modal__container information">
              <label className="information__label" htmlFor="surname">
                Surname
              </label>
              <Field
                className="information__name-field"
                id="surname"
                name="surname"
              />
              <CustomErrorMessage name="surname" />
            </div>
            <div className="buy-modal__container information">
              <label className="information__label" htmlFor="age">
                Age
              </label>
              <Field className="information__name-field" id="age" name="age" />
              <CustomErrorMessage name="age" />
            </div>
            <div className="buy-modal__container information">
              <label className="information__label" htmlFor="adress">
                Adress
              </label>
              <Field
                className="information__name-field"
                id="adress"
                name="adress"
              />
              <CustomErrorMessage name="adress" />
            </div>
            <div className="buy-modal__container information">
              <label className="information__label" htmlFor="number">
                Mobile number
              </label>
              <Field
                className="information__name-field"
                id="number"
                name="number"
              />
              <CustomErrorMessage name="number" />
            </div>
            <div className="buy-modal__btn wrapper">
              <button
                className="wrapper__btn"
                onClick={(event) => clickHideBuyModal(event)}
                type="submit"
              >
                Back to cart
              </button>
              <button className="wrapper__btn" type="submit">
                Checkout
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default BuyModal
