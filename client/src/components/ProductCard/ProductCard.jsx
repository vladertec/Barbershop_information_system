import { useDispatch, useSelector } from "react-redux"
import { addFavorite } from "../../store/favourite/action"

const ProductCard = ({ name, photos, price, myKeyButton, updateModalIsOpen}) => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products.productsList)
  const favouriteList = useSelector((state) => state.favourite.favouriteList)

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
    updateModalIsOpen(true)
  }

  return (
    <div className="product-card">
      <img className="product-card__img" src={photos} alt={photos}></img>
      <h6 className="product-card__name">{name}</h6>
      <p className="product-card__price">{price} $</p>
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
