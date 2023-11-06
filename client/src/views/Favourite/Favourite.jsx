import { useSelector } from "react-redux"
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard"

const Favourite = () => {
  const favouriteList = useSelector((state) => state.favourite.favouriteList)

  return (
    <div>
      <div className="favourite-container">
        {favouriteList.map((card) => {
          return (
            <FavouriteCard
              key={card._id}
              myKeyButton={card.vendorCode}
              name={card.name}
              price={card.price}
              photos={card.imagePath}
              description={card.description}
            />
          )
        })}

        {!favouriteList.length > 0 && (
          <p className="favourite-container__message">No items in favourite</p>
        )}
      </div>
    </div>
  )
}

export default Favourite
