import "./App.scss"
import ScrollToTop from "react-scroll-to-top"
import Header from "./components/Header/Header"
import { useEffect } from "react"
import Routing from "./components/Routing/Routing"
import Footer from "./components/Footer/Footer"

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
      <ScrollToTop smooth />
    </div>
  )
}

export default App
