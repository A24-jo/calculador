import './App.css';
import unlogo from './imagenes/logo.png';
import Boton from './componentes/boton.js';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonclear';
import { useState } from 'react';
import {evaluate} from 'mathjs'


function App() {

   const [estado,setEstado] = useState('')

   const calculador=val=> {
      setEstado(estado + val)
   }
console.log(evaluate('5*19'))
   const Resultado =  ()=>{
           setEstado(evaluate(estado))
   }

  
  return (
    <div className="App">
      <div className='contenedor-logo' >
        <img className='ellogo' src={unlogo} alt='es un log' />
      </div>
      <div className='contenedor-padre' >
        <Pantalla input= {estado}/>
        <div className='fila'>
        <Boton manejarClic={calculador} >  1 </Boton>
        <Boton manejarClic={calculador} >  2  </Boton>
        <Boton manejarClic={calculador} >  3  </Boton>
        <Boton manejarClic={calculador} >  +  </Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calculador} >  4 </Boton>
        <Boton manejarClic={calculador} >  5  </Boton> 
        <Boton manejarClic={calculador} >  6  </Boton>
        <Boton manejarClic={calculador} > - </Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calculador} >  7 </Boton>
        <Boton manejarClic={calculador} >  8  </Boton>
        <Boton manejarClic={calculador} >  9  </Boton>
        <Boton manejarClic={calculador} > * </Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={Resultado} >  = </Boton>
        <Boton manejarClic={calculador} >  0  </Boton>
        <Boton manejarClic={calculador} >  .  </Boton>
        <Boton manejarClic={calculador} > / </Boton>
        </div>
         
        <div className='fila'>
         <BotonClear manejarclear={setEstado} >DELETE</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
 