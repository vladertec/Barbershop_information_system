import SimpleImageSlider from "react-simple-image-slider"
import LogoBrands from "../../components/BrandLogos/BrandLogos"
import { useEffect, useState } from "react"
import { getBarbers } from "../../api/barber"

const Barbers = () => {
  const [barbers, setBarbers] = useState([])
  const [groupedBarbers, setGroupedBarbers] = useState({})

  useEffect(() => {
    const namesBarbers = async () => {
      const result = await getBarbers()
      setBarbers(result)

      // Группировка полученных барберов по номеру заведения
      const groupByNumber = result.reduce((acc, barber) => {
        acc[barber.barberNumber] = acc[barber.barberNumber] || []
        acc[barber.barberNumber].push(barber)
        return acc
      }, {})

      setGroupedBarbers(groupByNumber)
    }

    namesBarbers()
  }, [])
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
      <div className="barbers-wrapper__barbers-container">
        {Object.keys(groupedBarbers).map((number) => (
          <div className="barbers-wrapper__barbers-group" key={number}>
            <h3>Number of barbershop building: {number}</h3>
            <ul>
              {groupedBarbers[number].map((barber, index) => (
                <li className="barbers-wrapper__barbers-item" key={index}>
                  {barber.name} {barber.surname}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      )
      <div className="barbers-wrapper__brand-logo">
        <LogoBrands />
      </div>
    </div>
  )
}

export default Barbers
