import React, {useState} from 'react';
import './ListaPeliculasBusqueda.css'
import VerDetallePelicula from '../VerDetallePelicula/VerDetallePelicula'
import busquedaPorID from '../../api/busquedaPorID.js'
import busquedaDeActores from '../../api/busquedaDeActores'
const urlBase = 'https://image.tmdb.org/t/p/w300'

function ListaPeliculasBusqueda(props){
    

    return(
        <div className="">
            <h2 className="titulo">{props.titulo}: {props.pelicula}</h2>
            <div>                                        
                                
                {
                    props.listaPeliculas && 
                    props.listaPeliculas.map((pelicula) => {
                        return (
                            
                            <Card 
                                id={pelicula.id}
                                imagen={`${urlBase}/${pelicula.poster_path}`}
                                titulo={pelicula.original_title}
                                anio={pelicula.release_date}
                                promedio={pelicula.vote_average}
                            />                        
                        )
                    })
                }               
            </div>
        </div>   
    );
}

const Card = (props) => {

    const [avanzar , setAvanzar] = useState(false);
    const [pelicula , setPelicula] = useState([]);
    const [actores, setActores] = useState({});
    const [director, setDirector] = useState('');

    const irADetalle = () => {
        
        busquedaPorID(props.id)
        .then(res => {
            setPelicula(res.data)
            busquedaDeActores(props.id)
            .then(res => {
                setActores(res.data)

                setDirector(res.data.crew.filter(function(e) {                
                    return e.job === "Director";
                }))                
            })
            
        })
        .then(res => {                                
            setAvanzar(true)    
        })         
    }

    return (
        
        <div className="card card-cascade wider etiqueta" key={props.id}>
            <img className="view view-cascade overlay imagenes" src={props.imagen}/>
            <div className="card-body texto" >
                <h5 className="card-title"> {props.titulo} </h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.anio}</h6>
                <h6 className="card-subtitle mb-2 text-muted">*{props.promedio}</h6>
            </div>
            <div>
                <button type="button" className="btn btn-primary verDetalle" onClick={irADetalle} >
                    Ver detalle
                    </button>
                    {avanzar && <VerDetallePelicula pelicula={pelicula} actores={actores} director={director} open={avanzar}/>}
            </div>
        </div>
    
    );
}

export default ListaPeliculasBusqueda;