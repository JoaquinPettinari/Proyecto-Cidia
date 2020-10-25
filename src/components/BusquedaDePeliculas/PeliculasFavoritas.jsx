import React, {useState, useEffect} from 'react'
import CarouselPelis from '../Carousel/CarouselPelis'
import favoritasUsuario from '../../api/favoritasUsuario'



function PeliculasFavoritas({titulo}){
    const [ peliculas , setPeliculas ] = useState({});

    useEffect(() => {
        favoritasUsuario()
        .then(res => {
            console.log(res)
            setPeliculas(res.data);
        })
    }, [])

    return(
        <CarouselPelis 
            peliculas={peliculas}
            titulo={titulo}
        />
    );
    
}

export default PeliculasFavoritas;