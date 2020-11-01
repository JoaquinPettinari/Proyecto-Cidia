import React, {useState} from 'react'
import Modal from 'react-modal';
import './VerDetallePelicula.css'
import agregarAFavoritos from '../../api/agregarAFavoritos'
import ColumnaDetalleDatos from './ColumnaDetalleDatos';
import eliminarDeFavoritos from '../../api/eliminarDeFavoritos'
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

function DetallePerson({bibliografia, setShow, show, yaSoyFav, setYaSoyFav}){            

    const sacarFavoritos = () => {
        eliminarDeFavoritos(bibliografia.id)
        setYaSoyFav(false)
    }

    const addFavourite = () => {
        agregarAFavoritos(bibliografia.id, bibliografia.profile_path, "person")
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
                
               
                <div className="botonesOpciones">
                    <button className="btn btn-outline-warning waves-effect success" onClick={() => {setShow(false)}}>CLOSE</button>

                    {bibliografia.homepage && <button className="btn btn-light success"><a href={bibliografia.homepage}>Home page</a></button>}

                    {!yaSoyFav && <button className="btn btn-success btn-rounded" onClick={addFavourite}> Add favourites </button>}
                    {yaSoyFav && <button type="button" className="btn btn-danger" onClick={sacarFavoritos} >Remove favourites</button>}
                </div>
                
            </Modal>
        </div>
    );

}

const ColoredLine = () => (
    <hr/>
);

export default DetallePerson;