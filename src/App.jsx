import { NavbarTenis } from "./components/navbar/NavbarTenis"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home "
import Pelotas from "./pages/productos/Pelotas"
import Raquetas from "./pages/productos/Raquetas"

function App() {

  return (
    <Router>
      <NavbarTenis/>
      
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/productos/pelotas" element={ <Pelotas/> }/>
        <Route path="/productos/raquetas" element={ <Raquetas/> }/>

      </Routes>

    </Router>
  )
}

export default App
