import React from 'react'
import Carousel from 'react-elastic-carousel'
import './CarouselPelis.css'


const Card = ({imagen}) => {
    return (
        <img className="imagenesCarousel" src={imagen} />
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
        { width: 768 , itemsToShow: 3 },
        { width: 1200 , itemsToShow: 4 },
        { width: 1500 , itemsToShow: 5 }
    ]

    
    return (
        <div className='body'>
            <h2 className="titulos">{props.titulo}</h2> 
            <Carousel breakPoints={responsive}>
                {
                    peliculas.map((pelicula) => {
                        return (
                            <>
                                <Card imagen={pelicula.Poster}/>
                            </>
                            )
                    })

                }
            </Carousel>
        </div>
    );
}