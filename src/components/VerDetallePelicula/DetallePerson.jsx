import React, {useState} from 'react'
import Modal from 'react-modal';
import './VerDetallePelicula.css'
import agregarAFavoritos from '../../api/agregarAFavoritos'
import ColumnaDetalleDatos from './ColumnaDetalleDatos';

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
        agregarAFavoritos(bibliografia.id, bibliografia.profile_path, "person")
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
                
                <div className="tituloBibliografia"><h2>{bibliografia.name}</h2></div>                
                <ColoredLine/>
                <div><h6 className="plotPelicula">{bibliografia.biography}</h6></div>
                <ColoredLine/>

                <ColumnaDetalleDatos 
                    tituloDato1={"Birthday"} infoDato1={bibliografia.birthday} validacionDato1={true}
                    tituloDato2={"Deathday"} infoDato2={bibliografia.deathday || 'Living'} validacionDato2={true}
                    tituloDato3={"Born in"} infoDato3={bibliografia.place_of_birth} validacionDato3={true}
                
                />

                <ColoredLine/>                                    
                
               
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