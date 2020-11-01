import React, { useState } from 'react';
import './ListaPeliculasBusqueda.css'
import busquedaPorID from '../../api/busquedaPorID.js'
import busquedaDeActores from '../../api/busquedaDeActores'
import DetalleMovie from '../VerDetallePelicula/DetalleMovie';
const urlBase = 'https://image.tmdb.org/t/p/w300'

function ListaPeliculasBusqueda(props) {


    return (
        <div>
            <h2 className="tituloBusquedaCard">Search result: {props.busqueda}</h2>
            <div className="Flexbox">

                {
                    props.listaPeliculas &&
                    props.listaPeliculas.map((pelicula) => {
                        return (

                            pelicula.poster_path && <Card
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

    const [show, setShow] = useState(false);
    const [pelicula, setPelicula] = useState([]);
    const [actores, setActores] = useState({});
    const [director, setDirector] = useState('');
    const [yaSoyFav, setYaSoyFav] = useState(false);

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
            .then(res => {                                
                setShow(true)                
            })
        })  
    }

    return (

        <div className="card etiquetaCard">
            <img className="card-img-top imagenesCard" src={props.imagen} alt="Card image cap" />


            <div className="card-body cardBody">

                <h4 className="card-title tituloDentroCard"><a>{props.titulo}</a></h4>

                <p className="card-text">{props.anio}</p>
                <p className="card-text">{props.promedio}</p>

                <button type="button" className="btn btn-primary" onClick={irADetalle}>Ver detalle</button>
                {show && <DetalleMovie pelicula={pelicula} actores={actores} director={director} setShow={setShow} show={show} yaSoyFav={yaSoyFav} setYaSoyFav={setYaSoyFav}  />}
            </div>
            
        </div>





    );
}

export default ListaPeliculasBusqueda;


{/* // <div className="card card-cascade wider etiquetaCard" key={props.id}>
        //     <img className="view view-cascade overlay imagenesCard" src={props.imagen}/>
        //     <div className="card-body texto" >
        //         <h5 className="card-title"> {props.titulo} </h5>
        //         <h6 className="card-subtitle mb-2 text-muted">{props.anio}</h6>
        //         <h6 className="card-subtitle mb-2 text-muted">*{props.promedio}</h6>
        //     </div>
        //     <div>
        //         <button type="button" className="btn btn-primary verDetalle" onClick={irADetalle} >
        //             Ver detalle
        //             </button>
        //             {avanzar && <VerDetallePelicula pelicula={pelicula} actores={actores} director={director} open={avanzar}/>}
        //     </div>
        // </div> */}