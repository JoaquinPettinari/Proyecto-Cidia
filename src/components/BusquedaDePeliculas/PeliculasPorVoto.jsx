import React, {useState, useEffect} from 'react'
import CarouselPelis from '../Carousel/CarouselPelis'
import busquedaPorVoto from '../../api/busquedaPorVoto'
import './PeliculaPorVoto.css'


function PeliculasPorVoto({titulo}){
    const [ peliculas , setPeliculas ] = useState({});
    const [ tipo , setTipo ] = useState("movies");    
    
    const buscarPorMovie = () => {
        busquedaPorVoto("movie", "day")
        .then(res => {
            setPeliculas(res.data.results);            
            setTipo("movies")
        })
    }

    const buscarPorTV = () => {
        busquedaPorVoto("tv", "day")
        .then(res => {
            setPeliculas(res.data.results);                        
            setTipo("tvs")
        })
    }

    const buscarPorPerson = () => {
        busquedaPorVoto("person", "day")
        .then(res => {
            setPeliculas(res.data.results);                        
            setTipo("people")
        })
    }

    useEffect(() => {
        busquedaPorVoto("movie", "day")
        .then(res => {
            setPeliculas(res.data.results);            
        })
    }, [])

    return(
        <div>
            <div className="father">
                
                <h2 className='titulo'>{titulo}</h2> 
                
                <div className="btn-group botonesOnChange" data-toggle="buttons">                
                    <label className="btn elegant-color-dark form-check-label active">
                        <input className="form-check-input" type="radio" name="options" autoComplete="off" onClick={buscarPorMovie} value="movie" defaultChecked/> Movie
                    </label>
                    <label className="btn elegant-color-dark form-check-label">
                        <input className="form-check-input" type="radio" name="options" autoComplete="off" onClick={buscarPorTV} value="tv" /> TV
                    </label>
                    <label className="btn elegant-color-dark form-check-label">
                        <input className="form-check-input" type="radio" name="options" autoComplete="off" onClick={buscarPorPerson} value="person" /> Actors
                    </label>
                </div>

            </div>            
            
            <CarouselPelis peliculas={peliculas} tipo={tipo}/>     
        </div>
    );
}

export default PeliculasPorVoto;