import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  const nameStore = "Salsamentaria Las Margaritas";

  function saludarUsuario() {
    const saludo = `Bienvenido(a) a ${nameStore} tu tienda de confianza`;
    return saludo;
  }

  return (
      <BrowserRouter>
        <Navbar />
        <div className="saludo">
          <p>{saludarUsuario()}</p>
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
