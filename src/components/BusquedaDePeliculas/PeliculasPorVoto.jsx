import React, {useState, useEffect} from 'react'
import CarouselPelis from '../Carousel/CarouselPelis'
import busquedaPorVoto from '../../api/busquedaPorVoto'
import './PeliculaPorVoto.css'


function PeliculasPorVoto({titulo}){
    const [ peliculas , setPeliculas ] = useState({});    
    
    const buscarPorMovie = () => {
        busquedaPorVoto("movie", "day")
        .then(res => {
            setPeliculas(res.data.results);            
            console.log(peliculas)
        })
    }

    const buscarPorTV = () => {
        busquedaPorVoto("tv", "day")
        .then(res => {
            setPeliculas(res.data.results);            
            console.log(peliculas)
        })
    }

    const buscarPorPerson = () => {
        busquedaPorVoto("person", "day")
        .then(res => {
            setPeliculas(res.data.results);            
            console.log(peliculas)
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
            <div className="tituloMasOpciones">
                <h2 className='titulo'>{titulo}</h2> 
                <div className="btn-group botonesOnChange" data-toggle="buttons">
                    <label class="btn btn-light-blue form-check-label active">
                        <input className="form-check-input" type="radio" name="options" autocomplete="off" onClick={buscarPorMovie} value="movie" defaultChecked/> Movie
                    </label>
                    <label class="btn btn-light-blue form-check-label">
                        <input className="form-check-input" type="radio" name="options" autocomplete="off" onClick={buscarPorTV} value="tv" /> TV
                    </label>
                    <label class="btn btn-light-blue form-check-label">
                        <input className="form-check-input" type="radio" name="options" autocomplete="off" onClick={buscarPorPerson} value="person" /> Person
                    </label>

                </div>
            </div>            
            <CarouselPelis peliculas={peliculas} />        
        </div>
    );
}

export default PeliculasPorVoto;