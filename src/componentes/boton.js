import React from 'react';
import '../hoja-de-estilos/boton.css'

function Boton({children}){

    const esOperador=valor=>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd()}>
            {children}
        </div>
    )
}

export default Boton;