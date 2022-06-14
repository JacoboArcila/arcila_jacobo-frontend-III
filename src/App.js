import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import GlobalStyles from "./GlobalStyles";
import { Contenedor } from "./AppStyles";
import videoCompras from "./video/compras.mp4";

function App() {
  const [count, setCount] = useState(0);
  const [view, setView] = useState(true);

  const changeView = () => {
    setView(!view);
  };

  return (
    <Contenedor className="App">
      <GlobalStyles />
      <video autoPlay loop muted>
        <source src={videoCompras} type="video/mp4" />
      </video>
      <div className={view ? "capa" : "capa-oculta"}></div>
      <div className={view ? "shop" : "shop-oculta"}>
        <Cabecera count={count} />
        <Listado setCount={setCount} />
      </div>
      <div className="button">
        <button onClick={() => changeView()}>Ver el video</button>
      </div>
    </Contenedor>
  );
}

export default App;
