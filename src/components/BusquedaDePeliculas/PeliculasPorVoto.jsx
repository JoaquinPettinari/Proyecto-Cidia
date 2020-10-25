import React, {useState, useEffect} from 'react'
import CarouselPelis from '../Carousel/CarouselPelis'
import busquedaPorVoto from '../../api/busquedaPorVoto'



function PeliculasPorVoto(props){
    const [ peliculas , setPeliculas ] = useState({});

    useEffect(() => {
        busquedaPorVoto(props.tipo, props.tiempo)
        .then(res => {
            setPeliculas(res.data.results);
        })
    }, [])

    return(
        <CarouselPelis 
            peliculas={peliculas}
            titulo={props.titulo}
        />
    );
    
}

export default PeliculasPorVoto;