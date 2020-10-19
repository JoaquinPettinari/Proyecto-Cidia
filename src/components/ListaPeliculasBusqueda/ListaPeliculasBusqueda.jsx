import React, {useState, useEffect} from 'react';
import busquedaPorNombre from '../../api/busquedaPorNombre'
import './ListaPeliculasBusqueda.css'


function ListaPeliculasBusqueda(props){
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        busquedaPorNombre(props.pelicula)
        .then(res => {
            setPeliculas(res.data.Search);
            // cambiarAArray()

        })
        
    }, [])

    return(
        <div className="">
            <h2 className="titulo">Resultado de buscar: {props.pelicula}</h2>
            <div>
                {
                
                    peliculas.map((pelicula) => {
                        return (
                            <>
                                <Card 
                                    imagen={pelicula.Poster}
                                    titulo={pelicula.Title}
                                    anio={pelicula.Year}
                                    tipo={pelicula.Type}
                                />
                            </>
                        )
                    })
                }
            </div>
        </div>
    
        
        
    );
}

const Card = (props) => {
    return (
        
        <div className="card etiqueta" >
            <img className="card-img-top imagenes" src={props.imagen} alt="Image not found"/>
            <div className="card-body">
                <h5 className="card-title"> {props.titulo} </h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.anio}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{props.tipo} </h6>
            </div>
            <div class="card-footer">
                <small class="text-muted">Ver detalle</small>
            </div>
        </div>
    
    );
}

export default ListaPeliculasBusqueda;