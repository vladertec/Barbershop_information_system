import { useEffect, useState } from "react"
import { getAllPurchases } from "../../api/purchases"
import ItemPagination from "../../components/Pagination/ItemPagination"
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard"

const ManagerPurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([])

  useEffect(() => {
    const purchaseInformation = async () => {
      try {
        const result = await getAllPurchases(
          localStorage.getItem("accessToken")
        )
        console.log(result)
        setPurchaseHistory(result)
      } catch (error) {
        console.error("Error fetching user purchase history:", error)
      }
    }
    purchaseInformation()
  }, [])

  return (
    <div className="manager-purchase">
      {purchaseHistory.length === 0 ? (
        <div className="user-purchase-history__empty">
          Purchase history is empty
        </div>
      ) : (
        <div>
          <p className="user-purchase-history__text">Purchase history:</p>
          <div className="user-purchase-history__card-container">
            {purchaseHistory.map((purchase) => {
              return (
                <PurchaseCard
                  key={purchase._id}
                  name={purchase.name}
                  surname={purchase.surname}
                  email={purchase.email}
                  adress={purchase.adress}
                  userListProducts={purchase.userListProducts}
                />
              )
            })}
          </div>
          <div className="user-purchase-history__pagination">
            <ItemPagination productsQuntity={purchaseHistory.length} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ManagerPurchaseHistory
