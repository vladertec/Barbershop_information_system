import { useDispatch, useSelector } from "react-redux"
import { addInCart } from "../../store/cart/action"
import { addFavorite } from "../../store/favourite/action"

const ProductCard = ({
  name,
  description,
  photos,
  amount,
  price,
  myKeyButton,
}) => {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.cart.cartList)
  const productsList = useSelector((state) => state.products.productsList)
  const favouriteList = useSelector((state) => state.favouriteList)

  const buttonBuyClick = (event, key) => {
    event.preventDefault()
    const buyCardThereIs = cartList.some((product) => product._id === key)
    if (!buyCardThereIs) {
      let productCart = productsList.filter((product) => product._id === key)
      dispatch(addInCart(productCart[0]))
      //   setModalIsOpen(true);
    }
  }

  const clickFavourite = (event, key) => {
    event.preventDefault()
    const favouriteCardThereIs = favouriteList.some(
      (product) => product.vendorCode === key
    )

    if (!favouriteCardThereIs) {
      let favouriteCard = productsList.filter(
        (product) => product.vendorCode === key
      )
      dispatch(addFavorite(favouriteCard[0]))
    }
  }

  return (
    <div className="product-card">
      <img className="product-card__img" src={photos} alt={photos}></img>
      <h6 className="product-card__name">{name}</h6>
      <p className="product-card__price">{price} $</p>
      <button onClick={(event) => buttonBuyClick(event, myKeyButton)}>
        Buy
      </button>
      <span
        onClick={(event) => clickFavourite(event, myKeyButton)}
        className="card__favoutite"
        id={myKeyButton}
      >
        ♡
      </span>
    </div>
  )
}

export default ProductCard
