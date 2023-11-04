import { useDispatch, useSelector } from "react-redux"
import CartCard from "../../components/CartCard/CartCard"
import { showBuyModal } from "../../store/cart/action"

const Cart = () => {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.cart.cartList)

  const amountSubstractingCart = () => {
    let totalSum = 0
    cartList.map((card) => {
      totalSum += card.price
      return totalSum
    })
    return totalSum
  }

  const clickShowBuyModal = () => {
    dispatch(showBuyModal(true))
  }

  return (
    <div className="cart-list">
      <div>
        {cartList.map((card) => {
          return (
            <CartCard
              key={card._id}
              myKeyButton={card._id}
              name={card.name}
              price={card.price}
              photos={card.imagePath}
              description={card.description}
            />
          )
        })}

        {cartList.length > 0 ? (
          <>
            <p className="cart-list__total-sum">
              Total: {amountSubstractingCart()}$
            </p>
            <button className="cart-list__buy-btn" onClick={clickShowBuyModal}>
              Buy products
            </button>
          </>
        ) : (
          <p className="cart-list__message">No items in cart</p>
        )}
      </div>
    </div>
  )
}

export default Cart
