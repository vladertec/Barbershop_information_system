// import { useSelector } from "react-redux";
// import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";

const Favourite = () => {
  //   const favouriteList = useSelector((state) => state.favouriteList);
  return (
    <div>
      {/* <div className="favourite-container">
        {favouriteList.map((card) => {
          return (
            <FavouriteCard
              key={card.vendorCode}
              myKeyButton={card.vendorCode}
              name={card.name}
              price={card.price}
              color={card.color}
              imagePath={card.imagePath}
            />
          );
        })}

        {!favouriteList.length > 0 && (
          <p className="favourite-container__message">No items in favourite</p>
        )}
      </div> */}
    </div>
  )
}

export default Favourite
