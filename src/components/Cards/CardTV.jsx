import React , {useState} from 'react'
import busquedaTVPorID from '../../api/busquedaTVPorID'
import busquedaDeActoresTV from '../../api/busquedaDeActoresTV'
import VerDetallePelicula from '../VerDetallePelicula/VerDetallePelicula'
import './Cards.css'

const CardMovie = ({imagen,id}) => {

    const [pelicula, setPelicula] = useState('');
    const [show , setShow] = useState(false);
    const [actores, setActores] = useState([]);

    const detalleImagen = () => {
        
        busquedaTVPorID(id)
        .then(res => {
            setPelicula(res.data)
            busquedaDeActoresTV(id)
            .then(res => {
                setActores(res.data)     
                
            })
            .then(res => {                                
                setShow(true)    
            })
        })        
    }

    return (
        <div>
            <img className="imagenesCarousel" src={imagen} onClick={() => detalleImagen()}/>
            {show && <VerDetallePelicula pelicula={pelicula} actores={actores} imTV={true}/>}
        </div>
    );
}


export default CardMovie;