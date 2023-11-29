import { NavbarTenis } from "./components/navbar/NavbarTenis"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home "
import Login from "./pages/Login"
import Pelotas from "./pages/productos/Pelotas"
import Raquetas from "./pages/productos/Raquetas"
import ProductoDetalle from "./pages/ProductoDetalle"
import Registro from "./pages/Registro"
import Perfil from "./pages/Perfil"
import Accesorios from "./pages/productos/Accesorios"
import Ropa from "./pages/productos/Ropa"

function App() {

  return (
    <Router>
      <NavbarTenis/>
      <div className="flex justify-center pt-10">
      
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/registro" element={ <Registro/> }/>
        <Route path="/perfil" element={ <Perfil/> }/>
        <Route path="/productos/pelotas" element={ <Pelotas/> }/>
        <Route path="/productos/raquetas" element={ <Raquetas/> }/>
        <Route path="/productos/accesorios" element={ <Accesorios/> }/>
        <Route path="/productos/ropa" element={ <Ropa/> }/>
        <Route path="/productos/detalle" element={ <ProductoDetalle/> }/>

      </Routes>
      </div>

    </Router>
  )
}

export default App
