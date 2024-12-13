import './App.css'; 


function App() {
  const nameStore = "Salsamentaria Las Margaritas";

  function saludarUsuario(nameUser) {
    const saludo = `Bienvenido ${nameUser} a ${nameStore} tu tienda de confianza`;
    return saludo;
  }
  return (
    <>

      <h1> {nameStore} </h1>
      <div className="card">
        <p>{saludarUsuario("Horacio")}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
