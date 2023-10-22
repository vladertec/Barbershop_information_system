import { Box } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard"
import { fetchProducts } from "../../store/products/action"
import ItemPagination from "../../components/Pagination/ItemPagination"

const Shop = () => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products.productsList)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="shop-container">
      <div className="shop-container__cards">
        {productsList.map((product) => {
          return (
            <Link to={"/shop/${product._id}"} key={product._id}>
              <ProductCard
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
    </div>
  )
}

export default Shop
