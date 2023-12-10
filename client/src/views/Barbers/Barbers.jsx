import SimpleImageSlider from "react-simple-image-slider"
import LogoBrands from "../../components/BrandLogos/BrandLogos"

const Barbers = () => {
  const images = [
    { url: "./img/barbers/barber-1.png" },
    { url: "./img/barbers/barber-2.png" },
    { url: "./img/barbers/barber-3.png" },
    { url: "./img/barbers/barber-4.png" },
    { url: "./img/barbers/barber-5.png" },
    { url: "./img/barbers/barber-6.png" },
  ]

  return (
    <div className="barbers-wrapper">
      <div className="barbers-wrapper__slider">
        <SimpleImageSlider
          width={800}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
      <div className="barbers-wrapper__brand-logo">
        <LogoBrands/>
      </div>
    </div>
  )
}

export default Barbers