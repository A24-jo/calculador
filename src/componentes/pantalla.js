import React from "react";
import '../hoja-de-estilos/pantalla.css'

const Pantalla = ({ input })=>(
    <div className='input' >
      <p className='texto-pantalla'>{input}</p>
    </div>
    );

export default Pantalla;