import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider} from "./context/cartContext";
import CartContainer from "./components/CartContainer";




function App() {
  const nameStore = "Salsamentaria Las Margaritas";

  function saludarUsuario() {
    const saludo = `Bienvenido(a) a ${nameStore} tu tienda de confianza`;
    return saludo;
  }

  return (
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <div className="saludo">
            <p>{saludarUsuario()}</p>
          </div>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:catid" element={<ItemListContainer />} />
            <Route path="/cart" element={ <CartContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>

  )
}

export default App
