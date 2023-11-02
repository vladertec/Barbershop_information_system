import React, { useState } from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import LogoBrands from "../BrandLogos/BrandLogos"
import SubscribeEmail from "../EmailSubscribe/EmailSubscribe"

const PhotoSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className="slider">
      <section className="slider__slider-container slider-elements">
        <FaArrowAltCircleLeft
          className="slider-elements__left-arrow"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="slider-elements__right-arrow"
          onClick={nextSlide}
        />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="travelImage"
                  className="slider-elements__image"
                />
              )}
            </div>
          )
        })}
      </section>
      <div className="slider__logo-email-container">
        <LogoBrands />
        <SubscribeEmail />
      </div>
    </div>
  )
}

export default PhotoSlider
