import React, {useState, useEffect} from 'react'
import CarouselPelis from '../Carousel/CarouselPelis'
import favoritasUsuario from '../../api/favoritasUsuario'



function PeliculasFavoritas({titulo, tipoFav}){
    const [ peliculas , setPeliculas ] = useState({});

    useEffect(() => {
        favoritasUsuario(tipoFav)
        .then(res => {            
            setPeliculas(res.data.reverse());
        })
    }, [])

    return(
        <div>
            <h2 className='titulo'>{titulo}</h2> 
            <CarouselPelis 
                peliculas={peliculas}                
                tipo={tipoFav}
            />

        </div>
    );
    
}

export default PeliculasFavoritas;