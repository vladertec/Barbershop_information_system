import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addInCart } from "../../store/cart/action"
import { useState } from "react"
import Modal from "../../components/Modal/Modal"

const DetailedProductCard = () => {
  const dispatch = useDispatch()
  const { vendorCode } = useParams()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const productsList = useSelector((state) => state.products.productsList)
  const cartList = useSelector((state) => state.cart.cartList)
  const navigate = useNavigate()

  let detailedProduct = productsList.find(
    (card) => card.vendorCode == vendorCode
  )

  if (!detailedProduct) {
    return <div>Продукт не найден</div>
  }

  const buttonBuyClick = (event, key) => {
    event.preventDefault()
    const buyCardThereIs = cartList.some(
      (product) => product.vendorCode === key
    )
    if (!buyCardThereIs) {
      let productCart = productsList.filter(
        (product) => product.vendorCode === key
      )
      dispatch(addInCart(productCart[0]))
      setModalIsOpen(true)
    }
  }

  const updateModalIsOpen = (boolean) => {
    setModalIsOpen(boolean)
  }

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

  return (
    <div className="detailed-product">
      <div className="detailed-product__container">
        {modalIsOpen && (
          <div className="detailed-product__modal-container">
            <Modal updateModalIsOpen={updateModalIsOpen} />
          </div>
        )}

        <div className="detailed-product__img-container">
          {detailedProduct.photos.map((photo) => {
            return (
              <img className="detailed-product__img" src={photo} alt={photo} />
            )
          })}
        </div>

        <div className="detailed-product__text-container">
          <p className="detailed-product__name">{detailedProduct.name}</p>
          <div className="detailed-product__description">
            {detailedProduct.longDescription}
          </div>
          <div className="detailed-product__btn-container">
            <button
              className="detailed-product__btn"
              onClick={() => {
                navigate("/shop")
              }}
            >
              Return to shop
            </button>
            <button
              className="detailed-product__btn"
              onClick={(event) =>
                buttonBuyClick(event, detailedProduct.vendorCode)
              }
            >
              Add in cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedProductCard
