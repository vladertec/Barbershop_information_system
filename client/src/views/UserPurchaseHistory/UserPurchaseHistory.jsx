import { useEffect, useState } from "react"
import { getUserPurchaseHistory } from "../../api/user"
import ItemPagination from "../../components/Pagination/ItemPagination"
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard"
import { CircularProgress } from "@mui/material"

const UserPurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([])

  useEffect(() => {
    const userInformation = async () => {
      try {
        const result = await getUserPurchaseHistory(
          localStorage.getItem("accessToken")
        )
        setPurchaseHistory(result)
      } catch (error) {
        console.error("Error fetching user purchase history:", error)
      }
    }
    userInformation()
  }, [])

  return (
    <div className="user-purchase-history">
      {purchaseHistory.length === 0 ? (
        <div className="user-purchase-history__empty">
          Purchase history is empty
        </div>
      ) : (
        <div>
          <p className="user-purchase-history__text">Your purchase history:</p>
          <div className="user-purchase-history__card-container">
            {purchaseHistory.map((purchase, index) => {
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
            <ItemPagination />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserPurchaseHistory
