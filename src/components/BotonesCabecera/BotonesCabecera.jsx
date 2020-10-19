import React, { useState } from 'react';
import './BotonesCabecera.css'
import PeliculasFavoritas from '../BusquedaDePeliculas/PeliculasFavoritas'

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
        <>
            <button onClick={cerrarSesion} className='botonesMenu'>Cerrar sesión</button>
            <button onClick={misFavoritos} className='botonesMenu'>Mis favoritos</button>  
            <button onClick={home} className='botonesMenu'>Home</button>
            {isHidden && <PeliculasFavoritas pelicula={"harry potter"} titulo={"Mis favoritos: "}/>}
        </>
    );

}


export default BotonesCabecera;