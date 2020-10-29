import React, {useState} from 'react'
import Modal from 'react-modal';
import './VerDetallePelicula.css'
import agregarAFavoritos from '../../api/agregarAFavoritos'

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

function DetalleTV({pelicula, actores}){

    const [show, setShow] = useState(true);    
    

    const addFavourite = () => {
        agregarAFavoritos(pelicula.id, pelicula.poster_path)
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
                
                    
                
                <div className="promedio"><div>{pelicula.vote_average}/10</div></div>
                <div className="tituloPelicula"><h2>{pelicula.name}</h2></div>                
                <ColoredLine/>
                <div><h6 className="plotPelicula">{pelicula.overview}</h6></div>
                <ColoredLine/>

                {/* Arrancan los detalles */}
                
                
                {/* CREATED BY */}
                { pelicula.created_by[0] != null &&
                <div className="contenedor">
                    <div className="tituloDetalles">Created by</div>
                    <div className="infoDetalles">
                        {pelicula.created_by[0] && pelicula.created_by[0].name}
                        {pelicula.created_by[1] && pelicula.created_by[1].name}
                    </div>
                </div>

                }
                {/* ACTORS */}
                { actores.cast != null &&

                    <div className="contenedor">
                    {
                        <div>                            
                            <div className="tituloDetalles">Actors</div>
                            <div className="infoDetalles">
                                {actores.cast[0] && actores.cast[0].name}
                                <br/>
                                {actores.cast[1] && actores.cast[1].name}
                                <br/>
                                {actores.cast[2] && actores.cast[2].name}
                                <br/>                                        
                                {actores.cast[3] && actores.cast[3].name}
                            </div>
                            
                        </div>
                    }
                </div>
                }
                    
                
                {/* GENRES */}
                <div className="contenedor">
                    {                        
                        pelicula.genres != null && 
                        <div className="infoDetalles">
                            <div className="tituloDetalles">Genres</div>                                                        
                            {pelicula.genres[0].name || ''}
                            {pelicula.genres[1] && ' - ' + pelicula.genres[1].name}
                            <br/>
                            {pelicula.genres[2] && pelicula.genres[2].name}
                            {pelicula.genres[3] && ' - ' + pelicula.genres[3].name}
                            {pelicula.genres[4] && pelicula.genres[4].name}
                        </div>
                    } 
                </div>
                <ColoredLine/>                
                <div className="contenedor">
                    <div className="tituloDetalles">First air date</div>
                    <div className="infoDetalles">{pelicula.first_air_date}</div>                    
                </div>
                                                

                <div className="contenedor">
                    <div className="tituloDetalles">Lenguage</div>
                    <div className="infoDetalles">{pelicula.languages[0] != null && pelicula.languages[0]}</div>
                </div>
                <div className="contenedor">
                    <div className="tituloDetalles">Seasons/Episodes</div>
                <div className="infoDetalles">{pelicula.number_of_seasons}/{pelicula.number_of_episodes}</div>
                </div>
                
                

                <ColoredLine/>               
               

                <button className="btn btn-success btn-rounded success" onClick={addFavourite}> Add favourites </button>
                {pelicula.homepage && <button className="btn btn-light success"><a href={pelicula.homepage}>Home page</a></button>}
                <button className="btn btn-outline-warning waves-effect success" onClick={() => {setShow(false)}}>CLOSE</button>
                
            </Modal>
        </div>
    );

}

const ColoredLine = () => (
    <hr/>
);

export default DetalleTV;