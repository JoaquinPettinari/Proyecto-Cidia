import React , {useState} from 'react'
import busquedaTVPorID from '../../api/busquedaTVPorID'
import busquedaDeActoresTV from '../../api/busquedaDeActoresTV'
import DetalleTV from '../VerDetallePelicula/DetalleTV'
import buscarUnElemento from '../../api/buscarUnElemento'
import './Cards.css'

const CardMovie = ({imagen,id}) => {

    const [pelicula, setPelicula] = useState('hola');
    const [show , setShow] = useState(false);
    const [actores, setActores] = useState([]);
    const [yaSoyFav, setYaSoyFav] = useState(false);

    const detalleImagen = () => {
        
        busquedaTVPorID(id)
        .then(res => {
            setPelicula(res.data)
            busquedaDeActoresTV(id)
            .then(res => {
                setActores(res.data)                                     
            })
            .then(res => {                                
                buscarUnElemento(id)
                .then(res => {
                    if(res === []){
                        setYaSoyFav(false)
                    }
                    else{
                        setYaSoyFav(true)
                    }
                })
                setShow(true)
            })
        })
        
    }

    

    return (
        <div>
            <img className="imagenesCarousel" src={imagen} onClick={() => detalleImagen()}/>
            {show && <DetalleTV serie={pelicula} actores={actores} setShow={setShow} show={show} yaSoyFav={yaSoyFav} setYaSoyFav={setYaSoyFav} />}
        </div>
    );
}


export default CardMovie;