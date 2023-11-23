import { useEffect } from "react"
import EmailSubscribe from "../../components/EmailSubscribe/EmailSubscribe"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import StatisticBox from "../../components/StatisticBox/StatisticBox"
import { Link } from "react-router-dom"

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="home-wrapper">
      <section className="home-wrapper__information info">
        <p className="info__welcome">Welcome to Our Barbex</p>
        <h1 className="info__title">Best Haircut Salon in the City</h1>
        <p className="info__description">
          Phasellus vitae purus ac urna consequat facilisis a vel leo. Maecenas
          hendrerit lacinia mollis. Fusce in leo lectus.
        </p>
        <Link to="/appointment">
          <button type="button" className="info__btn">
            Book time »
          </button>
        </Link>
      </section>

      <section className="home-wrapper__services menu-service">
        <div className="menu-service__title">
          <p className="menu-service__our">Our Services</p>
          <p className="menu-service__popular">Popular Services</p>
        </div>
        <div className="menu-service__cards">
          <ServiceCard
            imgPath="./img/iconbox-1.svg"
            title="Trand Haircut"
            description="Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros"
          />
          <ServiceCard
            imgPath="./img/iconbox-2.svg"
            title="Hair Washing"
            description="Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros "
          />
          <ServiceCard
            imgPath="./img/iconbox-3.svg"
            title="Hair Coloring"
            description="Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros "
          />
          <ServiceCard
            imgPath="./img/iconbox-4.svg"
            title="Facial hair trim"
            description="Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros "
          />
          <ServiceCard
            imgPath="./img/iconbox-4.svg"
            title="Facial hair trim"
            description="Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros "
          />
          <ServiceCard
            imgPath="./img/iconbox-3.svg"
            title="Hair Coloring"
            description="Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros "
          />
          <ServiceCard
            imgPath="./img/iconbox-2.svg"
            title="Hair Washing"
            description="Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros "
          />
          <ServiceCard
            imgPath="./img/iconbox-1.svg"
            title="Trand Haircut"
            description="Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros "
          />
        </div>
      </section>

      <section className="home-wrapper__about statistic">
        <div className="statistic__video-container">
          {/* <video className="statistic__video" controls autoPlay>
            <source src="./video/barber.mp4" type="video/mp4" />
          </video> */}
          <div className="statistic__about text-info">
            <p className="text-info__about">About Us</p>
            <h2 className="text-info__style">The Best Barber Tranding Style</h2>
            <p className="text-info__description">
              Haircut" is a term used to describe when a person removes the hair
              on their head. This is done to allow for better{" "}
            </p>
            <Link to="/blog">
              <button type="button" className="text-info__btn">
                Read More »
              </button>
            </Link>
          </div>
        </div>
        <div className="statistic__black">
          <StatisticBox
            imgPath={"./img/statistic-1.svg"}
            number="12k+"
            name="Customers"
          />
          <StatisticBox
            imgPath={"./img/statistic-2.svg"}
            number="10k+"
            name="Haircuts"
          />
          <StatisticBox
            imgPath={"./img/statistic-3.svg"}
            number="3pc"
            name="Salons"
          />
          <StatisticBox
            imgPath={"./img/statistic-4.svg"}
            number="18k+"
            name="Haircuts"
          />
        </div>
      </section>

      <section className="home-wrapper__gallery projects">
        <p className="projects__title">Our Gallery</p>
        <p className="projects__description">We Have Done Lots Of Projects</p>
        <p className="projects__description-secondary">Let's see Our Gallery</p>

        <div className="projects__photo-container photo-items">
          <img
            className="photo-items__first"
            src="./img/gallery/gallery-1.PNG"
            alt="firstPhoto"
          ></img>
          <img
            className="photo-items__second"
            src="./img/gallery/gallery-2.PNG"
            alt="secondPhoto"
          ></img>
          <img
            className="photo-items__third"
            src="./img/gallery/gallery-3.PNG"
            alt="thirdPhoto"
          ></img>
          <img
            className="photo-items__fourth"
            src="./img/gallery/gallery-4.PNG"
            alt="fourthPhoto"
          ></img>
          <img
            className="photo-items__fifth"
            src="./img/gallery/gallery-5.PNG"
            alt="fifthPhoto"
          ></img>
        </div>
        <Link to="/photo">
          <button type="button" className="projects__btn">
            SEE MORE »
          </button>
        </Link>
      </section>
      <EmailSubscribe />
    </div>
  )
}

export default Home
