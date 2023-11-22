import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard"
import { fetchProducts } from "../../store/products/action"
import ItemPagination from "../../components/Pagination/ItemPagination"
import { CircularProgress } from "@mui/material"
import Modal from "../../components/Modal/Modal"

const Shop = () => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products.productsList)
  const isLoading = useSelector((state) => state.products.isLoading)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    dispatch(fetchProducts())
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  const updateModalIsOpen = (boolean) => {
    setModalIsOpen(boolean)
  }

  return (
    <div className="shop-container">
        {modalIsOpen && (
          <div className="shop-container__modal-container">
          <Modal updateModalIsOpen={updateModalIsOpen} type="favourite" />
          </div>
        )}
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
                    updateModalIsOpen={updateModalIsOpen}
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
