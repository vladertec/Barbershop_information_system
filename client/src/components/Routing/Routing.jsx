import { Route, Routes } from "react-router-dom"
import Home from "../../views/Home/Home"
import Error from "../../views/Error/Error"
import Barbers from "../../views/Barbers/Barbers"
import Blog from "../../views/Blog/Blog"
import Shop from "../../views/Shop/Shop"
import Contact from "../../views/Contact/Contact"
import Photo from "../../views/Photo/Photo"
import Login from "../../views/Login/Login"
import MakeAppointment from "../../views/MakeAppointment/MakeAppointment"
import Cart from "../../views/Cart/Cart"
import Favourite from "../../views/Favourite/Favourite"
import DetailedProductCard from "../../views/DetailedProductCard/DetailedProductCard"
import DetailedBlogCard from "../../views/DetailedBlogCard/DetailedBlogCard"
import PurchaseDetails from "../../views/PurchaseDetails/PurchaseDetails"
import Success from "../../views/Success/Success"
import Registration from "../../views/Registration/Registration"
import ManagerView from "../../views/ManagerView/ManagerView"
import BarberView from "../../views/BarberView/BarberView"
import UserView from "../../views/UserView/UserView"
import UserAppointmentHistory from "../../views/UserAppointmentHistory/UserAppointmentHistory"
import UserPurchaseHistory from "../../views/UserPurchaseHistory/UserPurchaseHistory"
import BarberAppointmentSchedule from "../../views/BarberAppointmentSchedule/BarberAppointmentSchedule"

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/barbers" element={<Barbers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/appointment" element={<MakeAppointment />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/shop/:vendorCode" element={<DetailedProductCard />} />
      <Route path="/blog/:_id" element={<DetailedBlogCard />} />
      <Route path="/cart/purchase" element={<PurchaseDetails />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/registration/success" element={<Success />} />
      <Route path="/cart/purchase/success" element={<Success />} />
      <Route path="/appointment/success" element={<Success />} />
      <Route path="/userPage" element={<UserView />} />
      <Route
        path="/userPage/appointmentHistory"
        element={<UserAppointmentHistory />}
      />
      <Route
        path="/userPage/purchaseHistory"
        element={<UserPurchaseHistory />}
      />
      <Route path="/barberPage" element={<BarberView />} />
      <Route
        path="/barberPage/appointmentsBarber"
        element={<BarberAppointmentSchedule />}
      />
      <Route path="/managerPage" element={<ManagerView />} />
    </Routes>
  )
}

export default Routing
