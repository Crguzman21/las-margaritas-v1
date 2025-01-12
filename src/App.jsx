import "./App.css";
import Navbar from "./components/NavBar";
import ItemCount from "./components/itemCount";




function App() {
  const nameStore = "Salsamentaria Las Margaritas";

  function saludarUsuario(nameUser) {
    const saludo = `Bienvenido ${nameUser} a ${nameStore} tu tienda de confianza`;
    return saludo;
  }

  return (
    <>
      <Navbar />
      <div className="saludo">
        <p>{saludarUsuario("Horacio")}</p>
      </div>
    <section>
    <ItemCount stock={10} initial={1} onAdd={undefined}/>
    </section>
    </>
  )
}

export default App
