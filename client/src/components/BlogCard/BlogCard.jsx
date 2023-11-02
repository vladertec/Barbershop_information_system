const BlogCard = ({ photoPath, date, title, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__photo-container">
        <img className="blog-card__img" src={photoPath} alt="blogPhoto" />
      </div>
      <div className="blog-card__text-container">
        <p className="blog-card__date">{date}</p>
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__description">{description}</p>
      </div>
    </div>
  )
}

export default BlogCard
