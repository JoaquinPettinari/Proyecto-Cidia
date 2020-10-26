import React , { useState }from 'react'
import Modal from 'react-modal';
import './VerDetallePelicula.css'
import agregarAFavoritos from '../../api/agregarAFavoritos'
Modal.setAppElement('#root')
const urlBase = 'https://image.tmdb.org/t/p/w1280'
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

function VerDetallePelicula({pelicula,actores,director,open}){

    const [show, setShow] = useState(open);
    
    const closeModal = () => {
        setShow(false)    
    }

    const addFavourite = () => {
        agregarAFavoritos(pelicula.id, pelicula.poster_path)
    }


    return(
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
                <div className="tituloPelicula"><h2>{pelicula.title}</h2></div>                
                <ColoredLine/>
                <div><h6 className="plotPelicula">{pelicula.overview}</h6></div>
                <ColoredLine/>

                {/* Arrancan los detalles */}
                
                
                {/* DIRECTOR */}
                { director[0] != null &&
                <div className="contenedor">
                    <div className="tituloDetalles">Director</div>
                    <div className="infoDetalles">{director[0].name}</div>
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
                    <div className="tituloDetalles">Year</div>
                    <div className="infoDetalles">{pelicula.release_date}</div>                    
                </div>

                <div className="contenedor">
                    <div className="tituloDetalles">Lenguage</div>
                    <div className="infoDetalles">{pelicula.spoken_languages != null && pelicula.spoken_languages[0].name}</div>
                </div>
                <div className="contenedor">
                    <div className="tituloDetalles">Budget</div>
                    <div className="infoDetalles">$ {pelicula.budget}</div>
                </div>
                <ColoredLine/>

                <button className="btn btn-outline-warning waves-effect" onClick={closeModal}>CLOSE</button>

                <button className="btn btn-success btn-rounded success" onClick={addFavourite}> Add favourites </button>
                <button className="btn btn-primary success"><a href={pelicula.homepage}>Home page</a></button>
               
                
                
            </Modal>
        </div>
    );
}

const ColoredLine = () => (
    <hr/>
);




export default VerDetallePelicula;