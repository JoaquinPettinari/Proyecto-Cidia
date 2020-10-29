// import React from 'react'
// import Carousel from 'react-elastic-carousel'
// import './CarouselPelis.css'
// import CardMovie from '../Cards/CardMovie'
// const urlBase = 'https://image.tmdb.org/t/p/w300'

// export default function CarouselPelis({peliculas, tipo}){
    
//     const listaPeliculas = Array.from(peliculas);

//     const settings = {
//         dots: true,
//         fade: true,
//         infinite: true,
//         speed: 500,
//         slideToShow: 4,
//         arrows: true,
//         slidesToScroll: 1,
//         className: "slides"
//     }
//     const responsive = [
//         { width: 1 , itemsToShow: 1 },
//         { width: 500 , itemsToShow: 2 },
//         { width: 768 , itemsToShow: 4 },
//         { width: 1200 , itemsToShow: 6 },
//         { width: 1500 , itemsToShow: 7 }
//     ]

    
//     return (
//         <div className='body'>
            
//             <Carousel breakPoints={responsive}>
//                 {console.log(tipo)}
//                 {console.log(peliculas)}
//                 {
//                     listaPeliculas.map((pelicula) => {
//                         return (
//                             <div>
//                                 <CardMovie id={pelicula.id} imagen={`${urlBase}/${pelicula.poster_path}`}/>

//                             </div>
//                             )
//                     })

//                 }
//             </Carousel>
//         </div>
//     );
// }

import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import './CarouselPelis.css'
import CardMovie from '../Cards/CardMovie'
import CardTV from '../Cards/CardTV'
import CardPerson from '../Cards/CardPerson'
const urlBase = 'https://image.tmdb.org/t/p/w300'
    

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
            {console.log(props.tipo)}
            <Carousel breakPoints={responsive}>
                {
                    peliculas.map((pelicula) => {
                        return (
                            <div>
                                {props.tipo == "tv" && <CardTV id={pelicula.id} imagen={`${urlBase}/${pelicula.poster_path}`}/>}
                                {props.tipo == "movie" && <CardMovie id={pelicula.id} imagen={`${urlBase}/${pelicula.poster_path}`} /> }
                                {props.tipo == "person" && <CardPerson id={pelicula.id} imagen={`${urlBase}/${pelicula.profile_path}`}/>}

                            </div>)
                    })
                }
            </Carousel>
        </div>
    );
}