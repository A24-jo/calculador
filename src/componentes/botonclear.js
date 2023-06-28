import React from "react";
import '../hoja-de-estilos/boton-delete.css'

const BotonClear=({children,manejarclear})=>(
 
<div className='boton-clear' onClick={()=>manejarclear('')} >
  {children}
 </div>

);

export default BotonClear;