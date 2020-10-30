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
            <Carousel breakPoints={responsive}>
                {
                    peliculas.map((pelicula) => {
                        return (
                            <div>
                                {props.tipo == "tvs" && <CardTV id={pelicula.id} imagen={`${urlBase}/${pelicula.poster_path}`}/>}
                                {props.tipo == "movies" && <CardMovie id={pelicula.id} imagen={`${urlBase}/${pelicula.poster_path}`} /> }
                                {props.tipo == "people" && <CardPerson id={pelicula.id} imagen={`${urlBase}/${pelicula.profile_path}`}/>}

                            </div>)
                    })
                }
            </Carousel>
        </div>
    );
}