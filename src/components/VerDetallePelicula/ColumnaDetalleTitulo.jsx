import React from 'react'
import './detallePeliculas.css'

function ColumnaDetaleTitulo({promedio, titulo, votos}){
    return(
        <div className="fatherTitulo">
            <div className="promedioTitulo"><div>{promedio}/10</div></div>
            <div><h2>{titulo}</h2></div>
            <div className="cantidadVotosTitulo">{votos}</div>
        </div>
    );
}


export default ColumnaDetaleTitulo ;