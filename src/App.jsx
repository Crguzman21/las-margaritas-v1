import "./App.css";
import Navbar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";




function App() {
  const nameStore = "Salsamentaria Las Margaritas";

  function saludarUsuario() {
    const saludo = `Bienvenido(a) a ${nameStore} tu tienda de confianza`;
    return saludo;
  }

  return (
    <>
      <Navbar />
      <div className="saludo">
        <p>{saludarUsuario()}</p>
      </div>
      {/* <ItemListContainer /> */}
    <section>
    <ItemDetailContainer/>
    </section>
    </>
  )
}

export default App
