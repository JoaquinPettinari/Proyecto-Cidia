import React , { useState }from 'react'
import Modal from 'react-modal';
import './VerDetallePelicula.css'

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

function VerDetallePelicula({pelicula,actores,director}){

    const [clase, setClase] = useState(false);
    
    const cambiarClase = () => {
        setClase(!clase)    
    }




    const closeModal = () => {}

    return(
        <div>
                   
            <Modal
                isOpen={true}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
                style={estiloPersonalizado}
                className="modal"
                overlayClassName="modal-fondo"
            >
                <img src={`${urlBase}/${pelicula.backdrop_path}`} alt="No se encontró imagen" className="posterPelicula"/>                
                
                <div className="promedio"><h6>{pelicula.vote_average}/10</h6></div>
                <div className="tituloPelicula"><h2>{pelicula.title}</h2></div>
                <ColoredLine/>
                <div><h6 className="plotPelicula">{pelicula.overview}</h6></div>
                <ColoredLine/>

                {/* Arrancan los detalles */}
                
                
                    {/* DIRECTOR */}
                    <div className="contenedor">
                        <div className="tituloDetalles">Director</div>
                        <h6 className="infoDetalles">{director[0].name}</h6>
                    </div>
                    {/* ACTORS */}
                    <div className="contenedor">
                        {
                            <div>                            
                                <div className="tituloDetalles">Actors</div>
                                <div className="infoDetalles">
                                    {actores.cast[0].name}
                                    <br/>
                                    {actores.cast[1].name}
                                    <br/>
                                    {actores.cast[2].name}
                                    <br/>                                        
                                    {actores.cast[3].name}
                                </div>
                                
                            </div>
                        }
                    </div>
                        
                    
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
                    
                    
                    
                
                {/* <div className="contenedor">
                    <h6 className="detalles">Year: {pelicula.release_date}</h6>                    
                </div>
                <h6 className="detalles">Lenguage: {pelicula.spoken_languages != null && pelicula.spoken_languages[0].name}</h6>
                


                <h6 className="detalles">Budget: $ {pelicula.budget}</h6>
                <a className="detalles" href={pelicula.homepage}>Homepage</a>
                <button onClick={cambiarClase} className={"button " + {clase}}> Add favourites </button> */}

                
            </Modal>
        </div>
    );
}

const ColoredLine = () => (
    <hr/>
);




export default VerDetallePelicula;