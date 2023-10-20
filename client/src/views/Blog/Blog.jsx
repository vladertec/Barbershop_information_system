import { useEffect } from "react"
import { Link } from "react-router-dom"
import BlogCard from "../../components/BlogCard/BlogCard"
import EmailSubscribe from "../../components/EmailSubscribe/EmailSubscribe"
import { fetchNews } from "../../store/news/action"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Blog = () => {
//   const dispatch = useDispatch()
//   const newsList = useSelector((state) => state.news.newsList)

//   useEffect(() => {
//     dispatch(fetchNews())
//   }, [])

  return (
    <div className="blog-section">
      <section className="blog-section__photo img">
        <img className="img__blog" src="./img/blog.png" alt="blogPicture" />
      </section>

      <section className="blog-section__blogs blogs-container">
        {newsList.map((blog) => {
          return (
            <Link
              className="blogs-container__link"
              to={"/blog/${blog._id}"}
              key={blog._id}
            >
              <BlogCard
                photoPath={blog.photos[0]}
                date={blog.date}
                title={blog.name}
                description={blog.description}
              />
            </Link>
          )
        })}
      </section>

      <EmailSubscribe />

      <section className="blog-section__haircut photo-blog">
        <img
          className="photo-blog__img"
          src="./img/blog/haircut-1.png"
          alt="photoBlog"
        />
        <img
          className="photo-blog__img"
          src="./img/blog/haircut-2.png"
          alt="photoBlog"
        />
        <img
          className="photo-blog__img"
          src="./img/blog/haircut-3.png"
          alt="photoBlog"
        />
        <img
          className="photo-blog__img"
          src="./img/blog/haircut-4.png"
          alt="photoBlog"
        />
        <img
          className="photo-blog__img"
          src="./img/blog/haircut-5.png"
          alt="photoBlog"
        />
      </section>
    </div>
  )
}

export default Blog