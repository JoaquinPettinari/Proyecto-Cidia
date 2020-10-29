import React , {useState} from 'react'
import VerDetallePelicula from '../VerDetallePelicula/VerDetallePelicula'
import './Cards.css'
import informacionActor from '../../api/informacionActor'

const CardPerson = ({imagen,id}) => {

    const [bibliografia, setBibliografia] = useState('');
    const [show , setShow] = useState(false);

    const detalleImagen = () => {
        
        informacionActor(id)
        .then(res => {
            setBibliografia(res.data)  
                                                       
        })
        .then(res => {
            setShow(true)            
        })

    }

    return (
        <div>
            <img className="imagenesCarousel" src={imagen} onClick={() => detalleImagen()}/>
            {show && <VerDetallePelicula bibliografia={bibliografia} isPerson={true}/>}
        </div>
    );
}


export default CardPerson;