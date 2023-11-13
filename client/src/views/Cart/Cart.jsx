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
      {cartList.map((card) => {
        return (
          <CartCard
            key={card._id}
            myKeyButton={card.vendorCode}
            name={card.name}
            price={card.price}
            photos={card.photos[0]}
            description={card.shortDescription}
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
  )
}

export default Cart
