import React , {useState} from 'react'
import DetallePerson from '../VerDetallePelicula/DetallePerson'
import './Cards.css'
import informacionActor from '../../api/informacionActor'
import buscarUnElemento from '../../api/buscarUnElemento'

const CardPerson = ({imagen,id}) => {

    const [bibliografia, setBibliografia] = useState('');
    const [show , setShow] = useState(false);
    const [yaSoyFav, setYaSoyFav] = useState(false);

    const detalleImagen = () => {
        
        informacionActor(id)
        .then(res => {
            setBibliografia(res.data)  
                                                       
        })
        .then(res => {                                
            buscarUnElemento(id)
                .then(respuesta => {                                      
                    if(respuesta.data.length == 0){
                        setYaSoyFav(false)                        
                        {console.log("No estoy")}
                    }
                    else{
                        setYaSoyFav(true)
                        {console.log("Estoy")}
                    }
                })
            setShow(true)
        })

    }

    return (
        <div>
            <img className="imagenesCarousel" src={imagen} onClick={() => detalleImagen()} alt="Photo"/>
            {show && <DetallePerson bibliografia={bibliografia} setShow={setShow} show={show} yaSoyFav={yaSoyFav} setYaSoyFav={setYaSoyFav} />}
        </div>
    );
}


export default CardPerson;