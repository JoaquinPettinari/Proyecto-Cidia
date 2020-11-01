import React from 'react'
import Carousel from 'react-elastic-carousel'
import './CarouselPelis.css'
import CardMovie from '../Cards/CardMovie'
import CardTV from '../Cards/CardTV'
import CardPerson from '../Cards/CardPerson'
const urlBase = 'https://image.tmdb.org/t/p/w300'
    

export default function CarouselPelis(props){
    
    const peliculas = Array.from(props.peliculas)

    const responsive = [
        { width: 1 , itemsToShow: 1 },
        { width: 400 , itemsToShow: 2 },
        { width: 768 , itemsToShow: 5 },
        { width: 1200 , itemsToShow: 6 },
        { width: 1500 , itemsToShow: 7 }
    ]

    
    return (
        <div className='body'>            
            <Carousel breakPoints={responsive}>
                {
                    peliculas.map((pelicula, index) => {
                        return (
                            <div key={index}>
                                {props.tipo === "movies" && <CardMovie id={pelicula.id} imagen={`${urlBase}/${pelicula.poster_path}`} /> }
                                {props.tipo === "tvs" && <CardTV id={pelicula.id} imagen={`${urlBase}/${pelicula.poster_path}`}/>}
                                {props.tipo === "people" && <CardPerson id={pelicula.id} imagen={`${urlBase}/${pelicula.profile_path}`}/>}

                            </div>)
                    })
                }
            </Carousel>
        </div>
    );
}