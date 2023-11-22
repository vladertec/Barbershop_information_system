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
      <div className="App__header">
        <Header />
      </div>
      <div className="App__main">
        <Routing />
      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
