const ProductCard = ({ name, description, photos, amount, price }) => {
  return (
    <div className="product-card">
      <img className="product-card__img" src={photos}></img>
      <h6 className="product-card__name">{name}</h6>
      <p className="product-card__price">{price} $</p>
    </div>
  )
}

export default ProductCard
