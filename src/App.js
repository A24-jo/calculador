import './App.css';
import unlogo from './imagenes/logo.png';
import Boton from './componentes/boton.js';
import Pantalla from './componentes/pantalla';


function App() {
  return (
    <div className="App">
      <div className='contenedor-logo' >
        <img className='ellogo' src={unlogo} alt='es un log' />
      </div>
      <div className='contenedor-padre' >
        <Pantalla input= 'josejjjjjj'/>
        <div className='fila'>
        <Boton className = 'boton-contendor' >  1 </Boton>
        <Boton className = 'boton-contendor' >  2  </Boton>
        <Boton className = 'boton-contendor' >  3  </Boton>
        <Boton className='boton-contenedor-operdor'  >  +  </Boton>
        </div>
        <div className='fila'>
        <Boton className = 'boton-contendor' >  4 </Boton>
        <Boton className = 'boton-contendor' >  5  </Boton>
        <Boton className = 'boton-contendor' >  6  </Boton>
        <Boton className='boton-contenedor-operdor'  > - </Boton>
        </div>
        <div className='fila'>
        <Boton className = 'boton-contendor' >  7 </Boton>
        <Boton className = 'boton-contendor' >  8  </Boton>
        <Boton className = 'boton-contendor' >  9  </Boton>
        <Boton className='boton-contenedor-operdor'  > * </Boton>
        </div>
        <div className='fila'>
        <Boton className = 'boton-contendor' >  = </Boton>
        <Boton className = 'boton-contendor' >  0  </Boton>
        <Boton className = 'boton-contendor' >  .  </Boton>
        <Boton className='boton-contenedor-operdor' > / </Boton>
        </div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
