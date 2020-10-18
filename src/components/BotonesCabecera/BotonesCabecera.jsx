import React, { useState } from 'react';
import './BotonesCabecera.css'

function BotonesCabecera(){

    const [ isHidden , setHidden ] =  useState(false)
  
    const home = () => {
      setHidden(true);
    }
  
    const misFavoritos = () => {
      setHidden(false)
    }
  
    const cerrarSesion = () => {
      console.log("Todavia no estoy listo");
    }

    return (
        <div>
            <button onClick={cerrarSesion} className='botonesMenu'>Cerrar sesión</button>
            <button onClick={misFavoritos} className='botonesMenu'>Mis favoritos</button>  
            <button onClick={home} className='botonesMenu'>Home</button>
        </div>
    );

}


export default BotonesCabecera;