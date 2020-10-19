import React, {useState, useEffect} from 'react'
import CarouselPelis from '../Carousel/CarouselPelis'
import busquedaPorNombre from '../../api/busquedaPorNombre'


function PeliculasFavoritas(props){
    const [ peliculas , setPeliculas ] = useState({});

    useEffect(() => {
        busquedaPorNombre(props.pelicula)
        .then(res => {
            setPeliculas(res.data.Search);
        })
    }, [])

    return(
        <CarouselPelis 
            peliculas={peliculas}
            titulo={props.titulo + props.pelicula}
        />
    );
    
}

export default PeliculasFavoritas;