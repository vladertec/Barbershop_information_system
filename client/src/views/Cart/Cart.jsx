import { useSelector } from "react-redux"
import CartCard from "../../components/CartCard/CartCard"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList)
  const navigate = useNavigate()

  const amountSubstractingCart = () => {
    let totalSum = 0
    cartList.map((card) => {
      totalSum += card.price
      return totalSum
    })
    return totalSum
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  // const buttonBuyClick = () => {
  //   setModalIsOpen(true)
  // }

  // const updateModalIsOpen = (boolean) => {
  //   setModalIsOpen(boolean)
  // }

  return (
    <div className="cart-list">
      {/* {modalIsOpen && (
        <div className="detailed-product__modal-container">
          <BuyModal updateModalIsOpen={updateModalIsOpen} />
        </div>
      )} */}

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
          <button
            className="cart-list__buy-btn"
            onClick={() => {
              navigate("/cart/purchase")
            }}
          >
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
