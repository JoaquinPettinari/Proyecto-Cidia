import React, {useState, useEffect} from 'react'
import './inputBuscador.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ListaPeliculasBusqueda from '../ListaPeliculasBusqueda/ListaPeliculasBusqueda';

function InputBuscador(){

    const input = React.createRef();
    const [buscar, setBuscar] = useState(false)

    const valorInput = () => {
        setBuscar({
            follow:true,
            valor: input.current.value
        })    
    }




    return(
        <>
            <FontAwesomeIcon icon={faSearch} className='botonesMenu icono' onClick={valorInput}/>
            <input type="text" ref={input} className="botonesMenu buscador" placeholder="Busque una película"></input>
            {/* //{buscar.follow && console.log(buscar.valor)} */}
            {buscar.follow && <ListaPeliculasBusqueda pelicula={buscar.valor} titulo={"Resultados de buscar "}/>}
            

        </>
    );
}

export default InputBuscador;