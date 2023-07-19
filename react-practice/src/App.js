// import logo from './logo.svg';
import './App.css';
import ImagenMichis from './components/Michis/Michis';
import Titulo from './components/newComponent/newComponent';
import Boton from './components/button/button';
import { useState } from 'react';
import Lista from './components/Lista/Lista';


function App() {

  const inventos = [
    "Magneto Gigante",
    "Destructinador",
    "Edificio Robot Gigante",
    "Desinfla-inador",
    "Acelerador de edad y tiempo (Age Accelerator-inator)",
    "Hipnotizador (The Slave-inator)",
    "Drill-inator",
    "Plans for magnet",
    "Desinteti-vaporizador",
    "Copy and Paste-inator",
    "Termite Controlling Helmet",
    "Melt-inator 6-5000-inator",
  ];


  const [estaEnCaja, setEstaEnCaja] = useState(false);
const[textoBoton, setTextoBoton] = useState("poner sombrero");

  function michiCaja() {
    setEstaEnCaja(!estaEnCaja);
    
    if(estaEnCaja === true){
      setTextoBoton("quitar sombrero")
    
    }else{
      setTextoBoton("poner sombrero")
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


        {/* <div>{ImagenMichis(estaEnCaja)}</div> */}

        <Titulo><h1>mas michis</h1></Titulo>
        <boton></boton>
        <Titulo estaEnCaja={estaEnCaja}>
          <ImagenMichis estaEnCaja={estaEnCaja}>


          </ImagenMichis>
          <Boton onClick={michiCaja} nombreBoton={textoBoton}>
          </Boton>
        </Titulo>

<ul>
{inventos.map((inventoItem, indice)=>(

  <Lista key={indice} texto={inventoItem}></Lista>

) )
}

</ul>






        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
