import "./App.scss"
import Header from "./components/Header/Header"
import Routing from "./components/Routing/Routing"
import Footer from "./components/Footer/Footer"

function App() {
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
