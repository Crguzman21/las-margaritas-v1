import './App.css';
import Navbar from './components/NavBar';


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
    </>
  )
}

export default App
