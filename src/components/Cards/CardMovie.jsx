import React, { useState } from 'react';
import busquedaPorID from '../../api/busquedaPorID'
import busquedaDeActores from '../../api/busquedaDeActores'
import VerDetallePelicula from '../VerDetallePelicula/VerDetallePelicula'
import './Cards.css'

const CardMovie = ({imagen,id}) => {

    const [pelicula, setPelicula] = useState('');
    const [show , setShow] = useState(false);
    const [actores, setActores] = useState([]);
    const [director, setDirector] = useState('');

    const detalleImagen = () => {
        
        busquedaPorID(id)
        .then(res => {
            setPelicula(res.data)
            busquedaDeActores(id)
            .then(res => {
                setActores(res.data)

                setDirector(res.data.crew.filter(function(e) {                
                    return e.job == "Director";
                }))
                
            })
            .then(res => {                                
                setShow(true)    
            })
        })        
    }

    return (
        <div>
            <img className="imagenesCarousel" src={imagen} onClick={() => detalleImagen()}/>
            {show && <VerDetallePelicula pelicula={pelicula} actores={actores} director={director} imMovie={true}/>}
        </div>
    );
}


export default CardMovie;