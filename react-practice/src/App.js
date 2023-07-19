import logo from './logo.svg';
import './App.css';
import ImagenMichis from './components/Michis/Michis';
import Titulo from './components/newComponent/newComponent';
import Boton from './components/button/button';
import { useState, useEffect } from 'react';
import Lista from './components/Lista/Lista';
import Menu from './components/Menu/Menu';
import createBrowserRouter from 'react-router-dom';
import RouterProvider from 'react-router-dom';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <h1>principal page</h1>
    },
    {
      path: '/page1',
      element: <h1>page1</h1>
    }

  ]);

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
  const [textoBoton, setTextoBoton] = useState("poner sombrero");
  const [signIn, setSignIn] = useState(false);
  const [textSign, setTextSing] = useState("sign in");

  const [counter, setCounter] = useState(0);


  const [time, setTime] = useState(0);
  const RouterProvider =



    useEffect(() => {

      const cronometroId = setInterval(() => {
        setTime(time + 1);
        document.title = "count:" + time
      }, 1000);

      return () => { clearInterval(cronometroId) }

    }, [time])


  useEffect(() => {

    document.title = "count:" + counter

  }, [counter])


  function increaseCounter() {
    setCounter(counter + 1);
  }

  function michiCaja() {
    setEstaEnCaja(!estaEnCaja);

    if (estaEnCaja === true) {
      setTextoBoton("quitar sombrero")

    } else {
      setTextoBoton("poner sombrero")
    }
  };

  function signInSignOut() {
    setSignIn(!signIn);
    if (signIn === true) {
      setTextSing("Sign Out")
    } else {
      setTextSing("Sign In")
    }

  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <RouterProvider router={router}></RouterProvider>

        <div>{ImagenMichis(estaEnCaja)}</div>






        <p>{time}</p>
        <Menu onClick={signInSignOut} nombreBoton={textSign}>
        </Menu>

        <Titulo><h1>mas michis</h1></Titulo>
        <boton></boton>
        <Titulo estaEnCaja={estaEnCaja}>
          <ImagenMichis estaEnCaja={estaEnCaja}>


          </ImagenMichis>
          <Boton onClick={michiCaja} nombreBoton={textoBoton}>
          </Boton>
          <Boton onClick={increaseCounter} nombreBoton="increase counter">
          </Boton>
        </Titulo>

        <ul>
          {inventos.map((inventoItem, indice) => (

            <Lista key={indice} texto={inventoItem}></Lista>

          ))
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
