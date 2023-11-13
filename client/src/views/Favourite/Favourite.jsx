import { useSelector } from "react-redux"
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard"

const Favourite = () => {
  const favouriteList = useSelector((state) => state.favourite.favouriteList)

  return (
    <div className="favourite-container">
      <div className="favourite-container__favourite-block">
        {favouriteList.map((card) => {
          return (
            <FavouriteCard
              key={card._id}
              myKeyButton={card.vendorCode}
              name={card.name}
              price={card.price}
              photos={card.photos[0]}
              description={card.description}
            />
          )
        })}
      </div>

      {!favouriteList.length > 0 && (
        <p className="favourite-container__message">No items in favourite</p>
      )}
    </div>
  )
}

export default Favourite
