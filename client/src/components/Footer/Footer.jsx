const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer-wrapper__information footer-container">
        <div className="footer-container__logo-information footer-logo">
          <img
            className="footer-logo__img"
            src="/img/Logo.svg"
            alt="footer-logo"
          ></img>
          <p className="footer-logo__text">
            Fusce ornare commodo leo, id maximus ex consequat nec.
          </p>
        </div>

        <div className="footer-container__services service-list">
          <h4 className="service-list__title">Services</h4>
          <div className="service-list__items service-menu">
            <p className="service-menu__item">Haircuting</p>
            <p className="service-menu__item">Hair Coloring</p>
            <p className="service-menu__item">Lather Shave</p>
          </div>
        </div>

        <div className="footer-container__contact contact-list">
          <h4 className="contact-list__title">Contact Us</h4>
          <div className="contact-list__container address">
            <div className="address__block contact-address">
              <img
                className="contact-address__icon"
                src="/img/footer-icon/location.svg"
                alt="footer-location"
              ></img>
              <p className="contact-address__text">Kyiv, Grigorenko 22/20</p>
            </div>
            <div className="address__block contact-address">
              <img
                className="contact-address__icon"
                src="/img/footer-icon/call.svg"
                alt="footer-call"
              ></img>
              <p className="contact-address__text">+38(098)118-15-05</p>
            </div>
            <div className="address__block contact-address">
              <img
                className="contact-address__icon"
                src="/img/footer-icon/email.svg"
                alt="footer-email"
              ></img>
              <p className="contact-address__text">sarnavsk2001@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-container__follow network">
          <h4 className="network__title">Follow Us</h4>
          <div className="network__block network-icons">
            <a href="https://www.instagram.com/vladertec/">
              <img
                className="network-icons__img"
                src="/img/footer-icon/Instagram.svg"
                alt=""
              />
            </a>
            <a
              className="network-icons__link"
              href="https://www.linkedin.com/in/vladertec/"
            >
              <img
                className="network-icons__img"
                src="/img/footer-icon/Linkedin.svg"
                alt=""
              />
            </a>
            <a href="https://t.me/vladertec">
              <img
                className="network-icons__img"
                src="/img/footer-icon/Twitter.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-wrapper__copyright author">
        <p className="author__text">
          Copyright © 2023 Kpi master`s thesis website by
          <a
            className="author__name"
            href="https://www.linkedin.com/in/vladertec/"
          >
            {" "}
            Vladertec
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
