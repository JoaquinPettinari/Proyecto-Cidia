import React, { useState } from 'react';
import busquedaPorID from '../../api/busquedaPorID'
import busquedaDeActores from '../../api/busquedaDeActores'
import buscarUnElemento from '../../api/buscarUnElemento'
import DetalleMovie from '../VerDetallePelicula/DetalleMovie'
import './Cards.css'

const CardMovie = ({imagen,id}) => {

    const [pelicula, setPelicula] = useState('');
    const [show , setShow] = useState(false);
    const [actores, setActores] = useState([]);
    const [director, setDirector] = useState('');
    const [yaSoyFav, setYaSoyFav] = useState(false);

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
                buscarUnElemento(id)
                .then(respuesta => {                    
                    {console.log(respuesta.data.length)}
                    if(respuesta.data.length == 0){
                        setYaSoyFav(false)                        
                        {console.log("No estoy")}
                    }
                    else{
                        setYaSoyFav(true)
                        {console.log("Estoy")}
                    }
                })
                setShow(true)
            })
        })        
    }

    return (
        <div className="marco">                    
            <img className="imagenesCarousel" src={imagen} onClick={() => detalleImagen()}/>
            {show && <DetalleMovie pelicula={pelicula} actores={actores} director={director} setShow={setShow} show={show} yaSoyFav={yaSoyFav} setYaSoyFav={setYaSoyFav}  />}
        </div>
    );
}


export default CardMovie;