import React, {useState} from 'react'
import Modal from 'react-modal';
import './VerDetallePelicula.css'
import agregarAFavoritos from '../../api/agregarAFavoritos'
import eliminarDeFavoritos from '../../api/eliminarDeFavoritos';
import ColumnaDetaleTitulo from './ColumnaDetalleTitulo';
import ColumnaDetalleDatos from './ColumnaDetalleDatos';
Modal.setAppElement('#root')
const urlBase = 'https://image.tmdb.org/t/p/w1280'
Modal.setAppElement('#root')
const estiloPersonalizado = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

function DetalleMovie({pelicula, actores, director, setShow, show, yaSoyFav, setYaSoyFav}){            

    const sacarFavoritos = () => {
        eliminarDeFavoritos(pelicula.id)
        setYaSoyFav(false)
    }

    const addFavourite = () => {
        agregarAFavoritos(pelicula.id, pelicula.poster_path, "movie")
        setYaSoyFav(true)
    }
    
    
    return (
        <div>
            <Modal
                isOpen={show}
                onRequestClose={() => setShow(false)}
                closeTimeoutMS={200}
                style={estiloPersonalizado}
                className="modal"
                overlayClassName="modal-fondo"
            >                   
                <img src={`${urlBase}/${pelicula.backdrop_path}`} alt="No se encontró imagen" className="posterPelicula"/>                                    
                
                <ColumnaDetaleTitulo promedio = {pelicula.vote_average} titulo = {pelicula.title} votos = {pelicula.vote_count} />
                
                <ColoredLine/>
                <div><h6 className="plotPelicula">{pelicula.overview}</h6></div>
                <ColoredLine/>

                {/* Arrancan los detalles */}
                <ColumnaDetalleDatos 
                    tituloDato1={"Director"} infoDato1={director[0].name} validacionDato1={director[0] != null}
                    tituloDato2={"Actors"} infoDato2={    
                        <div>
                            {actores.cast[0] && actores.cast[0].name}
                            <br/>
                            {actores.cast[1] && actores.cast[1].name}
                            <br/>
                            {actores.cast[2] && actores.cast[2].name}
                            <br/>                                     
                            {actores.cast[3] && actores.cast[3].name}
                        </div>
                    } validacionDato2={actores.cast != null}
                    tituloDato3={"Genres"} infoDato3={
                        <div>
                            {pelicula.genres[0].name || ''}
                            {pelicula.genres[1] && ' - ' + pelicula.genres[1].name}
                            <br/>
                            {pelicula.genres[2] && pelicula.genres[2].name}
                            {pelicula.genres[3] && ' - ' + pelicula.genres[3].name}
                            {pelicula.genres[4] && pelicula.genres[4].name}
                        </div>
                    } validacionDato3={pelicula.genres != null}
                
                />                                                                           
                                
                <ColoredLine/>                

                <ColumnaDetalleDatos 
                    tituloDato1={"Year"} infoDato1={pelicula.release_date} validacionDato1={true}
                    tituloDato2={"Lenguage"} infoDato2={pelicula.spoken_languages[0].name} validacionDato2={pelicula.spoken_languages != null}
                    tituloDato3={"Budget"} infoDato3={`$ ${pelicula.budget}`} validacionDato3={true}
                />     

                <ColoredLine/>

                <div className="botonesOpciones">
                    <button className="btn btn-outline-warning waves-effect success" onClick={() => {setShow(false)}}>CLOSE</button>
                    {pelicula.homepage && <button className="btn btn-light success"><a href={pelicula.homepage}>Home page</a></button>}
                    {!yaSoyFav && <button className="btn btn-success btn-rounded success" onClick={addFavourite}> Add favourites </button>}
                    {yaSoyFav && <button type="button" className="btn btn-danger" onClick={sacarFavoritos}>Remove favourites</button>}
                </div>
                
            </Modal>
        </div>
    );

}

const ColoredLine = () => (
    <hr/>
);

export default DetalleMovie;