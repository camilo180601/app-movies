import { Crear } from "./components/Crear";
import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";
import { useState } from "react";


function App() {

  const [listadoState, setListadoState] = useState([]);
  const year = new Date().getFullYear();

  const footerStyles = {
    textAlign: 'center'
  };

  return (
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>
        <section id="content" className="content">
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>
        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            <Crear setListadoState={setListadoState}/>
            
        </aside>
        <footer className="footer" style={footerStyles}>
            Camilo Lopez &copy; {year}
        </footer>

    </div>
  );
}

export default App;
