import { useDispatch } from "react-redux"
import { removeFavourite } from "../../store/favourite/action"

const FavouriteCard = ({
  name,
  price,
  description,
  amount,
  photos,
  myKeyButton,
}) => {
  const dispatch = useDispatch()

  const deleteFavouriteCard = (event, key) => {
    dispatch(removeFavourite(key))
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
        <span className="cart-text__title">{name}</span>
        <p className="cart-text__description">
          Lorem ipsum dolor sit amet, consect adipiscing elit dalut.
        </p>
        <p className="cart-text__color">Black</p>
        <span className="cart-text__price">Price: {price}$</span>
      </div>
      <button
        className="cart-card__btn"
        onClick={(event) => deleteFavouriteCard(event, myKeyButton)}
      >
        ❤️
      </button>
    </div>
  )
}

export default FavouriteCard
