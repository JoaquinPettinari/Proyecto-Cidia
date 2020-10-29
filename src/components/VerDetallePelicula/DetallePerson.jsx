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

function DetallePerson({bibliografia, actores}){

    const [show, setShow] = useState(true);    
    

    const addFavourite = () => {
        agregarAFavoritos(bibliografia.id, bibliografia.poster_path)
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
                <div className="tituloPelicula"><h2>{bibliografia.name}</h2></div>                
                <ColoredLine/>
                <div><h6 className="plotPelicula">{bibliografia.biography}</h6></div>
                <ColoredLine/>
                <div className="contenedor">
                    <div className="tituloDetalles">Birthday</div>
                    <div className="infoDetalles">{bibliografia.birthday}</div>
                </div>
                <div className="contenedor">
                    <div className="tituloDetalles">Deathday</div>
                    <div className="infoDetalles">{bibliografia.deathday || 'Living'}</div>
                </div>                
                <div className="contenedor">
                    <div className="tituloDetalles">Born in</div>
                    <div className="infoDetalles">{bibliografia.place_of_birth}</div>
                </div>
                <ColoredLine/>
                {/* Arrancan los detalles */}                                                                               
                    
                
                
               

                <button className="btn btn-success btn-rounded success" onClick={addFavourite}> Add favourites </button>
                {bibliografia.homepage && <button className="btn btn-light success"><a href={bibliografia.homepage}>Home page</a></button>}
                <button className="btn btn-outline-warning waves-effect success" onClick={() => {setShow(false)}}>CLOSE</button>
                
            </Modal>
        </div>
    );

}

const ColoredLine = () => (
    <hr/>
);

export default DetallePerson;