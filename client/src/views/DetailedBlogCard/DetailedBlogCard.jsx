import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const DetailedBlogCard = () => {
  const { _id } = useParams()
  const navigate = useNavigate()
  const newsList = useSelector((state) => state.news.newsList)
    let detailedNews = newsList.find((card) => card._id == _id)
    
  if (!detailedNews) {
    return <div>Блог не найден</div>
  }

  const returnToBlogPage = () => {
    navigate("/blog")
  }

  return (
    <div className="detailed-blog">
      <p className="detailed-blog__date">Date: {detailedNews.date}</p>
      <div className="detailed-blog__img-container">
        {detailedNews.photos.map((photo) => {
          return <img className="detailed-blog__img" src={photo} alt={photo} />
        })}
      </div>
      <p className="detailed-blog__description">
        {detailedNews.detailedDescription}
      </p>
      <button className="detailed-blog__btn" onClick={returnToBlogPage}>
        Return to blog
      </button>
    </div>
  )
}

export default DetailedBlogCard
