import React, {useState, useEffect} from 'react'
import CarouselPelis from '../Carousel/CarouselPelis'
import busquedaPorPopulares from '../../api/busquedaPorPopulares'



function PeliculasPorVoto({titulo}){
    const [ peliculas , setPeliculas ] = useState({});

    useEffect(() => {
        busquedaPorPopulares()
        .then(res => {
            setPeliculas(res.data.results);
        })
    }, [])

    return(
        <CarouselPelis 
            peliculas={peliculas}
            titulo={titulo}
        />
    );
    
}

export default PeliculasPorVoto;