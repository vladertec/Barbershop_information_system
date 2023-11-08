import { useDispatch } from "react-redux"
import { removeFavourite } from "../../store/favourite/action"
import FavoriteIcon from "@mui/icons-material/Favorite"

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
    <div className="favourite-card">
      <img className="favourite-card__img" src={photos} alt={photos}></img>
      <h6 className="favourite-card__name">{name}</h6>
      <p className="favourite-card__price">{price} $</p>
      <FavoriteIcon
        className="favourite-card__icon"
        onClick={(event) => deleteFavouriteCard(event, myKeyButton)}
      />
    </div>
  )
}

export default FavouriteCard
