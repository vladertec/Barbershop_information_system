import { Route, Routes } from "react-router-dom"
import Home from "../../views/Home/Home"
import Error from "../../views/Error/Error"
import Barbers from "../../views/Barbers/Barbers"
import Blog from "../../views/Blog/Blog"
import Shop from "../../views/Shop/Shop"
import Contact from "../../views/Contact/Contact"

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/barbers" element={<Barbers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routing
