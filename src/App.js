import './App.css';
import logoContador from './imagenes/logo-contador.png'
import Contador from './componentes/Contador'
import Boton from './componentes/Boton'
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks ] = useState(0); 

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='titulo'>
        Contador de Clicks.
      </div>
      <div className='logo-contenedor'>
        <img 
          className='logo-contador'
          src={logoContador}
          alt='Logo Contador' />
      </div>
      
      <div className='contenedor-principal'>
        <Contador
          numClicks={numClicks}
        />
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
    
  );
}

export default App;
