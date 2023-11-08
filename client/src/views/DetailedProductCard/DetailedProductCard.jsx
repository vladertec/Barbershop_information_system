import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const DetailedProductCard = () => {
  const { vendorCode } = useParams()
  const productList = useSelector((state) => state.products.productsList)
  const navigate = useNavigate()
  let detailedProduct = productList.find(
    (card) => card.vendorCode == vendorCode
  )
  if (!detailedProduct) {
    return <div>Продукт не найден</div>
  }

  const returnToCart = () => {
    navigate("/cart")
  }

  return (
    <div className="detailed-product">
      <div>{detailedProduct.description}</div>
    </div>
  )
}

export default DetailedProductCard
