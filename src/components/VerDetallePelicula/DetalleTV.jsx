import React, {useState} from 'react'
import Modal from 'react-modal';
import './VerDetallePelicula.css'
import agregarAFavoritos from '../../api/agregarAFavoritos'
import ColumnaDetaleTitulo from './ColumnaDetalleTitulo';
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

function DetalleTV({serie, actores}){

    const [show, setShow] = useState(true);    
    

    const addFavourite = () => {
        agregarAFavoritos(serie.id, serie.poster_path, "tv")
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
                <img src={`${urlBase}/${serie.backdrop_path}`} alt="No se encontró imagen" className="posterPelicula"/>
                
                <ColumnaDetaleTitulo promedio={serie.vote_average} titulo={serie.name} votos={serie.vote_count} />
                
                <ColoredLine/>
                <div><h6 className="plotPelicula">{serie.overview}</h6></div>
                <ColoredLine/>

                
                <ColumnaDetalleDatos 
                    tituloDato1={"Created by"} infoDato1={
                        <div>
                            {serie.created_by[0] && serie.created_by[0].name}
                            {serie.created_by[1] && serie.created_by[1].name}
                        </div>
                    } validacionDato1={serie.created_by[0] != null}
                    
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
                            {serie.genres[0].name || ''}
                            {serie.genres[1] && ' - ' + serie.genres[1].name}
                            <br/>
                            {serie.genres[2] && serie.genres[2].name}
                            {serie.genres[3] && ' - ' + serie.genres[3].name}
                            {serie.genres[4] && serie.genres[4].name}
                        </div>
                    } validacionDato3={serie.genres != null}
                />                                
                                    
                
                <ColoredLine/>                

                <ColumnaDetalleDatos 
                    tituloDato1={"First air date"} infoDato1={serie.first_air_date} validacionDato1={true}
                    tituloDato2={"Lenguage"} infoDato2={serie.languages[0]} validacionDato2={serie.languages[0]}
                    tituloDato3={"Seasons/Episodes"} infoDato3={`${serie.number_of_seasons}/${serie.number_of_episodes}`} validacionDato3={true}                    
                />
                                                                                
                <ColoredLine/>                              

                <button className="btn btn-success btn-rounded success" onClick={addFavourite}> Add favourites </button>
                {serie.homepage && <button className="btn btn-light success"><a href={serie.homepage}>Home page</a></button>}
                <button className="btn btn-outline-warning waves-effect success" onClick={() => {setShow(false)}}>CLOSE</button>
                
            </Modal>
        </div>
    );

}

const ColoredLine = () => (
    <hr/>
);

export default DetalleTV;