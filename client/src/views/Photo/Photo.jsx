import PhotoSlider from "../../components/PhotoSlider/PhotoSlider"

const Photo = () => {
  const sliderData = [
    {
      image: "./img/gallery/gallery-3.PNG",
    },
    {
      image: "./img/gallery/gallery-4.PNG",
    },
    {
      image: "./img/gallery/gallery-5.PNG",
    },
  ]
  return (
    <div className="slide-container">
      <PhotoSlider slides={sliderData} />
    </div>
  )
}

export default Photo
