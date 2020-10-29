import React , { useState }from 'react'
import Modal from 'react-modal';
import './VerDetallePelicula.css'
import DetalleMovie from './DetalleMovie'
import DetalleTV from './DetalleTV'
import DetallePerson from './DetallePerson'
Modal.setAppElement('#root')


function VerDetallePelicula(props){
   

    return(
        <div>

            {/* usar el prop para pasar a detalleMovie y agregar el tipo "movie" */}
            {props.imMovie && <DetalleMovie pelicula={props.pelicula} actores={props.actores} director={props.director} />}
            {props.imTV && <DetalleTV pelicula={props.pelicula} actores={props.actores} />}
            {props.isPerson && <DetallePerson bibliografia={props.bibliografia}/>}
        
        </div>
    );
}



export default VerDetallePelicula;