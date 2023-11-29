const PurchaseCard = ({ name, surname, email, adress, userListProducts }) => {
  return (
    <div className="purchase-card">
      <div className="purchase-card__purchase-info-container">
        <p className="purchase-card__text">Order details:</p>
        <p className="purchase-card__text">
          Client: {name} {surname}
        </p>
        <p className="purchase-card__text">Email: {email}</p>
        <p className="purchase-card__text">Adress: {adress}</p>
      </div>
      <div className="purchase-card__purchase-container">
        <p className="purchase-card__text">Purchased goods:</p>
        {userListProducts.map((product, index) => {
          return (
            <div className="purchase-card__product-info-container" key={index}>
              <img
                className="purchase-card__img-product"
                src={product.photos[0]}
                alt={product.photos[0]}
              />
              <p className="purchase-card__product-information">
                Name: {product.name}. Price: {product.price}$
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PurchaseCard
