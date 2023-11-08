import { useEffect } from "react"
import { Link } from "react-router-dom"
import EmailSubscribe from "../../components/EmailSubscribe/EmailSubscribe"
import { fetchNews } from "../../store/news/action"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import BlogCard from "../../components/BlogCard/BlogCard"
import ItemPagination from "../../components/Pagination/ItemPagination"
import { CircularProgress } from "@mui/material"

const Blog = () => {
  const dispatch = useDispatch()
  const newsList = useSelector((state) => state.news.newsList)
  const isLoading = useSelector((state) => state.news.isLoading)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div className="blog-section">
      <section className="blog-section__photo">
        <img
          className="blog-section__blog"
          src="./img/blog.png"
          alt="blogPicture"
        />
      </section>
      {isLoading ? (
        <div className="blog-section__loading-spin">
          <CircularProgress />
        </div>
      ) : (
        <section className="blog-section__blogs">
          {newsList.map((blog) => {
            return (
              <Link
                className="blog-section__link"
                to={`/blog/${blog._id}`}
                key={blog._id}
              >
                <BlogCard
                  photoPath={blog.photos[0]}
                  date={blog.date}
                  title={blog.name}
                  shortDescription={blog.shortDescription}
                />
              </Link>
            )
          })}
          <div className="blog-section__pagination">
            <ItemPagination />
          </div>
        </section>
      )}

      <EmailSubscribe />
      <section className="blog-section__haircut">
        <img
          className="blog-section__img"
          src="./img/blog/haircut-1.png"
          alt="photoBlog"
        />
        <img
          className="blog-section__img"
          src="./img/blog/haircut-2.png"
          alt="photoBlog"
        />
        <img
          className="blog-section__img"
          src="./img/blog/haircut-3.png"
          alt="photoBlog"
        />
        <img
          className="blog-section__img"
          src="./img/blog/haircut-4.png"
          alt="photoBlog"
        />
        <img
          className="blog-section__img"
          src="./img/blog/haircut-5.png"
          alt="photoBlog"
        />
      </section>
    </div>
  )
}

export default Blog
