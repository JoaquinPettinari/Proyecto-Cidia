import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import './CarouselPelis.css'
import busquedaPorID from '../../api/busquedaPorID'
import busquedaDeActores from '../../api/busquedaDeActores'
import VerDetallePelicula from '../VerDetallePelicula/VerDetallePelicula'
const urlBase = 'https://image.tmdb.org/t/p/w300'

const Card = ({imagen,id}) => {

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
            {show && <VerDetallePelicula pelicula={pelicula} actores={actores} director={director}/>}
        </div>
    );
}
    

export default function CarouselPelis(props){
    
    const peliculas = Array.from(props.peliculas)

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slideToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
    }
    const responsive = [
        { width: 1 , itemsToShow: 1 },
        { width: 500 , itemsToShow: 2 },
        { width: 768 , itemsToShow: 4 },
        { width: 1200 , itemsToShow: 6 },
        { width: 1500 , itemsToShow: 7 }
    ]

    
    return (
        <div className='body'>
            
            <Carousel breakPoints={responsive}>
                {
                    peliculas.map((pelicula) => {
                        return (
                            <>
                                <Card 
                                id={pelicula.id}
                                imagen={`${urlBase}/${pelicula.poster_path}`}
                                />
                            </>
                            )
                    })

                }
            </Carousel>
        </div>
    );
}