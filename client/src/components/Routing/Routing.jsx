import { Route, Routes } from "react-router-dom"
import Home from "../../views/Home/Home"
import Error from "../../views/Error/Error"
// import Appointment from "../../views/Appointment/Appointment"
// import Barbers from "../../views/Barbers/Barbers"
// import BarberSchedule from "../../views/BarberSchedule/BarberSchedule"
// import Blog from "../../views/Blog/Blog"
// import Contact from "../../views/Contact/Contact"
// import DetailedProductCard from "../../views/DetailedProductCard/DetailedProductCard"
// import Login from "../../views/Login/Login"
// import Photo from "../../views/Photo/Photo"
// import Plug from "../../views/Plug/Plug"
// import Shop from "../../views/Shop/Shop"
// import Success from "../../views/Success/Success"
// import BlogCard from "../BlogCard/BlogCard"

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/barbers" element={<Barbers />} />
      <Route path="/barbersschedule" element={<BarberSchedule />} />
      <Route path="/enter" element={<Plug />} />
      <Route path="/appointment/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/shop/:itemNo" element={<DetailedProductCard />} />
      <Route path="/blog/:itemNo" element={<BlogCard />} /> */}
    </Routes>
  )
}

export default Routing