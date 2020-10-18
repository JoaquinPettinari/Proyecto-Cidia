import React, {useState} from 'react'
import './inputBuscador.css'
import '../Cabecera/Cabecera.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function InputBuscador(){

    const input = React.createRef();
    const [valor, setValor] = useState('');

    const valorInput = () => {
        setValor(input.current.value)
        console.log(valor)
    }




    return(
        <div>
            <FontAwesomeIcon icon={faSearch} className='botonesMenu icono' onClick={valorInput}/>
            <input type="text" ref={input} className="botonesMenu buscador" placeholder="   Busque una película"></input>
        </div>
    );
}

export default InputBuscador;