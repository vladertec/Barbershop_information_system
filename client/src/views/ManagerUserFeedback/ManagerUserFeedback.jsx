import { useEffect, useState } from "react"
import ItemPagination from "../../components/Pagination/ItemPagination"
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard"
import { getAllContactFeedbacks } from "../../api/contact"

const ManagerUserFeedback = () => {
  const [feedbackHistory, setFeedbackHistory] = useState([])

  useEffect(() => {
    const feedbackInformation = async () => {
      try {
        const result = await getAllContactFeedbacks(
          localStorage.getItem("accessToken")
        )
        setFeedbackHistory(result)
      } catch (error) {
        console.error("Error fetching user purchase history:", error)
      }
    }
    feedbackInformation()
  }, [])

  return (
    <div className="manager-feedbacks">
      {feedbackHistory.length === 0 ? (
        <div className="manager-feedbacks__empty">
          Feedback history is empty
        </div>
      ) : (
        <div>
          <p className="manager-feedbacks__text">Feedback history:</p>
          <div className="manager-feedbacks__card-container">
            {feedbackHistory.map((feedback) => {
              return (
                <FeedbackCard
                  key={feedback._id}
                  name={feedback.name}
                  surname={feedback.surname}
                  email={feedback.email}
                  message={feedback.message}
                />
              )
            })}
          </div>
          <div className="manager-feedbacks__pagination">
            <ItemPagination />
          </div>
        </div>
      )}
    </div>
  )
}

export default ManagerUserFeedback
