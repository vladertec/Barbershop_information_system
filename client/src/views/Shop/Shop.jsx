import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard"
import { fetchProducts } from "../../store/products/action"
import ItemPagination from "../../components/Pagination/ItemPagination"
import { CircularProgress } from "@mui/material"

const Shop = () => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products.productsList)
  const isLoading = useSelector((state) => state.products.isLoading)

  useEffect(() => {
    dispatch(fetchProducts())
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="shop-container">
      {isLoading ? (
        <div className="shop-container__loading-spin">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="shop-container__cards">
            {productsList.map((product) => {
              return (
                <Link to={`/shop/${product.vendorCode}`} key={product._id}>
                  <ProductCard
                    myKeyButton={product.vendorCode}
                    name={product.name}
                    description={product.description}
                    photos={product.photos[0]}
                    amount={product.amount}
                    price={product.price}
                  />
                </Link>
              )
            })}
            </div>
          <div className="shop-container__pagination">
            <ItemPagination />
          </div>
        </>
      )}
    </div>
  )
}

export default Shop
