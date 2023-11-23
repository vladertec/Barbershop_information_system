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

  const getHashCode = (str) =>{
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = (hash << 5) - hash + char
    }
    return hash
  }

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

  return (
    <div className="detailed-blog">
      <p className="detailed-blog__date">Date: {detailedNews.date}</p>
      <div className="detailed-blog__img-container">
        {detailedNews.photos.map((photo) => {
          return (
            <img
              className="detailed-blog__img"
              key={getHashCode(photo)}
              src={photo}
              alt={photo}
            />
          )
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
