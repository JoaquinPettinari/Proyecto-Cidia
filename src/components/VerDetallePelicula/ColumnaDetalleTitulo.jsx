import React from 'react'

function ColumnaDetaleTitulo({promedio, titulo, votos}){
    return(
        <div className="father">
            <div className="promedio"><div>{promedio}/10</div></div>
            <div><h2>{titulo}</h2></div>
            <div className="cantidadVotos">{votos}</div>
        </div>
    );
}


export default ColumnaDetaleTitulo ;