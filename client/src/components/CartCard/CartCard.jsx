import { useDispatch } from "react-redux"
import { removeInCart } from "../../store/cart/action"

const CartCard = ({
  name,
  price,
  description,
  amount,
  photos,
  myKeyButton,
}) => {
  const dispatch = useDispatch()

  const removeClickFromCart = (event, key) => {
    dispatch(removeInCart(key))
  }

  return (
    <div className="cart-card">
      <img
        className="cart-card__img"
        src={photos}
        alt="#"
        max-width="100%"
        height="110"
      ></img>
      <div className="cart-card__text-container cart-text">
        <p className="cart-text__title">{name}</p>
        <p className="cart-text__description">{description}</p>
        <p className="cart-text__color">Amount: 1</p>
        <p className="cart-text__price">Price: {price}$</p>
      </div>
      <button
        className="cart-card__btn"
        onClick={(event) => removeClickFromCart(event, myKeyButton)}
      >
        X
      </button>
    </div>
  )
}

export default CartCard
